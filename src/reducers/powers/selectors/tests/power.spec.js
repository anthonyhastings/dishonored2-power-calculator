import Immutable from 'immutable';
import powerSelector from '../power';

describe('#powerSelector', () => {
  let state;
  let expectedPower;

  beforeEach(() => {
    state = Immutable.fromJS({
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

    expectedPower = Immutable.fromJS({
      id: 'uuid-02',
      parentPowerId: null,
      cost: 2,
      name: 'Power #02',
      purchasable: true,
      purchased: false
    });
  });

  it('should return appropriate value', () => {
    expect(powerSelector(state, 'uuid-02')).toEqual(expectedPower);
  });
});
