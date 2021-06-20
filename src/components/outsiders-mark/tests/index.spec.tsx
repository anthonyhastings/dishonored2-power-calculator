import renderer from 'react-test-renderer';
import OutsidersMark from '../';

describe('OutsidersMark component', () => {
  let testContext: {
    component?: renderer.ReactTestRenderer;
  };

  const renderComponent = (props = {}) => <OutsidersMark {...props} />;

  beforeEach(() => {
    testContext = {};
  });

  describe('when rendered', () => {
    beforeEach(() => {
      testContext.component = renderer.create(renderComponent());
    });

    it('renders with no modifier class or provided class', () => {
      expect(testContext.component).toMatchSnapshot();
    });
  });

  describe('when animated is true', () => {
    beforeEach(() => {
      testContext.component = renderer.create(
        renderComponent({
          animated: true,
        })
      );
    });

    it('renders with modifier class', () => {
      expect(testContext.component).toMatchSnapshot();
    });
  });

  describe('when className is provided', () => {
    beforeEach(() => {
      testContext.component = renderer.create(
        renderComponent({
          className: 'hello-world',
        })
      );
    });

    it('renders with extra className', () => {
      expect(testContext.component).toMatchSnapshot();
    });
  });
});
