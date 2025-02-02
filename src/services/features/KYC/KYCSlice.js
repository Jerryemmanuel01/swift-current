import { createAsyncThunkWithHandler } from "../../api/apiHandler";
import { createSlice } from "@reduxjs/toolkit";
import KYCService from "./KYCService";

const initialState = {
  isLoading: false,
  message: "",
  isSuccess: false,
  isError: false,
};

export const verifyKYC = createAsyncThunkWithHandler(
  "user/verify-KYC",
  async (data, _) => {
    return await KYCService.verify_KYC(data);
  }
);

const KYCSlice = createSlice({
  name: "kyc",
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
      .addCase(verifyKYC.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(verifyKYC.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.message = action.payload.result.message;
      })
      .addCase(verifyKYC.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload.message;
        state.isSuccess = false;
      });
  },
});

export const { reset } = KYCSlice.actions;
export default KYCSlice.reducer;
