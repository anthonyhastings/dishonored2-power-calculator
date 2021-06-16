import type { requestStatuses } from 'constants/request-statuses';
import type { PowersState, PowerData } from './';

export const dataSelector = (state: PowersState): PowerData | undefined =>
  state.data;

export const requestStatusSelector = (state: PowersState): requestStatuses =>
  state.requestStatus;
