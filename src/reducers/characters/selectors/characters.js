const charactersSelector = function(state) {
  return state.getIn(['characters', 'data']);
};

export default charactersSelector;
