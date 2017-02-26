import Immutable from 'immutable';
import addPurchaseFlags from '../add-purchase-flags';

describe('addPurchaseFlags', function () {
  beforeEach(function () {
    this.remainingRunes = 2;
    this.purchases = Immutable.List(['uuid-01']);

    this.powers = Immutable.fromJS({
      'uuid-01': {
        id: 'uuid-01',
        parentPowerId: null,
        cost: 2
      },
      'uuid-02': {
        id: 'uuid-02',
        parentPowerId: 'uuid-01',
        cost: 2
      },
      'uuid-03': {
        id: 'uuid-03',
        parentPowerId: null,
        cost: 5
      }
    });

    this.expectedPowers = this.powers.mergeDeep({
      'uuid-01': {purchasable: false, purchased: true},
      'uuid-02': {purchasable: true, purchased: false},
      'uuid-03': {purchasable: false, purchased: false}
    });
  });

  it('returns expected structure', function () {
    expect(addPurchaseFlags(this.powers, this.purchases, this.remainingRunes)).toEqualImmutable(this.expectedPowers);
  });
});
