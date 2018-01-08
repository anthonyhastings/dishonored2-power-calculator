import Immutable from 'immutable';
import flattenedPowerTreeIdsSelector from '../flattened-power-tree-ids';

describe('#flattenedPowerTreeIdsSelector', () => {
  let state;

  beforeEach(() => {
    state = Immutable.fromJS({
      powers: {
        data: {
          abc: {id: 'abc', parentPowerId: null, name: 'Power #01'},
          def: {id: 'def', parentPowerId: 'abc', name: 'Power #02'},
          ghi: {id: 'ghi', parentPowerId: 'abc', name: 'Power #03'},
          jkl: {id: 'jkl', parentPowerId: 'def', name: 'Power #04'}
        }
      },
      user: {
        totalRunes: 30,
        purchases: []
      }
    });
  });

  describe('when using a power with no children', () => {
    let selectorReturnValue;
    let expectedResponse;

    beforeEach(() => {
      selectorReturnValue = flattenedPowerTreeIdsSelector(state, 'jkl');
      expectedResponse = Immutable.fromJS(['jkl']);
    });

    it('returns list with original power id', () => {
      expect(selectorReturnValue).toEqual(expectedResponse);
    });
  });

  describe('when using a power with children', () => {
    let selectorReturnValue;
    let expectedResponse;

    beforeEach(() => {
      selectorReturnValue = flattenedPowerTreeIdsSelector(state, 'abc');

      expectedResponse = Immutable.fromJS([
        'abc',
        'def',
        'jkl',
        'ghi'
      ]);
    });

    it('returns list with original power id and child power id\'s', () => {
      expect(selectorReturnValue).toEqual(expectedResponse);
    });
  });
});
