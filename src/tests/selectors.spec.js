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
      ['characters', 'idle'],
      ['characters', 'pending'],
      ['powers', 'idle'],
      ['powers', 'pending'],
    ])('when %s request is %s', (dataType, status) => {
      beforeEach(() => {
        testContext.state = Immutable.fromJS({
          [dataType]: {
            requestStatus: requestStatuses[status],
          },
        });
      });

      it('returns true', () => {
        expect(
          selectors.isInitialDataIncompleteSelector(testContext.state)
        ).toEqual(true);
      });
    });

    describe('when neither requests are pending nor idle', () => {
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
    describe.each([
      ['characters', 'failure'],
      ['powers', 'failure'],
    ])('when %s request is %s', (dataType, status) => {
      beforeEach(() => {
        testContext.state = Immutable.fromJS({
          [dataType]: {
            requestStatus: requestStatuses[status],
          },
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

    it('returns Immutable List of top-level enhancements', () => {
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

    it('returns Immutable List of top-level owned or generic powers', () => {
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
