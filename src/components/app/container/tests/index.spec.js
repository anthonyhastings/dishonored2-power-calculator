import Container from '../';

jest.mock('react-hot-loader/root', () => ({
  hot: (component) => component,
}));

jest.mock('Reducers/characters', () => ({
  getCharacters: () => 'MockGetCharactersAction',
}));

jest.mock('Reducers/powers', () => ({
  getPowers: () => 'MockGetPowersAction',
}));

jest.mock('Src/selectors', () => ({
  hasInitialDataFailedSelector: jest
    .fn()
    .mockReturnValue('hasInitialDataFailedSelector'),
  isInitialDataIncompleteSelector: jest
    .fn()
    .mockReturnValue('isInitialDataIncompleteSelector'),
}));

jest.mock('../../', () => 'MockComponent');

describe('App container', () => {
  describe('#mapStateToProps', () => {
    it('returns expected key/value pairings', () => {
      expect(Container.mapStateToProps()).toEqual({
        showError: 'hasInitialDataFailedSelector',
        showLoader: 'isInitialDataIncompleteSelector',
      });
    });
  });

  describe('#mapDispatchToProps', () => {
    describe('#onComponentDidMount', () => {
      beforeEach(() => {
        Container.mapDispatchToProps().onComponentDidMount();
      });

      it('firstly fires action for getting characters', () => {
        expect(Container.mockDispatch).toHaveBeenNthCalledWith(
          1,
          'MockGetCharactersAction'
        );
      });

      it('secondly fires action for getting powers', () => {
        expect(Container.mockDispatch).toHaveBeenNthCalledWith(
          2,
          'MockGetPowersAction'
        );
      });
    });
  });
});
