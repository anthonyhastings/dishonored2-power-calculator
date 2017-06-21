import Immutable from 'immutable';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import reducer from '../';
import {
  defaultState,
  fetchPowers,
  fetchPowersRequested,
  fetchPowersFailure,
  fetchPowersSuccess
} from '../';

describe('powers reducer', () => {
  describe('when given no action', () => {
    let result;

    beforeEach(() => {
      result = reducer();
    });

    it('should return default state', () => {
      expect(result).toEqualImmutable(defaultState);
    });
  });

  describe('when given FETCH_POWERS_REQUESTED action', () => {
    let action;
    let inputState;
    let outputState;

    beforeEach(() => {
      action = fetchPowersRequested();

      inputState = Immutable.fromJS({
        request: {inFlight: false, hasErrored: true}
      });

      outputState = Immutable.fromJS({
        data: undefined,
        request: {inFlight: true, hasErrored: false}
      });
    });

    it('resets any errors and denotes the request as being in flight', () => {
      expect(reducer(inputState, action)).toEqualImmutable(outputState);
    });
  });

  describe('when given FETCH_POWERS_FAILURE action', () => {
    let action;
    let inputState;
    let outputState;

    beforeEach(() => {
      action = fetchPowersFailure();

      inputState = Immutable.fromJS({
        request: {inFlight: true, hasErrored: false}
      });

      outputState = Immutable.fromJS({
        data: undefined,
        request: {inFlight: false, hasErrored: true}
      });
    });

    it('sets an error in the state and unsets the request from being in flight', () => {
      expect(reducer(inputState, action)).toEqualImmutable(outputState);
    });
  });

  describe('when given FETCH_POWERS_SUCCESS action', () => {
    let action;
    let inputState;
    let outputState;

    beforeEach(() => {
      action = fetchPowersSuccess({
        data: [
          {id: 'abc', key: 'value'},
          {id: 'def', key: 'secret'}
        ]
      });

      inputState = Immutable.fromJS({
        data: undefined,
        request: {inFlight: true, hasErrored: false}
      });

      outputState = Immutable.fromJS({
        data: {
          abc: {id: 'abc', key: 'value'},
          def: {id: 'def', key: 'secret'}
        },
        request: {inFlight: false, hasErrored: false}
      });
    });

    it('stores data after normalising and unsets the request as being in flight', () => {
      expect(reducer(inputState, action)).toEqualImmutable(outputState);
    });
  });
});

describe('powers action creators', () => {
  describe('#fetchPowers', () => {
    let mockStore;
    let powersEndpoint;
    let powersResponse;

    beforeEach(() => {
      mockStore = configureMockStore([thunk])();
      powersEndpoint = 'http://localhost:4321/powers';
      powersResponse = {
        data: [
          {id: 'abc', key: 'value'},
          {id: 'def', key: 'secret'}
        ]
      };
    });

    afterEach(() => {
      fetchMock.restore();
    });

    describe('initially', () => {
      beforeEach(() => {
        fetchMock.get(powersEndpoint, powersResponse);
      });

      it('fires a requested action', () => {
        return mockStore.dispatch(fetchPowers()).then(() => {
          expect(mockStore.getActions()[0]).toEqual(fetchPowersRequested());
        });
      });
    });

    describe('upon completed request', () => {
      describe('with an OK response', () => {
        beforeEach(() => {
          fetchMock.get(powersEndpoint, powersResponse);
        });

        it('fires a requested action, then a success action which includes response', () => {
          return mockStore.dispatch(fetchPowers()).then(() => {
            expect(mockStore.getActions()).toEqual([
              {type: 'FETCH_POWERS_REQUESTED'},
              {type: 'FETCH_POWERS_SUCCESS', response: powersResponse}
            ]);
          });
        });
      });

      describe('with a response that is not OK', () => {
        beforeEach(() => {
          fetchMock.get(powersEndpoint, 500);
        });

        it('fires a requested action, then a failure action', () => {
          return mockStore.dispatch(fetchPowers()).then(() => {
            expect(mockStore.getActions()).toEqual([
              {type: 'FETCH_POWERS_REQUESTED'},
              {type: 'FETCH_POWERS_FAILURE'}
            ]);
          });
        });
      });
    });

    describe('upon complete failure', () => {
      beforeEach(() => {
        fetchMock.get(powersEndpoint, Promise.reject());
      });

      it('fires a requested action, then a failure action', () => {
        return mockStore.dispatch(fetchPowers()).then(() => {
          expect(mockStore.getActions()).toEqual([
            {type: 'FETCH_POWERS_REQUESTED'},
            {type: 'FETCH_POWERS_FAILURE'}
          ]);
        });
      });
    });
  });

  describe('#fetchPowersRequested', () => {
    describe('creates an action', () => {
      let action;

      beforeEach(() => {
        action = fetchPowersRequested();
      });

      it('with the correct type', () => {
        expect(action.type).toEqual('FETCH_POWERS_REQUESTED');
      });
    });
  });

  describe('#fetchPowersFailure', () => {
    describe('creates an action', () => {
      let action;

      beforeEach(() => {
        action = fetchPowersFailure();
      });

      it('with the correct type', () => {
        expect(action.type).toEqual('FETCH_POWERS_FAILURE');
      });
    });
  });

  describe('#fetchPowersSuccess', () => {
    describe('creates an action', () => {
      let action;
      let response;

      beforeEach(() => {
        response = {
          data: [
            {id: 'abc', key: 'value'},
            {id: 'def', key: 'secret'}
          ]
        };

        action = fetchPowersSuccess(response);
      });

      it('with the correct type', () => {
        expect(action.type).toEqual('FETCH_POWERS_SUCCESS');
      });

      it('with the correct power', () => {
        expect(action.response).toEqual(response);
      });
    });
  });
});
