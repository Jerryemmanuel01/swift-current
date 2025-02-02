import { createAsyncThunkWithHandler } from "../../api/apiHandler";
import { createSlice } from "@reduxjs/toolkit";
import userService from "./userService";


const initialState = {
  isLoading: false,
  message: "",
  isSuccess: false,
  isError: false,
};

export const verifyEmail = createAsyncThunkWithHandler(
  "user/verifyEmail",
  async (data, _) => {
    return await userService.verify_email(data);
  }
);

export const resendEmail = createAsyncThunkWithHandler(
  "user/resendEmail",
  async () => {
    return await userService.resendEmail();
  }
);


const userSlice = createSlice({
  name: "user",
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

      .addCase(resendEmail.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(resendEmail.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.message = action.payload.result.message;
      })
      .addCase(resendEmail.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload.message;
        state.isSuccess = false;
      })

      .addCase(verifyEmail.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(verifyEmail.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.message = action.payload.result.message;
      })
      .addCase(verifyEmail.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload.message;
        state.isSuccess = false;
      })
  },
});

export const { reset } = userSlice.actions;
export default userSlice.reducer;
