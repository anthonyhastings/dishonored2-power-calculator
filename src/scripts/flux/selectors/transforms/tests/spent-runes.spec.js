import Immutable from 'immutable';
import {spentRunes} from '../';

describe('Spent runes', function () {
  beforeEach(function () {
    this.powers = Immutable.fromJS({
      'uuid-01': {
        name: 'Power #01',
        cost: 3
      },
      'uuid-02': {
        name: 'Power #02',
        cost: 4
      },
      'uuid-03': {
        name: 'Power #03',
        cost: 5
      }
    });
  });

  describe('when there are no purchases', function () {
    beforeEach(function () {
      this.purchases = Immutable.fromJS([]);
    });

    it('should return zero', function () {
      expect(spentRunes(this.powers, this.purchases)).toEqual(0);
    });
  });

  describe('when given purchases', function () {
    beforeEach(function () {
      this.purchases = Immutable.fromJS(['uuid-01', 'uuid-03']);
    });

    it('should return the correct amount spent', function () {
      expect(spentRunes(this.powers, this.purchases)).toEqual(8);
    });
  });
});
