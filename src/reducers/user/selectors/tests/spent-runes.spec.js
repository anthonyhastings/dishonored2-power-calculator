import Immutable from 'immutable';
import spentRunesSelector from '../spent-runes';

describe('#spentRunesTransform', () => {
  let state;

  const powersAndEnhancements = Immutable.fromJS({
    'uuid-01': {
      name: 'Power #01',
      cost: 3,
    },
    'uuid-02': {
      name: 'Power #02',
      cost: 4,
    },
    'uuid-03': {
      name: 'Power #03',
      cost: 5,
    },
    'uuid-04': {
      name: 'Enhancement #04',
      cost: 2,
    },
  });

  beforeEach(() => {
    spentRunesSelector.resetRecomputations();
  });

  describe('when there are no purchases', () => {
    beforeEach(() => {
      state = Immutable.fromJS({
        powers: {
          data: powersAndEnhancements,
        },
        user: {
          purchases: [],
        },
      });
    });

    it('should return zero', () => {
      expect(spentRunesSelector(state)).toEqual(0);
    });
  });

  describe('when given purchases', () => {
    beforeEach(() => {
      state = Immutable.fromJS({
        powers: {
          data: powersAndEnhancements,
        },
        user: {
          purchases: ['uuid-01', 'uuid-03', 'uuid-04'],
        },
      });
    });

    it('should return the correct amount spent', () => {
      expect(spentRunesSelector(state)).toEqual(10);
    });
  });

  describe('when called multiple times with same input', () => {
    beforeEach(() => {
      state = Immutable.fromJS({
        powers: {
          data: powersAndEnhancements,
        },
        user: {
          purchases: ['non-existent-id'],
        },
      });

      spentRunesSelector(state);
      spentRunesSelector(state);
    });

    it('is memoized and only called once', () => {
      expect(spentRunesSelector.recomputations()).toEqual(1);
    });
  });
});
