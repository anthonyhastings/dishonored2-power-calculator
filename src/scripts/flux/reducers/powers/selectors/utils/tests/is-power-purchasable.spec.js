import Immutable from 'immutable';
import isPowerPurchasable from '../is-power-purchasable';

describe('#isPowerPurchasable', function () {
  beforeEach(function () {
    this.remainingRunes = 7;
    this.purchases = Immutable.List();
    this.power = Immutable.Map({
      id: 'uuid-01',
      parentPowerId: null,
      name: 'Power #01',
      cost: 2
    });
  });

  describe('when the power has already been purchased', function () {
    beforeEach(function () {
      this.purchases = this.purchases.push('uuid-01');
    });

    it('returns false', function () {
      expect(isPowerPurchasable(this.purchases, this.power, this.remainingRunes)).toEqual(false);
    });
  });

  describe('when the power cannot be afforded', function () {
    beforeEach(function () {
      this.purchases = this.purchases.push('uuid-01');
      this.power = this.power.set('cost', 500);
    });

    it('returns false', function () {
      expect(isPowerPurchasable(this.purchases, this.power, this.remainingRunes)).toEqual(false);
    });
  });

  describe('when the powers parent has not been purchased', function () {
    beforeEach(function () {
      this.power = this.power.set('parentPowerId', 'uuid-02');
    });

    it('returns false', function () {
      expect(isPowerPurchasable(this.purchases, this.power, this.remainingRunes)).toEqual(false);
    });
  });

  describe('when the power is eligible for purchase', function () {
    it('returns true', function () {
      expect(isPowerPurchasable(this.purchases, this.power, this.remainingRunes)).toEqual(true);
    });
  });
});
