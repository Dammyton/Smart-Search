import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import countrySlice from "../features/searchBox/countrySlice";

export const store = configureStore({
  reducer: {
    countrySlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
