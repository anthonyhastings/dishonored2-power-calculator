import Immutable from 'immutable';
import reducer from '../';
import {
  defaultState,
  clearPurchases,
  addPurchase,
  removePurchases,
  removePurchase
} from '../';

describe('user reducer', () => {
  describe('when given no action', () => {
    let result;

    beforeEach(() => {
      result = reducer(undefined, {});
    });

    it('should return default state', () => {
      expect(result).toEqualImmutable(defaultState);
    });
  });

  describe('when given CLEAR_PURCHASES action', () => {
    let clearPurchasesAction;
    let inputState;
    let outputState;

    beforeEach(() => {
      clearPurchasesAction = clearPurchases();
      inputState = defaultState.set('purchases', Immutable.List(['power-id-01']));
      outputState = defaultState;
    });

    it('resets the purchases list back to default state', () => {
      expect(reducer(inputState, clearPurchasesAction)).toEqualImmutable(outputState);
    });
  });

  describe('when given ADD_PURCHASE action', () => {
    let addPurchaseAction;
    let inputState;
    let outputState;

    beforeEach(() => {
      addPurchaseAction = addPurchase('power-id-01');
      inputState = defaultState;
      outputState = defaultState.set('purchases', Immutable.List(['power-id-01']));
    });

    describe('with an id that is not present in the purchases list', () => {
      it('updates the purchases list with the new power id', () => {
        expect(reducer(inputState, addPurchaseAction)).toEqualImmutable(outputState);
      });
    });

    describe('with an id that is already present in the purchases list', () => {
      beforeEach(() => {
        inputState = defaultState.set('purchases', Immutable.List(['power-id-01']));
      });

      it('does nothing', () => {
        expect(reducer(inputState, addPurchaseAction)).toEqualImmutable(inputState);
      });
    });
  });

  describe('when given REMOVE_PURCHASES action', () => {
    describe('with a blank list', () => {
      let removePurchasesAction;
      let inputState;
      let outputState;

      beforeEach(() => {
        removePurchasesAction = removePurchases();
        inputState = defaultState;
        outputState = defaultState;
      });

      it('does nothing', () => {
        expect(reducer(inputState, removePurchasesAction)).toEqualImmutable(outputState);
      });
    });

    describe('with a list containing powers that are not purchased', () => {
      let removePurchasesAction;
      let inputState;
      let outputState;

      beforeEach(() => {
        removePurchasesAction = removePurchases(Immutable.List(['uuid-02', 'uuid-03']));
        inputState = defaultState.set('purchases', Immutable.List(['uuid-01']));
        outputState = inputState;
      });

      it('does nothing', () => {
        expect(reducer(inputState, removePurchasesAction)).toEqualImmutable(outputState);
      });
    });

    describe('with a list containing powers that are purchased', () => {
      let removePurchasesAction;
      let inputState;
      let outputState;

      beforeEach(() => {
        removePurchasesAction = removePurchases(Immutable.List(['uuid-01', 'uuid-02']));
        inputState = defaultState.set('purchases', Immutable.List(['uuid-01', 'uuid-02', 'uuid-03']));
        outputState = defaultState.set('purchases', Immutable.List(['uuid-03']));
      });

      it('removes that powers from the purchases list', () => {
        expect(reducer(inputState, removePurchasesAction)).toEqualImmutable(outputState);
      });
    });
  });
});

describe('user action creators', () => {
  describe('clearPurchases', () => {
    describe('creates an action', () => {
      let action;

      beforeEach(() => {
        action = clearPurchases();
      });

      it('with the correct type', () => {
        expect(action.type).toEqual('CLEAR_PURCHASES');
      });
    });
  });

  describe('addPurchase', () => {
    describe('creates an action', () => {
      let action;

      beforeEach(() => {
        action = addPurchase('power-uuid-01');
      });

      it('with the correct type', () => {
        expect(action.type).toEqual('ADD_PURCHASE');
      });

      it('with the correct power', () => {
        expect(action.powerId).toEqual('power-uuid-01');
      });
    });
  });

  describe('removePurchases', () => {
    describe('creates an action', () => {
      describe('that when given no data', () => {
        let action;

        beforeEach(() => {
          action = removePurchases();
        });

        it('creates an action with a blank immutable list', () => {
          expect(action.powerIds).toEqualImmutable(Immutable.List());
        });
      });

      describe('that when given data', () => {
        let uuids;
        let action;

        beforeEach(() => {
          uuids = Immutable.List(['power-uuid-01', 'power-uuid-02']);
          action = removePurchases(uuids);
        });

        it('creates an action with the correct type', () => {
          expect(action.type).toEqual('REMOVE_PURCHASES');
        });

        it('creates an action with the correct power ids', () => {
          expect(action.powerIds).toEqual(uuids);
        });
      });
    });
  });

  describe('removePurchase', () => {
    describe('creates an action', () => {
      let state;
      let dispatchFunc;
      let getStateFunc;

      beforeEach(() => {
        state = Immutable.fromJS({
          powers: {
            data: {
              abc: {id: 'abc', parentPowerId: null, name: 'Power with no children'},
              def: {id: 'def', parentPowerId: null, name: 'Power with one child'},
              ghi: {id: 'ghi', parentPowerId: 'def', name: 'Power with a parent'},
              jkl: {id: 'jkl', parentPowerId: 'ghi', name: 'Power with multiple children'}
            }
          },
          user: {
            totalRunes: 30,
            purchases: ['abc', 'def']
          }
        });

        dispatchFunc = jest.fn();
        getStateFunc = jest.fn(() => state);
      });

      describe('that when given a power id with no child powers', () => {
        let thunkFunction;
        let dispatchCall;
        let expectedPowers;

        beforeEach(() => {
          thunkFunction = removePurchase('abc');
          thunkFunction(dispatchFunc, getStateFunc);
          dispatchCall = dispatchFunc.mock.calls[0][0];
          expectedPowers = Immutable.fromJS(['abc']);
        });

        it('triggers dispatch with a REMOVE_PURCHASES action', () => {
          expect(dispatchCall.type).toEqual('REMOVE_PURCHASES');
        });

        it('triggers dispatch with a REMOVE_PURCHASES action containing correct powers', () => {
          expect(dispatchCall.powerIds).toEqualImmutable(expectedPowers);
        });
      });

      describe('that when given a power id with child powers', () => {
        let thunkFunction;
        let dispatchCall;
        let expectedPowers;

        beforeEach(() => {
          thunkFunction = removePurchase('def');
          thunkFunction(dispatchFunc, getStateFunc);
          dispatchCall = dispatchFunc.mock.calls[0][0];
          expectedPowers = Immutable.fromJS([
            'def',
            'ghi',
            'jkl'
          ]);
        });

        it('triggers dispatch with a REMOVE_PURCHASES action', () => {
          expect(dispatchCall.type).toEqual('REMOVE_PURCHASES');
        });

        it('triggers dispatch with a REMOVE_PURCHASES action containing correct powers', () => {
          expect(dispatchCall.powerIds).toEqualImmutable(expectedPowers);
        });
      });
    });
  });
});
