import Immutable from 'immutable';
import corvo from '../data/corvo';
import emily from '../data/emily';

export default Immutable.fromJS({
  totalRunes: 30,
  powers: {
    corvo,
    emily
  },
  user: {
    character: 'corvo',
    purchases: Immutable.List()
  }
});
