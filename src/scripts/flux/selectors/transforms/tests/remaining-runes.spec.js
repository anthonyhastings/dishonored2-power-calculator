import {remainingRunes} from '../';

describe('Remaining runes', function () {
  beforeEach(function () {
    this.totalRunes = 30;
    this.remainingRunes = 10;
  });

  describe('when given total and spent runes', function () {
    it('should return the remainder', function () {
      expect(remainingRunes(this.totalRunes, this.remainingRunes)).toEqual(20);
    });
  });
});
