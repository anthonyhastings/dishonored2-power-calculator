import Immutable from 'immutable';
import {powersAndEnhancements} from '../';

describe('Powers and enhancements', function () {
  beforeEach(function () {
    this.powers = Immutable.fromJS({
      'uuid-01': {
        character: 'corvo',
        name: 'Power #01'
      },
      'uuid-02': {
        character: 'emily',
        name: 'Power #02'
      }
    });

    this.enhancements = Immutable.fromJS({
      'uuid-03': {
        name: 'Enhancement #01'
      },
      'uuid-04': {
        name: 'Enhancement #02'
      }
    });
  });

  describe('when supplied with powers and enhancements', function () {
    it('should return a combined map', function () {
      expect(powersAndEnhancements(this.powers, this.enhancements)).toEqualImmutable(Immutable.fromJS({
        'uuid-01': {
          character: 'corvo',
          name: 'Power #01'
        },
        'uuid-02': {
          character: 'emily',
          name: 'Power #02'
        },
        'uuid-03': {
          name: 'Enhancement #01'
        },
        'uuid-04': {
          name: 'Enhancement #02'
        }
      }));
    });
  });
});
