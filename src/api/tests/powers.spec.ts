import type { AxiosResponse } from 'axios';
import * as api from '../powers';
import powersData from '../sample-responses/get-powers-success.json';

describe('Powers API requests', () => {
  let testContext: {
    result?: AxiosResponse;
  };

  beforeEach(() => {
    testContext = {};
  });

  describe('#getPowers', () => {
    describe('when given a valid response', () => {
      beforeEach(async () => {
        testContext.result = await api.getPowers();
      });

      it('returns expected value', () => {
        expect(testContext.result?.data).toEqual(powersData);
      });
    });

    it('aborts when instructed', async () => {
      const controller = new AbortController();
      controller.abort();

      await expect(
        api.getPowers({ abortSignal: controller.signal })
      ).rejects.toMatchObject({ message: 'canceled' });
    });
  });
});
