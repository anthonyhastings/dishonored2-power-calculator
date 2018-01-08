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

describe('characters reducer', () => {
  describe('when given no action', () => {
    let result;

    beforeEach(() => {
      result = reducer();
    });

    it('should return default state', () => {
      expect(result).toEqual(defaultState);
    });
  });

  describe('when given FETCH_CHARACTERS_REQUESTED action', () => {
    let action;
    let inputState;
    let outputState;

    beforeEach(() => {
      action = fetchCharactersRequested();

      inputState = Immutable.fromJS({
        request: {inFlight: false, hasErrored: true}
      });

      outputState = Immutable.fromJS({
        request: {inFlight: true, hasErrored: false},
        data: undefined
      });
    });

    it('resets any errors and denotes the request as being in flight', () => {
      expect(reducer(inputState, action)).toEqual(outputState);
    });
  });

  describe('when given FETCH_CHARACTERS_FAILURE action', () => {
    let action;
    let inputState;
    let outputState;

    beforeEach(() => {
      action = fetchCharactersFailure();

      inputState = Immutable.fromJS({
        request: {inFlight: true, hasErrored: false}
      });

      outputState = Immutable.fromJS({
        request: {inFlight: false, hasErrored: true},
        data: undefined
      });
    });

    it('sets an error in the state and unsets the request from being in flight', () => {
      expect(reducer(inputState, action)).toEqual(outputState);
    });
  });

  describe('when given FETCH_CHARACTERS_SUCCESS action', () => {
    let action;
    let inputState;
    let outputState;

    beforeEach(() => {
      action = fetchCharactersSuccess({
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

describe('characters action creators', () => {
  describe('#fetchCharacters', () => {
    let mockStore;
    let charactersEndpoint;
    let charactersResponse;

    beforeEach(() => {
      mockStore = configureMockStore([thunk])();
      charactersEndpoint = 'http://localhost:4321/characters';
      charactersResponse = {
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
        fetchMock.get(charactersEndpoint, charactersResponse);
      });

      it('fires a requested action', () => {
        return mockStore.dispatch(fetchCharacters()).then(() => {
          expect(mockStore.getActions()[0]).toEqual(fetchCharactersRequested());
        });
      });
    });

    describe('upon completed request', () => {
      describe('with an OK response', () => {
        beforeEach(() => {
          fetchMock.get(charactersEndpoint, charactersResponse);
        });

        it('fires a requested action, then a success action which includes response', () => {
          return mockStore.dispatch(fetchCharacters()).then(() => {
            expect(mockStore.getActions()).toEqual([
              {type: 'FETCH_CHARACTERS_REQUESTED'},
              {type: 'FETCH_CHARACTERS_SUCCESS', response: charactersResponse}
            ]);
          });
        });
      });

      describe('with a response that is not OK', () => {
        beforeEach(() => {
          fetchMock.get(charactersEndpoint, 500);
        });

        it('fires a requested action, then a failure action', () => {
          return mockStore.dispatch(fetchCharacters()).then(() => {
            expect(mockStore.getActions()).toEqual([
              {type: 'FETCH_CHARACTERS_REQUESTED'},
              {type: 'FETCH_CHARACTERS_FAILURE'}
            ]);
          });
        });
      });
    });

    describe('upon complete failure', () => {
      beforeEach(() => {
        fetchMock.get(charactersEndpoint, Promise.reject());
      });

      it('fires a requested action, then a failure action', () => {
        return mockStore.dispatch(fetchCharacters()).then(() => {
          expect(mockStore.getActions()).toEqual([
            {type: 'FETCH_CHARACTERS_REQUESTED'},
            {type: 'FETCH_CHARACTERS_FAILURE'}
          ]);
        });
      });
    });
  });

  describe('#fetchCharactersRequested', () => {
    describe('creates an action', () => {
      let action;

      beforeEach(() => {
        action = fetchCharactersRequested();
      });

      it('with the correct type', () => {
        expect(action.type).toEqual('FETCH_CHARACTERS_REQUESTED');
      });
    });
  });

  describe('#fetchCharactersFailure', () => {
    describe('creates an action', () => {
      let action;

      beforeEach(() => {
        action = fetchCharactersFailure();
      });

      it('with the correct type', () => {
        expect(action.type).toEqual('FETCH_CHARACTERS_FAILURE');
      });
    });
  });

  describe('#fetchCharactersSuccess', () => {
    describe('creates an action', () => {
      let response;
      let action;

      beforeEach(() => {
        response = {
          data: [
            {id: 'abc', key: 'value'},
            {id: 'def', key: 'secret'}
          ]
        };

        action = fetchCharactersSuccess(response);
      });

      it('with the correct type', () => {
        expect(action.type).toEqual('FETCH_CHARACTERS_SUCCESS');
      });

      it('with the correct power', () => {
        expect(action.response).toEqual(response);
      });
    });
  });
});
