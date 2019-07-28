import React from 'react';
import renderer from 'react-test-renderer';
import Loader from '../';

describe('Loader component', () => {
  let testContext;

  const renderComponent = (props = {}) => {
    return (
      <Loader {...props}>
        <p>Hello world.</p>
      </Loader>
    );
  };

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

    it('renders the loader', () => {
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

    it('renders the loaders children', () => {
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

    it('renders the loaders error children', () => {
      expect(testContext.component).toMatchSnapshot();
    });
  });
});
