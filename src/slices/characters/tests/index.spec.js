import requestStatuses from 'constants/request-statuses';
import getCharactersSuccessResponse from 'api/sample-responses/get-characters-success';
import { getCharacters as getCharactersMock } from 'api/characters';
import reducer, { fetchCharacters } from '../';

jest.mock('api/characters');

describe('Characters slice', () => {
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

    describe('when given characters/fetchCharacters/pending', () => {
      beforeEach(() => {
        testContext.state = reducer({}, fetchCharacters.pending);
      });

      it('sets request status to pending', () => {
        expect(testContext.state).toEqual({
          requestStatus: requestStatuses.pending,
        });
      });
    });

    describe('when given characters/fetchCharacters/rejected', () => {
      beforeEach(() => {
        testContext.state = reducer({}, fetchCharacters.rejected);
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
          {},
          fetchCharacters.fulfilled('hello-world')
        );
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
    describe('#fetchCharacters', () => {
      describe('when the request succeeds', () => {
        beforeEach(async () => {
          testContext.mockDispatch = jest.fn();
          getCharactersMock.mockResolvedValue({
            data: getCharactersSuccessResponse,
          });

          await fetchCharacters()(testContext.mockDispatch);
        });

        it('fires a pending action followed by a fulfilled action', () => {
          expect(testContext.mockDispatch.mock.calls).toEqual(
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
          getCharactersMock.mockRejectedValue();

          await fetchCharacters()(testContext.mockDispatch);
        });

        it('fires a pending action followed by a rejected action', () => {
          expect(testContext.mockDispatch.mock.calls).toEqual(
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
