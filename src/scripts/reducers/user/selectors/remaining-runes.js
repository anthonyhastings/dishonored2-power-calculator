import {createSelector} from 'reselect';
import totalRunesSelector from './total-runes';
import spentRunesSelector from './spent-runes';

const remainingRunesSelector = createSelector(
  totalRunesSelector,
  spentRunesSelector,
  (totalRunes, spentRunes) => (totalRunes - spentRunes)
);

export default remainingRunesSelector;
