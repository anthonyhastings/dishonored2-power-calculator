import Immutable from 'immutable';
import purchasesSelector from '../purchases';

describe('#purchasesSelector', function () {
  beforeEach(function () {
    this.state = Immutable.fromJS({
      user: {
        purchases: ['uuid-01', 'uuid-02']
      }
    });
  });

  it('should return appropriate value', function () {
    expect(purchasesSelector(this.state)).toEqualImmutable(Immutable.fromJS([
      'uuid-01',
      'uuid-02'
    ]));
  });
});
