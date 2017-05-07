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

describe('powers reducer', function () {
  describe('when given no action', function () {
    beforeEach(function () {
      this.result = reducer();
    });

    it('should return default state', function () {
      expect(this.result).toEqualImmutable(defaultState);
    });
  });

  describe('when given FETCH_POWERS_REQUESTED action', function () {
    beforeEach(function () {
      this.action = fetchPowersRequested();

      this.inputState = Immutable.fromJS({
        request: {inFlight: false, hasErrored: true}
      });

      this.outputState = Immutable.fromJS({
        request: {inFlight: true, hasErrored: false}
      });
    });

    it('resets any errors and denotes the request as being in flight', function () {
      expect(reducer(this.inputState, this.action)).toEqualImmutable(this.outputState);
    });
  });

  describe('when given FETCH_POWERS_FAILURE action', function () {
    beforeEach(function () {
      this.action = fetchPowersFailure();

      this.inputState = Immutable.fromJS({
        request: {inFlight: true, hasErrored: false}
      });

      this.outputState = Immutable.fromJS({
        request: {inFlight: false, hasErrored: true}
      });
    });

    it('sets an error in the state and unsets the request from being in flight', function () {
      expect(reducer(this.inputState, this.action)).toEqualImmutable(this.outputState);
    });
  });

  describe('when given FETCH_POWERS_SUCCESS action', function () {
    beforeEach(function () {
      this.action = fetchPowersSuccess({
        data: [
          {id: 'abc', key: 'value'},
          {id: 'def', key: 'secret'}
        ]
      });

      this.inputState = Immutable.fromJS({
        data: undefined,
        request: {inFlight: true, hasErrored: false}
      });

      this.outputState = Immutable.fromJS({
        data: {
          abc: {id: 'abc', key: 'value'},
          def: {id: 'def', key: 'secret'}
        },
        request: {inFlight: false, hasErrored: false}
      });
    });

    it('stores data after normalising and unsets the request as being in flight', function () {
      expect(reducer(this.inputState, this.action)).toEqualImmutable(this.outputState);
    });
  });
});

describe('powers action creators', function () {
  describe('#fetchPowers', function () {
    beforeEach(function () {
      this.mockStore = configureMockStore([thunk])();
      this.powersEndpoint = 'http://localhost:4321/powers';
      this.powersResponse = {
        data: [
          {id: 'abc', key: 'value'},
          {id: 'def', key: 'secret'}
        ]
      };
    });

    afterEach(function () {
      fetchMock.restore();
    });

    describe('initially', function () {
      beforeEach(function () {
        fetchMock.get(this.powersEndpoint, this.powersResponse);
      });

      it('fires a requested action', function () {
        return this.mockStore.dispatch(fetchPowers()).then(() => {
          expect(this.mockStore.getActions()[0]).toEqual(fetchPowersRequested());
        });
      });
    });

    describe('upon completed request', function () {
      describe('with an OK response', function () {
        beforeEach(function () {
          fetchMock.get(this.powersEndpoint, this.powersResponse);
        });

        it('fires a requested action, then a success action which includes response', function () {
          return this.mockStore.dispatch(fetchPowers()).then(() => {
            expect(this.mockStore.getActions()).toEqual([
              {type: 'FETCH_POWERS_REQUESTED'},
              {type: 'FETCH_POWERS_SUCCESS', response: this.powersResponse}
            ]);
          });
        });
      });

      describe('with a response that is not OK', function () {
        beforeEach(function () {
          fetchMock.get(this.powersEndpoint, 500);
        });

        it('fires a requested action, then a failure action', function () {
          return this.mockStore.dispatch(fetchPowers()).then(() => {
            expect(this.mockStore.getActions()).toEqual([
              {type: 'FETCH_POWERS_REQUESTED'},
              {type: 'FETCH_POWERS_FAILURE'}
            ]);
          });
        });
      });
    });

    describe('upon complete failure', function () {
      beforeEach(function () {
        fetchMock.get(this.powersEndpoint, Promise.reject());
      });

      it('fires a requested action, then a failure action', function () {
        return this.mockStore.dispatch(fetchPowers()).then(() => {
          expect(this.mockStore.getActions()).toEqual([
            {type: 'FETCH_POWERS_REQUESTED'},
            {type: 'FETCH_POWERS_FAILURE'}
          ]);
        });
      });
    });
  });

  describe('#fetchPowersRequested', function () {
    describe('creates an action', function () {
      beforeEach(function () {
        this.action = fetchPowersRequested();
      });

      it('with the correct type', function () {
        expect(this.action.type).toEqual('FETCH_POWERS_REQUESTED');
      });
    });
  });

  describe('#fetchPowersFailure', function () {
    describe('creates an action', function () {
      beforeEach(function () {
        this.action = fetchPowersFailure();
      });

      it('with the correct type', function () {
        expect(this.action.type).toEqual('FETCH_POWERS_FAILURE');
      });
    });
  });

  describe('#fetchPowersSuccess', function () {
    describe('creates an action', function () {
      beforeEach(function () {
        this.response = {
          data: [
            {id: 'abc', key: 'value'},
            {id: 'def', key: 'secret'}
          ]
        };

        this.action = fetchPowersSuccess(this.response);
      });

      it('with the correct type', function () {
        expect(this.action.type).toEqual('FETCH_POWERS_SUCCESS');
      });

      it('with the correct power', function () {
        expect(this.action.response).toEqual(this.response);
      });
    });
  });
});
