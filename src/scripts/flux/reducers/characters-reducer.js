import Immutable from 'immutable';
import characters from '../../data/characters';

export const defaultState = Immutable.fromJS(characters);

export function reducer (state = defaultState) {
  return state;
};
