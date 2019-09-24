import Immutable from 'immutable';
import * as selectors from '../selectors';
import requestStatuses from 'Constants/request-statuses';

describe('Selectors', () => {
  let testContext;

  beforeEach(() => {
    testContext = {};
  });

  describe('#charactersDataSelector', () => {
    beforeEach(() => {
      testContext.state = Immutable.fromJS({
        characters: {
          data: 'hello world'
        }
      });
    });

    it('returns expected state', () => {
      expect(selectors.charactersDataSelector(testContext.state)).toEqual(
        'hello world'
      );
    });
  });

  describe('#isInitialDataLoadingSelector', () => {
    describe('when characters request is pending', () => {
      beforeEach(() => {
        testContext.state = Immutable.fromJS({
          characters: {
            requestStatus: requestStatuses.pending
          }
        });
      });

      it('returns true', () => {
        expect(
          selectors.isInitialDataLoadingSelector(testContext.state)
        ).toEqual(true);
      });
    });

    describe('when powers request is pending', () => {
      beforeEach(() => {
        testContext.state = Immutable.fromJS({
          powers: {
            requestStatus: requestStatuses.pending
          }
        });
      });

      it('returns true', () => {
        expect(
          selectors.isInitialDataLoadingSelector(testContext.state)
        ).toEqual(true);
      });
    });

    describe('when neither request is pending', () => {
      beforeEach(() => {
        testContext.state = Immutable.Map();
      });

      it('returns false', () => {
        expect(
          selectors.isInitialDataLoadingSelector(testContext.state)
        ).toEqual(false);
      });
    });
  });
});
