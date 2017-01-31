// Store Default:
//
// Immutable.fromJS({
//   totalRunes: 30,
//   character: '',
//   powers: Immutable.Map()
// })
//
// let dummyStoreState = Immutable.fromJS({
//   totalRunes: 30,
//   character: 'corvo',
//   powers: Immutable.fromJS(_.extend({}, characterData.get('corvo').toJS()))
// });
//
// dummyStoreState = dummyStoreState.mergeIn(
//   Immutable.List(['powers', 'greaterBlink', 'purchased']),
//   true
// );
//
//
//
//
// const powersSelector = function (state) {
//   return state.get('powers', Immutable.Map());
// };
//
// const topLevelPowersSelector = createSelector(
//   powersSelector,
//   function (powers) {
//     return powers.filter((power) => {
//       return _.isNull(power.get('parentPowerId'));
//     });
//   }
// );
//

//
// const spentRunesSelector = createSelector(
//   powersSelector,
//   function (powers) {
//     return powers.reduce((memo, power) => {
//       return (power.get('purchased')) ? memo + power.get('cost') : memo;
//     }, 0);
//   }
// );
//
// const remainingRunesSelector = createSelector(
//   totalRunesSelector,
//   spentRunesSelector,
//   function (totalRunes, spentRunes) {
//     return Math.max(totalRunes - spentRunes, 0);
//   }
// );
//
// console.log('Character:', characterSelector(dummyStoreState));
// console.log('Powers:', powersSelector(dummyStoreState));
// console.log('Top Level Powers:', topLevelPowersSelector(dummyStoreState));
// console.log('Total Runes:', totalRunesSelector(dummyStoreState));
// console.log('Spent Runes:', spentRunesSelector(dummyStoreState));
// console.log('Remaining Runes:', remainingRunesSelector(dummyStoreState));
