import {
  purchasesSelector,
  flattenedPowerTreeIdsSelector
} from './selectors';

export const setCharacter = (character) => ({
  type: 'SET_CHARACTER',
  character
});

export const addPurchase = (powerId) => ({
  type: 'ADD_PURCHASE',
  powerId
});

export const removePurchases = (powerIds) => ({
  type: 'REMOVE_PURCHASES',
  powerIds
});

export const removePurchase = (powerId) => {
  return function (dispatch, getState) {
    const state = getState();
    const purchases = purchasesSelector(state);
    const powerIds = flattenedPowerTreeIdsSelector(state, powerId);
    const purchasedPowerIds = powerIds.filter((powerId) => purchases.includes(powerId));

    dispatch(removePurchases(purchasedPowerIds));
    return Promise.resolve();
  };
};
