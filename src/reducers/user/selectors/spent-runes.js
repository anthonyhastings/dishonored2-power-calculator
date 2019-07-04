import {createSelector} from 'reselect';
import powersAndEnhancementsSelector from '../../powers/selectors/powers-and-enhancements';
import purchasesSelector from './purchases';

const calculateTotalSpend = (powersAndEnhancements, purchases) => {
  return purchases.reduce((memo, purchase) => {
    return memo + powersAndEnhancements.getIn([purchase, 'cost'], 0);
  }, 0);
};

const spentRunesSelector = createSelector(
  powersAndEnhancementsSelector,
  purchasesSelector,
  calculateTotalSpend
);

export default spentRunesSelector;
