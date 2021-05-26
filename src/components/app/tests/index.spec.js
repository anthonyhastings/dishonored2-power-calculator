import noop from 'lodash/noop';
import renderer from 'react-test-renderer';
import App from '../';

jest.mock('react-router-dom', () => ({
  Switch: 'MockSwitch',
  Route: 'MockRoute',
  Link: 'MockLink',
}));

jest.mock(
  'components/character-selection/container',
  () =>
    function MockCharacterSelection() {
      return <mock-character-selection />;
    }
);

jest.mock('components/loader', () => 'MockLoader');

jest.mock(
  'components/page-not-found',
  () =>
    function MockPageNotFound() {
      return <mock-page-not-found />;
    }
);

jest.mock(
  'components/power-selection/container/route-validation',
  () =>
    function MockPowerSelectionRouteValidation() {
      return <mock-power-selection-route-validation />;
    }
);

describe('App component', () => {
  let testContext;

  const renderComponent = (props) => (
    <App {...testContext.defaultProps} {...props} />
  );

  beforeEach(() => {
    testContext = {};

    testContext.defaultProps = {
      onComponentDidMount: noop,
      showError: false,
      showLoader: true,
    };
  });

  describe('when rendered', () => {
    beforeEach(async () => {
      testContext.onComponentDidMountMock = jest.fn();

      await renderer.act(async () => {
        testContext.component = renderer.create(
          renderComponent({
            onComponentDidMount: testContext.onComponentDidMountMock,
          })
        );
      });
    });

    it('renders a header area and top-level routes', () => {
      expect(testContext.component).toMatchSnapshot();
    });

    it('triggers prop callback on mounting', () => {
      expect(testContext.onComponentDidMountMock).toHaveBeenCalledTimes(1);
    });
  });
});
