import React from 'react';
import Immutable from 'immutable';
import { render } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import CharacterSelection from '../';

const characters = Immutable.fromJS({
  abc: {
    id: 'aj',
    name: 'Adam Jensen',
    description: 'Task Force 29 operative.'
  },
  def: { id: 'sr', name: 'Scott Ryder', description: 'The pathfinder.' }
});

describe('CharacterSelection component', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = render(
      <MemoryRouter>
        <CharacterSelection characters={characters}></CharacterSelection>
      </MemoryRouter>
    );
  });

  it('renders correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
