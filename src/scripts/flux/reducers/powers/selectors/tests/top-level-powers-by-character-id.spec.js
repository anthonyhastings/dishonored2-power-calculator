import Immutable from 'immutable';
import {transform} from '../top-level-powers-by-character-id';

describe('#topLevelPowersByCharacterId', function () {
  beforeEach(function () {
    this.powers = Immutable.fromJS({
      'uuid-01': {
        parentPowerId: null,
        characterId: 'corvo',
        name: 'Power #01'
      },
      'uuid-02': {
        parentPowerId: null,
        characterId: 'corvo',
        name: 'Power #02'
      },
      'uuid-03': {
        parentPowerId: 'uuid-01',
        characterId: 'emily',
        name: 'Power #03'
      },
      'uuid-04': {
        parentPowerId: null,
        characterId: 'emily',
        name: 'Power #04'
      }
    });
  });

  describe('when called with powers', function () {
    it('returns only top level powers for corvo', function () {
      expect(transform(this.powers, 'corvo')).toEqualImmutable(Immutable.fromJS({
        'uuid-01': {
          parentPowerId: null,
          characterId: 'corvo',
          name: 'Power #01'
        },
        'uuid-02': {
          parentPowerId: null,
          characterId: 'corvo',
          name: 'Power #02'
        }
      }));
    });
  });
});
