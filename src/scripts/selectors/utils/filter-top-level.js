export default function (powers, type) {
  return powers.filter((power) => {
    const isPower = (power.get('type') === type);
    const isTopLevel = (power.get('parentPowerId') === null);

    return isPower && isTopLevel;
  });
}
