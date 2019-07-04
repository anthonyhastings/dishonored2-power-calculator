import Immutable from 'immutable';
import powersAndEnhancementsWithPurchaseFlagsSelector from './powers-and-enhancements-with-purchase-flags';
import powerSelector from './power';

export const transform = function (powersAndEnhancements, parentId) {
  let childPowers = Immutable.List();

  powersAndEnhancements.forEach((power) => {
    if (power.get('parentPowerId') === parentId) {
      let currentPower = power;
      let children = transform(powersAndEnhancements, power.get('id'));

      currentPower = power.set('children', children);
      childPowers = childPowers.push(currentPower);
    }
  });

  return childPowers;
};

const powerTreeSelector = (state, powerId) => {
  const powersAndEnhancements = powersAndEnhancementsWithPurchaseFlagsSelector(state);
  const childPowers = transform(powersAndEnhancements, powerId);
  let power = powerSelector(state, powerId);

  return power.set('children', childPowers);
};

export default powerTreeSelector;
