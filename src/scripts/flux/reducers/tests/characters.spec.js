import {reducer, defaultState} from '../characters';

describe('charactersReducer', function () {
  describe('when given no action', function () {
    beforeEach(function () {
      this.result = reducer();
    });

    it('should return default state', function () {
      expect(this.result).toEqualImmutable(defaultState);
    });
  });
});
