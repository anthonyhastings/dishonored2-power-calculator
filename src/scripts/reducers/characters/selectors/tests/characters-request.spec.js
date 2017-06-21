import Immutable from 'immutable';
import charactersRequestSelector from '../characters-request';

describe('#charactersRequestSelector', () => {
  let state;

  beforeEach(() => {
    state = Immutable.fromJS({
      characters: {
        request: {
          inFlight: false,
          hasErrored: true
        }
      }
    });
  });

  it('returns request node', () => {
    expect(charactersRequestSelector(state)).toEqualImmutable(Immutable.fromJS({
      inFlight: false,
      hasErrored: true
    }));
  });
});
