import Immutable from 'immutable';
import flattenedPowerTreeIdsSelector from '../powers/selectors/flattened-power-tree-ids';

const CLEAR_PURCHASES = 'CLEAR_PURCHASES';
const ADD_PURCHASE = 'ADD_PURCHASE';
const REMOVE_PURCHASES = 'REMOVE_PURCHASES';

export const defaultState = Immutable.fromJS({
  totalRunes: 30,
  purchases: Immutable.List()
});

export default function (state = defaultState, action) {
  let reducedState;

  switch (action.type) {
    case CLEAR_PURCHASES:
      reducedState = state.set('purchases', defaultState.get('purchases'));
      break;
    case ADD_PURCHASE:
      reducedState = state.updateIn(['purchases'], (purchases) => {
        return (purchases.includes(action.powerId)) ? purchases : purchases.push(action.powerId);
      });
      break;
    case REMOVE_PURCHASES:
      const filteredPurchases = state.get('purchases').filterNot((powerId) => {
        return action.powerIds.includes(powerId);
      });

      reducedState = state.set('purchases', filteredPurchases);
      break;
    default:
      reducedState = state;
      break;
  }

  return reducedState;
};

export const clearPurchases = () => ({
  type: CLEAR_PURCHASES
});

export const addPurchase = (powerId) => ({
  type: ADD_PURCHASE,
  powerId
});

export const removePurchases = (powerIds = Immutable.List()) => ({
  type: REMOVE_PURCHASES,
  powerIds
});

export const removePurchase = (powerId) => {
  return function (dispatch, getState) {
    const state = getState();
    const powerIds = flattenedPowerTreeIdsSelector(state, powerId);

    dispatch(removePurchases(powerIds));
  };
};
