import {createSelector} from 'reselect';
import * as transforms from './transforms';

export const powersAndEnhancementsSelector = (state) => state.get('powers');

export const purchasesSelector = (state) => state.getIn(['user', 'purchases']);

export const charactersSelector = (state) => state.get('characters');

export const usersCharacterSelector = (state) => state.getIn(['user', 'character']);

export const characterByIdSelector = (state, characterId) => state.getIn(['characters', characterId]);

export const totalRunesSelector = (state) => state.getIn(['user', 'totalRunes']);

export const spentRunesSelector = createSelector(
  powersAndEnhancementsSelector,
  purchasesSelector,
  transforms.spentRunes
);

export const remainingRunesSelector = createSelector(
  totalRunesSelector,
  spentRunesSelector,
  transforms.remainingRunes
);

export const powersAndEnhancementsWithPurchaseFlagsSelector = createSelector(
  powersAndEnhancementsSelector,
  purchasesSelector,
  remainingRunesSelector,
  transforms.addPurchaseFlags
);

export const enhancementsSelector = createSelector(
  powersAndEnhancementsWithPurchaseFlagsSelector,
  transforms.filterEnhancements
);

export const topLevelEnhancementsSelector = createSelector(
  enhancementsSelector,
  transforms.topLevelEnhancements
);

export const powersSelector = createSelector(
  powersAndEnhancementsWithPurchaseFlagsSelector,
  transforms.filterPowers
);

export const topLevelPowersByCharacterIdSelector = createSelector(
  powersSelector,
  usersCharacterSelector,
  transforms.topLevelPowersByCharacterId
);

export const powerSelector = (state, powerId) => {
  const powersAndEnhancements = powersAndEnhancementsWithPurchaseFlagsSelector(state);

  return powersAndEnhancements.get(powerId);
};

export const powerTreeSelector = (state, powerId) => {
  const powersAndEnhancements = powersAndEnhancementsWithPurchaseFlagsSelector(state);
  const childPowers = transforms.createPowerTree(powersAndEnhancements, powerId);
  let power = powerSelector(state, powerId);

  return power.set('children', childPowers);
};
