import {createSelector} from 'reselect';
import * as transforms from './transforms';

export const characterSelector = (state) => state.getIn(['user', 'character']);

export const totalRunesSelector = (state) => state.getIn(['user', 'totalRunes']);

export const purchasesSelector = (state) => state.getIn(['user', 'purchases']);

export const powersSelector = (state) => state.getIn(['powers', 'powers']);

export const enhancementsSelector = (state) => state.getIn(['powers', 'enhancements']);

export const isPowerPurchasedSelector = (state, powerId) => {
  const purchases = purchasesSelector(state);

  return purchases.includes(powerId);
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

export const topLevelPowersByCharacterSelector = createSelector(
  powersByCharacterSelector,
  transforms.topLevelPowers
);

export const topLevelEnhancementsSelector = createSelector(
  enhancementsSelector,
  transforms.topLevelEnhancements
);
