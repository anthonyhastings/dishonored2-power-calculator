import {createSelector} from 'reselect';
import enhancementsSelector from './enhancements';

export const transform = function (enhancements) {
  return enhancements.filter((enhancement) => {
    return (enhancement.get('parentPowerId') === null);
  });
};

const topLevelEnhancementsSelector = createSelector(
  enhancementsSelector,
  transform
);

export default topLevelEnhancementsSelector;
