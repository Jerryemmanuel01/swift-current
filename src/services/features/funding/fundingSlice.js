import { createAsyncThunkWithHandler } from "../../api/apiHandler";
import { createSlice } from "@reduxjs/toolkit";
import fundingService from "./fundingService";

const initialState = {
  isLoading: false,
  message: "",
  isSuccess: false,
  isError: false,
};

export const funding = createAsyncThunkWithHandler(
  "funding/funding",
  async (data, _) => {
    return await fundingService.funding(data);
  }
);

const fundingSlice = createSlice({
  name: "funding",
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = false;
      state.message = "";
    },
  },
  extraReducers: (builder) => {
    builder

      .addCase(funding.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(funding.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.message = action.payload.result.message;
      })
      .addCase(funding.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload.message;
        state.isSuccess = false;
      });
  },
});

export const { reset } = fundingSlice.actions;
export default fundingSlice.reducer;
