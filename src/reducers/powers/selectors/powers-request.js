const powersRequestSelector = function(state) {
  return state.getIn(['powers', 'request']);
};

export default powersRequestSelector;
