import Immutable from 'immutable';
import { createSelector } from 'reselect';
import requestStatuses from 'Constants/request-statuses';
import * as charactersReducerSelectors from 'Reducers/characters/selectors';
import * as powersReducerSelectors from 'Reducers/powers/selectors';

const isRequestIncomplete = (requestStatus) =>
  [requestStatuses.idle, requestStatuses.pending].includes(requestStatus);

const hasRequestFailed = (requestStatus) =>
  requestStatus === requestStatuses.failure;

const filterTopLeverPowersList = (records) =>
  records.filter((record) => record.get('parentPowerId') === null).toList();

const charactersSelector = (state) => state.get('characters', Immutable.Map());

const powersSelector = (state) => state.get('powers', Immutable.Map());

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
  (...statuses) => statuses.some(isRequestIncomplete)
);

export const hasInitialDataFailedSelector = createSelector(
  charactersRequestStatusSelector,
  powersRequestStatusSelector,
  (...statuses) => statuses.some(hasRequestFailed)
);

export const characterBySlugSelector = (state, slug) => {
  const characters = charactersDataSelector(state);
  return characters.find((character) => character.get('slug') === slug);
};

const enhancementRecordsSelector = createSelector(powersDataSelector, (data) =>
  data.filter((record) => record.get('type') === 'enhancement')
);

const powerRecordsSelector = createSelector(powersDataSelector, (data) =>
  data.filter((record) => record.get('type') === 'power')
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

  return topLevelPowersSelector(state)
    .filter((power) => {
      const belongsTo = power.get('characterId') === character.get('id');
      const belongsToAll = power.get('characterId') === null;
      return belongsTo || belongsToAll;
    })
    .toList();
};
