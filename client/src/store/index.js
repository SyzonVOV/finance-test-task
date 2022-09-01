import { configureStore } from '@reduxjs/toolkit';
import prices from '../reducers/priceReducer';

const store = configureStore({
  reducer: { prices },
});

export default store;
