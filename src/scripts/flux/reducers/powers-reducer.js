import Immutable from 'immutable';
import corvo from '../../data/corvo';
import emily from '../../data/emily';

export const defaultState = Immutable.fromJS({
  corvo,
  emily
});

export function reducer (state = defaultState) {
  return state;
}
