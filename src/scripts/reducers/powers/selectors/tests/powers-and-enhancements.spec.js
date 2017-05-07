import Immutable from 'immutable';
import powersAndEnhancementsSelector from '../powers-and-enhancements';

describe('#powersAndEnhancementsSelector', function () {
  beforeEach(function () {
    this.state = Immutable.fromJS({
      powers: {
        data: {
          'uuid-01': 'hello',
          'uuid-02': 'world'
        }
      }
    });
  });

  it('should return appropriate value', function () {
    expect(powersAndEnhancementsSelector(this.state)).toEqualImmutable(Immutable.fromJS({
      'uuid-01': 'hello',
      'uuid-02': 'world'
    }));
  });
});
