import renderer from 'react-test-renderer';
import CharacterSelection from '../';

jest.mock('components/avatar', () => 'MockAvatar');
jest.mock('components/button', () => 'MockButton');

describe('CharacterSelection component', () => {
  let testContext;

  const renderComponent = (props = {}) => (
    <CharacterSelection {...testContext.defaultProps} {...props} />
  );

  beforeEach(() => {
    testContext = {};

    testContext.defaultProps = {
      characters: {
        'dummy-id': {
          id: 'dummy-id',
          slug: 'dummy-slug',
          name: 'Adam Jensen',
          description: 'Task Force 29 operative.',
        },
        'fake-id': {
          id: 'fake-id',
          slug: 'fake-slug',
          name: 'Scott Ryder',
          description: 'The pathfinder.',
        },
      },
    };
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
