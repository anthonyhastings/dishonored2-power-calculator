import axios from 'axios';
import type { AxiosResponse } from 'axios';
import * as api from '../powers';

jest.mock('axios');

describe('Powers API requests', () => {
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

  describe('#getPowers', () => {
    beforeEach(async () => {
      mockedAxios.get.mockResolvedValue('hello-world');
      testContext.result = await api.getPowers();
    });

    it('calls axios with correct options', () => {
      expect(axios.get).toHaveBeenCalledWith('/powers.json');
    });

    it('returns expected value', () => {
      expect(testContext.result).toEqual('hello-world');
    });
  });
});
