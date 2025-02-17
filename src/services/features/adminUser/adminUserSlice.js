import { createAsyncThunkWithHandler } from "../../api/apiHandler";
import { createSlice } from "@reduxjs/toolkit";
import adminUserService from "./adminUserService";

const users = localStorage.getItem("SC_all_users");
const pendingTransaction = localStorage.getItem("SC_pending_transaction");

const initialState = {
  isLoading: false,
  message: "",
  isSuccess: false,
  isError: false,
  users: users ? JSON.parse(users) : null,
  pendingTransaction: pendingTransaction
    ? JSON.parse(pendingTransaction)
    : null,
};

export const getUsers = createAsyncThunkWithHandler(
  "admin/getUsers",
  async () => {
    return await adminUserService.getUsers();
  }
);

export const getPendingTransactions = createAsyncThunkWithHandler(
  "admin/getPendingTransactions",
  async (data, _) => {
    return await adminUserService.getPendingTransactions(data);
  }
);

export const approveTransaction = createAsyncThunkWithHandler(
  "admin/approveTransaction",
  async (data, _) => {
    return await adminUserService.approveTransactions(data);
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
      state.pendingTransaction = null;
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
      })
      .addCase(getPendingTransactions.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getPendingTransactions.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.message = action.payload.result.message;
        state.pendingTransaction = action.payload.result.data;
      })
      .addCase(getPendingTransactions.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload.message;
        state.isSuccess = false;
      })
      .addCase(approveTransaction.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(approveTransaction.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.message = action.payload.result.message;
      })
      .addCase(approveTransaction.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload.message;
        state.isSuccess = false;
      })
  },
});

export const { reset, resetUsers } = adminUserSlice.actions;
export default adminUserSlice.reducer;
