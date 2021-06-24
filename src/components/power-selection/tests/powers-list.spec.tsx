import renderer from 'react-test-renderer';
import type { PowersListProps } from '../powers-list';
import PowersList from '../powers-list';

describe('PowersList component', () => {
  let testContext: {
    component?: renderer.ReactTestRenderer;
    defaultProps: PowersListProps;
  };

  const renderComponent = (props = {}) => (
    <PowersList {...testContext.defaultProps} {...props} />
  );

  beforeEach(() => {
    testContext = {
      defaultProps: {
        children: 'Test Title',
        powers: [
          {
            id: 'enhancement-id',
            parentPowerId: null,
            characterId: 'character-id',
            type: 'enhancement',
            name: 'Top-level Enhancement',
            description: 'Description for a top-level enhancement',
            cost: 1,
          },
        ],
      },
    };
  });

  describe('when rendered', () => {
    beforeEach(() => {
      testContext.component = renderer.create(renderComponent());
    });

    it('renders a title and grid of powers', () => {
      expect(testContext.component).toMatchSnapshot();
    });
  });

  describe('when className is provided', () => {
    it('renders with extra className', () => {
      expect(renderer.create(renderComponent())).toMatchDiffSnapshot(
        renderer.create(
          renderComponent({
            className: 'mock-class',
          })
        )
      );
    });
  });
});
