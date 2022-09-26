import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import * as api from '@/api/characters';
import { requestStatuses } from '@/constants/request-statuses';

export interface CharacterData {
  [key: string]: Character;
}

export interface CharactersState {
  requestStatus: requestStatuses;
  data?: CharacterData;
}

export const getDefaultState = (): CharactersState => ({
  requestStatus: requestStatuses.idle,
});

export const fetchCharacters = createAsyncThunk<
  CharacterData,
  void,
  { rejectValue: Error }
>('characters/fetchCharacters', async () => {
  let response;

  try {
    response = await api.getCharacters();
  } catch (e) {
    throw new Error();
  }

  return response.data.data.reduce<CharacterData>((memo, character) => {
    memo[character.id] = {
      id: character.id,
      slug: character.attributes.slug,
      name: character.attributes.name,
      description: character.attributes.description,
    };

    return memo;
  }, {});
});

const charactersSlice = createSlice({
  name: 'characters',
  initialState: getDefaultState(),
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCharacters.pending, (state) => {
      state.requestStatus = requestStatuses.pending;
    });

    builder.addCase(fetchCharacters.fulfilled, (state, action) => {
      state.requestStatus = requestStatuses.success;
      state.data = action.payload;
    });

    builder.addCase(fetchCharacters.rejected, (state) => {
      state.requestStatus = requestStatuses.failure;
    });
  },
});

export const reducer = charactersSlice.reducer;
