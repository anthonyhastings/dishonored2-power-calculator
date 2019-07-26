const charactersRequestSelector = function(state) {
  return state.getIn(['characters', 'request']);
};

export default charactersRequestSelector;
