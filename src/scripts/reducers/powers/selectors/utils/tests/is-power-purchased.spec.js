import isPowerPurchased from '../is-power-purchased';

describe('#isPowerPurchased', () => {
  let purchases;

  describe('when a particular power has not been purchased', () => {
    beforeEach(() => {
      purchases = [];
    });

    it('should return false', () => {
      expect(isPowerPurchased(purchases, 'uuid-01')).toEqual(false);
    });
  });

  describe('when a particular power has been purchased', () => {
    beforeEach(() => {
      purchases = ['uuid-01'];
    });

    it('should return true', () => {
      expect(isPowerPurchased(purchases, 'uuid-01')).toEqual(true);
    });
  });
});
