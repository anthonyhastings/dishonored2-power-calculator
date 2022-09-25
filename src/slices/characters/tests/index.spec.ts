import type { AnyAction } from '@reduxjs/toolkit';
import { server, rest } from '../../../../support/tests/mock-server';
import reducer, {
  getDefaultState,
  CharactersState,
  fetchCharacters,
} from '../';
import requestStatuses from '@/constants/request-statuses';

describe('Characters slice', () => {
  let testContext: {
    mockDispatch?: jest.Mock;
    state?: CharactersState;
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

    describe('when given characters/fetchCharacters/pending', () => {
      beforeEach(() => {
        testContext.state = reducer(getDefaultState(), fetchCharacters.pending);
      });

      it('sets request status to pending', () => {
        expect(testContext.state).toEqual({
          requestStatus: requestStatuses.pending,
        });
      });
    });

    describe('when given characters/fetchCharacters/rejected', () => {
      beforeEach(() => {
        testContext.state = reducer(
          getDefaultState(),
          fetchCharacters.rejected
        );
      });

      it('sets request status to failure', () => {
        expect(testContext.state).toEqual({
          requestStatus: requestStatuses.failure,
        });
      });
    });

    describe('when given characters/fetchCharacters/fulfilled', () => {
      beforeEach(() => {
        testContext.state = reducer(
          getDefaultState(),
          fetchCharacters.fulfilled(
            {
              fakeUuid: {
                id: 'fake-character-uuid',
                description: 'this is a fake character',
                name: 'fake character',
                slug: 'corvo',
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
              id: 'fake-character-uuid',
              description: 'this is a fake character',
              name: 'fake character',
              slug: 'corvo',
            },
          },
          requestStatus: requestStatuses.success,
        });
      });
    });
  });

  describe('action creators', () => {
    describe('#fetchCharacters', () => {
      describe('when the request succeeds', () => {
        beforeEach(async () => {
          testContext.mockDispatch = jest.fn();

          await fetchCharacters()(
            testContext.mockDispatch,
            () => 'get-state',
            ''
          );
        });

        it('fires a pending action followed by a fulfilled action', () => {
          expect(testContext.mockDispatch?.mock.calls).toEqual(
            expect.arrayContaining([
              [expect.objectContaining({ type: fetchCharacters.pending.type })],
              [
                expect.objectContaining({
                  type: fetchCharacters.fulfilled.type,
                  payload: {
                    'fake-uuid-01': {
                      id: 'fake-uuid-01',
                      slug: 'fake-slug-01',
                      name: 'fake-name-01',
                      description: 'fake-description-01',
                    },
                    'fake-uuid-02': {
                      id: 'fake-uuid-02',
                      slug: 'fake-slug-02',
                      name: 'fake-name-02',
                      description: 'fake-description-02',
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
            rest.get(/\/characters.json/, async (req, res, ctx) => {
              return res(ctx.status(500));
            })
          );

          await fetchCharacters()(
            testContext.mockDispatch,
            () => 'get-state',
            ''
          );
        });

        it('fires a pending action followed by a rejected action', () => {
          expect(testContext.mockDispatch?.mock.calls).toEqual(
            expect.arrayContaining([
              [
                expect.objectContaining({
                  type: fetchCharacters.pending.type,
                }),
              ],
              [
                expect.objectContaining({
                  type: fetchCharacters.rejected.type,
                }),
              ],
            ])
          );
        });
      });
    });
  });
});
