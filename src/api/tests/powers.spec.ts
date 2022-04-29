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
    beforeEach(async () => {
      testContext.result = await api.getPowers();
    });

    it('returns expected value', () => {
      expect(testContext.result?.data).toEqual(powersData);
    });
  });
});
