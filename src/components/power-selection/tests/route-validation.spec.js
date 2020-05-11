import React from 'react';
import Immutable from 'immutable';
import renderer from 'react-test-renderer';
import PowerSelectionRouteValidation from '../route-validation';

jest.mock('Components/page-not-found/lazy', () => 'MockPageNotFound');

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
    beforeEach(() => {
      testContext.component = renderer.create(renderComponent());
    });

    it('renders the PageNotFound component', () => {
      expect(testContext.component).toMatchSnapshot();
    });
  });

  describe('when character is present', () => {
    beforeEach(() => {
      testContext.component = renderer.create(
        renderComponent({
          character: Immutable.Map(),
        })
      );
    });

    it('renders the PowerSelection component', () => {
      expect(testContext.component).toMatchSnapshot();
    });
  });
});
