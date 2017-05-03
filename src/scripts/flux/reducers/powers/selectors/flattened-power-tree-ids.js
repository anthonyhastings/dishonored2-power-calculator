import Immutable from 'immutable';
import powerTreeSelector from './power-tree';

const flattenedPowerTreeIdsSelector = function (state, powerId) {
  const power = powerTreeSelector(state, powerId);
  const childPowers = power.get('children');
  let powerList = Immutable.List().push(power.get('id'));

  if (!childPowers.isEmpty()) {
    childPowers.forEach((childPower) => {
      powerList = powerList.concat(flattenedPowerTreeIdsSelector(state, childPower.get('id')));
    });
  }

  return powerList;
};

export default flattenedPowerTreeIdsSelector;
