export default function (powers, characterId) {
  return powers.filter((power) => {
    const isCharacterPower = (power.get('character') === characterId || power.get('character') === null);
    const isTopLevelPower = (power.get('parentPowerId') === null);

    return (isCharacterPower && isTopLevelPower);
  });
};
