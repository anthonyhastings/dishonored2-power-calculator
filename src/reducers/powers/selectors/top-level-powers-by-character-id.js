import powersSelector from './powers';

export const transform = function(powers, characterId) {
  return powers.filter((power) => {
    const isCharacterPower =
      power.get('characterId') === characterId ||
      power.get('characterId') === null;
    const isTopLevelPower = power.get('parentPowerId') === null;

    return isCharacterPower && isTopLevelPower;
  });
};

const topLevelPowersByCharacterIdSelector = (state, characterId) => {
  const powers = powersSelector(state);

  return transform(powers, characterId);
};

export default topLevelPowersByCharacterIdSelector;
