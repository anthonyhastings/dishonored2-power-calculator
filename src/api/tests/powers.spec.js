import axios from 'axios';
import * as api from '../powers';

jest.mock('axios');

describe('Powers API requests', () => {
  let testContext;

  beforeEach(() => {
    testContext = {};
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  describe('#getPowers', () => {
    beforeEach(async () => {
      axios.get.mockResolvedValue('hello-world');
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
