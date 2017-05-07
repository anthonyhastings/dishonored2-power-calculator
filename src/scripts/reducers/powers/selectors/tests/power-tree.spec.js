import Immutable from 'immutable';
import powerTreeSelector from '../power-tree';
import {transform} from '../power-tree';

describe('#powerTreeSelector', function () {
  beforeEach(function () {
    this.state = Immutable.fromJS({
      powers: {
        data: {
          abc: {id: 'abc', parentPowerId: null, name: 'Power with no children'},
          def: {id: 'def', parentPowerId: null, name: 'Power with one child'},
          ghi: {id: 'ghi', parentPowerId: 'def', name: 'Power with a parent'},
          jkl: {id: 'jkl', parentPowerId: null, name: 'Power with multiple children'},
          mno: {id: 'mno', parentPowerId: 'jkl', name: 'Power with a parent'},
          pqr: {id: 'pqr', parentPowerId: 'jkl', name: 'Power with a parent'},
          stu: {id: 'stu', parentPowerId: null, name: 'Power with deeply nested children'},
          vwx: {id: 'vwx', parentPowerId: 'stu', name: 'Power with one child'},
          yz: {id: 'yz', parentPowerId: 'vwx', name: 'Power with no children'}
        }
      },
      user: {
        totalRunes: 30,
        purchases: Immutable.List()
      }
    });
  });

  describe('when using a power with no children', function () {
    beforeEach(function () {
      this.expectedResult = Immutable.fromJS({
        id: 'abc',
        parentPowerId: null,
        name: 'Power with no children',
        children: [],
        purchasable: true,
        purchased: false
      });
    });

    it('returns the power with an empty children list', function () {
      expect(powerTreeSelector(this.state, 'abc')).toEqualImmutable(this.expectedResult);
    });
  });

  describe('when using a power with one child', function () {
    beforeEach(function () {
      this.expectedResult = Immutable.fromJS({
        id: 'def',
        parentPowerId: null,
        name: 'Power with one child',
        children: [
          {
            id: 'ghi',
            parentPowerId: 'def',
            name: 'Power with a parent',
            purchasable: false,
            purchased: false,
            children: []
          }
        ],
        purchasable: true,
        purchased: false
      });
    });

    it('returns the power with a single child', function () {
      expect(powerTreeSelector(this.state, 'def')).toEqualImmutable(this.expectedResult);
    });
  });

  describe('when using a power with multiple children', function () {
    beforeEach(function () {
      this.expectedResult = Immutable.fromJS({
        id: 'jkl',
        parentPowerId: null,
        name: 'Power with multiple children',
        purchasable: true,
        purchased: false,
        children: [
          {
            id: 'mno',
            parentPowerId: 'jkl',
            name: 'Power with a parent',
            purchasable: false,
            purchased: false,
            children: []
          },
          {
            id: 'pqr',
            parentPowerId: 'jkl',
            name: 'Power with a parent',
            purchasable: false,
            purchased: false,
            children: []
          }
        ]
      });
    });

    it('returns the power with all the children', function () {
      expect(powerTreeSelector(this.state, 'jkl')).toEqualImmutable(this.expectedResult);
    });
  });

  describe('when using a power with multiple tiers of children', function () {
    beforeEach(function () {
      this.expectedResult = Immutable.fromJS({
        id: 'stu',
        parentPowerId: null,
        name: 'Power with deeply nested children',
        purchasable: true,
        purchased: false,
        children: [
          {
            id: 'vwx',
            parentPowerId: 'stu',
            name: 'Power with one child',
            purchasable: false,
            purchased: false,
            children: [
              {
                id: 'yz',
                parentPowerId: 'vwx',
                name: 'Power with no children',
                purchasable: false,
                purchased: false,
                children: []
              }
            ]
          }
        ]
      });
    });

    it('returns the power with nested children', function () {
      expect(powerTreeSelector(this.state, 'stu')).toEqualImmutable(this.expectedResult);
    });
  });
});

describe('#powerTreeTransform', function () {
  describe('when given a non-existent power', function () {
    it('returns an empty list', function () {
      expect(transform(
        Immutable.fromJS({}),
        'abcdef'
      )).toEqualImmutable(Immutable.List([]));
    });
  });

  describe('when a power has no children', function () {
    it('returns an empty list', function () {
      expect(transform(
        Immutable.fromJS({
          abc: {}
        }),
        'abc'
      )).toEqualImmutable(Immutable.List([]));
    });
  });

  describe('when a power has children', function () {
    beforeEach(function () {
      this.inputState = Immutable.fromJS({
        abc: {parentPowerId: null, name: 'Parent Power'},
        def: {parentPowerId: 'abc', name: 'Child Power #01'},
        ghi: {parentPowerId: 'abc', name: 'Child Power #02'}
      });

      this.expectedResponse = Immutable.fromJS([
        {parentPowerId: 'abc', name: 'Child Power #01', children: []},
        {parentPowerId: 'abc', name: 'Child Power #02', children: []}
      ]);
    });

    it('returns them in a list', function () {
      expect(transform(
        this.inputState,
        'abc'
      )).toEqualImmutable(this.expectedResponse);
    });
  });
});
