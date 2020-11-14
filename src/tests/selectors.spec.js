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
          data: 'hello world',
        },
      });
    });

    it('returns expected state', () => {
      expect(selectors.charactersDataSelector(testContext.state)).toEqual(
        'hello world'
      );
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
          testContext.state = Immutable.fromJS({
            characters: {
              requestStatus: charactersStatus,
            },
            powers: {
              requestStatus: powersStatus,
            },
          });
        });

        it(`returns ${result}`, () => {
          expect(
            selectors.isInitialDataIncompleteSelector(testContext.state)
          ).toEqual(result);
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
          testContext.state = Immutable.fromJS({
            characters: {
              requestStatus: charactersStatus,
            },
            powers: {
              requestStatus: powersStatus,
            },
          });
        });

        it(`returns ${result}`, () => {
          expect(
            selectors.hasInitialDataFailedSelector(testContext.state)
          ).toEqual(result);
        });
      }
    );
  });

  describe('#characterBySlugSelector', () => {
    beforeEach(() => {
      testContext.state = Immutable.fromJS({
        characters: {
          data: {
            testKey: { slug: 'non-matching' },
            fakeKey: { slug: 'matching' },
          },
        },
      });
    });

    it('returns relevant record', () => {
      expect(
        selectors.characterBySlugSelector(testContext.state, 'matching')
      ).toEqual(
        Immutable.Map({
          slug: 'matching',
        })
      );
    });
  });

  describe('#topLevelEnhancementsSelector', () => {
    beforeEach(() => {
      testContext.state = Immutable.fromJS({
        powers: {
          data: [
            {
              id: 1,
              parentPowerId: null,
              type: 'enhancement',
              name: 'Top-level Enhancement',
            },
            {
              id: 2,
              parentPowerId: 1,
              type: 'enhancement',
              name: 'Sub-level Enhancement',
            },
            {
              id: 3,
              parentPowerId: null,
              type: 'power',
              name: 'Top-level Power',
            },
          ],
        },
      });
    });

    it('returns Immutable List of top level enhancements', () => {
      expect(selectors.topLevelEnhancementsSelector(testContext.state)).toEqual(
        Immutable.fromJS([
          {
            id: 1,
            parentPowerId: null,
            type: 'enhancement',
            name: 'Top-level Enhancement',
          },
        ])
      );
    });
  });

  describe('#topLevelPowersByCharacterSlugSelector', () => {
    beforeEach(() => {
      testContext.state = Immutable.fromJS({
        characters: {
          data: {
            'character-123': {
              id: 'character-123',
              slug: 'fake-character-slug',
            },
          },
        },
        powers: {
          data: {
            'power-1': {
              id: 'power-1',
              characterId: null,
              parentPowerId: null,
              type: 'power',
              name: 'Top-level Generic Power',
            },
            'power-2': {
              id: 'power-2',
              characterId: 'character-123',
              parentPowerId: null,
              type: 'power',
              name: 'Top-level Relevant Power',
            },
            'power-3': {
              id: 'power-3',
              characterId: 456,
              parentPowerId: null,
              type: 'power',
              name: 'Top-level Irrelevant Power',
            },
            'power-4': {
              id: 'power-4',
              characterId: null,
              parentPowerId: null,
              type: 'enhancement',
              name: 'Top-level Enhancement',
            },
          },
        },
      });
    });

    it('returns Immutable List of top level owned or generic powers', () => {
      expect(
        selectors.topLevelPowersByCharacterSlugSelector(
          testContext.state,
          'fake-character-slug'
        )
      ).toEqual(
        Immutable.fromJS([
          {
            id: 'power-1',
            characterId: null,
            parentPowerId: null,
            type: 'power',
            name: 'Top-level Generic Power',
          },
          {
            id: 'power-2',
            characterId: 'character-123',
            parentPowerId: null,
            type: 'power',
            name: 'Top-level Relevant Power',
          },
        ])
      );
    });
  });
});
