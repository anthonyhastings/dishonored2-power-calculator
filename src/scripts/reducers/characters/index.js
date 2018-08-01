import Immutable from 'immutable';
import axios from 'axios';

export const FETCH_CHARACTERS_REQUESTED = 'FETCH_CHARACTERS_REQUESTED';
export const FETCH_CHARACTERS_FAILURE = 'FETCH_CHARACTERS_FAILURE';
export const FETCH_CHARACTERS_SUCCESS = 'FETCH_CHARACTERS_SUCCESS';

export const defaultState = Immutable.fromJS({
  data: undefined,
  request: {
    inFlight: false,
    hasErrored: false
  }
});

export default function (state = defaultState, action = {}) {
  let reducedState;

  switch (action.type) {
    case FETCH_CHARACTERS_REQUESTED:
      reducedState = state
        .set('data', undefined)
        .set('request', Immutable.Map({
          inFlight: true,
          hasErrored: false
        }));
      break;
    case FETCH_CHARACTERS_FAILURE:
      reducedState = state
        .set('data', undefined)
        .set('request', Immutable.Map({
          inFlight: false,
          hasErrored: true
        }));
      break;
    case FETCH_CHARACTERS_SUCCESS:
      const charactersList = Immutable.fromJS(action.response.data);
      const charactersMap = charactersList.reduce((memo, character) => {
        return memo.set(character.get('id'), character);
      }, Immutable.Map());

      reducedState = state
        .set('data', charactersMap)
        .set('request', Immutable.Map({
          inFlight: false,
          hasErrored: false
        }));
      break;
    default:
      reducedState = state;
      break;
  }

  return reducedState;
};

export const fetchCharacters = function () {
  return async function (dispatch) {
    dispatch(fetchCharactersRequested());
    try {
      const response = await axios.get('http://localhost:4321/characters');

      dispatch(fetchCharactersSuccess(response.data));
    } catch (e) {
      dispatch(fetchCharactersFailure());
    }
  };
};

export const fetchCharactersRequested = () => ({
  type: FETCH_CHARACTERS_REQUESTED
});

export const fetchCharactersFailure = () => ({
  type: FETCH_CHARACTERS_FAILURE
});

export const fetchCharactersSuccess = (response) => ({
  type: FETCH_CHARACTERS_SUCCESS,
  response
});
