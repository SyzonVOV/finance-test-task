import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchFilters } from '../api/filtersAPI';
import { adaptFilters } from './../helpers/adaptors';

const initialState = {
  filters: [],
  error: null,
};

export const getFilters = createAsyncThunk('filters/getFilters', async () => {
  const response = await fetchFilters();
  return response;
});

const pricesSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    toggleActiveFilter: (state, action) => {
      state.filters.forEach(item => {
        if (item.name === action.payload) {
          item.isActive = !item.isActive;
        }
      });
    },
  },
  extraReducers: builder => {
    builder
      .addCase(getFilters.fulfilled, (state, action) => {
        state.filters = adaptFilters(action.payload);
      })
      .addCase(getFilters.rejected, (state, action) => {
        state.error = action.payload;
      });
  },
});

const { actions, reducer } = pricesSlice;
export default reducer;
export const { toggleActiveFilter } = actions;
