import Immutable from 'immutable';
import isPowerPurchasable from '../is-power-purchasable';

describe('#isPowerPurchasable', () => {
  let remainingRunes;
  let purchases;
  let power;

  beforeEach(() => {
    remainingRunes = 7;
    purchases = Immutable.List();
    power = Immutable.Map({
      id: 'uuid-01',
      parentPowerId: null,
      name: 'Power #01',
      cost: 2
    });
  });

  describe('when the power has already been purchased', () => {
    beforeEach(() => {
      purchases = purchases.push('uuid-01');
    });

    it('returns false', () => {
      expect(isPowerPurchasable(purchases, power, remainingRunes)).toEqual(false);
    });
  });

  describe('when the power cannot be afforded', () => {
    beforeEach(() => {
      purchases = purchases.push('uuid-01');
      power = power.set('cost', 500);
    });

    it('returns false', () => {
      expect(isPowerPurchasable(purchases, power, remainingRunes)).toEqual(false);
    });
  });

  describe('when the powers parent has not been purchased', () => {
    beforeEach(() => {
      power = power.set('parentPowerId', 'uuid-02');
    });

    it('returns false', () => {
      expect(isPowerPurchasable(purchases, power, remainingRunes)).toEqual(false);
    });
  });

  describe('when the power is eligible for purchase', () => {
    it('returns true', () => {
      expect(isPowerPurchasable(purchases, power, remainingRunes)).toEqual(true);
    });
  });
});
