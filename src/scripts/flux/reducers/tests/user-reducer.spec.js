import Immutable from 'immutable';
import {reducer, defaultState} from '../user-reducer';
import * as actions from '../../actions';

describe('userReducer', function () {
  describe('when given no action', function () {
    beforeEach(function () {
      this.result = reducer(undefined, {});
    });

    it('should return default state', function () {
      expect(this.result).toEqualImmutable(defaultState);
    });
  });

  describe('when given CLEAR_PURCHASES action', function () {
    beforeEach(function () {
      this.clearPurchasesAction = actions.clearPurchases();
      this.inputState = defaultState.set('purchases', Immutable.List(['power-id-01']));
      this.outputState = defaultState;
    });

    it('resets the purchases list back to default state', function () {
      expect(reducer(this.inputState, this.clearPurchasesAction)).toEqualImmutable(this.outputState);
    });
  });

  describe('when given ADD_PURCHASE action', function () {
    beforeEach(function () {
      this.addPurchaseAction = actions.addPurchase('power-id-01');
      this.inputState = defaultState;
      this.outputState = defaultState.set('purchases', Immutable.List(['power-id-01']));
    });

    describe('with an id that is not present in the purchases list', function () {
      it('updates the purchases list with the new power id', function () {
        expect(reducer(this.inputState, this.addPurchaseAction)).toEqualImmutable(this.outputState);
      });
    });

    describe('with an id that is already present in the purchases list', function () {
      beforeEach(function () {
        this.state = defaultState.set('purchases', Immutable.List(['power-id-01']));
      });

      it('does nothing', function () {
        expect(reducer(this.state, this.addPurchaseAction)).toEqualImmutable(this.state);
      });
    });
  });

  describe('when given REMOVE_PURCHASES action', function () {
    describe('with a blank list', function () {
      beforeEach(function () {
        this.removePurchasesAction = actions.removePurchases();
        this.inputState = defaultState;
        this.outputState = defaultState;
      });

      it('does nothing', function () {
        expect(reducer(this.inputState, this.removePurchasesAction)).toEqualImmutable(this.outputState);
      });
    });

    describe('with a list containing powers that are not purchased', function () {
      beforeEach(function () {
        this.removePurchasesAction = actions.removePurchases(Immutable.List(['uuid-02', 'uuid-03']));
        this.inputState = defaultState.set('purchases', Immutable.List(['uuid-01']));
        this.outputState = this.inputState;
      });

      it('does nothing', function () {
        expect(reducer(this.inputState, this.removePurchasesAction)).toEqualImmutable(this.outputState);
      });
    });

    describe('with a list containing powers that are purchased', function () {
      beforeEach(function () {
        this.removePurchasesAction = actions.removePurchases(Immutable.List(['uuid-01', 'uuid-02']));
        this.inputState = defaultState.set('purchases', Immutable.List(['uuid-01', 'uuid-02', 'uuid-03']));
        this.outputState = defaultState.set('purchases', Immutable.List(['uuid-03']));
      });

      it('removes that powers from the purchases list', function () {
        expect(reducer(this.inputState, this.removePurchasesAction)).toEqualImmutable(this.outputState);
      });
    });
  });
});
