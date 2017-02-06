import Immutable from 'immutable';
import {
  characterSelector,
  totalRunesSelector,
  purchasesSelector,
  powersSelector,
  isPowerPurchasedSelector
} from '../';

describe('input/simple selectors', function () {
  describe('characterSelector', function () {
    beforeEach(function () {
      this.state = Immutable.fromJS({
        user: {
          character: 'anthony'
        }
      });
    });

    it('should return appropriate value', function () {
      expect(characterSelector(this.state)).toEqual('anthony');
    });
  });

  describe('totalRunesSelector', function () {
    beforeEach(function () {
      this.state = Immutable.fromJS({
        user: {
          totalRunes: 30
        }
      });
    });

    it('should return appropriate value', function () {
      expect(totalRunesSelector(this.state)).toEqual(30);
    });
  });

  describe('purchasesSelector', function () {
    beforeEach(function () {
      this.state = Immutable.fromJS({
        user: {
          purchases: ['uuid-01', 'uuid-02']
        }
      });
    });

    it('should return appropriate value', function () {
      expect(purchasesSelector(this.state)).toEqualImmutable(Immutable.fromJS([
        'uuid-01',
        'uuid-02'
      ]));
    });
  });

  describe('powersSelector', function () {
    beforeEach(function () {
      this.state = Immutable.fromJS({
        powers: {
          corvo: {},
          emily: {}
        }
      });
    });

    it('should return appropriate value', function () {
      expect(powersSelector(this.state)).toEqualImmutable(Immutable.fromJS({
        corvo: {},
        emily: {}
      }));
    });
  });

  describe('isPowerPurchasedSelector', function () {
    describe('when a particular power has not been purchased', function () {
      beforeEach(function () {
        this.state = Immutable.fromJS({
          user: {
            purchases: []
          }
        });

        this.result = isPowerPurchasedSelector(this.state, 'uuid-01');
      });

      it('should return false', function () {
        expect(this.result).toEqual(false);
      });
    });

    describe('when a particular power has been purchased', function () {
      beforeEach(function () {
        this.state = Immutable.fromJS({
          user: {
            purchases: ['uuid-01']
          }
        });

        this.result = isPowerPurchasedSelector(this.state, 'uuid-01');
      });

      it('should return true', function () {
        expect(this.result).toEqual(true);
      });
    });
  });
});
