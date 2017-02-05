import {createSelector} from 'reselect';
import * as transforms from './transforms';

export const characterSelector = (state) => state.get('character');

export const totalRunesSelector = (state) => state.get('totalRunes');

export const purchasesSelector = (state) => state.get('purchases');

export const powersSelector = (state) => state.get('powers');

export const powersByCharacterSelector = createSelector(
  powersSelector,
  characterSelector,
  transforms.powersByCharacter
);

export const spentRunesSelector = createSelector(
  powersByCharacterSelector,
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

export const topLevelEnhancementsByCharacterSelector = createSelector(
  powersByCharacterSelector,
  transforms.topLevelEnhancements
);
