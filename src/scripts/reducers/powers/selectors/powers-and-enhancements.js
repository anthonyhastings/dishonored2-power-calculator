const powersAndEnhancementsSelector = function (state) {
  return state.getIn(['powers', 'data']);
};

export default powersAndEnhancementsSelector;
