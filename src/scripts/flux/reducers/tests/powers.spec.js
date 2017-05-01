import {reducer, defaultState} from '../powers';

describe('powersReducer', function () {
  describe('when given no action', function () {
    beforeEach(function () {
      this.result = reducer();
    });

    it('should return default state', function () {
      expect(this.result).toEqualImmutable(defaultState);
    });
  });
});
