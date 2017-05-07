import Immutable from 'immutable';

const FETCH_POWERS_REQUESTED = 'FETCH_POWERS_REQUESTED';
const FETCH_POWERS_FAILURE = 'FETCH_POWERS_FAILURE';
const FETCH_POWERS_SUCCESS = 'FETCH_POWERS_SUCCESS';

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
    case FETCH_POWERS_REQUESTED:
      reducedState = state.set('request', Immutable.Map({
        inFlight: true,
        hasErrored: false
      }));
      break;
    case FETCH_POWERS_FAILURE:
      reducedState = state.set('request', Immutable.Map({
        inFlight: false,
        hasErrored: true
      }));
      break;
    case FETCH_POWERS_SUCCESS:
      const powersList = Immutable.fromJS(action.response.data);
      const powersMap = powersList.reduce((memo, power) => {
        return memo.set(power.get('id'), power);
      }, Immutable.Map());

      reducedState = state
        .set('data', powersMap)
        .set('request', Immutable.fromJS({
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

export const fetchPowers = () => {
  return function (dispatch) {
    dispatch(fetchPowersRequested());

    return fetch('http://localhost:4321/powers')
      .then((response) => {
        if (response.ok === false) {
          return dispatch(fetchPowersFailure());
        }

        return response.json().then((response) => {
          dispatch(fetchPowersSuccess(response));
        });
      })
      .catch(() => dispatch(fetchPowersFailure()));
  };
};

export const fetchPowersRequested = () => ({
  type: FETCH_POWERS_REQUESTED
});

export const fetchPowersFailure = () => ({
  type: FETCH_POWERS_FAILURE
});

export const fetchPowersSuccess = (response) => ({
  type: FETCH_POWERS_SUCCESS,
  response
});
