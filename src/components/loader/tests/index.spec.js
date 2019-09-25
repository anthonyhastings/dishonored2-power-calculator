import React from 'react';
import renderer from 'react-test-renderer';
import Loader from '../';

jest.mock('Components/outsiders-mark', () => 'MockOutsidersMark');

describe('Loader component', () => {
  let testContext;

  const renderComponent = (props) => (
    <Loader {...props}>
      <p>Hello world.</p>
    </Loader>
  );

  beforeEach(() => {
    testContext = {};
  });

  describe('when showError is true', () => {
    beforeEach(() => {
      testContext.component = renderer.create(
        renderComponent({
          showError: true
        })
      );
    });

    it('renders error text and an inanimate OutsidersMark', () => {
      expect(testContext.component).toMatchSnapshot();
    });
  });

  describe('when showLoader is true', () => {
    beforeEach(() => {
      testContext.component = renderer.create(
        renderComponent({
          showLoader: true
        })
      );
    });

    it('renders loading text and an animated OutsidersMark', () => {
      expect(testContext.component).toMatchSnapshot();
    });
  });

  describe('when neither showError or showLoader is true', () => {
    beforeEach(() => {
      testContext.component = renderer.create(
        renderComponent({
          showError: false,
          showLoader: false
        })
      );
    });

    it('renders children', () => {
      expect(testContext.component).toMatchSnapshot();
    });
  });
});
