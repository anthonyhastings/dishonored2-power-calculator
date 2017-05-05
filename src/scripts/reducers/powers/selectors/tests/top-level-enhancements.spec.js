import Immutable from 'immutable';
import {transform} from '../top-level-enhancements';

describe('#topLevelEnhancementsTransform', function () {
  beforeEach(function () {
    this.enhancements = Immutable.fromJS({
      'uuid-01': {
        parentPowerId: null,
        name: 'Enhancement #01'
      },
      'uuid-02': {
        parentPowerId: null,
        name: 'Enhancement #02'
      },
      'uuid-03': {
        parentPowerId: 'uuid-01',
        name: 'Enhancement #03'
      },
      'uuid-04': {
        parentPowerId: null,
        name: 'Enhancement #04'
      }
    });
  });

  describe('when called with enhancements', function () {
    it('returns only top level enhancements', function () {
      expect(transform(this.enhancements)).toEqualImmutable(Immutable.fromJS({
        'uuid-01': {
          parentPowerId: null,
          name: 'Enhancement #01'
        },
        'uuid-02': {
          parentPowerId: null,
          name: 'Enhancement #02'
        },
        'uuid-04': {
          parentPowerId: null,
          name: 'Enhancement #04'
        }
      }));
    });
  });
});