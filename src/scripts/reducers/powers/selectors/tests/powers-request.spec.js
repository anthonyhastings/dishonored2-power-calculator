import Immutable from 'immutable';
import powersRequestSelector from '../powers-request';

describe('#powersRequestSelector', () => {
  let state;

  beforeEach(() => {
    state = Immutable.fromJS({
      powers: {
        request: {
          inFlight: true,
          hasErrored: false
        }
      }
    });
  });

  it('returns request node', () => {
    expect(powersRequestSelector(state)).toEqualImmutable(Immutable.fromJS({
      inFlight: true,
      hasErrored: false
    }));
  });
});
