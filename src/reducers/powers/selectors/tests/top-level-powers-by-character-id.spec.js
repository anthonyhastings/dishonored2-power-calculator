import Immutable from 'immutable';
import { transform } from '../top-level-powers-by-character-id';

describe('#topLevelPowersByCharacterId', () => {
  let powers;

  beforeEach(() => {
    powers = Immutable.fromJS({
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

  describe('when called with powers', () => {
    it('returns only top level powers for corvo', () => {
      expect(transform(powers, 'corvo')).toEqual(
        Immutable.fromJS({
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
        })
      );
    });
  });
});
