import Immutable from 'immutable';
import powers from '../../data/powers';
import enhancements from '../../data/enhancements';

export const defaultState = Immutable.fromJS({
  powers,
  enhancements
});

export function reducer (state = defaultState) {
  return state;
};
