import React from 'react';
import renderer from 'react-test-renderer';
import Button from '../';

jest.mock('react-router-dom', () => ({
  Link: 'MockLink',
}));

describe('Button component', () => {
  let testContext;

  const renderComponent = (props = {}) => (
    <Button {...testContext.defaultProps} {...props} />
  );

  beforeEach(() => {
    testContext = {};

    testContext.defaultProps = {
      children: 'Button Text',
      href: '/fake-link',
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
});
