import Immutable from 'immutable';
import {powersByCharacter} from '../';

describe('Powers by character', function () {
  beforeEach(function () {
    this.powers = Immutable.fromJS({
      corvo: {
        name: 'Foo'
      },
      emily: {
        name: 'Bar'
      }
    });
  });

  describe('when supplied a character', function () {
    it('should return that characters powers', function () {
      expect(powersByCharacter(this.powers, 'corvo')).toEqualImmutable(Immutable.Map({
        name: 'Foo'
      }));
    });
  });
});
