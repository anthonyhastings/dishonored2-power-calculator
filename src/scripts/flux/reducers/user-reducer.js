import Immutable from 'immutable';

export const defaultState = Immutable.fromJS({
  totalRunes: 30,
  character: 'corvo',
  purchases: Immutable.List()
});

export function reducer (state = defaultState, action) {
  let reducedState;

  switch (action.type) {
    case 'SET_CHARACTER':
      reducedState = state.set('character', action.character);
      break;
    default:
      reducedState = state;
      break;
  }

  return reducedState;
}
