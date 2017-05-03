import Immutable from 'immutable';
import {defaultState as powersAndEnhancementsDefaultState} from '../../';
import {defaultState as userDefaultState} from '../../../user';
import flattenedPowerTreeIdsSelector from '../flattened-power-tree-ids';

describe('#flattenedPowerTreeIdsSelector', function () {
  beforeEach(function () {
    this.state = Immutable.fromJS({
      powers: powersAndEnhancementsDefaultState,
      user: userDefaultState
    });
  });

  describe('when using a power with no children', function () {
    beforeEach(function () {
      this.selectorReturnValue = flattenedPowerTreeIdsSelector(this.state, '6229d272-6b03-467a-82ec-00993c642570');
      this.expectedResponse = Immutable.fromJS(['6229d272-6b03-467a-82ec-00993c642570']);
    });

    it('returns list with original power id', function () {
      expect(this.selectorReturnValue).toEqualImmutable(this.expectedResponse);
    });
  });

  describe('when using a power with children', function () {
    beforeEach(function () {
      this.selectorReturnValue = flattenedPowerTreeIdsSelector(this.state, '39334a1e-2883-4722-af71-d3286d94b6e7');

      this.expectedResponse = Immutable.fromJS([
        '39334a1e-2883-4722-af71-d3286d94b6e7',
        '4499082e-9cdc-4828-8d18-40aea0b2970b',
        '6229d272-6b03-467a-82ec-00993c642570'
      ]);
    });

    it('returns list with original power id and child power id\'s', function () {
      expect(this.selectorReturnValue).toEqualImmutable(this.expectedResponse);
    });
  });
});
