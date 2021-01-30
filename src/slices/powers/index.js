import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import * as api from 'Api/powers';
import requestStatuses from 'Constants/request-statuses';

const getDefaultState = () => ({
  requestStatus: requestStatuses.idle,
});

export const fetchPowers = createAsyncThunk('powers/fetchPowers', async () => {
  let response;

  try {
    response = await api.getPowers();
  } catch (e) {
    throw new Error();
  }

  return response.data.data.reduce((memo, power) => {
    memo[power.id] = {
      id: power.id,
      parentPowerId: power.attributes.parentPowerId,
      characterId: power.attributes.characterId,
      type: power.attributes.type,
      name: power.attributes.name,
      description: power.attributes.description,
      cost: parseInt(power.attributes.cost),
    };

    return memo;
  }, {});
});

const powersSlice = createSlice({
  name: 'powers',
  initialState: getDefaultState(),
  extraReducers: {
    [fetchPowers.pending]: (state) => {
      state.requestStatus = requestStatuses.pending;
    },
    [fetchPowers.fulfilled]: (state, action) => {
      state.requestStatus = requestStatuses.success;
      state.data = action.payload;
    },
    [fetchPowers.rejected]: (state) => {
      state.requestStatus = requestStatuses.failure;
    },
  },
});

export default powersSlice.reducer;
