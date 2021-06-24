import axios from 'axios';
import type { AxiosResponse } from 'axios';
import * as api from '../characters';

jest.mock('axios');

describe('Characters API requests', () => {
  const mockedAxios = axios as jest.Mocked<typeof axios>;
  let testContext: {
    result?: AxiosResponse;
  };

  beforeEach(() => {
    testContext = {};
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  describe('#getCharacters', () => {
    beforeEach(async () => {
      mockedAxios.get.mockResolvedValue('hello-world');
      testContext.result = await api.getCharacters();
    });

    it('calls axios with correct options', () => {
      expect(mockedAxios.get).toHaveBeenCalledWith('/characters.json');
    });

    it('returns expected value', () => {
      expect(testContext.result).toEqual('hello-world');
    });
  });
});
