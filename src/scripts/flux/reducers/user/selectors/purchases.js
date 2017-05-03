const purchasesSelector = function (state) {
  return state.getIn(['user', 'purchases']);
};

export default purchasesSelector;
