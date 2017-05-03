import Immutable from 'immutable';
import powerSelector from '../power';
import powerTreeSelector from '../power-tree';
import {transform} from '../power-tree';
import {defaultState as powersAndEnhancementsDefaultState} from '../../';
import {defaultState as userDefaultState} from '../../../user';

describe('#powerTreeSelector', function () {
  beforeEach(function () {
    this.state = Immutable.fromJS({
      powers: powersAndEnhancementsDefaultState,
      user: userDefaultState
    });
  });

  describe('when using a power with no children', function () {
    beforeEach(function () {
      this.expectedResult = powerSelector(
        this.state,
        '6229d272-6b03-467a-82ec-00993c642570'
      ).set('children', Immutable.List([]));
    });

    it('returns the power with an empty children list', function () {
      expect(powerTreeSelector(this.state, '6229d272-6b03-467a-82ec-00993c642570'))
        .toEqualImmutable(this.expectedResult);
    });
  });

  describe('when using a power with one child', function () {
    beforeEach(function () {
      this.nestedChild = powerSelector(
        this.state,
        'c2ffd997-e0db-4bb8-b69f-df7ae2add66c'
      ).set('children', Immutable.List([]));

      this.expectedResult = powerSelector(
        this.state,
        '5bed80af-6e29-4b12-a875-f7ad2c1cab8d'
      ).set('children', Immutable.List([
        this.nestedChild
      ]));
    });

    it('returns the power with a single child', function () {
      expect(powerTreeSelector(this.state, '5bed80af-6e29-4b12-a875-f7ad2c1cab8d'))
        .toEqualImmutable(this.expectedResult);
    });
  });

  describe('when using a power with multiple children', function () {
    beforeEach(function () {
      this.nestedChildren = Immutable.List([
        powerSelector(
          this.state,
          '4499082e-9cdc-4828-8d18-40aea0b2970b'
        ).set('children', Immutable.List([])),
        powerSelector(
          this.state,
          '6229d272-6b03-467a-82ec-00993c642570'
        ).set('children', Immutable.List([]))
      ]);

      this.expectedResult = powerSelector(
        this.state,
        '39334a1e-2883-4722-af71-d3286d94b6e7'
      ).set('children', this.nestedChildren);
    });

    it('returns the power with all the children', function () {
      expect(powerTreeSelector(this.state, '39334a1e-2883-4722-af71-d3286d94b6e7'))
        .toEqualImmutable(this.expectedResult);
    });
  });

  describe('when using a power with multiple tiers of children', function () {
    beforeEach(function () {
      this.lowestChild = powerSelector(
        this.state,
        '676cb117-268a-4c88-a952-a9cfa7bd9ad6'
      ).set('children', Immutable.List([]));

      this.immediateChild = powerSelector(
        this.state,
        '34f79277-2fa4-40a8-9568-40f0bbf359de'
      ).set('children', Immutable.List([
        this.lowestChild
      ]));

      this.expectedResult = powerSelector(
        this.state,
        'e2b274c4-d727-44a7-a4ef-32da487bb4b6'
      ).set('children', Immutable.List([
        powerSelector(
          this.state,
          'b7103d3b-a644-4a04-89ea-e3e8f49f2f53'
        ).set('children', Immutable.List([])),
        powerSelector(
          this.state,
          '6dd8594c-8e1d-45d4-b98d-b28af53982ec'
        ).set('children', Immutable.List([])),
        this.immediateChild
      ]));
    });

    it('returns the power with nested children', function () {
      expect(powerTreeSelector(this.state, 'e2b274c4-d727-44a7-a4ef-32da487bb4b6'))
        .toEqualImmutable(this.expectedResult);
    });
  });
});

describe('#powerTreeTransform', function () {
  describe('when given a non-existent power', function () {
    it('returns an empty list', function () {
      expect(transform(
        powersAndEnhancementsDefaultState,
        'abcdef'
      )).toEqualImmutable(Immutable.List([]));
    });
  });

  describe('when a power has no children', function () {
    it('returns an empty list', function () {
      expect(transform(
        powersAndEnhancementsDefaultState,
        '6229d272-6b03-467a-82ec-00993c642570'
      )).toEqualImmutable(Immutable.List([]));
    });
  });

  describe('when a power has children', function () {
    beforeEach(function () {
      this.expectedResponse = Immutable.List([
        powersAndEnhancementsDefaultState
          .get('4499082e-9cdc-4828-8d18-40aea0b2970b').set('children', Immutable.List([])),
        powersAndEnhancementsDefaultState
          .get('6229d272-6b03-467a-82ec-00993c642570').set('children', Immutable.List([]))
      ]);
    });

    it('returns them in a list', function () {
      expect(transform(
        powersAndEnhancementsDefaultState,
        '39334a1e-2883-4722-af71-d3286d94b6e7'
      )).toEqualImmutable(this.expectedResponse);
    });
  });
});
