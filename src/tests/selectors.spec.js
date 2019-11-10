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

  describe('#characterBySlugSelector', () => {
    beforeEach(() => {
      testContext.state = Immutable.fromJS({
        characters: {
          data: {
            testKey: { slug: 'non-matching' },
            fakeKey: { slug: 'matching' }
          }
        }
      });
    });

    it('returns relevant record', () => {
      expect(
        selectors.characterBySlugSelector(testContext.state, 'matching')
      ).toEqual(
        Immutable.Map({
          slug: 'matching'
        })
      );
    });
  });

  describe('#isInitialDataIncompleteSelector', () => {
    describe('when characters request is idle', () => {
      beforeEach(() => {
        testContext.state = Immutable.fromJS({
          characters: {
            requestStatus: requestStatuses.idle
          }
        });
      });

      it('returns true', () => {
        expect(
          selectors.isInitialDataIncompleteSelector(testContext.state)
        ).toEqual(true);
      });
    });

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
          selectors.isInitialDataIncompleteSelector(testContext.state)
        ).toEqual(true);
      });
    });

    describe('when powers request is idle', () => {
      beforeEach(() => {
        testContext.state = Immutable.fromJS({
          powers: {
            requestStatus: requestStatuses.idle
          }
        });
      });

      it('returns true', () => {
        expect(
          selectors.isInitialDataIncompleteSelector(testContext.state)
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
          selectors.isInitialDataIncompleteSelector(testContext.state)
        ).toEqual(true);
      });
    });

    describe('when neither request is pending nor idle', () => {
      beforeEach(() => {
        testContext.state = Immutable.Map();
      });

      it('returns false', () => {
        expect(
          selectors.isInitialDataIncompleteSelector(testContext.state)
        ).toEqual(false);
      });
    });
  });

  describe('#hasInitialDataFailedSelector', () => {
    describe('when characters request is failure', () => {
      beforeEach(() => {
        testContext.state = Immutable.fromJS({
          characters: {
            requestStatus: requestStatuses.failure
          }
        });
      });

      it('returns true', () => {
        expect(
          selectors.hasInitialDataFailedSelector(testContext.state)
        ).toEqual(true);
      });
    });

    describe('when powers request is failure', () => {
      beforeEach(() => {
        testContext.state = Immutable.fromJS({
          powers: {
            requestStatus: requestStatuses.failure
          }
        });
      });

      it('returns true', () => {
        expect(
          selectors.hasInitialDataFailedSelector(testContext.state)
        ).toEqual(true);
      });
    });

    describe('when neither request has failed', () => {
      beforeEach(() => {
        testContext.state = Immutable.Map();
      });

      it('returns false', () => {
        expect(
          selectors.hasInitialDataFailedSelector(testContext.state)
        ).toEqual(false);
      });
    });
  });
});
