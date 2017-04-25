import React from 'react';
import Immutable from 'immutable';
import ReactTestRenderer from 'react-test-renderer';
import {MemoryRouter} from 'react-router-dom';
import CharacterSelection from '../';

const characters = Immutable.fromJS({
  abc: {id: 'aj', name: 'Adam Jensen', description: 'Task Force 29 operative.'},
  def: {id: 'sr', name: 'Scott Ryder', description: 'The pathfinder.'}
});

describe('CharacterSelection component', function () {
  beforeEach(function () {
    this.component = ReactTestRenderer.create(
      <MemoryRouter>
        <CharacterSelection characters={characters}></CharacterSelection>
      </MemoryRouter>
    );
  });

  it('renders correctly', function () {
    expect(this.component.toJSON()).toMatchSnapshot();
  });
});
