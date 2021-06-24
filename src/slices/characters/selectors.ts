import type { requestStatuses } from 'constants/request-statuses';
import type { CharactersState, CharacterData } from './';

export const dataSelector = (
  state: CharactersState
): CharacterData | undefined => state.data;

export const requestStatusSelector = (
  state: CharactersState
): requestStatuses => state.requestStatus;
