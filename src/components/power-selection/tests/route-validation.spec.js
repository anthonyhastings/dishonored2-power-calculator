import renderer from 'react-test-renderer';
import PowerSelectionRouteValidation from '../route-validation';

jest.mock('components/loader', () => 'MockLoader');

jest.mock(
  'components/page-not-found',
  () =>
    function MockPageNotFound() {
      return <mock-page-not-found />;
    }
);

jest.mock('../container', () => 'MockPowerSelection');

describe('PowerSelectionRouteValidation component', () => {
  let testContext;

  const renderComponent = (props = {}) => (
    <PowerSelectionRouteValidation {...testContext.defaultProps} {...props} />
  );

  beforeEach(() => {
    testContext = {};

    testContext.defaultProps = {};
  });

  describe('when character is missing', () => {
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
      testContext.component = renderer.create(
        renderComponent({
          character: {},
        })
      );
    });

    it('renders the PowerSelection component', () => {
      expect(testContext.component).toMatchSnapshot();
    });
  });
});
