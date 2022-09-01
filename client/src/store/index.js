import { configureStore } from '@reduxjs/toolkit';
import prices from '../reducers/priceReducer';
import filters from '../reducers/filtersReducer';

const store = configureStore({
  reducer: { prices, filters },
});

export default store;
