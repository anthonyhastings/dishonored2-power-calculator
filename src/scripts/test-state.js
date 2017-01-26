// Store Default:
//
// Immutable.fromJS({
//   totalRunes: 30,
//   character: '',
//   powers: Immutable.Map()
// })
//
//
//
// Store Methods:
//
// onCharacterChosen(character) {
//   this.state.set('character', character);
// }
//
// onPowerPurchased(state, action) {
// if (action.type === 'something') {
//   return state.setIn(['powers', powerId, 'purchased'], true);
// } else {
//   return state;
// }
// }
//
//
//
// const _ = require('underscore');
// const Immutable = require('immutable');
// const Redux = require('redux');
// const createSelector = require('reselect').createSelector;
//
// const createStore = Redux.createStore;
//
// console.log(redux);
//
// const characterData = Immutable.fromJS({
//   emily: {
//   },
//   corvo: {
//     // Blink powers.
//     'ba33f829-5fb1-4c25-8fa6-db9581b78ee9': {
//       id: 'ba33f829-5fb1-4c25-8fa6-db9581b78ee9',
//       parentPowerId: null,
//       name: 'Blink',
//       description: 'Move forward rapidly.',
//       cost: 0,
//       purchased: true
//     },
//     '057f77b6-4730-4148-817e-8e8a6bb7ab70': {
//       id: '057f77b6-4730-4148-817e-8e8a6bb7ab70',
//       parentPowerId: 'ba33f829-5fb1-4c25-8fa6-db9581b78ee9',
//       name: 'Greater Blink',
//       description: 'Extend range of blink.',
//       cost: 4,
//       purchased: false
//     },
//     'c6cc4776-a67d-4364-a21b-fbee309169ba': {
//       id: 'c6cc4776-a67d-4364-a21b-fbee309169ba',
//       parentPowerId: 'ba33f829-5fb1-4c25-8fa6-db9581b78ee9',
//       name: 'Redirective Blink',
//       description: 'Time stops if you aren’t moving while aiming Blink.',
//       cost: 3,
//       purchased: false
//     },
//     'da709264-367d-4dd0-be73-5cae311ffe03': {
//       id: 'da709264-367d-4dd0-be73-5cae311ffe03',
//       parentPowerId: 'ba33f829-5fb1-4c25-8fa6-db9581b78ee9',
//       name: 'Blink Assault',
//       description: 'Throw enemies to the ground by attacking just as Blink ends.',
//       cost: 1,
//       purchased: false
//     }
//
//     // ??? powers.
//   }
// });
//
//
//
//
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
// // I THINK THIS IS ENOUGH TO MAKE A DUMMY STORE AND SELECTORS, AND THROW IN A TEST SUITE.
// // I THINK THIS IS ENOUGH TO MAKE A DUMMY STORE AND SELECTORS, AND THROW IN A TEST SUITE.
// // I THINK THIS IS ENOUGH TO MAKE A DUMMY STORE AND SELECTORS, AND THROW IN A TEST SUITE.
// // I THINK THIS IS ENOUGH TO MAKE A DUMMY STORE AND SELECTORS, AND THROW IN A TEST SUITE.
// // I THINK THIS IS ENOUGH TO MAKE A DUMMY STORE AND SELECTORS, AND THROW IN A TEST SUITE.
// // I THINK THIS IS ENOUGH TO MAKE A DUMMY STORE AND SELECTORS, AND THROW IN A TEST SUITE.
//
//
//
//
// const characterSelector = function (state) {
//   return state.get('character');
// };
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
// const totalRunesSelector = function (state) {
//   return state.get('totalRunes');
// };
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
