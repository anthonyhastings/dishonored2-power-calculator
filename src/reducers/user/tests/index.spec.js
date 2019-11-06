import Immutable from 'immutable';
import configureMockStore from 'redux-mock-store';
import { middleware } from '../../../store';
import reducer from '../';
import {
  clearPurchases,
  addPurchase,
  removePurchases,
  removePurchase
} from '../';

const mockStore = configureMockStore(middleware);

describe('user actions', () => {
  describe('clearPurchases', () => {
    let action;

    beforeEach(() => {
      action = clearPurchases();
    });

    it('creates an action with the correct data', () => {
      expect(action).toEqual({
        type: 'CLEAR_PURCHASES'
      });
    });
  });

  describe('addPurchase', () => {
    let action;

    beforeEach(() => {
      action = addPurchase('example-power-id');
    });

    it('creates an action with the correct data', () => {
      expect(action).toEqual({
        type: 'ADD_PURCHASE',
        powerId: 'example-power-id'
      });
    });
  });

  describe('removePurchases', () => {
    describe('when given no power ids', () => {
      let action;

      beforeEach(() => {
        action = removePurchases();
      });

      it('creates an action with the correct data', () => {
        expect(action).toEqual({
          type: 'REMOVE_PURCHASES',
          powerIds: Immutable.List()
        });
      });
    });

    describe('when given power ids', () => {
      let uuids;
      let action;

      beforeEach(() => {
        uuids = Immutable.List(['power-id-01', 'power-id-02']);
        action = removePurchases(uuids);
      });

      it('creates an action with the correct data', () => {
        expect(action).toEqual({
          type: 'REMOVE_PURCHASES',
          powerIds: uuids
        });
      });
    });
  });

  describe('removePurchase', () => {
    let store;

    beforeEach(() => {
      store = mockStore(
        Immutable.fromJS({
          powers: {
            data: {
              abc: {
                id: 'abc',
                parentPowerId: null,
                name: 'Power with no children'
              },
              def: {
                id: 'def',
                parentPowerId: null,
                name: 'Power with one child'
              },
              ghi: {
                id: 'ghi',
                parentPowerId: 'def',
                name: 'Power with a parent'
              },
              jkl: {
                id: 'jkl',
                parentPowerId: 'ghi',
                name: 'Power with multiple children'
              }
            }
          },
          user: {
            purchases: ['abc', 'def']
          }
        })
      );
    });

    describe('when given a power id with no child powers', () => {
      let actions;

      beforeEach(() => {
        store.dispatch(removePurchase('abc'));
        actions = store.getActions();
      });

      it('creates an action with the correct data', () => {
        expect(actions).toEqual([
          {
            type: 'REMOVE_PURCHASES',
            powerIds: Immutable.fromJS(['abc'])
          }
        ]);
      });
    });

    describe('when given a power id with child powers', () => {
      let actions;

      beforeEach(() => {
        store.dispatch(removePurchase('def'));
        actions = store.getActions();
      });

      it('creates an action with the correct data', () => {
        expect(actions).toEqual([
          {
            type: 'REMOVE_PURCHASES',
            powerIds: Immutable.fromJS(['def', 'ghi', 'jkl'])
          }
        ]);
      });
    });
  });
});

describe('user reducer', () => {
  describe('when given no action', () => {
    let state;

    beforeEach(() => {
      state = reducer(undefined, {});
    });

    it('sets default state', () => {
      expect(state).toEqual(
        Immutable.fromJS({
          purchases: Immutable.List()
        })
      );
    });
  });

  describe('when given CLEAR_PURCHASES action', () => {
    let state;

    beforeEach(() => {
      const action = clearPurchases();
      const startingState = Immutable.fromJS({
        purchases: ['example-power-id']
      });

      state = reducer(startingState, action);
    });

    it('sets purchases to a blank immutable list', () => {
      expect(state).toEqual(
        Immutable.fromJS({
          purchases: []
        })
      );
    });
  });

  describe('when given ADD_PURCHASE action', () => {
    let state;
    let action;

    beforeEach(() => {
      action = addPurchase('another-power-id');
    });

    describe('with an id that is not present in the purchases list', () => {
      beforeEach(() => {
        const startingState = Immutable.fromJS({
          purchases: ['example-power-id']
        });

        state = reducer(startingState, action);
      });

      it('updates the purchases list with the new power id', () => {
        expect(state).toEqual(
          Immutable.fromJS({
            purchases: Immutable.List(['example-power-id', 'another-power-id'])
          })
        );
      });
    });

    describe('with an id that is already present in the purchases list', () => {
      beforeEach(() => {
        const startingState = Immutable.fromJS({
          purchases: ['example-power-id', 'another-power-id']
        });

        state = reducer(startingState, action);
      });

      it('does not update the puchases list', () => {
        expect(state).toEqual(
          Immutable.fromJS({
            purchases: Immutable.List(['example-power-id', 'another-power-id'])
          })
        );
      });
    });
  });

  describe('when given REMOVE_PURCHASES action', () => {
    describe('with a blank list', () => {
      let state;

      beforeEach(() => {
        const action = removePurchases();
        const startingState = Immutable.fromJS({
          purchases: ['example-power-id']
        });

        state = reducer(startingState, action);
      });

      it('does nothing', () => {
        expect(state).toEqual(
          Immutable.fromJS({
            purchases: ['example-power-id']
          })
        );
      });
    });

    describe('with a list containing powers that are not purchased', () => {
      let state;

      beforeEach(() => {
        const action = removePurchases(Immutable.List(['another-power-id']));
        const startingState = Immutable.fromJS({
          purchases: ['example-power-id']
        });

        state = reducer(startingState, action);
      });

      it('does nothing', () => {
        expect(state).toEqual(
          Immutable.fromJS({
            purchases: ['example-power-id']
          })
        );
      });
    });

    describe('with a list containing powers that are purchased', () => {
      let state;

      beforeEach(() => {
        const action = removePurchases(
          Immutable.List(['example-power-id', 'another-power-id'])
        );
        const startingState = Immutable.fromJS({
          purchases: ['example-power-id', 'another-power-id', 'super-power-id']
        });

        state = reducer(startingState, action);
      });

      it('removes that powers from the purchases list', () => {
        expect(state).toEqual(
          Immutable.fromJS({
            purchases: ['super-power-id']
          })
        );
      });
    });
  });
});
