import { createAsyncThunkWithHandler } from "../../api/apiHandler";
import { createSlice } from "@reduxjs/toolkit";
import userInfoService from "./userInfoService";

const user = localStorage.getItem("SC_user_info");

const initialState = {
  isLoading: false,
  message: "",
  isSuccess: false,
  isError: false,
  user: user ? JSON.parse(user) : null,
};

export const fetchUserInfo = createAsyncThunkWithHandler(
  "user/fetchUserInfo",
  async () => {
    return await userInfoService.getUserProfile();
  }
);

const userInfoSlice = createSlice({
  name: "userInfo",
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = false;
      state.message = "";
    },
    resetUser: (state) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = false;
      state.message = "";
      state.user = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserInfo.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchUserInfo.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.message = action.payload.result.message;
        state.user = action.payload.result.data;
      })
      .addCase(fetchUserInfo.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload.message;
        state.isSuccess = false;
      });
  },
});

export const { reset, resetUser } = userInfoSlice.actions;
export default userInfoSlice.reducer;
