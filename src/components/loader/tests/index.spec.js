import React from 'react';
import { render } from 'enzyme';
import Loader from '../';

const renderLoader = function(props) {
  return (
    <Loader {...props}>
      <p>Hello World</p>
    </Loader>
  );
};

describe('Loader component', () => {
  describe('when loading is incomplete', () => {
    let wrapper;

    beforeEach(() => {
      const loader = renderLoader({ loadingState: false });

      wrapper = render(loader);
    });

    it('renders the loaders default content', () => {
      expect(wrapper).toMatchSnapshot();
    });
  });

  describe('when loading is complete', () => {
    let wrapper;

    beforeEach(() => {
      const loader = renderLoader({ loadingState: true });

      wrapper = render(loader);
    });

    it('renders the loaders children', () => {
      expect(wrapper).toMatchSnapshot();
    });
  });

  describe('when loading has errored', () => {
    let wrapper;

    beforeEach(() => {
      const loader = renderLoader({ loadingState: new Error() });

      wrapper = render(loader);
    });

    it('renders the loaders error children', () => {
      expect(wrapper).toMatchSnapshot();
    });
  });
});
