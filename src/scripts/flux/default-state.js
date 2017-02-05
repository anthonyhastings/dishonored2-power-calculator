import Immutable from 'immutable';
import powers from '../data/powers';

export default Immutable.fromJS({
  character: 'corvo',
  totalRunes: 30,
  purchases: Immutable.List(),
  powers
});
