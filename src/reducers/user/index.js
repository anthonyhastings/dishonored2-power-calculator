import Immutable from 'immutable';
import flattenedPowerTreeIdsSelector from 'Reducers/powers/selectors/flattened-power-tree-ids';

const CLEAR_PURCHASES = 'CLEAR_PURCHASES';
const ADD_PURCHASE = 'ADD_PURCHASE';
const REMOVE_PURCHASES = 'REMOVE_PURCHASES';

export const clearPurchases = () => ({
  type: CLEAR_PURCHASES,
});

export const addPurchase = (powerId) => ({
  type: ADD_PURCHASE,
  powerId,
});

export const removePurchases = (powerIds = Immutable.List()) => ({
  type: REMOVE_PURCHASES,
  powerIds,
});

export const removePurchase = (powerId) => {
  return function (dispatch, getState) {
    const state = getState();
    const powerIds = flattenedPowerTreeIdsSelector(state, powerId);

    dispatch(removePurchases(powerIds));
  };
};

export const defaultState = Immutable.fromJS({
  purchases: Immutable.List(),
});

export default function (state = defaultState, action) {
  switch (action.type) {
    case CLEAR_PURCHASES: {
      return state.set('purchases', defaultState.get('purchases'));
    }
    case ADD_PURCHASE: {
      return state.updateIn(['purchases'], (purchases) => {
        return purchases.includes(action.powerId)
          ? purchases
          : purchases.push(action.powerId);
      });
    }
    case REMOVE_PURCHASES: {
      return state.set(
        'purchases',
        state.get('purchases').filterNot((powerId) => {
          return action.powerIds.includes(powerId);
        })
      );
    }
    default: {
      return state;
    }
  }
}
