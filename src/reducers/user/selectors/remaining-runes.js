import { createSelector } from 'reselect';
import totalRunes from 'Constants/total-runes';
import spentRunesSelector from './spent-runes';

const remainingRunesSelector = createSelector(
  spentRunesSelector,
  (spentRunes) => totalRunes - spentRunes
);

export default remainingRunesSelector;
