import renderer from 'react-test-renderer';
import { useAppDispatch } from 'store-hooks';
import App from '../';

jest.mock('react-router-dom', () => ({
  Switch: 'MockSwitch',
  Route: 'MockRoute',
  Link: 'MockLink',
}));

jest.mock('selectors', () => ({
  hasInitialDataFailedSelector: jest.fn().mockReturnValue(false),
  isInitialDataIncompleteSelector: jest.fn().mockReturnValue(true),
}));

jest.mock('store-hooks', () => ({
  useAppSelector: (fn: () => void) => fn(),
  useAppDispatch: jest.fn(),
}));

jest.mock('slices/characters', () => ({
  fetchCharacters: () => 'MockFetchCharactersAction',
}));

jest.mock('slices/powers', () => ({
  fetchPowers: () => 'MockFetchPowersAction',
}));

jest.mock('components/loader', () => 'MockLoader');

jest.mock(
  'components/character-selection',
  () =>
    function MockCharacterSelection() {
      return <p>Mock Character Selection</p>;
    }
);

jest.mock(
  'components/page-not-found',
  () =>
    function MockPageNotFound() {
      return <p>Page Not Found</p>;
    }
);

jest.mock(
  'components/power-selection',
  () =>
    function MockPowerSelection() {
      return <p>Mock Power Selection</p>;
    }
);

describe('App component', () => {
  let testContext: {
    component?: renderer.ReactTestRenderer;
    dispatch: jest.Mock;
  };

  const mockedUseAppDispatch = useAppDispatch as jest.Mock;

  const renderComponent = () => <App />;

  beforeEach(() => {
    testContext = {
      dispatch: jest.fn(),
    };

    mockedUseAppDispatch.mockReturnValue(testContext.dispatch);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('when rendered', () => {
    beforeEach(async () => {
      await renderer.act(async () => {
        testContext.component = renderer.create(renderComponent());
      });
    });

    it('triggers calls for initial fetching of data', () => {
      expect(testContext.dispatch.mock.calls).toEqual([
        ['MockFetchCharactersAction'],
        ['MockFetchPowersAction'],
      ]);
    });

    it('renders a header area and top-level routes', () => {
      expect(testContext.component).toMatchSnapshot();
    });
  });
});
