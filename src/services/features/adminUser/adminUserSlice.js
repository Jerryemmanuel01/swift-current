import { createAsyncThunkWithHandler } from "../../api/apiHandler";
import { createSlice } from "@reduxjs/toolkit";
import adminUserService from "./adminUserService";

const users = localStorage.getItem("SC_all_users");

const initialState = {
  isLoading: false,
  message: "",
  isSuccess: false,
  isError: false,
  users: users ? JSON.parse(users) : null,
};

export const getUsers = createAsyncThunkWithHandler(
  "admin/getUsers",
  async () => {
    return await adminUserService.getUsers();
  }
);

const adminUserSlice = createSlice({
  name: "admin",
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = false;
      state.message = "";
    },
    resetUsers: (state) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = false;
      state.message = "";
      state.users = null;
    },
  },
  extraReducers: (builder) => {
    builder

      .addCase(getUsers.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getUsers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.message = action.payload.result.message;
        state.users = action.payload.result.data;
      })
      .addCase(getUsers.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload.message;
        state.isSuccess = false;
      });
  },
});

export const { reset, resetUsers } = adminUserSlice.actions;
export default adminUserSlice.reducer;
