import Immutable from 'immutable';
import configureMockStore from 'redux-mock-store';
import getPowersSuccessResponse from 'Api/sample-responses/get-powers-success';
import requestStatuses from 'Constants/request-statuses';
import { middleware } from '../../../store';
import { getPowers as getPowersMock } from 'Api/powers';
import reducer, {
  GET_POWERS_PENDING,
  GET_POWERS_FAILURE,
  GET_POWERS_SUCCESS,
  getPowers,
  getPowersPending,
  getPowersFailure,
  getPowersSuccess
} from '../';

jest.mock('Api/powers', () => ({
  getPowers: jest.fn()
}));

describe('Powers reducer', () => {
  let testContext;

  beforeEach(() => {
    testContext = {};
  });

  describe('when given no action', () => {
    it('should return default state', () => {
      expect(reducer()).toEqual(
        Immutable.Map({
          requestStatus: requestStatuses.idle
        })
      );
    });
  });

  describe('when given GET_POWERS_PENDING', () => {
    beforeEach(() => {
      testContext.state = reducer(Immutable.Map(), getPowersPending());
    });

    it('sets request status to pending', () => {
      expect(testContext.state).toEqual(
        Immutable.Map({
          requestStatus: requestStatuses.pending
        })
      );
    });
  });

  describe('when given GET_POWERS_FAILURE', () => {
    beforeEach(() => {
      testContext.state = reducer(Immutable.Map(), getPowersFailure());
    });

    it('sets request status to failure', () => {
      expect(testContext.state).toEqual(
        Immutable.Map({
          requestStatus: requestStatuses.failure
        })
      );
    });
  });

  describe('when given GET_POWERS_SUCCESS', () => {
    beforeEach(() => {
      testContext.state = reducer(
        Immutable.Map(),
        getPowersSuccess('hello-world')
      );
    });

    it('stores data and sets request status to success', () => {
      expect(testContext.state).toEqual(
        Immutable.Map({
          data: 'hello-world',
          requestStatus: requestStatuses.success
        })
      );
    });
  });
});

describe('Powers action creators', () => {
  let testContext;

  beforeEach(() => {
    testContext = {};
  });

  describe('#getPowers', () => {
    beforeEach(() => {
      testContext.mockStore = configureMockStore(middleware)();
    });

    afterEach(() => {
      getPowersMock.mockReset();
    });

    describe('when the request triggers', () => {
      beforeEach(() => {
        getPowersMock.mockReturnValue(Promise.resolve());
        testContext.mockStore.dispatch(getPowers());
      });

      it('fires a requested action', () => {
        expect(testContext.mockStore.getActions()[0]).toEqual({
          type: GET_POWERS_PENDING
        });
      });
    });

    describe('when the request succeeds', () => {
      beforeEach(() => {
        getPowersMock.mockReturnValue(
          Promise.resolve({
            data: getPowersSuccessResponse
          })
        );
        testContext.mockStore.dispatch(getPowers());
      });

      it('fires a requested action and a success action', () => {
        expect(testContext.mockStore.getActions()).toEqual([
          { type: GET_POWERS_PENDING },
          {
            type: GET_POWERS_SUCCESS,
            payload: {
              powers: Immutable.fromJS({
                'fake-uuid-01': {
                  id: 'fake-uuid-01',
                  parentPowerId: 'fake-parent-power-id-01',
                  characterId: 'fake-character-id-01',
                  type: 'fake-type-01',
                  name: 'fake-name-01',
                  description: 'fake-description-01',
                  cost: 1
                },
                'fake-uuid-02': {
                  id: 'fake-uuid-02',
                  parentPowerId: 'fake-parent-power-id-02',
                  characterId: 'fake-character-id-02',
                  type: 'fake-type-02',
                  name: 'fake-name-02',
                  description: 'fake-description-02',
                  cost: 2
                }
              })
            }
          }
        ]);
      });
    });

    describe('when the request fails', () => {
      beforeEach(() => {
        getPowersMock.mockReturnValue(Promise.reject());
        testContext.mockStore.dispatch(getPowers());
      });

      it('fires a requested action and a failure action', () => {
        expect(testContext.mockStore.getActions()).toEqual([
          { type: GET_POWERS_PENDING },
          {
            type: GET_POWERS_FAILURE,
            error: true
          }
        ]);
      });
    });
  });

  describe('#getPowersPending', () => {
    it('creates an action', () => {
      expect(getPowersPending()).toEqual({
        type: GET_POWERS_PENDING
      });
    });
  });

  describe('#getPowersFailure', () => {
    it('creates an action', () => {
      expect(getPowersFailure()).toEqual({
        type: GET_POWERS_FAILURE,
        error: true
      });
    });
  });

  describe('#getPowersSuccess', () => {
    it('creates an action', () => {
      expect(getPowersSuccess('hello-world')).toEqual({
        type: GET_POWERS_SUCCESS,
        payload: {
          powers: 'hello-world'
        }
      });
    });
  });
});
