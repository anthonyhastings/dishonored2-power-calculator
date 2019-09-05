import React from 'react';
import renderer from 'react-test-renderer';
import Loader from '../';

jest.mock('Components/outsiders-mark', () => 'MockOutsidersMark');

describe('Loader component', () => {
  let testContext;

  const renderComponent = (props = {}) => (
    <Loader {...props}>
      <p>Hello world.</p>
    </Loader>
  );

  beforeEach(() => {
    testContext = {};

    testContext.defaultProps = {
      loadingState: true
    };
  });

  describe('when loading is incomplete', () => {
    beforeEach(() => {
      testContext.component = renderer.create(
        renderComponent({
          ...testContext.defaultProps,
          loadingState: false
        })
      );
    });

    it('renders loading text and an animated OutsidersMark', () => {
      expect(testContext.component).toMatchSnapshot();
    });
  });

  describe('when loading is complete', () => {
    beforeEach(() => {
      testContext.component = renderer.create(
        renderComponent({
          ...testContext.defaultProps,
          loadingState: true
        })
      );
    });

    it('renders children', () => {
      expect(testContext.component).toMatchSnapshot();
    });
  });

  describe('when loading has errored', () => {
    beforeEach(() => {
      testContext.component = renderer.create(
        renderComponent({
          ...testContext.defaultProps,
          loadingState: new Error()
        })
      );
    });

    it('renders error text and an unanimated OutsidersMark', () => {
      expect(testContext.component).toMatchSnapshot();
    });
  });
});
