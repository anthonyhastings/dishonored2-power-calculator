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

  describe('when given SET_CHARACTER action', function () {
    beforeEach(function () {
      this.characterAction = actions.setCharacter('emily');
      this.initialState = defaultState;
      this.expectedState = this.initialState.set('character', 'emily');
      this.result = reducer(this.initialState, this.characterAction);
    });

    it('should update the character', function () {
      expect(this.result).toEqualImmutable(this.expectedState);
    });
  });

  describe('when given ADD_PURCHASE', function () {
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

  describe('when given REMOVE_PURCHASE', function () {
    beforeEach(function () {
      this.removePurchaseAction = actions.removePurchase('power-id-01');
    });

    describe('with a power id that is not present in the purchases list', function () {
      it('does nothing', function () {
        expect(true).toEqual(false);
      });
    });

    describe('with a power id that has no children', function () {
      it('removes that power id from the purchases list', function () {
        expect(true).toEqual(false);
      });
    });

    describe('with a power id that has children', function () {
      it('removes that power id along with any child id\'s found', function () {
        expect(true).toEqual(false);
      });
    });
  });
});
