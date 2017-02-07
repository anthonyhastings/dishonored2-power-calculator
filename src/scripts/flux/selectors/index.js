import {createSelector} from 'reselect';
import * as transforms from './transforms';

export const characterSelector = (state) => state.getIn(['user', 'character']);

export const totalRunesSelector = (state) => state.getIn(['user', 'totalRunes']);

export const purchasesSelector = (state) => state.getIn(['user', 'purchases']);

export const enhancementsSelector = (state) => state.getIn(['powers', 'enhancements']);

export const powersSelector = (state) => state.getIn(['powers', 'powers']);

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

  if (hasUnboughtParent) {
    return false;
  }

  return true;
};

export const powersAndEnhancementsSelector = createSelector(
  powersSelector,
  enhancementsSelector,
  transforms.powersAndEnhancements
);

export const powersByCharacterSelector = createSelector(
  powersSelector,
  characterSelector,
  transforms.powersByCharacter
);

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

export const topLevelEnhancementsSelector = createSelector(
  enhancementsSelector,
  transforms.topLevelEnhancements
);

export const topLevelPowersByCharacterSelector = createSelector(
  powersByCharacterSelector,
  transforms.topLevelPowers
);
