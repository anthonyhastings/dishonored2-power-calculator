import Immutable from 'immutable';
import {transform} from '../powers-and-enhancements-with-purchase-flags';

describe('#powersAndEnhancementsWithPurchaseFlagsSelector', () => {
  let remainingRunes;
  let purchases;
  let powers;
  let expectedPowers;

  beforeEach(() => {
    remainingRunes = 2;

    purchases = Immutable.List(['uuid-01']);

    powers = Immutable.fromJS({
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

    expectedPowers = powers.mergeDeep({
      'uuid-01': {purchasable: false, purchased: true},
      'uuid-02': {purchasable: true, purchased: false},
      'uuid-03': {purchasable: false, purchased: false}
    });
  });

  it('returns expected structure', () => {
    expect(transform(powers, purchases, remainingRunes)).toEqual(expectedPowers);
  });
});
