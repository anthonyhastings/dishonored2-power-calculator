import Immutable from 'immutable';
import corvo from '../../data/corvo';
import emily from '../../data/emily';

const defaultState = Immutable.fromJS({
  corvo,
  emily
});

export default function (state = defaultState) {
  return state;
}
