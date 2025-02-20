import { createAsyncThunkWithHandler } from "../../api/apiHandler";
import { createSlice } from "@reduxjs/toolkit";
import userService from "./userService";

const transactions = localStorage.getItem("SC_user_trasactions");

const initialState = {
  isLoading: false,
  isVerifyEmailLoading: false,
  isEditProfileLoading: false,
  isEditProfileSuccess: false,
  isEditProfileError: false,
  isGetAccountNameLoading: false,
  isGetAccountNameError: false,
  isGetAccountNameSuccess: false,
  isResendEmailLoading: false,
  isResendEmailSuccess: false,
  isGetTransactionsLoading: false,
  isGetTransactionsSuccess: false,
  isGetTransactionsError: false,
  message: "",
  isSuccess: false,
  isError: false,
  accountName: "",
  transactions: transactions ? JSON.parse(transactions) : null,
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

export const editProfile = createAsyncThunkWithHandler(
  "user/editProfile",
  async (data, _) => {
    return await userService.editProfile(data);
  }
);

export const getAccountName = createAsyncThunkWithHandler(
  "user/getAccountName",
  async (data, _) => {
    return await userService.getAccountName(data);
  }
);

export const getTransactions = createAsyncThunkWithHandler(
  "user/getTransactions",
  async () => {
    return await userService.getTransactions();
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
      state.accountName = "";
      state.isVerifyEmailLoading = false;
      state.isResendEmailSuccess = false;
      state.isResendEmailLoading = false;
      state.isEditProfileLoading = false;
      state.isEditProfileSuccess = false;
      state.isEditProfileError = false;
      state.isGetAccountNameLoading = false;
      state.isGetAccountNameError = false;
      state.isGetAccountNameSuccess = false;
      state.isGetTransactionsLoading = false;
      state.isGetTransactionsSuccess = false;
      state.isGetTransactionsError = false;
    },
    resetUserTransactions: (state) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = false;
      state.message = "";
      state.accountName = "";
      state.transactions = null;
    },
  },
  extraReducers: (builder) => {
    builder

      .addCase(resendEmail.pending, (state) => {
        state.isResendEmailLoading = true;
      })
      .addCase(resendEmail.fulfilled, (state, action) => {
        state.isError = false;
        state.isResendEmailLoading = false;
        state.isResendEmailSuccess = true;
        state.message = action.payload.result.message;
      })
      .addCase(resendEmail.rejected, (state, action) => {
        state.isError = true;
        state.isResendEmailLoading = false;
        state.message = action.payload.message;
        state.isResendEmailSuccess = false;
      })

      .addCase(verifyEmail.pending, (state) => {
        state.isVerifyEmailLoading = true;
      })
      .addCase(verifyEmail.fulfilled, (state, action) => {
        state.isVerifyEmailLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.message = action.payload.result.message;
      })
      .addCase(verifyEmail.rejected, (state, action) => {
        state.isVerifyEmailLoading = false;
        state.isError = true;
        state.message = action.payload.message;
        state.isSuccess = false;
      })

      .addCase(editProfile.pending, (state) => {
        state.isEditProfileLoading = true;
      })
      .addCase(editProfile.fulfilled, (state, action) => {
        state.isEditProfileLoading = false;
        state.isEditProfileError = false;
        state.isEditProfileSuccess = true;
        state.message = action.payload.result.message;
      })
      .addCase(editProfile.rejected, (state, action) => {
        state.isEditProfileLoading = false;
        state.isEditProfileError = true;
        state.message = action.payload.message;
        state.isEditProfileSuccess = false;
      })

      .addCase(getAccountName.pending, (state) => {
        state.isGetAccountNameLoading = true;
      })
      .addCase(getAccountName.fulfilled, (state, action) => {
        state.isGetAccountNameLoading = false;
        state.isGetAccountNameError = false;
        state.isGetAccountNameSuccess = true;
        state.message = action.payload.result.message;
        state.accountName = action.payload.result.data;
      })
      .addCase(getAccountName.rejected, (state, action) => {
        state.isGetAccountNameLoading = false;
        state.isGetAccountNameError = true;
        state.message = action.payload.message;
        state.isGetAccountNameSuccess = false;
      })

      .addCase(getTransactions.pending, (state) => {
        state.isGetTransactionsLoading = true;
      })
      .addCase(getTransactions.fulfilled, (state, action) => {
        state.isGetTransactionsLoading = false;
        state.isGetTransactionsError = false;
        state.isGetTransactionsSuccess = true;
        state.message = action.payload.result.message;
        state.transactions = action.payload.result.data;
      })
      .addCase(getTransactions.rejected, (state, action) => {
        state.isGetTransactionsLoading = false;
        state.isGetTransactionsError = true;
        state.message = action.payload.message;
        state.isGetTransactionsSuccess = false;
      });
  },
});

export const { reset, resetUserTransactions } = userSlice.actions;
export default userSlice.reducer;
