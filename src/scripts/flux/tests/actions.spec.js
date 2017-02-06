import * as actions from '../actions';

describe('flux actions', function () {
  describe('setCharacter', function () {
    describe('should create an action object', function () {
      beforeEach(function () {
        this.action = actions.setCharacter('emily');
      });

      it('with the correct action type', function () {
        expect(this.action.type).toEqual('SET_CHARACTER');
      });

      it('with the correct character', function () {
        expect(this.action.character).toEqual('emily');
      });
    });
  });
});
