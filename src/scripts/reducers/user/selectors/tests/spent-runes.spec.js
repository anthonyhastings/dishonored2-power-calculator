import Immutable from 'immutable';
import {transform} from '../spent-runes';

describe('#spentRunesTransform', () => {
  let powersAndEnhancements;

  beforeEach(() => {
    powersAndEnhancements = Immutable.fromJS({
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
      },
      'uuid-04': {
        name: 'Enhancement #04',
        cost: 2
      }
    });
  });

  describe('when there are no purchases', () => {
    let purchases;

    beforeEach(() => {
      purchases = Immutable.fromJS([]);
    });

    it('should return zero', () => {
      expect(transform(powersAndEnhancements, purchases)).toEqual(0);
    });
  });

  describe('when given purchases', () => {
    let purchases;

    beforeEach(() => {
      purchases = Immutable.fromJS(['uuid-01', 'uuid-03', 'uuid-04']);
    });

    it('should return the correct amount spent', () => {
      expect(transform(powersAndEnhancements, purchases)).toEqual(10);
    });
  });
});
