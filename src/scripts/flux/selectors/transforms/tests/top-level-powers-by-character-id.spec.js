import Immutable from 'immutable';
import topLevelPowersByCharacterId from '../top-level-powers-by-character-id';

describe('Top level powers', function () {
  beforeEach(function () {
    this.powers = Immutable.fromJS({
      'uuid-01': {
        parentPowerId: null,
        name: 'Power #01',
        character: 'corvo'
      },
      'uuid-02': {
        parentPowerId: null,
        name: 'Power #02',
        character: 'corvo'
      },
      'uuid-03': {
        parentPowerId: 'uuid-01',
        name: 'Power #03',
        character: 'emily'
      },
      'uuid-04': {
        parentPowerId: null,
        name: 'Power #04',
        character: 'emily'
      }
    });
  });

  describe('when called with powers', function () {
    it('returns only top level powers for corvo', function () {
      expect(topLevelPowersByCharacterId(this.powers, 'corvo')).toEqualImmutable(Immutable.fromJS({
        'uuid-01': {
          parentPowerId: null,
          name: 'Power #01',
          character: 'corvo'
        },
        'uuid-02': {
          parentPowerId: null,
          name: 'Power #02',
          character: 'corvo'
        }
      }));
    });
  });
});
