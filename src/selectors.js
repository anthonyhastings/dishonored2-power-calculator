import { createSelector } from '@reduxjs/toolkit';
import filter from 'lodash/filter';
import find from 'lodash/find';
import includes from 'lodash/includes';
import some from 'lodash/some';
import requestStatuses from 'constants/request-statuses';
import * as charactersReducerSelectors from 'slices/characters/selectors';
import * as powersReducerSelectors from 'slices/powers/selectors';

const isRequestIncomplete = (requestStatus) =>
  includes([requestStatuses.idle, requestStatuses.pending], requestStatus);

const hasRequestFailed = (requestStatus) =>
  requestStatus === requestStatuses.failure;

const filterTopLeverPowersList = (records) =>
  filter(records, (record) => record.parentPowerId === null);

const charactersSelector = (state) => state.characters ?? {};

const powersSelector = (state) => state.powers ?? {};

export const charactersDataSelector = createSelector(
  charactersSelector,
  charactersReducerSelectors.dataSelector
);

const charactersRequestStatusSelector = createSelector(
  charactersSelector,
  charactersReducerSelectors.requestStatusSelector
);

const powersRequestStatusSelector = createSelector(
  powersSelector,
  powersReducerSelectors.requestStatusSelector
);

const powersDataSelector = createSelector(
  powersSelector,
  powersReducerSelectors.dataSelector
);

export const isInitialDataIncompleteSelector = createSelector(
  charactersRequestStatusSelector,
  powersRequestStatusSelector,
  (...statuses) => some(statuses, isRequestIncomplete)
);

export const hasInitialDataFailedSelector = createSelector(
  charactersRequestStatusSelector,
  powersRequestStatusSelector,
  (...statuses) => some(statuses, hasRequestFailed)
);

export const characterBySlugSelector = (state, slug) => {
  const characters = charactersDataSelector(state);
  return find(characters, (character) => character.slug === slug);
};

const enhancementRecordsSelector = createSelector(powersDataSelector, (data) =>
  filter(data, (record) => record.type === 'enhancement')
);

const powerRecordsSelector = createSelector(powersDataSelector, (data) =>
  filter(data, (record) => record.type === 'power')
);

export const topLevelEnhancementsSelector = createSelector(
  enhancementRecordsSelector,
  filterTopLeverPowersList
);

const topLevelPowersSelector = createSelector(
  powerRecordsSelector,
  filterTopLeverPowersList
);

export const topLevelPowersByCharacterSlugSelector = (state, characterSlug) => {
  const character = characterBySlugSelector(state, characterSlug);
  const topLevelPowers = topLevelPowersSelector(state);

  return filter(topLevelPowers, (power) => {
    const belongsTo = power.characterId === character.id;
    const belongsToAll = power.characterId === null;
    return belongsTo || belongsToAll;
  });
};
