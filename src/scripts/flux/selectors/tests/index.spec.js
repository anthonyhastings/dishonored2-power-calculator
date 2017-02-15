import Immutable from 'immutable';
import {defaultState as powersAndEnhancements} from '../../reducers/powers-reducer';
import {
  characterSelector,
  totalRunesSelector,
  purchasesSelector,
  powersAndEnhancementsSelector,
  powerSelector,
  isPowerPurchasedSelector,
  isPowerPurchasableSelector,
  powerTreeSelector
} from '../';

describe('selectors', function () {
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

  describe('powersAndEnhancementsSelector', function () {
    beforeEach(function () {
      this.state = Immutable.fromJS({
        powers: {
          'uuid-01': 'hello',
          'uuid-02': 'world'
        }
      });
    });

    it('should return appropriate value', function () {
      expect(powersAndEnhancementsSelector(this.state)).toEqualImmutable(Immutable.fromJS({
        'uuid-01': 'hello',
        'uuid-02': 'world'
      }));
    });
  });

  describe('powerSelector', function () {
    beforeEach(function () {
      this.state = Immutable.fromJS({
        powers: {
          'uuid-01': 'hello',
          'uuid-02': 'world'
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
          map.setIn(['powers', 'uuid-01', 'cost'], 500);
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

  describe('powerTreeSelector', function () {
    beforeEach(function () {
      this.state = Immutable.fromJS({
        powers: powersAndEnhancements
      });
    });

    describe('when using a power with no children', function () {
      beforeEach(function () {
        this.expectedResult = powerSelector(
          this.state,
          '6229d272-6b03-467a-82ec-00993c642570'
        ).set('children', Immutable.List([]));
      });

      it('returns the power with an empty children list', function () {
        expect(powerTreeSelector(this.state, '6229d272-6b03-467a-82ec-00993c642570'))
          .toEqualImmutable(this.expectedResult);
      });
    });

    describe('when using a power with one child', function () {
      beforeEach(function () {
        this.nestedChild = powerSelector(
          this.state,
          'c2ffd997-e0db-4bb8-b69f-df7ae2add66c'
        ).set('children', Immutable.List([]));

        this.expectedResult = powerSelector(
          this.state,
          '5bed80af-6e29-4b12-a875-f7ad2c1cab8d'
        ).set('children', Immutable.List([
          this.nestedChild
        ]));
      });

      it('returns the power with a single child', function () {
        expect(powerTreeSelector(this.state, '5bed80af-6e29-4b12-a875-f7ad2c1cab8d'))
          .toEqualImmutable(this.expectedResult);
      });
    });

    describe('when using a power with multiple children', function () {
      beforeEach(function () {
        this.nestedChildren = Immutable.List([
          powerSelector(
            this.state,
            '4499082e-9cdc-4828-8d18-40aea0b2970b'
          ).set('children', Immutable.List([])),
          powerSelector(
            this.state,
            '6229d272-6b03-467a-82ec-00993c642570'
          ).set('children', Immutable.List([]))
        ]);

        this.expectedResult = powerSelector(
          this.state,
          '39334a1e-2883-4722-af71-d3286d94b6e7'
        ).set('children', this.nestedChildren);
      });

      it('returns the power with all the children', function () {
        expect(powerTreeSelector(this.state, '39334a1e-2883-4722-af71-d3286d94b6e7'))
          .toEqualImmutable(this.expectedResult);
      });
    });

    describe('when using a power with multiple tiers of children', function () {
      beforeEach(function () {
        this.lowestChild = powerSelector(
          this.state,
          '676cb117-268a-4c88-a952-a9cfa7bd9ad6'
        ).set('children', Immutable.List([]));

        this.immediateChild = powerSelector(
          this.state,
          '34f79277-2fa4-40a8-9568-40f0bbf359de'
        ).set('children', Immutable.List([
          this.lowestChild
        ]));

        this.expectedResult = powerSelector(
          this.state,
          'e2b274c4-d727-44a7-a4ef-32da487bb4b6'
        ).set('children', Immutable.List([
          powerSelector(
            this.state,
            'b7103d3b-a644-4a04-89ea-e3e8f49f2f53'
          ).set('children', Immutable.List([])),
          powerSelector(
            this.state,
            '6dd8594c-8e1d-45d4-b98d-b28af53982ec'
          ).set('children', Immutable.List([])),
          this.immediateChild
        ]));
      });

      it('returns the power with nested children', function () {
        expect(powerTreeSelector(this.state, 'e2b274c4-d727-44a7-a4ef-32da487bb4b6'))
          .toEqualImmutable(this.expectedResult);
      });
    });
  });
});
