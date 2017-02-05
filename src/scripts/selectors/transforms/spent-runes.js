export default function (powers, purchases) {
  return purchases.reduce((memo, purchase) => {
    return memo + powers.getIn([purchase, 'cost']);
  }, 0);
};
