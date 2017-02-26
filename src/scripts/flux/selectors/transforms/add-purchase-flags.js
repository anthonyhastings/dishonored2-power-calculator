import isPowerPurchased from '../utils/is-power-purchased';
import isPowerPurchasable from '../utils/is-power-purchasable';

export default function (powersAndEnhancements, purchases, remainingRunes) {
  return powersAndEnhancements.map((power) => {
    return power.merge({
      purchasable: isPowerPurchasable(purchases, power, remainingRunes),
      purchased: isPowerPurchased(purchases, power.get('id'))
    });
  });
}
