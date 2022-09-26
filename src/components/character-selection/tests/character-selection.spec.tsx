import renderer from 'react-test-renderer';
import CharacterSelection from '../character-selection';
import * as selectors from '@/selectors';

jest.mock('store-hooks', () => ({
  useAppSelector: (fn: () => void) => fn(),
}));
jest.mock('selectors');
jest.mock('components/avatar', () => 'MockAvatar');
jest.mock('components/button', () => 'MockButton');

describe('CharacterSelection component', () => {
  let testContext: {
    component?: renderer.ReactTestRenderer;
  };

  const mockedSelectors = selectors as jest.Mocked<typeof selectors>;

  const renderComponent = (props = {}) => <CharacterSelection {...props} />;

  beforeEach(() => {
    testContext = {};

    mockedSelectors.charactersDataSelector.mockReturnValue({
      'dummy-id': {
        id: 'dummy-id',
        slug: 'corvo',
        name: 'Adam Jensen',
        description: 'Task Force 29 operative.',
      },
      'fake-id': {
        id: 'fake-id',
        slug: 'emily',
        name: 'Scott Ryder',
        description: 'The pathfinder.',
      },
    });
  });

  describe('when rendered', () => {
    beforeEach(() => {
      testContext.component = renderer.create(renderComponent());
    });

    it('renders a heading and character grid', () => {
      expect(testContext.component).toMatchSnapshot();
    });
  });
});
