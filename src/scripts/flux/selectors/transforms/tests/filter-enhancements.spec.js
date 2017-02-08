import Immutable from 'immutable';
import filterEnhancements from '../filter-enhancements';

describe('Filter enhancements', function () {
  beforeEach(function () {
    this.powersAndEnhancements = Immutable.fromJS({
      'uuid-01': {
        type: 'enhancement',
        name: 'Enhancement #01'
      },
      'uuid-02': {
        type: 'enhancement',
        name: 'Enhancement #02'
      },
      'uuid-03': {
        type: 'power',
        name: 'Power #01'
      },
      'uuid-04': {
        type: 'power',
        name: 'Power #02'
      }
    });
  });

  describe('when called with powers and enhancements', function () {
    it('returns only enhancements', function () {
      expect(filterEnhancements(this.powersAndEnhancements)).toEqualImmutable(Immutable.fromJS({
        'uuid-01': {
          type: 'enhancement',
          name: 'Enhancement #01'
        },
        'uuid-02': {
          type: 'enhancement',
          name: 'Enhancement #02'
        }
      }));
    });
  });
});
