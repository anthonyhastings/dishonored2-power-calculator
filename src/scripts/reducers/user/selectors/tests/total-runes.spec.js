import Immutable from 'immutable';
import totalRunesSelector from '../total-runes';

describe('#totalRunesSelector', () => {
  let state;

  beforeEach(() => {
    state = Immutable.fromJS({
      user: {
        totalRunes: 30
      }
    });
  });

  it('should return appropriate value', () => {
    expect(totalRunesSelector(state)).toEqual(30);
  });
});
