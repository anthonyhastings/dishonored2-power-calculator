import {createSelector} from 'reselect';
import totalRunesSelector from './total-runes';
import spentRunesSelector from './spent-runes';

export const transform = function (totalRunes, spentRunes) {
  return (totalRunes - spentRunes);
};

const remainingRunesSelector = createSelector(
  totalRunesSelector,
  spentRunesSelector,
  transform
);

export default remainingRunesSelector;
