import Immutable from 'immutable';

export default function createPowerTree (powersAndEnhancements, parentId) {
  let childPowers = Immutable.List();

  powersAndEnhancements.forEach((power) => {
    if (power.get('parentPowerId') === parentId) {
      let currentPower = power;
      let children = createPowerTree(powersAndEnhancements, power.get('id'));

      currentPower = power.set('children', children);
      childPowers = childPowers.push(currentPower);
    }
  });

  return childPowers;
};
