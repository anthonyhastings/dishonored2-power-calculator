import Immutable from 'immutable';

const defaultState = Immutable.fromJS({
  totalRunes: 30,
  character: 'corvo',
  purchases: Immutable.List()
});

export default function (state = defaultState, action) {
  switch (action.type) {
    case 'SET_CHARACTER':
      return state.set('character', action.character);
      break;
    default:
      return state;
      break;
  }
}
