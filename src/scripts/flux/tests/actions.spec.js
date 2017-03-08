import Immutable from 'immutable';
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
        expect(this.action.powers).toEqual(this.uuids);
      });
    });
  });

  describe('removePurchase', function () {
    beforeEach(function () {
      this.dispatchFunc = jest.fn();
      this.getStateFunc = jest.fn();
    });

    describe('when given a power id with no child powers', function () {
      it('should trigger REMOVE_PURCHASES action with only itself in powers list', function () {
        expect(false).toEqual(true);
      });
    });

    describe('when given a power id with child powers', function () {
      it('should trigger REMOVE_PURCHASES action with itself and child powers in powers list', function () {
        expect(false).toEqual(true);
      });
    });
  });
});
