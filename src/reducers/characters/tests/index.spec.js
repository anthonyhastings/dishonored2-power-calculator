import Immutable from 'immutable';
import configureMockStore from 'redux-mock-store';
import getCharactersSuccessResponse from 'Api/sample-responses/get-characters-success';
import requestStatuses from 'Constants/request-statuses';
import { middleware } from '../../../store';
import { getCharacters as getCharactersMock } from 'Api/characters';
import reducer, {
  GET_CHARACTERS_PENDING,
  GET_CHARACTERS_FAILURE,
  GET_CHARACTERS_SUCCESS,
  getCharacters,
  getCharactersPending,
  getCharactersFailure,
  getCharactersSuccess,
} from '../';

jest.mock('Api/characters');

describe('Characters reducer', () => {
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

    describe('when given GET_CHARACTERS_PENDING', () => {
      beforeEach(() => {
        testContext.state = reducer(Immutable.Map(), getCharactersPending());
      });

      it('sets request status to pending', () => {
        expect(testContext.state).toEqual(
          Immutable.Map({
            requestStatus: requestStatuses.pending,
          })
        );
      });
    });

    describe('when given GET_CHARACTERS_FAILURE', () => {
      beforeEach(() => {
        testContext.state = reducer(Immutable.Map(), getCharactersFailure());
      });

      it('sets request status to failure', () => {
        expect(testContext.state).toEqual(
          Immutable.Map({
            requestStatus: requestStatuses.failure,
          })
        );
      });
    });

    describe('when given GET_CHARACTERS_SUCCESS', () => {
      beforeEach(() => {
        testContext.state = reducer(
          Immutable.Map(),
          getCharactersSuccess('hello-world')
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
    describe('#getCharacters', () => {
      beforeEach(() => {
        testContext.mockStore = configureMockStore(middleware)();
      });

      describe('when the request triggers', () => {
        beforeEach(async () => {
          getCharactersMock.mockResolvedValue();
          await testContext.mockStore.dispatch(getCharacters());
        });

        it('fires a requested action', () => {
          expect(testContext.mockStore.getActions()[0]).toEqual({
            type: GET_CHARACTERS_PENDING,
          });
        });
      });

      describe('when the request succeeds', () => {
        beforeEach(async () => {
          getCharactersMock.mockResolvedValue({
            data: getCharactersSuccessResponse,
          });

          await testContext.mockStore.dispatch(getCharacters());
        });

        it('fires a requested action and a success action', () => {
          expect(testContext.mockStore.getActions()).toEqual([
            { type: GET_CHARACTERS_PENDING },
            {
              type: GET_CHARACTERS_SUCCESS,
              payload: {
                characters: Immutable.fromJS({
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
                }),
              },
            },
          ]);
        });
      });

      describe('when the request fails', () => {
        beforeEach(async () => {
          getCharactersMock.mockRejectedValue();
          await testContext.mockStore.dispatch(getCharacters());
        });

        it('fires a requested action and a failure action', () => {
          expect(testContext.mockStore.getActions()).toEqual([
            { type: GET_CHARACTERS_PENDING },
            {
              type: GET_CHARACTERS_FAILURE,
            },
          ]);
        });
      });
    });

    test('#getCharactersPending', () => {
      expect(getCharactersPending()).toEqual({
        type: GET_CHARACTERS_PENDING,
      });
    });

    test('#getCharactersFailure', () => {
      expect(getCharactersFailure()).toEqual({
        type: GET_CHARACTERS_FAILURE,
      });
    });

    test('#getCharactersSuccess', () => {
      expect(getCharactersSuccess('hello-world')).toEqual({
        type: GET_CHARACTERS_SUCCESS,
        payload: {
          characters: 'hello-world',
        },
      });
    });
  });
});
