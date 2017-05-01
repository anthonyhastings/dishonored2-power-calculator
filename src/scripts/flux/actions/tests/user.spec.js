import Immutable from 'immutable';
import {defaultState as powersAndEnhancementsDefaultState} from '../../reducers/powers';
import {defaultState as userDefaultState} from '../../reducers/user';
import * as actions from '../user';

describe('user action creators', function () {
  describe('clearPurchases', function () {
    describe('creates an action', function () {
      beforeEach(function () {
        this.action = actions.clearPurchases();
      });

      it('with the correct type', function () {
        expect(this.action.type).toEqual('CLEAR_PURCHASES');
      });
    });
  });

  describe('addPurchase', function () {
    describe('creates an action', function () {
      beforeEach(function () {
        this.action = actions.addPurchase('power-uuid-01');
      });

      it('with the correct type', function () {
        expect(this.action.type).toEqual('ADD_PURCHASE');
      });

      it('with the correct power', function () {
        expect(this.action.powerId).toEqual('power-uuid-01');
      });
    });
  });

  describe('removePurchases', function () {
    describe('creates an action', function () {
      describe('that when given no data', function () {
        beforeEach(function () {
          this.action = actions.removePurchases();
        });

        it('creates an action with a blank immutable list', function () {
          expect(this.action.powerIds).toEqualImmutable(Immutable.List());
        });
      });

      describe('that when given data', function () {
        beforeEach(function () {
          this.uuids = Immutable.List(['power-uuid-01', 'power-uuid-02']);
          this.action = actions.removePurchases(this.uuids);
        });

        it('creates an action with the correct type', function () {
          expect(this.action.type).toEqual('REMOVE_PURCHASES');
        });

        it('creates an action with the correct power ids', function () {
          expect(this.action.powerIds).toEqual(this.uuids);
        });
      });
    });
  });

  describe('removePurchase', function () {
    describe('creates an action', function () {
      beforeEach(function () {
        this.state = Immutable.fromJS({
          powers: powersAndEnhancementsDefaultState,
          user: userDefaultState
        });

        this.stateWithPurchases = this.state.updateIn(['user', 'purchases'], (purchases) => {
          return purchases.push('39334a1e-2883-4722-af71-d3286d94b6e7', '6229d272-6b03-467a-82ec-00993c642570');
        });

        this.dispatchFunc = jest.fn();
        this.getStateFunc = jest.fn(() => this.stateWithPurchases);
      });

      describe('that when given a power id with no child powers', function () {
        beforeEach(function () {
          this.thunkFunction = actions.removePurchase('6229d272-6b03-467a-82ec-00993c642570');
          this.thunkFunction(this.dispatchFunc, this.getStateFunc);
          this.dispatchCall = this.dispatchFunc.mock.calls[0][0];
          this.expectedPowers = Immutable.fromJS(['6229d272-6b03-467a-82ec-00993c642570']);
        });

        it('triggers dispatch with a REMOVE_PURCHASES action', function () {
          expect(this.dispatchCall.type).toEqual('REMOVE_PURCHASES');
        });

        it('triggers dispatch with a REMOVE_PURCHASES action containing correct powers', function () {
          expect(this.dispatchCall.powerIds).toEqualImmutable(this.expectedPowers);
        });
      });

      describe('that when given a power id with child powers', function () {
        beforeEach(function () {
          this.thunkFunction = actions.removePurchase('39334a1e-2883-4722-af71-d3286d94b6e7');
          this.thunkFunction(this.dispatchFunc, this.getStateFunc);
          this.dispatchCall = this.dispatchFunc.mock.calls[0][0];
          this.expectedPowers = Immutable.fromJS([
            '39334a1e-2883-4722-af71-d3286d94b6e7',
            '4499082e-9cdc-4828-8d18-40aea0b2970b',
            '6229d272-6b03-467a-82ec-00993c642570'
          ]);
        });

        it('triggers dispatch with a REMOVE_PURCHASES action', function () {
          expect(this.dispatchCall.type).toEqual('REMOVE_PURCHASES');
        });

        it('triggers dispatch with a REMOVE_PURCHASES action containing correct powers', function () {
          expect(this.dispatchCall.powerIds).toEqualImmutable(this.expectedPowers);
        });
      });
    });
  });
});
