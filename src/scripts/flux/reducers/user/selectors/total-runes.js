const totalRunesSelector = function (state) {
  return state.getIn(['user', 'totalRunes']);
};

export default totalRunesSelector;
