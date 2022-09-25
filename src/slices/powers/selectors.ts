import type { PowersState, PowerData } from './';
import type { requestStatuses } from '@/constants/request-statuses';

export const dataSelector = (state: PowersState): PowerData | undefined =>
  state.data;

export const requestStatusSelector = (state: PowersState): requestStatuses =>
  state.requestStatus;
