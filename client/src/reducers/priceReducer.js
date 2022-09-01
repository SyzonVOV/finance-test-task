import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  oldPrices: [],
  newPrices: [],
};

const pricesSlice = createSlice({
  name: 'prices',
  initialState,
  reducers: {
    pricesReceived: (state, action) => {
      state.oldPrices = state.newPrices;
      state.newPrices = action.payload;
    },
  },
});

const { actions, reducer } = pricesSlice;
export default reducer;
export const { pricesReceived } = actions;
