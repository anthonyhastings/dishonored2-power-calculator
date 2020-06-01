import Immutable from 'immutable';
import * as api from 'Api/characters';
import requestStatuses from 'Constants/request-statuses';

export const GET_CHARACTERS_PENDING = 'GET_CHARACTERS_PENDING';

export const GET_CHARACTERS_FAILURE = 'GET_CHARACTERS_FAILURE';

export const GET_CHARACTERS_SUCCESS = 'GET_CHARACTERS_SUCCESS';

export const getCharactersPending = () => ({
  type: GET_CHARACTERS_PENDING,
});

export const getCharactersFailure = () => ({
  type: GET_CHARACTERS_FAILURE,
});

export const getCharactersSuccess = (characters) => ({
  type: GET_CHARACTERS_SUCCESS,
  payload: {
    characters,
  },
});

export const getCharacters = () => {
  return async (dispatch) => {
    dispatch(getCharactersPending());

    try {
      const response = await api.getCharacters();
      const data = Immutable.fromJS(response.data.data);

      const characters = data.reduce((memo, character) => {
        return memo.set(
          character.get('id'),
          Immutable.Map({
            id: character.get('id'),
            slug: character.getIn(['attributes', 'slug']),
            name: character.getIn(['attributes', 'name']),
            description: character.getIn(['attributes', 'description']),
          })
        );
      }, Immutable.Map());

      dispatch(getCharactersSuccess(characters));
    } catch (e) {
      dispatch(getCharactersFailure());
    }
  };
};

const defaultState = Immutable.fromJS({
  requestStatus: requestStatuses.idle,
});

export default function (state = defaultState, action = {}) {
  switch (action.type) {
    case GET_CHARACTERS_PENDING: {
      return state.set('requestStatus', requestStatuses.pending);
    }
    case GET_CHARACTERS_FAILURE: {
      return state.set('requestStatus', requestStatuses.failure);
    }
    case GET_CHARACTERS_SUCCESS: {
      return state.withMutations((tempState) => {
        tempState
          .set('data', action.payload.characters)
          .set('requestStatus', requestStatuses.success);
      });
    }
    default: {
      return state;
    }
  }
}
