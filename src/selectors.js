import Immutable from 'immutable';
import { createSelector } from 'reselect';
import requestStatuses from 'Constants/request-statuses';
import * as charactersReducerSelectors from 'Reducers/characters/selectors';
import * as powersReducerSelectors from 'Reducers/powers/selectors';

const isRequestIncomplete = (requestStatus) =>
  [requestStatuses.idle, requestStatuses.pending].includes(requestStatus);

const hasRequestFailed = (requestStatus) =>
  requestStatus === requestStatuses.failure;

const charactersSelector = (state) => state.get('characters', Immutable.Map());

export const charactersDataSelector = createSelector(
  charactersSelector,
  charactersReducerSelectors.dataSelector
);

export const characterBySlugSelector = (state, slug) => {
  const characters = charactersDataSelector(state);
  return characters.find((character) => character.get('slug') === slug);
};

const charactersRequestStatusSelector = createSelector(
  charactersSelector,
  charactersReducerSelectors.requestStatusSelector
);

const powersSelector = (state) => state.get('powers', Immutable.Map());

const powersRequestStatusSelector = createSelector(
  powersSelector,
  powersReducerSelectors.requestStatusSelector
);

export const isInitialDataIncompleteSelector = createSelector(
  charactersRequestStatusSelector,
  powersRequestStatusSelector,
  (...statuses) => statuses.some(isRequestIncomplete)
);

export const hasInitialDataFailedSelector = createSelector(
  charactersRequestStatusSelector,
  powersRequestStatusSelector,
  (...statuses) => statuses.some(hasRequestFailed)
);
