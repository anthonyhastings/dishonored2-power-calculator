import Immutable from 'immutable';
import totalRunesSelector from '../total-runes';

describe('#totalRunesSelector', function () {
  beforeEach(function () {
    this.state = Immutable.fromJS({
      user: {
        totalRunes: 30
      }
    });
  });

  it('should return appropriate value', function () {
    expect(totalRunesSelector(this.state)).toEqual(30);
  });
});
