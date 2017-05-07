import Immutable from 'immutable';
import reducer from '../';
import {
  defaultState,
  clearPurchases,
  addPurchase,
  removePurchases,
  removePurchase
} from '../';

describe('user reducer', function () {
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
      this.clearPurchasesAction = clearPurchases();
      this.inputState = defaultState.set('purchases', Immutable.List(['power-id-01']));
      this.outputState = defaultState;
    });

    it('resets the purchases list back to default state', function () {
      expect(reducer(this.inputState, this.clearPurchasesAction)).toEqualImmutable(this.outputState);
    });
  });

  describe('when given ADD_PURCHASE action', function () {
    beforeEach(function () {
      this.addPurchaseAction = addPurchase('power-id-01');
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
        this.removePurchasesAction = removePurchases();
        this.inputState = defaultState;
        this.outputState = defaultState;
      });

      it('does nothing', function () {
        expect(reducer(this.inputState, this.removePurchasesAction)).toEqualImmutable(this.outputState);
      });
    });

    describe('with a list containing powers that are not purchased', function () {
      beforeEach(function () {
        this.removePurchasesAction = removePurchases(Immutable.List(['uuid-02', 'uuid-03']));
        this.inputState = defaultState.set('purchases', Immutable.List(['uuid-01']));
        this.outputState = this.inputState;
      });

      it('does nothing', function () {
        expect(reducer(this.inputState, this.removePurchasesAction)).toEqualImmutable(this.outputState);
      });
    });

    describe('with a list containing powers that are purchased', function () {
      beforeEach(function () {
        this.removePurchasesAction = removePurchases(Immutable.List(['uuid-01', 'uuid-02']));
        this.inputState = defaultState.set('purchases', Immutable.List(['uuid-01', 'uuid-02', 'uuid-03']));
        this.outputState = defaultState.set('purchases', Immutable.List(['uuid-03']));
      });

      it('removes that powers from the purchases list', function () {
        expect(reducer(this.inputState, this.removePurchasesAction)).toEqualImmutable(this.outputState);
      });
    });
  });
});

describe('user action creators', function () {
  describe('clearPurchases', function () {
    describe('creates an action', function () {
      beforeEach(function () {
        this.action = clearPurchases();
      });

      it('with the correct type', function () {
        expect(this.action.type).toEqual('CLEAR_PURCHASES');
      });
    });
  });

  describe('addPurchase', function () {
    describe('creates an action', function () {
      beforeEach(function () {
        this.action = addPurchase('power-uuid-01');
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
          this.action = removePurchases();
        });

        it('creates an action with a blank immutable list', function () {
          expect(this.action.powerIds).toEqualImmutable(Immutable.List());
        });
      });

      describe('that when given data', function () {
        beforeEach(function () {
          this.uuids = Immutable.List(['power-uuid-01', 'power-uuid-02']);
          this.action = removePurchases(this.uuids);
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

        this.dispatchFunc = jest.fn();
        this.getStateFunc = jest.fn(() => this.state);
      });

      describe('that when given a power id with no child powers', function () {
        beforeEach(function () {
          this.thunkFunction = removePurchase('abc');
          this.thunkFunction(this.dispatchFunc, this.getStateFunc);
          this.dispatchCall = this.dispatchFunc.mock.calls[0][0];
          this.expectedPowers = Immutable.fromJS(['abc']);
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
          this.thunkFunction = removePurchase('def');
          this.thunkFunction(this.dispatchFunc, this.getStateFunc);
          this.dispatchCall = this.dispatchFunc.mock.calls[0][0];
          this.expectedPowers = Immutable.fromJS([
            'def',
            'ghi',
            'jkl'
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
