import Immutable from 'immutable';
import characterByIdSelector from '../character-by-id';

describe('#characterByIdSelector', function () {
  beforeEach(function () {
    this.state = Immutable.fromJS({
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

    this.expectedCharacter = this.state.getIn(['characters', 'data', 'uuid-02']);
  });

  it('should return appropriate value', function () {
    expect(characterByIdSelector(this.state, 'uuid-02')).toEqualImmutable(this.expectedCharacter);
  });
});
