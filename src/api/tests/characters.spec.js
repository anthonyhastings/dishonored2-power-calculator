import moxios from 'moxios';
import * as api from '../characters';

describe('Characters API requests', () => {
  beforeEach(() => {
    moxios.install();
  });

  afterEach(() => {
    moxios.uninstall();
  });

  describe('#getCharacters', () => {
    beforeEach(async () => {
      moxios.stubRequest('/characters.json', {
        status: 200,
      });

      await api.getCharacters();
    });

    it('calls API with correct settings', () => {
      expect(moxios.requests.mostRecent().config).toMatchObject({
        url: '/characters.json',
      });
    });
  });
});
