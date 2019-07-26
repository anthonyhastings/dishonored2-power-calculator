import isPowerPurchased from './is-power-purchased';

export default function isPowerPurchasable(purchases, power, remainingRunes) {
  const powerHasBeenPurchased = isPowerPurchased(purchases, power.get('id'));
  const cantAffordPower = power.get('cost') > remainingRunes;

  if (powerHasBeenPurchased || cantAffordPower) {
    return false;
  }

  const parentPowerId = power.get('parentPowerId');
  const hasUnboughtParent = parentPowerId
    ? !isPowerPurchased(purchases, parentPowerId)
    : false;

  return hasUnboughtParent ? false : true;
}
