import type { CharactersState, CharacterData } from './';
import type { requestStatuses } from '@/constants/request-statuses';

export const dataSelector = (
  state: CharactersState
): CharacterData | undefined => state.data;

export const requestStatusSelector = (
  state: CharactersState
): requestStatuses => state.requestStatus;
