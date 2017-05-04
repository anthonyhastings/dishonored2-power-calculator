import Immutable from 'immutable';

const FETCH_CHARACTERS_REQUESTED = 'FETCH_CHARACTERS_REQUESTED';
const FETCH_CHARACTERS_FAILURE = 'FETCH_CHARACTERS_FAILURE';
const FETCH_CHARACTERS_SUCCESS = 'FETCH_CHARACTERS_SUCCESS';

export const defaultState = Immutable.fromJS({
  data: undefined,
  request: {
    inFlight: false,
    hasErrored: false
  }
});

export default function (state = defaultState, action) {
  let reducedState;

  switch (action.type) {
    case FETCH_CHARACTERS_REQUESTED:
      reducedState = state.set('request', Immutable.Map({
        inFlight: true,
        hasErrored: false
      }));
      break;
    case FETCH_CHARACTERS_FAILURE:
      reducedState = state.set('request', Immutable.Map({
        inFlight: false,
        hasErrored: true
      }));
      break;
    case FETCH_CHARACTERS_SUCCESS:
      const charactersList = Immutable.fromJS(action.response.data);
      const charactersMap = charactersList.reduce((memo, character) => {
        return memo.set(character.get('id'), character);
      }, Immutable.Map());

      reducedState = state.set('data', charactersMap);
      break;
    default:
      reducedState = state;
      break;
  }

  return reducedState;
};

export const fetchCharacters = () => {
  return function (dispatch) {
    dispatch(fetchCharactersRequested());

    return fetch('http://localhost:4321/characters')
      .then((response) => {
        if (response.ok === false) {
          return dispatch(fetchCharactersFailure());
        }

        return response.json().then((response) => {
          dispatch(fetchCharactersSuccess(response));
        });
      })
      .catch(() => dispatch(fetchCharactersFailure()));
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
