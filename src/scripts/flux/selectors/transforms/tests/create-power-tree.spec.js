import Immutable from 'immutable';
import {defaultState as powersAndEnhancements} from '../../../reducers/powers';
import createPowerTree from '../create-power-tree';

describe('Create power tree', function () {
  describe('when given a non-existent power', function () {
    it('returns an empty list', function () {
      expect(createPowerTree(
        powersAndEnhancements,
        'abcdef'
      )).toEqualImmutable(Immutable.List([]));
    });
  });

  describe('when a power has no children', function () {
    it('returns an empty list', function () {
      expect(createPowerTree(
        powersAndEnhancements,
        '6229d272-6b03-467a-82ec-00993c642570'
      )).toEqualImmutable(Immutable.List([]));
    });
  });

  describe('when a power has children', function () {
    beforeEach(function () {
      this.expectedResponse = Immutable.List([
        powersAndEnhancements.get('4499082e-9cdc-4828-8d18-40aea0b2970b').set('children', Immutable.List([])),
        powersAndEnhancements.get('6229d272-6b03-467a-82ec-00993c642570').set('children', Immutable.List([]))
      ]);
    });

    it('returns them in a list', function () {
      expect(createPowerTree(
        powersAndEnhancements,
        '39334a1e-2883-4722-af71-d3286d94b6e7'
      )).toEqualImmutable(this.expectedResponse);
    });
  });
});
