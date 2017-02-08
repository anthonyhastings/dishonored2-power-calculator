import Immutable from 'immutable';
import powers from '../../data/powers';

export const defaultState = Immutable.fromJS(powers);

export function reducer (state = defaultState) {
  return state;
};
