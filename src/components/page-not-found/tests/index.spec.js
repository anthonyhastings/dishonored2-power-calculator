import React from 'react';
import renderer from 'react-test-renderer';
import PageNotFound from '../';

jest.mock('Components/outsiders-mark', () => 'MockOutsidersMark');

describe('PageNotFound component', () => {
  let testContext;

  const renderComponent = (props = {}) => <PageNotFound {...props} />;

  beforeEach(() => {
    testContext = {};
  });

  describe('when rendered', () => {
    beforeEach(() => {
      testContext.component = renderer.create(renderComponent());
    });

    it('renders outsiders icon and message', () => {
      expect(testContext.component).toMatchSnapshot();
    });
  });
});