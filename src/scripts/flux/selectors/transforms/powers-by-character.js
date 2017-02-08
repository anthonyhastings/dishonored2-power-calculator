export default function (powers, character) {
  return powers.filter((power) => {
    return (power.get('character') === character || power.get('character') === null);
  });
};
