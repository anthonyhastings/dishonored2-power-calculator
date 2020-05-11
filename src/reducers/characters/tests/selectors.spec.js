import Immutable from 'immutable';
import * as selectors from '../selectors';

describe('Characters selectors', () => {
  let testContext;

  beforeEach(() => {
    testContext = {};
  });

  describe('#dataSelector', () => {
    beforeEach(() => {
      testContext.state = Immutable.fromJS({
        data: 'foo-bar',
      });
    });

    it('returns value of corresponding key', () => {
      expect(selectors.dataSelector(testContext.state)).toEqual('foo-bar');
    });
  });

  describe('#requestStatusSelector', () => {
    beforeEach(() => {
      testContext.state = Immutable.fromJS({
        requestStatus: 'foo-bar',
      });
    });

    it('returns value of corresponding key', () => {
      expect(selectors.requestStatusSelector(testContext.state)).toEqual(
        'foo-bar'
      );
    });
  });
});
