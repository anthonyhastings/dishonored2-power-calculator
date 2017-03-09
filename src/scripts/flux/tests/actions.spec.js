import Immutable from 'immutable';
import {defaultState as powersAndEnhancementsDefaultState} from '../reducers/powers-reducer';
import {defaultState as userDefaultState} from '../reducers/user-reducer';
import * as actions from '../actions';

describe('flux actions', function () {
  describe('setCharacter', function () {
    describe('should create an action object', function () {
      beforeEach(function () {
        this.action = actions.setCharacter('emily');
      });

      it('with the correct action type', function () {
        expect(this.action.type).toEqual('SET_CHARACTER');
      });

      it('with the correct character', function () {
        expect(this.action.character).toEqual('emily');
      });
    });
  });

  describe('addPurchase', function () {
    describe('should create an action object', function () {
      beforeEach(function () {
        this.action = actions.addPurchase('power-uuid-01');
      });

      it('with the correct action type', function () {
        expect(this.action.type).toEqual('ADD_PURCHASE');
      });

      it('with the correct character', function () {
        expect(this.action.powerId).toEqual('power-uuid-01');
      });
    });
  });

  describe('removePurchases', function () {
    describe('should create an action object', function () {
      beforeEach(function () {
        this.uuids = Immutable.List(['power-uuid-01', 'power-uuid-02']);
        this.action = actions.removePurchases(this.uuids);
      });

      it('with the correct action type', function () {
        expect(this.action.type).toEqual('REMOVE_PURCHASES');
      });

      it('with the correct character', function () {
        expect(this.action.powerIds).toEqual(this.uuids);
      });
    });
  });

  describe('removePurchase', function () {
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

    describe('when given a power id with no child powers', function () {
      beforeEach(function () {
        this.thunkFunction = actions.removePurchase('6229d272-6b03-467a-82ec-00993c642570');
        this.thunkFunction(this.dispatchFunc, this.getStateFunc);
        this.dispatchCall = this.dispatchFunc.mock.calls[0][0];
        this.expectedPowers = Immutable.fromJS(['6229d272-6b03-467a-82ec-00993c642570']);
      });

      it('triggers dispatch with a REMOVE_PURCHASES action', function () {
        expect(this.dispatchCall.type).toEqual('REMOVE_PURCHASES');
      });

      it('triggers dispatch with action containing correct power identifiers', function () {
        expect(this.dispatchCall.powerIds).toEqualImmutable(this.expectedPowers);
      });
    });

    describe('when given a power id with child powers', function () {
      beforeEach(function () {
        this.thunkFunction = actions.removePurchase('39334a1e-2883-4722-af71-d3286d94b6e7');
        this.thunkFunction(this.dispatchFunc, this.getStateFunc);
        this.dispatchCall = this.dispatchFunc.mock.calls[0][0];
        this.expectedPowers = Immutable.fromJS([
          '39334a1e-2883-4722-af71-d3286d94b6e7',
          '6229d272-6b03-467a-82ec-00993c642570'
        ]);
      });

      it('triggers dispatch with a REMOVE_PURCHASES action', function () {
        expect(this.dispatchCall.type).toEqual('REMOVE_PURCHASES');
      });

      it('triggers dispatch with a REMOVE_PURCHASES action containing correct power id\'s', function () {
        expect(this.dispatchCall.powerIds).toEqualImmutable(this.expectedPowers);
      });
    });
  });
});
