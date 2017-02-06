import Immutable from 'immutable';
import filterTopLevel from '../filter-top-level';

describe('Top level power filtering utility', function () {
  beforeEach(function () {
    this.powers = Immutable.fromJS({
      'uuid-01': {
        parentPowerId: null,
        type: 'power',
        name: 'Top level power #01'
      },
      'uuid-02': {
        parentPowerId: 'uuid-01',
        type: 'power',
        name: 'Sub level power #01'
      },
      'uuid-03': {
        parentPowerId: null,
        type: 'power',
        name: 'Top level power #02'
      },
      'uuid-04': {
        parentPowerId: null,
        type: 'enhancement',
        name: 'Top level enhancement #01'
      },
      'uuid-05': {
        parentPowerId: 'uuid-04',
        type: 'enhancement',
        name: 'Sub level enhancement #01'
      },
      'uuid-06': {
        parentPowerId: null,
        type: 'enhancement',
        name: 'Top level enhancement #02'
      }
    });
  });

  describe('when asked to filter powers', function () {
    it('returns top level powers', function () {
      expect(filterTopLevel(this.powers, 'power')).toEqualImmutable(Immutable.fromJS({
        'uuid-01': {
          parentPowerId: null,
          type: 'power',
          name: 'Top level power #01'
        },
        'uuid-03': {
          parentPowerId: null,
          type: 'power',
          name: 'Top level power #02'
        }
      }));
    });
  });

  describe('when asked to filter enhancements', function () {
    it('returns top level enhancements', function () {
      expect(filterTopLevel(this.powers, 'enhancement')).toEqualImmutable(Immutable.fromJS({
        'uuid-04': {
          'parentPowerId': null,
          'type': 'enhancement',
          'name': 'Top level enhancement #01'
        },
        'uuid-06': {
          'parentPowerId': null,
          'type': 'enhancement',
          'name': 'Top level enhancement #02'
        }
      }));
    });
  });

  describe('when asked for a non-existent type', function () {
    it('returns a blank immutable map', function () {
      expect(filterTopLevel(this.powers, 'non-existent')).toEqualImmutable(Immutable.Map());
    });
  });
});
