import Immutable from 'immutable';
import charactersRequestSelector from '../characters-request';

describe('#charactersRequestSelector', function () {
  beforeEach(function () {
    this.state = Immutable.fromJS({
      characters: {
        request: {
          inFlight: false,
          hasErrored: true
        }
      }
    });
  });

  it('returns request node', function () {
    expect(charactersRequestSelector(this.state)).toEqualImmutable(Immutable.fromJS({
      inFlight: false,
      hasErrored: true
    }));
  });
});
