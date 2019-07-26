import { createSelector } from 'reselect';
import powersAndEnhancementsWithPurchaseFlagsSelector from './powers-and-enhancements-with-purchase-flags';

export const transform = function(powersAndEnhancements) {
  return powersAndEnhancements.filter((map) => {
    return map.get('type') === 'enhancement';
  });
};

const enhancementsSelector = createSelector(
  powersAndEnhancementsWithPurchaseFlagsSelector,
  transform
);

export default enhancementsSelector;
