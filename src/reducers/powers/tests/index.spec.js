import Immutable from 'immutable';
import getPowersSuccessResponse from 'Api/sample-responses/get-powers-success';
import requestStatuses from 'Constants/request-statuses';
import { getPowers as getPowersMock } from 'Api/powers';
import reducer, {
  GET_POWERS_PENDING,
  GET_POWERS_FAILURE,
  GET_POWERS_SUCCESS,
  getPowers,
  getPowersPending,
  getPowersFailure,
  getPowersSuccess,
} from '../';

jest.mock('Api/powers');

describe('Powers reducer', () => {
  let testContext;

  beforeEach(() => {
    testContext = {};
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  describe('reducer cases', () => {
    describe('when given no action', () => {
      it('should return default state', () => {
        expect(reducer()).toEqual(
          Immutable.Map({
            requestStatus: requestStatuses.idle,
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
            requestStatus: requestStatuses.pending,
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
            requestStatus: requestStatuses.failure,
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
            requestStatus: requestStatuses.success,
          })
        );
      });
    });
  });

  describe('action creators', () => {
    describe('#getPowers', () => {
      describe('when the request succeeds', () => {
        beforeEach(async () => {
          testContext.mockDispatch = jest.fn();
          getPowersMock.mockResolvedValue({
            data: getPowersSuccessResponse,
          });

          await getPowers()(testContext.mockDispatch);
        });

        it('fires a requested action and a success action', () => {
          expect(testContext.mockDispatch.mock.calls).toEqual([
            [{ type: GET_POWERS_PENDING }],
            [
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
                      cost: 1,
                    },
                    'fake-uuid-02': {
                      id: 'fake-uuid-02',
                      parentPowerId: 'fake-parent-power-id-02',
                      characterId: 'fake-character-id-02',
                      type: 'fake-type-02',
                      name: 'fake-name-02',
                      description: 'fake-description-02',
                      cost: 2,
                    },
                  }),
                },
              },
            ],
          ]);
        });
      });

      describe('when the request fails', () => {
        beforeEach(async () => {
          testContext.mockDispatch = jest.fn();
          getPowersMock.mockRejectedValue();

          await getPowers()(testContext.mockDispatch);
        });

        it('fires a requested action and a failure action', () => {
          expect(testContext.mockDispatch.mock.calls).toEqual([
            [{ type: GET_POWERS_PENDING }],
            [{ type: GET_POWERS_FAILURE }],
          ]);
        });
      });
    });

    test('#getPowersPending', () => {
      expect(getPowersPending()).toEqual({
        type: GET_POWERS_PENDING,
      });
    });

    test('#getPowersFailure', () => {
      expect(getPowersFailure()).toEqual({
        type: GET_POWERS_FAILURE,
      });
    });

    test('#getPowersSuccess', () => {
      expect(getPowersSuccess('hello-world')).toEqual({
        type: GET_POWERS_SUCCESS,
        payload: {
          powers: 'hello-world',
        },
      });
    });
  });
});
