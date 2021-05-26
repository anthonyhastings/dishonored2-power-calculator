import Container from '../';
import * as selectors from 'selectors';

jest.mock('selectors', () => ({
  characterBySlugSelector: jest.fn().mockReturnValue('characterBySlugSelector'),
  topLevelEnhancementsSelector: jest
    .fn()
    .mockReturnValue('topLevelEnhancementsSelector'),
  topLevelPowersByCharacterSlugSelector: jest
    .fn()
    .mockReturnValue('topLevelPowersByCharacterSlugSelector'),
}));

jest.mock('../../', () => 'MockComponent');

describe('PowerSelection container', () => {
  let testContext;

  beforeEach(() => {
    testContext = {};
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('#mapStateToProps', () => {
    beforeEach(() => {
      testContext.result = Container.mapStateToProps(null, {
        match: {
          params: {
            characterSlug: 'fake-slug',
          },
        },
      });
    });

    it('calls character selector with slug', () => {
      expect(selectors.characterBySlugSelector).toHaveBeenNthCalledWith(
        1,
        null,
        'fake-slug'
      );
    });

    it('calls powers by character selector with slug', () => {
      expect(
        selectors.topLevelPowersByCharacterSlugSelector
      ).toHaveBeenNthCalledWith(1, null, 'fake-slug');
    });

    it('returns expected key/value pairings', () => {
      expect(testContext.result).toEqual({
        character: 'characterBySlugSelector',
        topLevelEnhancements: 'topLevelEnhancementsSelector',
        topLevelPowers: 'topLevelPowersByCharacterSlugSelector',
      });
    });
  });
});
