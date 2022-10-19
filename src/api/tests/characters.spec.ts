import type { AxiosResponse } from 'axios';
import * as api from '../characters';
import charactersData from '../../../support/fixtures/get-characters-success.json';

describe('Characters API requests', () => {
  let testContext: {
    result?: AxiosResponse;
  };

  beforeEach(() => {
    testContext = {};
  });

  describe('#getCharacters', () => {
    describe('when given a valid response', () => {
      beforeEach(async () => {
        testContext.result = await api.getCharacters();
      });

      it('returns expected value', () => {
        expect(testContext.result?.data).toEqual(charactersData);
      });
    });

    it('aborts when instructed', async () => {
      const controller = new AbortController();
      controller.abort();

      await expect(
        api.getCharacters({ abortSignal: controller.signal })
      ).rejects.toMatchObject({ message: 'canceled' });
    });
  });
});
