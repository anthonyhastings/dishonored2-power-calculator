import React from 'react';
import Immutable from 'immutable';
import renderer from 'react-test-renderer';
import CharacterSelection from '../';

jest.mock('react-router-dom', () => ({
  Link: 'MockLink'
}));

describe('CharacterSelection component', () => {
  let testContext;

  const renderComponent = (props = {}) => <CharacterSelection {...props} />;

  beforeEach(() => {
    testContext = {};

    testContext.defaultProps = {
      characters: Immutable.fromJS({
        dummyUuid: {
          id: 'dummy-id',
          slug: 'dummy-slug',
          name: 'Adam Jensen',
          description: 'Task Force 29 operative.'
        },
        fakeUuid: {
          id: 'fake-id',
          slug: 'fake-slug',
          name: 'Scott Ryder',
          description: 'The pathfinder.'
        }
      })
    };
  });

  describe('when rendered', () => {
    beforeEach(() => {
      testContext.component = renderer.create(
        renderComponent(testContext.defaultProps)
      );
    });

    it('renders a heading with sub-areas for each character', () => {
      expect(testContext.component).toMatchSnapshot();
    });
  });
});
