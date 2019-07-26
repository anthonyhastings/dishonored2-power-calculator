import Immutable from 'immutable';
import charactersSelector from '../characters';

describe('#charactersSelector', () => {
  let state;

  beforeEach(() => {
    state = Immutable.fromJS({
      characters: {
        data: {
          hello: 'world',
          foo: 'bar'
        }
      }
    });
  });

  it('returns all characters', () => {
    expect(charactersSelector(state)).toEqual(
      state.getIn(['characters', 'data'])
    );
  });
});
