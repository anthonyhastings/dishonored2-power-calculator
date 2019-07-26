import { createSelector } from 'reselect';
import powersAndEnhancementsWithPurchaseFlagsSelector from './powers-and-enhancements-with-purchase-flags';

export const transform = function(powersAndEnhancements) {
  return powersAndEnhancements.filter((map) => {
    return map.get('type') === 'power';
  });
};

const powersSelector = createSelector(
  powersAndEnhancementsWithPurchaseFlagsSelector,
  transform
);

export default powersSelector;
