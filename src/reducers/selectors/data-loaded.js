import isUndefined from 'lodash/isUndefined';
import { createSelector } from 'reselect';
import charactersSelector from 'Reducers/characters/selectors/characters';
import charactersRequestSelector from 'Reducers/characters/selectors/characters-request';
import powersAndEnhancementsSelector from 'Reducers/powers/selectors/powers-and-enhancements';
import powersRequestSelector from 'Reducers/powers/selectors/powers-request';

export const transform = function(
  characters,
  charactersRequest,
  powersAndEnhancements,
  powersRequest
) {
  if (charactersRequest.get('hasErrored') || powersRequest.get('hasErrored')) {
    return new Error();
  }

  if (charactersRequest.get('inFlight') || powersRequest.get('inFlight')) {
    return false;
  }

  return isUndefined(characters) || isUndefined(powersAndEnhancements)
    ? false
    : true;
};

const dataLoadedSelector = createSelector(
  charactersSelector,
  charactersRequestSelector,
  powersAndEnhancementsSelector,
  powersRequestSelector,
  transform
);

export default dataLoadedSelector;
