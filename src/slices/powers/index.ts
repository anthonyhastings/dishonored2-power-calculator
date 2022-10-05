import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import * as api from '@/api/powers';
import { requestStatuses } from '@/constants/request-statuses';

export interface PowerData {
  [key: string]: Power;
}

export interface PowersState {
  requestStatus: requestStatuses;
  data?: PowerData;
}

export const getDefaultState = (): PowersState => ({
  requestStatus: requestStatuses.idle,
});

export const fetchPowers = createAsyncThunk<
  PowerData,
  void,
  { rejectValue: Error }
>('powers/fetchPowers', async (_, thunkAPI) => {
  let response;

  try {
    response = await api.getPowers({ abortSignal: thunkAPI.signal });
  } catch (e) {
    throw new Error();
  }

  return response.data.data.reduce<PowerData>((memo, power) => {
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
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchPowers.pending, (state) => {
      state.requestStatus = requestStatuses.pending;
    });

    builder.addCase(fetchPowers.fulfilled, (state, action) => {
      state.requestStatus = requestStatuses.success;
      state.data = action.payload;
    });

    builder.addCase(fetchPowers.rejected, (state) => {
      state.requestStatus = requestStatuses.failure;
    });
  },
});

export const reducer = powersSlice.reducer;
