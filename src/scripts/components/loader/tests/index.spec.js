import React from 'react';
import {render} from 'enzyme';
import Loader from '../';

const renderLoader = function (props) {
  return (
    <Loader {...props}>
      <p>Hello World</p>
    </Loader>
  );
};

describe('Loader component', function () {
  describe('when loading is incomplete', function () {
    beforeEach(function () {
      const loader = renderLoader();

      this.wrapper = render(loader);
    });

    it('renders the loaders default content', function () {
      expect(this.wrapper).toMatchSnapshot();
    });
  });

  describe('when loading is complete', function () {
    beforeEach(function () {
      const loader = renderLoader({loaded: true});

      this.wrapper = render(loader);
    });

    it('renders the loaders children', function () {
      expect(this.wrapper).toMatchSnapshot();
    });
  });

  describe('when loading has errored', function () {
    beforeEach(function () {
      const loader = renderLoader({loaded: new Error()});

      this.wrapper = render(loader);
    });

    it('renders the loaders error children', function () {
      expect(this.wrapper).toMatchSnapshot();
    });
  });
});
