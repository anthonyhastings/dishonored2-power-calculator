import Immutable from 'immutable';
import characters from '../../../data/characters';

export const defaultState = Immutable.fromJS({
  data: Immutable.fromJS(characters) // TODO: Make `undefined` whenever thunk async calls are plumbed in.
});

export default (state = defaultState) => state;
