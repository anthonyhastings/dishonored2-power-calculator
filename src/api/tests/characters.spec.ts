import type { AxiosResponse } from 'axios';
import * as api from '../characters';
import charactersData from '../sample-responses/get-characters-success.json';

describe('Characters API requests', () => {
  let testContext: {
    result?: AxiosResponse;
  };

  beforeEach(() => {
    testContext = {};
  });

  describe('#getCharacters', () => {
    beforeEach(async () => {
      testContext.result = await api.getCharacters();
    });

    it('returns expected value', () => {
      expect(testContext.result?.data).toEqual(charactersData);
    });
  });
});
