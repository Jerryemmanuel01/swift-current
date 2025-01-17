import { createAsyncThunkWithHandler } from "../../api/apiHandler";
import { createSlice } from "@reduxjs/toolkit";
import userService from "./userService";

const user = localStorage.getItem("SC_user_info");

const initialState = {
  isLoading: false,
  message: "",
  isSuccess: false,
  isError: false,
  user: user ? JSON.parse(user) : null,
};

export const funding = createAsyncThunkWithHandler(
  "user/funding",
  async (data, _) => {
    return await userService.funding(data);
  }
);

export const imageUpload = createAsyncThunkWithHandler(
  "user/imageUpload",
  async (data, _) => {
    return await userService.image_upload(data);
  }
);

export const verifyKYC = createAsyncThunkWithHandler(
  "user/verify-KYC",
  async (data, _) => {
    return await userService.verify_KYC(data);
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

      .addCase(funding.pending, (state, _) => {
        state.isLoading = true;
      })
      .addCase(funding.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.message = action.payload.message;
      })
      .addCase(funding.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.isSuccess = false;
      })

      .addCase(verifyKYC.pending, (state, _) => {
        state.isLoading = true;
      })
      .addCase(verifyKYC.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.message = action.payload.message;
      })
      .addCase(verifyKYC.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.isSuccess = false;
      })

      .addCase(imageUpload.pending, (state, _) => {
        state.isLoading = true;
      })
      .addCase(imageUpload.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.message = action.payload.message;
      })
      .addCase(imageUpload.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.isSuccess = false;
      });
  },
});

export const { reset } = userSlice.actions
export default userSlice.reducer;