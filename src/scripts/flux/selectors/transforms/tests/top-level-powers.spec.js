import Immutable from 'immutable';
import filterTopLevel from '../../utils/filter-top-level';
import topLevelPowers from '../top-level-powers';

jest.mock('../../utils/filter-top-level');

describe('Top level powers', function () {
  beforeEach(function () {
    this.powers = Immutable.fromJS({
      'uuid-01': {
        name: 'Power #01'
      },
      'uuid-02': {
        name: 'Power #02'
      }
    });
  });

  describe('when called with powers', function () {
    it('should trigger filterTopLevel with correct arguments', function () {
      topLevelPowers(this.powers);
      expect(filterTopLevel.mock.calls.length).toEqual(1);
      expect(filterTopLevel.mock.calls[0][0]).toEqualImmutable(this.powers);
      expect(filterTopLevel.mock.calls[0][1]).toEqual('power');
    });
  });
});
