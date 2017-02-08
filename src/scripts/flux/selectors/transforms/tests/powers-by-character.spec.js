import Immutable from 'immutable';
import {powersByCharacter} from '../';

describe('Powers by character', function () {
  beforeEach(function () {
    this.powers = Immutable.fromJS({
      'uuid-01': {
        character: 'corvo',
        name: 'Power #01'
      },
      'uuid-02': {
        character: 'emily',
        name: 'Power #02'
      },
      'uuid-03': {
        character: 'corvo',
        name: 'Power #03'
      },
      'uuid-04': {
        character: null,
        name: 'Power #04'
      }
    });
  });

  describe('when supplied a character', function () {
    it('should return that characters powers', function () {
      expect(powersByCharacter(this.powers, 'corvo')).toEqualImmutable(Immutable.fromJS({
        'uuid-01': {
          character: 'corvo',
          name: 'Power #01'
        },
        'uuid-03': {
          character: 'corvo',
          name: 'Power #03'
        },
        'uuid-04': {
          character: null,
          name: 'Power #04'
        }
      }));
    });
  });
});
