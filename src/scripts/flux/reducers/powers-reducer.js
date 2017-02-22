import Immutable from 'immutable';
import powers from '../../data/powers';

export const defaultState = Immutable.fromJS(powers);

export const reducer = (state = defaultState) => state;
