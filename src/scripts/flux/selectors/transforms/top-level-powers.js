export default function (powers) {
  return powers.filter((power) => {
    return (power.get('parentPowerId') === null);
  });
};
