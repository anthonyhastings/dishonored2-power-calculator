import defaultState from './default-state';

export default function mainReducer (state = defaultState, action) {
  switch (action.type) {
    case 'SET_CHARACTER':
      return state.set('character', action.character);
      break;
    default:
      return state;
      break;
  }
};
