import Immutable from 'immutable';
import characters from '../../data/characters';

export const defaultState = Immutable.fromJS(characters);

export const reducer = (state = defaultState) => state;
