import Immutable from 'immutable';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import reducer from '../';
import {
  defaultState,
  fetchCharacters,
  fetchCharactersRequested,
  fetchCharactersFailure,
  fetchCharactersSuccess
} from '../';

describe('characters reducer', function () {
  describe('when given no action', function () {
    beforeEach(function () {
      this.result = reducer();
    });

    it('should return default state', function () {
      expect(this.result).toEqualImmutable(defaultState);
    });
  });

  describe('when given FETCH_CHARACTERS_REQUESTED action', function () {
    beforeEach(function () {
      this.action = fetchCharactersRequested();

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

  describe('when given FETCH_CHARACTERS_FAILURE action', function () {
    beforeEach(function () {
      this.action = fetchCharactersFailure();

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

  describe('when given FETCH_CHARACTERS_SUCCESS action', function () {
    beforeEach(function () {
      this.action = fetchCharactersSuccess({
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

describe('characters action creators', function () {
  describe('fetchCharacters', function () {
    beforeEach(function () {
      this.mockStore = configureMockStore([thunk])();
      this.charactersEndpoint = 'http://localhost:4321/characters';
      this.charactersResponse = {
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
        fetchMock.get(this.charactersEndpoint, this.charactersResponse);
      });

      it('fires a requested action', function () {
        return this.mockStore.dispatch(fetchCharacters()).then(() => {
          expect(this.mockStore.getActions()[0]).toEqual(fetchCharactersRequested());
        });
      });
    });

    describe('upon completed request', function () {
      describe('with an OK response', function () {
        beforeEach(function () {
          fetchMock.get(this.charactersEndpoint, this.charactersResponse);
        });

        it('fires a requested action, then a success action which includes response', function () {
          return this.mockStore.dispatch(fetchCharacters()).then(() => {
            expect(this.mockStore.getActions()).toEqual([
              {type: 'FETCH_CHARACTERS_REQUESTED'},
              {type: 'FETCH_CHARACTERS_SUCCESS', response: this.charactersResponse}
            ]);
          });
        });
      });

      describe('with a response that is not OK', function () {
        beforeEach(function () {
          fetchMock.get(this.charactersEndpoint, 500);
        });

        it('fires a requested action, then a failure action', function () {
          return this.mockStore.dispatch(fetchCharacters()).then(() => {
            expect(this.mockStore.getActions()).toEqual([
              {type: 'FETCH_CHARACTERS_REQUESTED'},
              {type: 'FETCH_CHARACTERS_FAILURE'}
            ]);
          });
        });
      });
    });

    describe('upon complete failure', function () {
      beforeEach(function () {
        fetchMock.get(this.charactersEndpoint, Promise.reject());
      });

      it('fires a requested action, then a failure action', function () {
        return this.mockStore.dispatch(fetchCharacters()).then(() => {
          expect(this.mockStore.getActions()).toEqual([
            {type: 'FETCH_CHARACTERS_REQUESTED'},
            {type: 'FETCH_CHARACTERS_FAILURE'}
          ]);
        });
      });
    });
  });

  describe('fetchCharactersRequested', function () {
    describe('creates an action', function () {
      beforeEach(function () {
        this.action = fetchCharactersRequested();
      });

      it('with the correct type', function () {
        expect(this.action.type).toEqual('FETCH_CHARACTERS_REQUESTED');
      });
    });
  });

  describe('fetchCharactersFailure', function () {
    describe('creates an action', function () {
      beforeEach(function () {
        this.action = fetchCharactersFailure();
      });

      it('with the correct type', function () {
        expect(this.action.type).toEqual('FETCH_CHARACTERS_FAILURE');
      });
    });
  });

  describe('fetchCharactersSuccess', function () {
    describe('creates an action', function () {
      beforeEach(function () {
        this.response = {
          data: [
            {id: 'abc', key: 'value'},
            {id: 'def', key: 'secret'}
          ]
        };

        this.action = fetchCharactersSuccess(this.response);
      });

      it('with the correct type', function () {
        expect(this.action.type).toEqual('FETCH_CHARACTERS_SUCCESS');
      });

      it('with the correct power', function () {
        expect(this.action.response).toEqual(this.response);
      });
    });
  });
});
