import {reducer, defaultState} from '../powers-reducer';

describe('powersReducer', function () {
  describe('when given no action', function () {
    beforeEach(function () {
      this.result = reducer(undefined, {});
    });

    it('should return default state', function () {
      expect(this.result).toEqualImmutable(defaultState);
    });
  });
});
