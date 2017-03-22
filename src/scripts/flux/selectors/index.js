import Immutable from 'immutable';
import {createSelector} from 'reselect';
import * as transforms from './transforms';

export const charactersSelector = (state) => state.get('characters');

export const characterByIdSelector = (state, characterId) => state.getIn(['characters', characterId]);

export const powersAndEnhancementsSelector = (state) => state.get('powers');

export const purchasesSelector = (state) => state.getIn(['user', 'purchases']);

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

export const topLevelPowersByCharacterIdSelector = (state, characterId) => {
  const powers = powersSelector(state);

  return transforms.topLevelPowersByCharacterId(powers, characterId);
};

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

export const flattenedPowerTreeIdsSelector = (state, powerId) => {
  const power = powerTreeSelector(state, powerId);
  const childPowers = power.get('children');
  let powerList = Immutable.List().push(power.get('id'));

  if (!childPowers.isEmpty()) {
    childPowers.forEach((childPower) => {
      powerList = powerList.concat(flattenedPowerTreeIdsSelector(state, childPower.get('id')));
    });
  }

  return powerList;
};
