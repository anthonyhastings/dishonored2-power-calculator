import renderer from 'react-test-renderer';
import { PowerSelection } from '../';
import * as selectors from '@/selectors';

jest.mock('react-router', () => ({
  useParams: jest.fn().mockReturnValue({ characterSlug: 'corvo' }),
}));

jest.mock('store-hooks', () => ({
  useAppSelector: (fn: () => void) => fn(),
}));

jest.mock('selectors');

jest.mock('components/avatar', () => ({
  Avatar: 'MockAvatar',
}));

jest.mock('components/button', () => ({
  Button: 'MockButton',
}));

jest.mock('components/loader', () => ({
  Loader: 'MockLoader',
}));

jest.mock(
  'pages/page-not-found',
  () =>
    function MockPageNotFound() {
      return <p>Page Not Found</p>;
    }
);

jest.mock('../powers-list', () => ({
  PowersList: 'MockPowersList',
}));

describe('PowerSelection component', () => {
  let testContext: {
    component?: renderer.ReactTestRenderer;
  };

  const mockedSelectors = selectors as jest.Mocked<typeof selectors>;

  const renderComponent = () => <PowerSelection />;

  beforeEach(() => {
    testContext = {};

    mockedSelectors.topLevelEnhancementsSelector.mockReturnValue([
      {
        id: 'enhancement-id',
        parentPowerId: null,
        characterId: 'character-id',
        type: 'enhancement',
        name: 'Top-level Enhancement',
        description: 'Description for a top-level enhancement',
        cost: 1,
      },
    ]);

    mockedSelectors.topLevelPowersByCharacterSlugSelector.mockReturnValue([
      {
        id: 'power-id',
        parentPowerId: null,
        characterId: 'character-id',
        type: 'power',
        name: 'Top-level Power',
        description: 'Description for a top-level power',
        cost: 1,
      },
    ]);
  });

  describe('when character is missing', () => {
    beforeEach(() => {
      mockedSelectors.characterBySlugSelector.mockReturnValue(undefined);
    });

    describe('when PageNotFound component is still loading', () => {
      beforeEach(() => {
        testContext.component = renderer.create(renderComponent());
      });

      it('renders the Loader component', () => {
        expect(testContext.component).toMatchSnapshot();
      });
    });

    describe('when PageNotFound component has finished loading', () => {
      beforeEach(async () => {
        await renderer.act(async () => {
          testContext.component = renderer.create(renderComponent());
        });
      });

      it('renders the PageNotFound component', () => {
        expect(testContext.component).toMatchSnapshot();
      });
    });
  });

  describe('when character is present', () => {
    beforeEach(() => {
      mockedSelectors.characterBySlugSelector.mockReturnValue({
        id: 'test-character',
        name: 'Test Character',
        slug: 'corvo',
        description: 'This is a test character',
      });

      testContext.component = renderer.create(renderComponent());
    });

    it('renders the header, footer and power lists', () => {
      expect(testContext.component).toMatchSnapshot();
    });
  });
});
