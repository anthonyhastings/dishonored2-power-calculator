import {createSelector} from 'reselect';
import * as transforms from './transforms';

export const charactersSelector = (state) => state.get('characters');

export const characterByIdSelector = (state, characterId) => state.getIn(['characters', characterId]);

export const usersCharacterSelector = (state) => state.getIn(['user', 'character']);

export const totalRunesSelector = (state) => state.getIn(['user', 'totalRunes']);

export const purchasesSelector = (state) => state.getIn(['user', 'purchases']);

export const powersAndEnhancementsSelector = (state) => state.get('powers');

export const enhancementsSelector = createSelector(
  powersAndEnhancementsSelector,
  transforms.filterEnhancements
);

export const topLevelEnhancementsSelector = createSelector(
  enhancementsSelector,
  transforms.topLevelEnhancements
);

export const powersSelector = createSelector(
  powersAndEnhancementsSelector,
  transforms.filterPowers
);

export const topLevelPowersByCharacterIdSelector = createSelector(
  powersSelector,
  usersCharacterSelector,
  transforms.topLevelPowersByCharacterId
);

export const powerSelector = (state, powerId) => {
  const powersAndEnhancements = powersAndEnhancementsSelector(state);

  return powersAndEnhancements.get(powerId);
};

export const isPowerPurchasedSelector = (state, powerId) => {
  const purchases = purchasesSelector(state);

  return purchases.includes(powerId);
};

export const isPowerPurchasableSelector = (state, powerId) => {
  const isPowerPurchased = isPowerPurchasedSelector(state, powerId);

  if (isPowerPurchased) {
    return false;
  }

  const power = powerSelector(state, powerId);
  const remainingRunes = remainingRunesSelector(state);
  const cantAffordPower = (power.get('cost') > remainingRunes);

  if (cantAffordPower) {
    return false;
  }

  const parentPowerId = power.get('parentPowerId');
  const hasUnboughtParent = (parentPowerId) ? !isPowerPurchasedSelector(state, parentPowerId) : false;

  return (hasUnboughtParent) ? false : true;
};

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

export const powerTreeSelector = (state, powerId) => {
  const powersAndEnhancements = powersAndEnhancementsSelector(state);
  const childPowers = transforms.createPowerTree(powersAndEnhancements, powerId);
  let power = powerSelector(state, powerId);

  return power.set('children', childPowers);
};
