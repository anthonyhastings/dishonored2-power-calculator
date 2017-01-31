export const characterSelector = (state) => state.get('character');

export const totalRunesSelector = (state) => state.get('totalRunes');

// TODO: Create topLevelPowers and topLevelEnhancements selectors.
// Read that redux "composed selectors" page for ideas on how to conjoin them.
//
// const topLevelPowers = selectorFunction(
//   characterSelector,
//   function(character) {
//     if (_.isUndefined(character)) {
//       return undefined;
//     }
//
//    GET POWERS AND FILTER.
//   }
// )
