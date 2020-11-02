import renderer from 'react-test-renderer';
import Avatar from '../';

jest.mock(
  'Constants/character-slug-to-portrait',
  () => new Map([['mock-slug', 'mock-src']])
);

describe('Avatar component', () => {
  let testContext;

  const renderComponent = (props = {}) => (
    <Avatar {...testContext.defaultProps} {...props} />
  );

  beforeEach(() => {
    testContext = {};

    testContext.defaultProps = {
      name: 'Fake Name',
      slug: 'mock-slug',
    };
  });

  describe('when rendered', () => {
    beforeEach(() => {
      testContext.component = renderer.create(renderComponent());
    });

    it('renders a wrapping element containing an image', () => {
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
