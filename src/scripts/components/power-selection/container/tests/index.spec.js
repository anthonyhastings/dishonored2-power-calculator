import Immutable from 'immutable';
import {defaultState as powersAndEnhancementsDefaultState} from '../../../../flux/reducers/powers-reducer';
import {defaultState as userDefaultState} from '../../../../flux/reducers/user-reducer';
import {mapStateToProps, mapDispatchToProps} from '../';

describe('Power selection container', function () {
  beforeEach(function () {
    this.state = Immutable.fromJS({
      powers: powersAndEnhancementsDefaultState,
      user: userDefaultState
    });
  });

  describe('#mapStateToProps', function () {
    beforeEach(function () {
      const ownProps = {match: {params: {characterId: 'de2351c7-f1c3-409d-8973-414d5c37364c'}}};

      this.stateProps = mapStateToProps(this.state, ownProps);
    });

    it('has a topLevelEnhancements prop', function () {
      expect(this.stateProps.topLevelEnhancements).toBeImmutable();
    });

    it('has a topLevelPowers prop', function () {
      expect(this.stateProps.topLevelPowers).toBeImmutable();
    });
  });

  describe('#mapDispatchToProps', function () {
    beforeEach(function () {
      this.dispatch = jest.fn();
      this.dispatchProps = mapDispatchToProps(this.dispatch);
    });

    describe('has a clearPurchases prop', function () {
      beforeEach(function () {
        this.dispatchProps.clearPurchases();
      });

      it('that triggers CLEAR_PURCHASES action when called', function () {
        expect(this.dispatch.mock.calls[0][0].type).toEqual('CLEAR_PURCHASES');
      });
    });

    describe('has an addPurchase prop', function () {
      beforeEach(function () {
        this.dispatchProps.addPurchase('power-uuid-01');
      });

      it('triggers an ADD_PURCHASE action', function () {
        expect(this.dispatch.mock.calls[0][0].type).toEqual('ADD_PURCHASE');
      });
    });

    describe('has a removePurchases prop', function () {
      beforeEach(function () {
        this.dispatchProps.removePurchases();
      });

      it('that triggers REMOVE_PURCHASES action when called', function () {
        expect(this.dispatch.mock.calls[0][0].type).toEqual('REMOVE_PURCHASES');
      });
    });

    describe('has a removePurchase prop', function () {
      beforeEach(function () {
        this.dispatchProps.removePurchase('39334a1e-2883-4722-af71-d3286d94b6e7');
        this.thunkFunc = this.dispatch.mock.calls[0][0];

        this.thunkDispatchFunc = jest.fn();
        this.thunkGetStateFunc = jest.fn(() => this.state);
        this.thunkFunc(this.thunkDispatchFunc, this.thunkGetStateFunc);
      });

      it('that triggers REMOVE_PURCHASES action when called', function () {
        expect(this.thunkDispatchFunc.mock.calls[0][0].type).toEqual('REMOVE_PURCHASES');
      });
    });
  });
});
