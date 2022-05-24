import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export interface CountryState {
  data: any;
  status: any;
}

const initialState: CountryState = {
  data: [],
  status: null,
};

export const getCountries = createAsyncThunk(
  "countrySlice/getCountries",
  async () => {
    return await fetch(
      "https://raw.githubusercontent.com/dr5hn/countries-states-cities-database/master/countries%2Bstates%2Bcities.json "
    ).then((res) => res.json());
  }
);

const countrySlice = createSlice({
  name: "countrySlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCountries.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getCountries.fulfilled, (state, action) => {
        state.status = "idle";
        state.data = action.payload;
      })
      .addCase(getCountries.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export default countrySlice.reducer;
