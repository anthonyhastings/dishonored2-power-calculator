import Immutable from 'immutable';
import {mapStateToProps, mapDispatchToProps} from '../';

describe('Power selection container', () => {
  let state;

  beforeEach(() => {
    state = Immutable.fromJS({
      powers: {
        data: {
          abc: {id: 'abc', parentPowerId: null, name: 'Power #01'}
        }
      },
      user: {
        totalRunes: 30,
        purchases: []
      }
    });
  });

  describe('#mapStateToProps', () => {
    let stateProps;

    beforeEach(() => {
      const ownProps = {match: {params: {characterId: 'de2351c7-f1c3-409d-8973-414d5c37364c'}}};

      stateProps = mapStateToProps(state, ownProps);
    });

    it('has a topLevelEnhancements prop', () => {
      expect(stateProps.topLevelEnhancements).toBeImmutable();
    });

    it('has a topLevelPowers prop', () => {
      expect(stateProps.topLevelPowers).toBeImmutable();
    });
  });

  describe('#mapDispatchToProps', () => {
    let dispatch;
    let dispatchProps;

    beforeEach(() => {
      dispatch = jest.fn();
      dispatchProps = mapDispatchToProps(dispatch);
    });

    describe('has a clearPurchases prop', () => {
      beforeEach(() => {
        dispatchProps.clearPurchases();
      });

      it('that triggers CLEAR_PURCHASES action when called', () => {
        expect(dispatch.mock.calls[0][0].type).toEqual('CLEAR_PURCHASES');
      });
    });

    describe('has an addPurchase prop', () => {
      beforeEach(() => {
        dispatchProps.addPurchase();
      });

      it('triggers an ADD_PURCHASE action', () => {
        expect(dispatch.mock.calls[0][0].type).toEqual('ADD_PURCHASE');
      });
    });

    describe('has a removePurchases prop', () => {
      beforeEach(() => {
        dispatchProps.removePurchases();
      });

      it('that triggers REMOVE_PURCHASES action when called', () => {
        expect(dispatch.mock.calls[0][0].type).toEqual('REMOVE_PURCHASES');
      });
    });

    describe('has a removePurchase prop', () => {
      let thunkFunc;
      let thunkDispatchFunc;
      let thunkGetStateFunc;

      beforeEach(() => {
        dispatchProps.removePurchase('abc');
        thunkFunc = dispatch.mock.calls[0][0];

        thunkDispatchFunc = jest.fn();
        thunkGetStateFunc = jest.fn(() => state);
        thunkFunc(thunkDispatchFunc, thunkGetStateFunc);
      });

      it('that triggers REMOVE_PURCHASES action when called', () => {
        expect(thunkDispatchFunc.mock.calls[0][0].type).toEqual('REMOVE_PURCHASES');
      });
    });
  });
});
