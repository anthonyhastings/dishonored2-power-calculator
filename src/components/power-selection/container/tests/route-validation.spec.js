import Container from '../route-validation';
import * as selectors from 'Src/selectors';

jest.mock('Src/selectors', () => ({
  characterBySlugSelector: jest.fn().mockReturnValue('characterBySlugSelector'),
}));

jest.mock('../../route-validation', () => 'MockComponent');

describe('PowerSelectionRouteValidation container', () => {
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

    it('returns expected key/value pairings', () => {
      expect(testContext.result).toEqual({
        character: 'characterBySlugSelector',
      });
    });
  });
});
