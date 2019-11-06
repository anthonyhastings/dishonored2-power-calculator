import remainingRunesSelector from '../remaining-runes';

jest.mock('Constants/total-runes', () => 10);

describe('#remainingRunesSelector', () => {
  it('returns the remainder of deducting spent runes from total runes', () => {
    expect(remainingRunesSelector.resultFunc(8)).toEqual(2);
  });
});
