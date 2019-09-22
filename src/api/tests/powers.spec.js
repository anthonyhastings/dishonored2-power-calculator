import moxios from 'moxios';
import * as api from '../powers';

describe('Powers API requests', () => {
  beforeEach(() => {
    moxios.install();
  });

  afterEach(() => {
    moxios.uninstall();
  });

  describe('#getPowers', () => {
    beforeEach(async () => {
      moxios.stubRequest('/powers.json', {
        status: 200
      });

      await api.getPowers();
    });

    it('calls API with correct settings', () => {
      expect(moxios.requests.mostRecent().config).toMatchObject({
        url: '/powers.json'
      });
    });
  });
});
