import renderer from 'react-test-renderer';
import { App } from '../';
import { useAppDispatch } from '@/store-hooks';

jest.mock('react-router-dom', () => ({
  Routes: 'MockRoutes',
  Route: function MockRoute(props: { element: React.ReactNode }) {
    const { element: Element, ...otherProps } = props;
    return <span {...otherProps}>{Element}</span>;
  },
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

jest.mock('components/loader', () => ({
  Loader: 'MockLoader',
}));

jest.mock(
  'pages/character-selection',
  () =>
    function MockCharacterSelection() {
      return <p>Mock Character Selection</p>;
    }
);

jest.mock(
  'pages/page-not-found',
  () =>
    function MockPageNotFound() {
      return <p>Page Not Found</p>;
    }
);

jest.mock(
  'pages/power-selection',
  () =>
    function MockPowerSelection() {
      return <p>Mock Power Selection</p>;
    }
);

describe('App component', () => {
  let testContext: {
    component?: renderer.ReactTestRenderer;
  };

  const renderComponent = () => <App />;

  beforeEach(() => {
    testContext = {};
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('triggers calls for initial fetching of data when rendered', async () => {
    const dispatch = jest.fn();
    (useAppDispatch as jest.Mock).mockReturnValue(dispatch);

    await renderer.act(async () => {
      testContext.component = renderer.create(renderComponent());
    });

    expect(dispatch.mock.calls).toEqual([
      ['MockFetchCharactersAction'],
      ['MockFetchPowersAction'],
    ]);
  });

  it('renders a header area and top-level routes', async () => {
    const dispatch = jest.fn();
    (useAppDispatch as jest.Mock).mockReturnValue(dispatch);

    await renderer.act(async () => {
      testContext.component = renderer.create(renderComponent());
    });

    expect(testContext.component).toMatchSnapshot();
  });

  it('aborts thunks when unmounted', async () => {
    const charactersDispatchMock = jest.fn();
    const powersDispatchMock = jest.fn();

    const dispatch = jest
      .fn()
      .mockReturnValueOnce({ abort: charactersDispatchMock })
      .mockReturnValueOnce({ abort: powersDispatchMock });

    (useAppDispatch as jest.Mock).mockReturnValue(dispatch);

    await renderer.act(async () => {
      testContext.component = renderer.create(renderComponent());
    });

    expect(dispatch.mock.calls).toEqual([
      ['MockFetchCharactersAction'],
      ['MockFetchPowersAction'],
    ]);

    await renderer.act(async () => {
      testContext.component?.unmount();
    });

    expect(charactersDispatchMock).toHaveBeenCalledTimes(1);
    expect(powersDispatchMock).toHaveBeenCalledTimes(1);
  });
});
