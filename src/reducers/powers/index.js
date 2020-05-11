import Immutable from 'immutable';
import * as api from 'Api/powers';
import requestStatuses from 'Constants/request-statuses';

export const GET_POWERS_PENDING = 'GET_POWERS_PENDING';

export const GET_POWERS_FAILURE = 'GET_POWERS_FAILURE';

export const GET_POWERS_SUCCESS = 'GET_POWERS_SUCCESS';

export const getPowersPending = () => ({
  type: GET_POWERS_PENDING,
});

export const getPowersFailure = () => ({
  type: GET_POWERS_FAILURE,
  error: true,
});

export const getPowersSuccess = (powers) => ({
  type: GET_POWERS_SUCCESS,
  payload: {
    powers,
  },
});

export const getPowers = () => {
  return async (dispatch) => {
    dispatch(getPowersPending());

    try {
      const response = await api.getPowers();
      const data = Immutable.fromJS(response.data.data);

      const powers = data.reduce((memo, power) => {
        return memo.set(
          power.get('id'),
          Immutable.Map({
            id: power.get('id'),
            parentPowerId: power.getIn(['attributes', 'parentPowerId']),
            characterId: power.getIn(['attributes', 'characterId']),
            type: power.getIn(['attributes', 'type']),
            name: power.getIn(['attributes', 'name']),
            description: power.getIn(['attributes', 'description']),
            cost: parseInt(power.getIn(['attributes', 'cost'])),
          })
        );
      }, Immutable.Map());

      dispatch(getPowersSuccess(powers));
    } catch (e) {
      dispatch(getPowersFailure());
    }
  };
};

const defaultState = Immutable.fromJS({
  requestStatus: requestStatuses.idle,
});

export default function (state = defaultState, action = {}) {
  switch (action.type) {
    case GET_POWERS_PENDING: {
      return state.set('requestStatus', requestStatuses.pending);
    }
    case GET_POWERS_FAILURE: {
      return state.set('requestStatus', requestStatuses.failure);
    }
    case GET_POWERS_SUCCESS: {
      return state.withMutations((tempState) => {
        tempState
          .set('data', action.payload.powers)
          .set('requestStatus', requestStatuses.success);
      });
    }
    default: {
      return state;
    }
  }
}
