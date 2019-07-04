import Immutable from 'immutable';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios';
import reducer, {
  defaultState,
  FETCH_POWERS_REQUESTED,
  FETCH_POWERS_FAILURE,
  FETCH_POWERS_SUCCESS,
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
      expect(result).toEqual(defaultState);
    });
  });

  describe('when given FETCH_POWERS_REQUESTED action', () => {
    let action;
    let inputState;
    let outputState;

    beforeEach(() => {
      action = fetchPowersRequested();

      inputState = Immutable.fromJS({
        data: 'hello world',
        request: {inFlight: false, hasErrored: true}
      });

      outputState = Immutable.fromJS({
        data: undefined,
        request: {inFlight: true, hasErrored: false}
      });
    });

    it('resets any errors and denotes the request as being in flight', () => {
      expect(reducer(inputState, action)).toEqual(outputState);
    });
  });

  describe('when given FETCH_POWERS_FAILURE action', () => {
    let action;
    let inputState;
    let outputState;

    beforeEach(() => {
      action = fetchPowersFailure();

      inputState = Immutable.fromJS({
        data: 'hello world',
        request: {inFlight: true, hasErrored: false}
      });

      outputState = Immutable.fromJS({
        data: undefined,
        request: {inFlight: false, hasErrored: true}
      });
    });

    it('sets an error in the state and unsets the request from being in flight', () => {
      expect(reducer(inputState, action)).toEqual(outputState);
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
      expect(reducer(inputState, action)).toEqual(outputState);
    });
  });
});

describe('powers action creators', () => {
  describe('#fetchPowers', () => {
    let mockStore;
    let powersEndpoint;
    let powersSuccessResponse;

    beforeEach(() => {
      moxios.install();
      mockStore = configureMockStore([thunk])();
      powersEndpoint = '/powers.json';
      powersSuccessResponse = {
        data: [
          {id: 'abc', key: 'value'},
          {id: 'def', key: 'secret'}
        ]
      };
    });

    afterEach(() => {
      moxios.uninstall();
    });

    describe('when triggered', () => {
      beforeEach(() => {
        moxios.stubRequest(powersEndpoint, {
          status: 200,
          response: powersSuccessResponse
        });
      });

      it('fires a requested action', () => {
        return mockStore.dispatch(fetchPowers()).then(() => {
          expect(mockStore.getActions()[0]).toEqual({type: FETCH_POWERS_REQUESTED});
        });
      });
    });

    describe('when request completes', () => {
      describe('and is successful', () => {
        beforeEach(() => {
          moxios.stubRequest(powersEndpoint, {
            status: 200,
            response: powersSuccessResponse
          });
        });

        it('fires a requested action and a success action', () => {
          return mockStore.dispatch(fetchPowers()).then(() => {
            expect(mockStore.getActions()).toEqual([
              {type: FETCH_POWERS_REQUESTED},
              {type: FETCH_POWERS_SUCCESS, response: powersSuccessResponse}
            ]);
          });
        });
      });

      describe('and fails', () => {
        beforeEach(() => {
          moxios.stubRequest(powersEndpoint, {
            status: 500
          });
        });

        it('fires a requested action and a failure action', () => {
          return mockStore.dispatch(fetchPowers()).then(() => {
            expect(mockStore.getActions()).toEqual([
              {type: FETCH_POWERS_REQUESTED},
              {type: FETCH_POWERS_FAILURE}
            ]);
          });
        });
      });
    });
  });

  describe('#fetchPowersRequested', () => {
    let action;

    beforeEach(() => {
      action = fetchPowersRequested();
    });

    it('creates an action', () => {
      expect(action).toEqual({
        type: FETCH_POWERS_REQUESTED
      });
    });
  });

  describe('#fetchPowersFailure', () => {
    let action;

    beforeEach(() => {
      action = fetchPowersFailure();
    });

    it('creates an action', () => {
      expect(action).toEqual({
        type: FETCH_POWERS_FAILURE
      });
    });
  });

  describe('#fetchPowersSuccess', () => {
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

    it('creates an action', () => {
      expect(action).toEqual({
        type: FETCH_POWERS_SUCCESS,
        response
      });
    });
  });
});
