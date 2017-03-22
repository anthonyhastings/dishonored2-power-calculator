import Immutable from 'immutable';
import {flattenedPowerTreeIdsSelector} from './selectors';

export const addPurchase = (powerId) => ({
  type: 'ADD_PURCHASE',
  powerId
});

export const removePurchases = (powerIds = Immutable.List()) => ({
  type: 'REMOVE_PURCHASES',
  powerIds
});

export const removePurchase = (powerId) => {
  return function (dispatch, getState) {
    const state = getState();
    const powerIds = flattenedPowerTreeIdsSelector(state, powerId);

    dispatch(removePurchases(powerIds));
    return Promise.resolve();
  };
};
