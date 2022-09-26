import renderer from 'react-test-renderer';
import { Button, type ButtonProps } from '../';

jest.mock('react-router-dom', () => ({
  Link: 'MockLink',
}));

describe('Button component', () => {
  let testContext: {
    component?: renderer.ReactTestRenderer;
    defaultProps: ButtonProps;
  };

  const renderComponent = (props = {}) => (
    <Button {...testContext.defaultProps} {...props} />
  );

  beforeEach(() => {
    testContext = {
      defaultProps: {
        children: 'Button Text',
        href: '/fake-link',
      },
    };
  });

  describe('when rendered', () => {
    beforeEach(() => {
      testContext.component = renderer.create(renderComponent());
    });

    it('renders a Link component with appropriate props and children', () => {
      expect(testContext.component).toMatchSnapshot();
    });
  });

  describe('when className is provided', () => {
    it('renders with extra className', () => {
      expect(renderer.create(renderComponent())).toMatchDiffSnapshot(
        renderer.create(
          renderComponent({
            className: 'hello-world',
          })
        )
      );
    });
  });
});
