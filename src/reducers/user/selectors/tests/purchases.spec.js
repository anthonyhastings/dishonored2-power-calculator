import Immutable from 'immutable';
import purchasesSelector from '../purchases';

describe('#purchasesSelector', () => {
  let state;

  beforeEach(() => {
    state = Immutable.fromJS({
      user: {
        purchases: ['uuid-01', 'uuid-02']
      }
    });
  });

  it('should return appropriate value', () => {
    expect(purchasesSelector(state)).toEqual(
      Immutable.fromJS(['uuid-01', 'uuid-02'])
    );
  });
});
