import renderer from 'react-test-renderer';
import Avatar from '../';
import type { AvatarProps } from '../';

describe('Avatar component', () => {
  let testContext: {
    component?: renderer.ReactTestRenderer;
    defaultProps: AvatarProps;
  };

  const renderComponent = (props = {}) => (
    <Avatar {...testContext.defaultProps} {...props} />
  );

  beforeEach(() => {
    testContext = {
      defaultProps: {
        name: 'Fake Name',
        slug: 'corvo',
      },
    };
  });

  describe('when slug is corvo', () => {
    beforeEach(() => {
      testContext.component = renderer.create(
        renderComponent({ slug: 'corvo' })
      );
    });

    it('renders an image specific to Corvo', () => {
      expect(testContext.component).toMatchSnapshot();
    });
  });

  describe('when slug is emily', () => {
    beforeEach(() => {
      testContext.component = renderer.create(
        renderComponent({
          slug: 'emily',
        })
      );
    });

    it('renders an image specific to Emily', () => {
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
