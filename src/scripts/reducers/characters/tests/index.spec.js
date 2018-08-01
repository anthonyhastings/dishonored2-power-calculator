import Immutable from 'immutable';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios';
import reducer, {
  defaultState,
  FETCH_CHARACTERS_REQUESTED,
  FETCH_CHARACTERS_FAILURE,
  FETCH_CHARACTERS_SUCCESS,
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

  describe('when given FETCH_CHARACTERS_FAILURE action', () => {
    let action;
    let inputState;
    let outputState;

    beforeEach(() => {
      action = fetchCharactersFailure();

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
    let charactersSuccessResponse;

    beforeEach(() => {
      moxios.install();
      mockStore = configureMockStore([thunk])();
      charactersEndpoint = 'http://localhost:4321/characters';
      charactersSuccessResponse = {
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
        moxios.stubRequest(charactersEndpoint, {
          status: 200,
          response: charactersSuccessResponse
        });
      });

      it('fires a requested action', () => {
        return mockStore.dispatch(fetchCharacters()).then(() => {
          expect(mockStore.getActions()[0]).toEqual({type: FETCH_CHARACTERS_REQUESTED});
        });
      });
    });

    describe('when request completes', () => {
      describe('and is successful', () => {
        beforeEach(() => {
          moxios.stubRequest(charactersEndpoint, {
            status: 200,
            response: charactersSuccessResponse
          });
        });

        it('fires a requested action and a success action', () => {
          return mockStore.dispatch(fetchCharacters()).then(() => {
            expect(mockStore.getActions()).toEqual([
              {type: FETCH_CHARACTERS_REQUESTED},
              {type: FETCH_CHARACTERS_SUCCESS, response: charactersSuccessResponse}
            ]);
          });
        });
      });

      describe('and fails', () => {
        beforeEach(() => {
          moxios.stubRequest(charactersEndpoint, {
            status: 500
          });
        });

        it('fires a requested action and a failure action', () => {
          return mockStore.dispatch(fetchCharacters()).then(() => {
            expect(mockStore.getActions()).toEqual([
              {type: FETCH_CHARACTERS_REQUESTED},
              {type: FETCH_CHARACTERS_FAILURE}
            ]);
          });
        });
      });
    });
  });

  describe('#fetchCharactersRequested', () => {
    let action;

    beforeEach(() => {
      action = fetchCharactersRequested();
    });

    it('creates an action', () => {
      expect(action).toEqual({
        type: FETCH_CHARACTERS_REQUESTED
      });
    });
  });

  describe('#fetchCharactersFailure', () => {
    let action;

    beforeEach(() => {
      action = fetchCharactersFailure();
    });

    it('creates an action', () => {
      expect(action).toEqual({
        type: FETCH_CHARACTERS_FAILURE
      });
    });
  });

  describe('#fetchCharactersSuccess', () => {
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

    it('creates an action', () => {
      expect(action).toEqual({
        type: FETCH_CHARACTERS_SUCCESS,
        response
      });
    });
  });
});
