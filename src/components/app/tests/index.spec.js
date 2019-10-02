import noop from 'lodash/noop';
import React from 'react';
import renderer from 'react-test-renderer';
import App from '../';

jest.mock('react-router-dom', () => ({
  Switch: 'MockSwitch',
  Route: 'MockRoute'
}));

jest.mock(
  'Components/character-selection/lazy',
  () => 'MockCharacterSelection'
);

jest.mock('Components/loader', () => 'MockLoader');

jest.mock('Components/page-not-found/lazy', () => 'MockPageNotFound');

jest.mock('Components/power-selection/lazy', () => 'MockPowerSelection');

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
      showLoader: true
    };
  });

  describe('when rendered', () => {
    beforeEach(() => {
      testContext.onComponentDidMountMock = jest.fn();

      renderer.act(() => {
        testContext.component = renderer.create(
          renderComponent({
            onComponentDidMount: testContext.onComponentDidMountMock
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
