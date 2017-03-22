import Immutable from 'immutable';

export const defaultState = Immutable.fromJS({
  totalRunes: 30,
  purchases: Immutable.List()
});

export function reducer (state = defaultState, action) {
  let reducedState;

  switch (action.type) {
    case 'ADD_PURCHASE':
      reducedState = state.updateIn(['purchases'], (purchases) => {
        return (purchases.includes(action.powerId)) ? purchases : purchases.push(action.powerId);
      });
      break;
    case 'REMOVE_PURCHASES':
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
