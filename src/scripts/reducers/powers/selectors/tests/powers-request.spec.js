import Immutable from 'immutable';
import powersRequestSelector from '../powers-request';

describe('#powersRequestSelector', function () {
  beforeEach(function () {
    this.state = Immutable.fromJS({
      powers: {
        request: {
          inFlight: true,
          hasErrored: false
        }
      }
    });
  });

  it('returns request node', function () {
    expect(powersRequestSelector(this.state)).toEqualImmutable(Immutable.fromJS({
      inFlight: true,
      hasErrored: false
    }));
  });
});
