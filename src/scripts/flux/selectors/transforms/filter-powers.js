export default function (powersAndEnhancements) {
  return powersAndEnhancements.filter((map) => {
    return map.get('type') === 'power';
  });
};
