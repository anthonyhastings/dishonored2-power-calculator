import type { AnyAction } from '@reduxjs/toolkit';
import { server, rest } from '../../../../support/tests/mock-server';
import reducer, { fetchPowers, getDefaultState, PowersState } from '../';
import requestStatuses from '@/constants/request-statuses';

describe('Powers slice', () => {
  let testContext: {
    mockDispatch?: jest.Mock;
    state?: PowersState;
  };

  beforeEach(() => {
    testContext = {};
  });

  describe('reducer cases', () => {
    describe('when given no action', () => {
      beforeEach(() => {
        testContext.state = reducer(getDefaultState(), {} as AnyAction);
      });

      it('returns default state', () => {
        expect(testContext.state).toEqual({
          requestStatus: requestStatuses.idle,
        });
      });
    });

    describe('when given powers/fetchPowers/pending', () => {
      beforeEach(() => {
        testContext.state = reducer(getDefaultState(), fetchPowers.pending);
      });

      it('sets request status to pending', () => {
        expect(testContext.state).toEqual({
          requestStatus: requestStatuses.pending,
        });
      });
    });

    describe('when given powers/fetchPowers/rejected', () => {
      beforeEach(() => {
        testContext.state = reducer(getDefaultState(), fetchPowers.rejected);
      });

      it('sets request status to failure', () => {
        expect(testContext.state).toEqual({
          requestStatus: requestStatuses.failure,
        });
      });
    });

    describe('when given powers/fetchPowers/fulfilled', () => {
      beforeEach(() => {
        testContext.state = reducer(
          getDefaultState(),
          fetchPowers.fulfilled(
            {
              fakeUuid: {
                id: 'fake-power-uuid',
                parentPowerId: 'fake-parent-power-uuid',
                characterId: null,
                type: 'power',
                name: 'fake power',
                description: 'this is a fake power',
                cost: 5,
              },
            },
            'fake-request-id'
          )
        );
      });

      it('stores data and sets request status to success', () => {
        expect(testContext.state).toEqual({
          data: {
            fakeUuid: {
              id: 'fake-power-uuid',
              parentPowerId: 'fake-parent-power-uuid',
              characterId: null,
              type: 'power',
              name: 'fake power',
              description: 'this is a fake power',
              cost: 5,
            },
          },
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

          await fetchPowers()(testContext.mockDispatch, () => 'get-state', '');
        });

        it('fires a pending action followed by a fulfilled action', () => {
          expect(testContext.mockDispatch?.mock.calls).toEqual(
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

          server.use(
            rest.get(/\/powers.json/, async (req, res, ctx) => {
              return res(ctx.status(500));
            })
          );

          await fetchPowers()(testContext.mockDispatch, () => 'get-state', '');
        });

        it('fires a pending action followed by a rejected action', () => {
          expect(testContext.mockDispatch?.mock.calls).toEqual(
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
