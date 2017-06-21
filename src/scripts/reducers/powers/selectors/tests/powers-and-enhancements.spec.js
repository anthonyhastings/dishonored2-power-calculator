import Immutable from 'immutable';
import powersAndEnhancementsSelector from '../powers-and-enhancements';

describe('#powersAndEnhancementsSelector', () => {
  let state;

  beforeEach(() => {
    state = Immutable.fromJS({
      powers: {
        data: {
          'uuid-01': 'hello',
          'uuid-02': 'world'
        }
      }
    });
  });

  it('should return appropriate value', () => {
    expect(powersAndEnhancementsSelector(state)).toEqualImmutable(Immutable.fromJS({
      'uuid-01': 'hello',
      'uuid-02': 'world'
    }));
  });
});
