export default function (powersAndEnhancements, purchases) {
  return purchases.reduce((memo, purchase) => {
    return memo + powersAndEnhancements.getIn([purchase, 'cost']);
  }, 0);
};
