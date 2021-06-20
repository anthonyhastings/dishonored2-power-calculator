import requestStatuses from 'constants/request-statuses';
import produce from 'immer';
import type { RootState } from 'store';
import * as selectors from '../selectors';

describe('Selectors', () => {
  let storeState: RootState;

  const getDefaultStoreState = (): RootState => ({
    characters: {
      requestStatus: requestStatuses.idle,
    },
    powers: {
      requestStatus: requestStatuses.idle,
    },
  });

  describe('#charactersDataSelector', () => {
    beforeEach(() => {
      storeState = produce(getDefaultStoreState(), (nextState) => {
        nextState.characters.data = {
          fakeId: {
            description: 'Fake description',
            id: 'fake-id',
            name: 'Fake name',
            slug: 'corvo',
          },
        };
      });
    });

    it('returns expected state', () => {
      expect(selectors.charactersDataSelector(storeState)).toEqual({
        fakeId: {
          description: 'Fake description',
          id: 'fake-id',
          name: 'Fake name',
          slug: 'corvo',
        },
      });
    });
  });

  describe('#isInitialDataIncompleteSelector', () => {
    describe.each([
      [requestStatuses.success, requestStatuses.success, false],
      [requestStatuses.idle, requestStatuses.success, true],
      [requestStatuses.success, requestStatuses.idle, true],
      [requestStatuses.idle, requestStatuses.idle, true],
    ])(
      'when character request is %s and powers request is %s',
      (charactersStatus, powersStatus, result) => {
        beforeEach(() => {
          storeState = produce(getDefaultStoreState(), (nextState) => {
            nextState.characters.requestStatus = charactersStatus;
            nextState.powers.requestStatus = powersStatus;
          });
        });

        it(`returns ${result}`, () => {
          expect(selectors.isInitialDataIncompleteSelector(storeState)).toEqual(
            result
          );
        });
      }
    );
  });

  describe('#hasInitialDataFailedSelector', () => {
    describe.each([
      [requestStatuses.idle, requestStatuses.idle, false],
      [requestStatuses.failure, requestStatuses.idle, true],
      [requestStatuses.idle, requestStatuses.failure, true],
      [requestStatuses.failure, requestStatuses.failure, true],
    ])(
      'when character request is %s and powers request is %s',
      (charactersStatus, powersStatus, result) => {
        beforeEach(() => {
          storeState = produce(getDefaultStoreState(), (nextState) => {
            nextState.characters.requestStatus = charactersStatus;
            nextState.powers.requestStatus = powersStatus;
          });
        });

        it(`returns ${result}`, () => {
          expect(selectors.hasInitialDataFailedSelector(storeState)).toEqual(
            result
          );
        });
      }
    );
  });

  describe('#characterBySlugSelector', () => {
    beforeEach(() => {
      storeState = produce(getDefaultStoreState(), (nextState) => {
        nextState.characters.data = {
          testKey: {
            id: 'test-key',
            description: 'Fake description',
            name: 'Corvo',
            slug: 'corvo',
          },
          fakeKey: {
            id: 'fake-key',
            description: 'Fake description',
            name: 'Emily',
            slug: 'emily',
          },
        };
      });
    });

    it('returns relevant record', () => {
      expect(selectors.characterBySlugSelector(storeState, 'corvo')).toEqual({
        id: 'test-key',
        description: 'Fake description',
        name: 'Corvo',
        slug: 'corvo',
      });
    });
  });

  describe('#topLevelEnhancementsSelector', () => {
    beforeEach(() => {
      storeState = produce(getDefaultStoreState(), (nextState) => {
        nextState.powers.data = {
          testKey: {
            id: 'testKey',
            characterId: null,
            parentPowerId: null,
            type: 'enhancement',
            description: 'Fake description',
            name: 'Top-level Enhancement',
            cost: 1,
          },
          fakeKey: {
            id: 'fakeKey',
            characterId: null,
            parentPowerId: 'testKey',
            type: 'enhancement',
            description: 'Fake description',
            name: 'Sub-level Enhancement',
            cost: 1,
          },
          dummyKey: {
            id: 'dummyKey',
            characterId: null,
            parentPowerId: null,
            type: 'power',
            description: 'Fake description',
            name: 'Top-level Power',
            cost: 1,
          },
        };
      });
    });

    it('returns an array of top level enhancements', () => {
      expect(selectors.topLevelEnhancementsSelector(storeState)).toEqual([
        {
          id: 'testKey',
          characterId: null,
          parentPowerId: null,
          type: 'enhancement',
          description: 'Fake description',
          name: 'Top-level Enhancement',
          cost: 1,
        },
      ]);
    });
  });

  describe('#topLevelPowersByCharacterSlugSelector', () => {
    beforeEach(() => {
      storeState = produce(getDefaultStoreState(), (nextState) => {
        nextState.characters.data = {
          'character-123': {
            id: 'character-123',
            slug: 'corvo',
            description: 'Fake description',
            name: 'Corvo',
          },
        };

        nextState.powers.data = {
          'power-1': {
            id: 'power-1',
            characterId: null,
            parentPowerId: null,
            type: 'power',
            name: 'Top-level Generic Power',
            description: 'Fake description',
            cost: 1,
          },
          'power-2': {
            id: 'power-2',
            characterId: 'character-123',
            parentPowerId: null,
            type: 'power',
            name: 'Top-level Relevant Power',
            description: 'Fake description',
            cost: 1,
          },
          'power-3': {
            id: 'power-3',
            characterId: 'fake-character-id',
            parentPowerId: null,
            type: 'power',
            name: 'Top-level Irrelevant Power',
            description: 'Fake description',
            cost: 1,
          },
          'power-4': {
            id: 'power-4',
            characterId: null,
            parentPowerId: null,
            type: 'enhancement',
            name: 'Top-level Enhancement',
            description: 'Fake description',
            cost: 1,
          },
        };
      });
    });

    it('returns an array of top level or generic powers', () => {
      expect(
        selectors.topLevelPowersByCharacterSlugSelector(storeState, 'corvo')
      ).toEqual([
        {
          id: 'power-1',
          characterId: null,
          parentPowerId: null,
          type: 'power',
          name: 'Top-level Generic Power',
          description: 'Fake description',
          cost: 1,
        },
        {
          id: 'power-2',
          characterId: 'character-123',
          parentPowerId: null,
          type: 'power',
          name: 'Top-level Relevant Power',
          description: 'Fake description',
          cost: 1,
        },
      ]);
    });
  });
});
