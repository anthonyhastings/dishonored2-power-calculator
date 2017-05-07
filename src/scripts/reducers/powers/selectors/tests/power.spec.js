import Immutable from 'immutable';
import powerSelector from '../power';

describe('#powerSelector', function () {
  beforeEach(function () {
    this.state = Immutable.fromJS({
      user: {
        totalRunes: 30,
        purchases: Immutable.List()
      },
      powers: {
        data: {
          'uuid-01': {
            id: 'uuid-01',
            parentPowerId: null,
            cost: 2,
            name: 'Power #01'
          },
          'uuid-02': {
            id: 'uuid-02',
            parentPowerId: null,
            cost: 2,
            name: 'Power #02'
          }
        }
      }
    });

    this.expectedPower = Immutable.fromJS({
      id: 'uuid-02',
      parentPowerId: null,
      cost: 2,
      name: 'Power #02',
      purchasable: true,
      purchased: false
    });
  });

  it('should return appropriate value', function () {
    expect(powerSelector(this.state, 'uuid-02')).toEqual(this.expectedPower);
  });
});
