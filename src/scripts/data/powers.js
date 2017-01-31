import Immutable from 'immutable';
import corvoPowers from './corvo';
import emilyPowers from './emily';

export default Immutable.fromJS({
  emily: emilyPowers,
  corvo: corvoPowers
});
