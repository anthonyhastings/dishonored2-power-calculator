import axios from 'axios';
import * as api from '../characters';

jest.mock('axios');

describe('Characters API requests', () => {
  let testContext;

  beforeEach(() => {
    testContext = {};
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  describe('#getCharacters', () => {
    beforeEach(async () => {
      axios.get.mockResolvedValue('hello-world');
      testContext.result = await api.getCharacters();
    });

    it('calls axios with correct options', () => {
      expect(axios.get).toHaveBeenCalledWith('/characters.json');
    });

    it('returns expected value', () => {
      expect(testContext.result).toEqual('hello-world');
    });
  });
});
