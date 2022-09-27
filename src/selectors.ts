import { createSelector } from '@reduxjs/toolkit';
import { requestStatuses } from '@/constants/request-statuses';
import * as charactersReducerSelectors from '@/slices/characters/selectors';
import * as powersReducerSelectors from '@/slices/powers/selectors';
import type { RootState } from '@/store';

const isRequestIncomplete = (requestStatus: requestStatuses): boolean =>
  [requestStatuses.idle, requestStatuses.pending].includes(requestStatus);

const hasRequestFailed = (requestStatus: requestStatuses): boolean =>
  requestStatus === requestStatuses.failure;

const filterTopLeverPowersList = (records: Power[]): Power[] => {
  return records.filter((record) => record.parentPowerId === null);
};

const charactersSelector = (state: RootState) => state.characters;

const powersSelector = (state: RootState) => state.powers;

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

export const characterBySlugSelector = (
  state: RootState,
  slug: CharacterSlugs
): Character | undefined => {
  const characters = charactersDataSelector(state);
  return Object.values(characters || {}).find(
    (character) => character.slug === slug
  );
};

const enhancementRecordsSelector = createSelector(
  powersDataSelector,
  (data): Power[] =>
    Object.values(data || {}).filter((record) => record.type === 'enhancement')
);

const powerRecordsSelector = createSelector(
  powersDataSelector,
  (data): Power[] =>
    Object.values(data || {}).filter((record) => record.type === 'power')
);

export const topLevelEnhancementsSelector = createSelector(
  enhancementRecordsSelector,
  filterTopLeverPowersList
);

const topLevelPowersSelector = createSelector(
  powerRecordsSelector,
  filterTopLeverPowersList
);

export const topLevelPowersByCharacterSlugSelector = (
  state: RootState,
  characterSlug: CharacterSlugs
): Power[] => {
  const character = characterBySlugSelector(state, characterSlug);
  const topLevelPowers = topLevelPowersSelector(state);

  return topLevelPowers.filter((power) => {
    const belongsTo = power.characterId === character?.id;
    const belongsToAll = power.characterId === null;
    return belongsTo || belongsToAll;
  });
};
