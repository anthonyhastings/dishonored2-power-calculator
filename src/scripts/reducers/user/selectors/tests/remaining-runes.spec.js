import {transform} from '../remaining-runes';

describe('#remainingRunesTransform', () => {
  let totalRunes;
  let remainingRunes;

  beforeEach(() => {
    totalRunes = 30;
    remainingRunes = 10;
  });

  describe('when given total and spent runes', () => {
    it('should return the remainder', () => {
      expect(transform(totalRunes, remainingRunes)).toEqual(20);
    });
  });
});
