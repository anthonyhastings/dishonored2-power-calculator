import Immutable from 'immutable';
import characterByIdSelector from '../character-by-id';

describe('#characterByIdSelector', () => {
  let state;
  let expectedCharacter;

  beforeEach(() => {
    state = Immutable.fromJS({
      characters: {
        data: {
          'uuid-01': {
            id: 'uuid-01',
            name: 'Corvo'
          },
          'uuid-02': {
            id: 'uuid-02',
            name: 'Emily'
          }
        }
      },
      user: {
        character: 'uuid-02'
      }
    });

    expectedCharacter = state.getIn(['characters', 'data', 'uuid-02']);
  });

  it('should return appropriate value', () => {
    expect(characterByIdSelector(state, 'uuid-02')).toEqual(expectedCharacter);
  });
});
