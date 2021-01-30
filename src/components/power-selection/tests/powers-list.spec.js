import renderer from 'react-test-renderer';
import PowersList from '../powers-list';

describe('PowersList component', () => {
  let testContext;

  const renderComponent = (props = {}) => (
    <PowersList {...testContext.defaultProps} {...props} />
  );

  beforeEach(() => {
    testContext = {};

    testContext.defaultProps = {
      children: 'Test Title',
      powers: [
        { id: 'test-id-01', name: 'Test Name 01' },
        { id: 'test-id-02', name: 'Test Name 02' },
      ],
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
