export default function (enhancements) {
  return enhancements.filter((enhancement) => {
    return (enhancement.get('parentPowerId') === null);
  });
};
