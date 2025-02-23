import { createAsyncThunkWithHandler } from "../../api/apiHandler";
import { createSlice } from "@reduxjs/toolkit";
import adminUserService from "./adminUserService";

const users = localStorage.getItem("SC_all_users");
const pendingTransaction = localStorage.getItem("SC_pending_transaction");
const allTransaction = localStorage.getItem("SC_all_transaction");

const initialState = {
  isLoading: false,
  message: "",
  isSuccess: false,
  isError: false,
  isKycLoading: false,
  isKycError: false,
  isKycSuccess: false,
  isRoleLoading: false,
  isRoleError: false,
  isRoleSuccess: false,
  users: users ? JSON.parse(users) : null,
  pendingTransaction: pendingTransaction
    ? JSON.parse(pendingTransaction)
    : null,
  allTransaction: allTransaction ? JSON.parse(allTransaction) : null,
};

export const getUsers = createAsyncThunkWithHandler(
  "admin/getUsers",
  async () => {
    return await adminUserService.getUsers();
  }
);

export const getTransactions = createAsyncThunkWithHandler(
  "admin/getTransactions",
  async (options, _) => {
    return await adminUserService.getPendingTransactions(options);
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

export const approveKYC = createAsyncThunkWithHandler(
  "admin/approveKYC",
  async (data, _) => {
    return await adminUserService.approveKYC(data);
  }
);

export const updateRole = createAsyncThunkWithHandler(
  "admin/updateRole",
  async (data, _) => {
    return await adminUserService.updateRole(data);
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
      state.isKycLoading = false;
      state.isKycError = false;
      state.isKycSuccess = false;
      state.isRoleLoading = false;
      state.isRoleError = false;
      state.isRoleSuccess = false;
    },
    resetUsers: (state) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = false;
      state.message = "";
      state.users = null;
      state.pendingTransaction = null;
      state.allTransaction = null;
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
      .addCase(getTransactions.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getTransactions.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.message = action.payload.result.message;
        state.allTransaction = action.payload.result.data;
        localStorage.setItem(
          "SC_all_transaction",
          JSON.stringify(action.payload.result.data)
        );
      })
      .addCase(getTransactions.rejected, (state, action) => {
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
        localStorage.setItem(
          "SC_pending_transaction",
          JSON.stringify(action.payload.result.data)
        );
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
      .addCase(approveKYC.pending, (state) => {
        state.isKycLoading = true;
      })
      .addCase(approveKYC.fulfilled, (state, action) => {
        state.isKycLoading = false;
        state.isKycError = false;
        state.isKycSuccess = true;
        state.message = action.payload.result.message;
      })
      .addCase(approveKYC.rejected, (state, action) => {
        state.isKycLoading = false;
        state.isKycError = true;
        state.message = action.payload.message;
        state.isKycSuccess = false;
      })
      .addCase(updateRole.pending, (state) => {
        state.isRoleLoading = true;
      })
      .addCase(updateRole.fulfilled, (state, action) => {
        state.isRoleLoading = false;
        state.isRoleError = false;
        state.isRoleSuccess = true;
        state.message = action.payload.result.message;
      })
      .addCase(updateRole.rejected, (state, action) => {
        state.isRoleLoading = false;
        state.isRoleError = true;
        state.message = action.payload.message;
        state.isRoleSuccess = false;
      })
  },
});

export const { reset, resetUsers } = adminUserSlice.actions;
export default adminUserSlice.reducer;
