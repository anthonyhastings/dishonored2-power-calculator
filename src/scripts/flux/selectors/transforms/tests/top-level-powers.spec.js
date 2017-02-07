import Immutable from 'immutable';
import topLevelPowers from '../top-level-powers';

describe('Top level powers', function () {
  beforeEach(function () {
    this.powers = Immutable.fromJS({
      'uuid-01': {
        parentPowerId: null,
        name: 'Power #01'
      },
      'uuid-02': {
        parentPowerId: null,
        name: 'Power #02'
      },
      'uuid-03': {
        parentPowerId: 'uuid-01',
        name: 'Power #03'
      },
      'uuid-04': {
        parentPowerId: null,
        name: 'Power #04'
      }
    });
  });

  describe('when called with powers', function () {
    it('returns only top level powers', function () {
      expect(topLevelPowers(this.powers)).toEqualImmutable(Immutable.fromJS({
        'uuid-01': {
          parentPowerId: null,
          name: 'Power #01'
        },
        'uuid-02': {
          parentPowerId: null,
          name: 'Power #02'
        },
        'uuid-04': {
          parentPowerId: null,
          name: 'Power #04'
        }
      }));
    });
  });
});
