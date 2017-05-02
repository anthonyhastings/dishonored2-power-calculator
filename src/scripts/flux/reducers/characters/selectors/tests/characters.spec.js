import Immutable from 'immutable';
import charactersSelector from '../characters';

describe('#charactersSelector', function () {
  beforeEach(function () {
    this.state = Immutable.fromJS({
      characters: {
        data: {
          hello: 'world',
          foo: 'bar'
        }
      }
    });
  });

  it('returns all characters', function () {
    expect(charactersSelector(this.state)).toEqualImmutable(this.state.getIn(['characters', 'data']));
  });
});
