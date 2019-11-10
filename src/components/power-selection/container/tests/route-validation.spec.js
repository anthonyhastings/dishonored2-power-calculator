import Container from '../route-validation';

jest.mock('Src/selectors', () => ({
  characterBySlugSelector: jest.fn().mockReturnValue('characterBySlugSelector')
}));

jest.mock('../../route-validation', () => 'MockComponent');

describe('PowerSelectionRouteValidation container', () => {
  describe('#mapStateToProps', () => {
    it('returns expected key/value pairings', () => {
      expect(
        Container.mapStateToProps(null, {
          match: {
            params: {
              characterSlug: 'fake-slug'
            }
          }
        })
      ).toEqual({
        character: 'characterBySlugSelector'
      });
    });
  });
});
