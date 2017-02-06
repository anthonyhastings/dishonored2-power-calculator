import {reducer, defaultState} from '../user-reducer';
import * as actions from '../../actions';

describe('userReducer', function () {
  describe('when given no action', function () {
    beforeEach(function () {
      this.result = reducer(undefined, {});
    });

    it('should return default state', function () {
      expect(this.result).toEqualImmutable(defaultState);
    });
  });

  describe('when given an action to set character', function () {
    beforeEach(function () {
      this.characterAction = actions.setCharacter('emily');
      this.initialState = defaultState;
      this.expectedState = this.initialState.set('character', 'emily');
      this.result = reducer(this.initialState, this.characterAction);
    });

    it('should update the character', function () {
      expect(this.result).toEqualImmutable(this.expectedState);
    });
  });
});
