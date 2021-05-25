import Container from '../';

jest.mock('selectors', () => ({
  charactersDataSelector: jest.fn().mockReturnValue('charactersDataSelector'),
}));

jest.mock('../../', () => 'MockComponent');

describe('CharacterSelection container', () => {
  describe('#mapStateToProps', () => {
    it('returns expected key/value pairings', () => {
      expect(Container.mapStateToProps()).toEqual({
        characters: 'charactersDataSelector',
      });
    });
  });
});
