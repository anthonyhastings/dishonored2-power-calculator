import charactersSelector from './characters';

const characterByIdSelector = function (state, characterId) {
  return charactersSelector(state).get(characterId);
};

export default characterByIdSelector;
