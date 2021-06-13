import requestStatuses from 'constants/request-statuses';
import getPowersSuccessResponse from 'api/sample-responses/get-powers-success';
import { getPowers as getPowersMock } from 'api/powers';
import reducer, { fetchPowers } from '../';

jest.mock('api/powers');

describe('Powers slice', () => {
  let testContext;

  beforeEach(() => {
    testContext = {};
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  describe('reducer cases', () => {
    describe('when given no action', () => {
      it('returns default state', () => {
        expect(reducer(undefined, {})).toEqual({
          requestStatus: requestStatuses.idle,
        });
      });
    });

    describe('when given powers/fetchPowers/pending', () => {
      beforeEach(() => {
        testContext.state = reducer({}, fetchPowers.pending);
      });

      it('sets request status to pending', () => {
        expect(testContext.state).toEqual({
          requestStatus: requestStatuses.pending,
        });
      });
    });

    describe('when given powers/fetchPowers/rejected', () => {
      beforeEach(() => {
        testContext.state = reducer({}, fetchPowers.rejected());
      });

      it('sets request status to failure', () => {
        expect(testContext.state).toEqual({
          requestStatus: requestStatuses.failure,
        });
      });
    });

    describe('when given powers/fetchPowers/fulfilled', () => {
      beforeEach(() => {
        testContext.state = reducer({}, fetchPowers.fulfilled('hello-world'));
      });

      it('stores data and sets request status to success', () => {
        expect(testContext.state).toEqual({
          data: 'hello-world',
          requestStatus: requestStatuses.success,
        });
      });
    });
  });

  describe('action creators', () => {
    describe('#fetchPowers', () => {
      describe('when the request succeeds', () => {
        beforeEach(async () => {
          testContext.mockDispatch = jest.fn();
          getPowersMock.mockResolvedValue({
            data: getPowersSuccessResponse,
          });

          await fetchPowers()(testContext.mockDispatch);
        });

        it('fires a pending action followed by a fulfilled action', () => {
          expect(testContext.mockDispatch.mock.calls).toEqual(
            expect.arrayContaining([
              [expect.objectContaining({ type: fetchPowers.pending.type })],
              [
                expect.objectContaining({
                  type: fetchPowers.fulfilled.type,
                  payload: {
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
                  },
                }),
              ],
            ])
          );
        });
      });

      describe('when the request fails', () => {
        beforeEach(async () => {
          testContext.mockDispatch = jest.fn();
          getPowersMock.mockRejectedValue();

          await fetchPowers()(testContext.mockDispatch);
        });

        it('fires a pending action followed by a rejected action', () => {
          expect(testContext.mockDispatch.mock.calls).toEqual(
            expect.arrayContaining([
              [expect.objectContaining({ type: fetchPowers.pending.type })],
              [expect.objectContaining({ type: fetchPowers.rejected.type })],
            ])
          );
        });
      });
    });
  });
});
