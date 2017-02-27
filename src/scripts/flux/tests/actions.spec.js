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

  describe('removePurchase', function () {
    describe('should create an action object', function () {
      beforeEach(function () {
        this.action = actions.removePurchase('power-uuid-01');
      });

      it('with the correct action type', function () {
        expect(this.action.type).toEqual('REMOVE_PURCHASE');
      });

      it('with the correct character', function () {
        expect(this.action.powerId).toEqual('power-uuid-01');
      });
    });
  });
});
