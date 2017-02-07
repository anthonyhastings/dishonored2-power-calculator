import Immutable from 'immutable';
import {
  characterSelector,
  totalRunesSelector,
  purchasesSelector,
  powersSelector,
  powerSelector,
  enhancementsSelector,
  isPowerPurchasedSelector,
  isPowerPurchasableSelector
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

  describe('enhancementsSelector', function () {
    beforeEach(function () {
      this.state = Immutable.fromJS({
        powers: {
          powers: {
            'uuid-01': 'hello'
          },
          enhancements: {
            'uuid-02': 'world'
          }
        }
      });
    });

    it('should return appropriate value', function () {
      expect(enhancementsSelector(this.state)).toEqualImmutable(Immutable.fromJS({
        'uuid-02': 'world'
      }));
    });
  });

  describe('powersSelector', function () {
    beforeEach(function () {
      this.state = Immutable.fromJS({
        powers: {
          powers: {
            'uuid-01': 'hello'
          },
          enhancements: {
            'uuid-02': 'world'
          }
        }
      });
    });

    it('should return appropriate value', function () {
      expect(powersSelector(this.state)).toEqualImmutable(Immutable.fromJS({
        'uuid-01': 'hello'
      }));
    });
  });

  describe('powerSelector', function () {
    beforeEach(function () {
      this.state = Immutable.fromJS({
        powers: {
          powers: {
            'uuid-01': 'hello'
          },
          enhancements: {
            'uuid-02': 'world'
          }
        }
      });
    });

    it('should return appropriate value', function () {
      expect(powerSelector(this.state, 'uuid-02')).toEqual('world');
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

  describe('isPowerPurchasableSelector', function () {
    beforeEach(function () {
      this.defaultState = Immutable.fromJS({
        user: {
          purchases: [],
          totalRunes: 7
        },
        powers: {
          enhancements: {
          },
          powers: {
            'uuid-01': {
              id: 'uuid-01',
              parentPowerId: null,
              name: 'Power #01',
              cost: 2
            },
            'uuid-02': {
              id: 'uuid-02',
              parentPowerId: 'uuid-01',
              name: 'Power #01',
              cost: 5
            }
          }
        }
      });
    });

    describe('when the power has already been purchased', function () {
      beforeEach(function () {
        this.state = this.defaultState.withMutations((map) => {
          const purchasePath = ['user', 'purchases'];
          const updatedPurchases = map.getIn(purchasePath).push('uuid-01');

          map.setIn(purchasePath, updatedPurchases);
        });
      });

      it('returns false', function () {
        expect(isPowerPurchasableSelector(this.state, 'uuid-01')).toEqual(false);
      });
    });

    describe('when the power cannot be afforded', function () {
      beforeEach(function () {
        this.state = this.defaultState.withMutations((map) => {
          map.setIn(['powers', 'powers', 'uuid-01', 'cost'], 500);
        });
      });

      it('returns false', function () {
        expect(isPowerPurchasableSelector(this.state, 'uuid-01')).toEqual(false);
      });
    });

    describe('when the powers parent has not been purchased', function () {
      it('returns false', function () {
        expect(isPowerPurchasableSelector(this.defaultState, 'uuid-02')).toEqual(false);
      });
    });

    describe('when the power is eligible for purchase', function () {
      it('returns true', function () {
        expect(isPowerPurchasableSelector(this.defaultState, 'uuid-01')).toEqual(true);
      });
    });
  });
});
