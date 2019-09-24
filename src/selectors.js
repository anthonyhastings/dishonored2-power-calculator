import Immutable from 'immutable';
import { createSelector } from 'reselect';
import requestStatuses from 'Constants/request-statuses';
import * as charactersReducerSelectors from 'Reducers/characters/selectors';
import * as powersReducerSelectors from 'Reducers/powers/selectors';

const isRequestStatusPending = (requestStatus) =>
  requestStatus === requestStatuses.pending;

const charactersSelector = (state) => state.get('characters', Immutable.Map());

export const charactersDataSelector = createSelector(
  charactersSelector,
  charactersReducerSelectors.dataSelector
);

const charactersRequestStatusSelector = createSelector(
  charactersSelector,
  charactersReducerSelectors.requestStatusSelector
);

const powersSelector = (state) => state.get('powers', Immutable.Map());

const powersRequestStatusSelector = createSelector(
  powersSelector,
  powersReducerSelectors.requestStatusSelector
);

export const isInitialDataLoadingSelector = createSelector(
  charactersRequestStatusSelector,
  powersRequestStatusSelector,
  (...statuses) => statuses.some((status) => isRequestStatusPending(status))
);
