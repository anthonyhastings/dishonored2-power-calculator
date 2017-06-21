import Immutable from 'immutable';
import {transform} from '../powers';

describe('#powersSelector', () => {
  let powersAndEnhancements;

  beforeEach(() => {
    powersAndEnhancements = Immutable.fromJS({
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

  describe('when called with powers and enhancements', () => {
    it('returns only powers', () => {
      expect(transform(powersAndEnhancements)).toEqualImmutable(Immutable.fromJS({
        'uuid-03': {
          type: 'power',
          name: 'Power #01'
        },
        'uuid-04': {
          type: 'power',
          name: 'Power #02'
        }
      }));
    });
  });
});
