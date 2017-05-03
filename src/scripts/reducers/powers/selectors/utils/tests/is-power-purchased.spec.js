import isPowerPurchased from '../is-power-purchased';

describe('#isPowerPurchased', function () {
  describe('when a particular power has not been purchased', function () {
    beforeEach(function () {
      this.purchases = [];
    });

    it('should return false', function () {
      expect(isPowerPurchased(this.purchases, 'uuid-01')).toEqual(false);
    });
  });

  describe('when a particular power has been purchased', function () {
    beforeEach(function () {
      this.purchases = ['uuid-01'];
    });

    it('should return true', function () {
      expect(isPowerPurchased(this.purchases, 'uuid-01')).toEqual(true);
    });
  });
});
