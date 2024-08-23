import { configureStore } from '@reduxjs/toolkit';
import cartSlice from './slice';
import { loadState, saveState } from "../components/localStorage";

const preloadedState = loadState();

export const store = configureStore({
  reducer: {
    cart: cartSlice,
  },
  preloadedState,
});


store.subscribe(() => {
  saveState(store.getState());
});