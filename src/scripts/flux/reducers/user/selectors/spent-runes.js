import {createSelector} from 'reselect';
import powersAndEnhancementsSelector from '../../powers/selectors/powers-and-enhancements';
import purchasesSelector from './purchases';

export const transform = function (powersAndEnhancements, purchases) {
  return purchases.reduce((memo, purchase) => {
    return memo + powersAndEnhancements.getIn([purchase, 'cost']);
  }, 0);
};

const spentRunesSelector = createSelector(
  powersAndEnhancementsSelector,
  purchasesSelector,
  transform
);

export default spentRunesSelector;
