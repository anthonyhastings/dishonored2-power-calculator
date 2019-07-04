import Immutable from 'immutable';
import remainingRunesSelector from '../remaining-runes';

describe('#remainingRunesTransform', () => {
  let state;

  const powersAndEnhancements = Immutable.fromJS({
    'uuid-01': {
      name: 'Power #01',
      cost: 10
    },
    'uuid-02': {
      name: 'Power #02',
      cost: 15
    },
    'uuid-03': {
      name: 'Power #03',
      cost: 10
    }
  });

  beforeEach(() => {
    remainingRunesSelector.resetRecomputations();

    state = Immutable.fromJS({
      powers: {
        data: powersAndEnhancements
      },
      user: {
        purchases: ['uuid-01', 'uuid-02'],
        totalRunes: 30
      }
    });
  });

  it('should return the remainder', () => {
    expect(remainingRunesSelector(state)).toEqual(5);
  });

  describe('when called multiple times with same input', () => {
    beforeEach(() => {
      state = Immutable.fromJS({
        powers: {
          data: powersAndEnhancements
        },
        user: {
          purchases: ['uuid-03'],
          totalRunes: 30
        }
      });

      remainingRunesSelector(state);
      remainingRunesSelector(state);
    });

    it('is memoized and only called once', () => {
      expect(remainingRunesSelector.recomputations()).toEqual(1);
    });
  });
});
