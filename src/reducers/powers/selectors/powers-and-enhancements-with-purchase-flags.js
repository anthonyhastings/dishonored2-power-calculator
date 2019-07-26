import { createSelector } from 'reselect';
import powersAndEnhancementsSelector from './powers-and-enhancements';
import purchasesSelector from '../../user/selectors/purchases';
import remainingRunesSelector from '../../user/selectors/remaining-runes';
import isPowerPurchased from './utils/is-power-purchased';
import isPowerPurchasable from './utils/is-power-purchasable';

export const transform = function(
  powersAndEnhancements,
  purchases,
  remainingRunes
) {
  return powersAndEnhancements.map((power) => {
    return power.merge({
      purchasable: isPowerPurchasable(purchases, power, remainingRunes),
      purchased: isPowerPurchased(purchases, power.get('id'))
    });
  });
};

const powersAndEnhancementsWithPurchaseFlagsSelector = createSelector(
  powersAndEnhancementsSelector,
  purchasesSelector,
  remainingRunesSelector,
  transform
);

export default powersAndEnhancementsWithPurchaseFlagsSelector;
