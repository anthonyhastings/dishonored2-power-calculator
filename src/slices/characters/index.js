import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import * as api from 'api/characters';
import requestStatuses from 'constants/request-statuses';

const getDefaultState = () => ({
  requestStatus: requestStatuses.idle,
});

export const fetchCharacters = createAsyncThunk(
  'characters/fetchCharacters',
  async () => {
    let response;

    try {
      response = await api.getCharacters();
    } catch (e) {
      throw new Error();
    }

    return response.data.data.reduce((memo, character) => {
      memo[character.id] = {
        id: character.id,
        slug: character.attributes.slug,
        name: character.attributes.name,
        description: character.attributes.description,
      };

      return memo;
    }, {});
  }
);

const charactersSlice = createSlice({
  name: 'characters',
  initialState: getDefaultState(),
  extraReducers: {
    [fetchCharacters.pending]: (state) => {
      state.requestStatus = requestStatuses.pending;
    },
    [fetchCharacters.fulfilled]: (state, action) => {
      state.requestStatus = requestStatuses.success;
      state.data = action.payload;
    },
    [fetchCharacters.rejected]: (state) => {
      state.requestStatus = requestStatuses.failure;
    },
  },
});

export default charactersSlice.reducer;
