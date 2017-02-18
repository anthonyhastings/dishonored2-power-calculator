export default function (powers, characterId) {
  return powers.filter((power) => {
    const isCharacterPower = (power.get('characterId') === characterId || power.get('characterId') === null);
    const isTopLevelPower = (power.get('parentPowerId') === null);

    return (isCharacterPower && isTopLevelPower);
  });
};
