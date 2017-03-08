import Immutable from 'immutable';
import {purchasesSelector, powerTreeSelector} from './selectors';

export const setCharacter = (character) => ({
  type: 'SET_CHARACTER',
  character
});

export const addPurchase = (powerId) => ({
  type: 'ADD_PURCHASE',
  powerId
});

export const removePurchases = (powers) => ({
  type: 'REMOVE_PURCHASES',
  powers
});

export const removePurchase = (powerId) => {
  return function (dispatch, getState) {
    const state = getState();
    const purchases = purchasesSelector(state);
    const power = powerTreeSelector(state, powerId);

// TODO: STICK IN UTILS FOLDER.
const getPowerIdsTree = function (power) {
  const childPowers = power.get('children');
  let powerList = Immutable.List().push(power.get('id'));

  if (!childPowers.isEmpty()) {
    childPowers.forEach((childPower) => {
      powerList = powerList.concat(getPowerIdsTree(childPower));
    });
  }

  return powerList;
};



console.time('test');
const powerIDsNeedingFilteredAgainstPurchases = getPowerIdsTree(power);
console.timeEnd('test');
console.log('Did it work?', powerIDsNeedingFilteredAgainstPurchases);

    console.info('Power ID:', powerId);
    console.info('Dispatch:', dispatch);
    console.info('State:', state);
    console.info('Purchases:', purchases);
    console.info('Power:', power);

    dispatch(removePurchases(Immutable.List(['uuid-01', 'uuid-02', 'uuid-03'])));
    return Promise.resolve();
  };
};
