import Immutable from 'immutable';
import powers from '../data/powers';

export default Immutable.fromJS({
  character: undefined,
  totalRunes: 30,
  purchases: Immutable.Map(),
  powers
});
