export default function (powers, character) {
  return powers.filter((power) => {
    const isCharacterPower = (power.get('character') === character || power.get('character') === null);
    const isTopLevelPower = (power.get('parentPowerId') === null);

    return (isCharacterPower && isTopLevelPower);
  });
};
