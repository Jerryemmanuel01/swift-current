import { createAsyncThunkWithHandler } from "../../api/apiHandler";
import { createSlice } from "@reduxjs/toolkit";
import authService from "./authService";

const token = localStorage.getItem("");

const initialState = {
  isLoading: false,
  message: "",
  isSuccess: false,
  isError: false,
  token: token ? token : null,
};

export const customerSignUp = createAsyncThunkWithHandler(
  "auth/signUp",
  async (data, _) => {
    return await authService.sign_up(data);
  }
);

export const verifyEmail = createAsyncThunkWithHandler(
  "auth/verifyEmail",
  async (data, _) => {
    return await authService.verify_email(data);
  }
);

export const login = createAsyncThunkWithHandler(
  "auth/login",
  async (data, _) => {
    return await authService.login(data);
  }
);

export const forgetPassword = createAsyncThunkWithHandler(
  "auth/forgetPassword",
  async (data, _) => {
    return await authService.forget_password(data);
  }
);

export const resetPassword = createAsyncThunkWithHandler(
  "auth/ResetPassword",
  async (data, _) => {
    return await authService.reset_password(data);
  }
);

const authSlice = createSlice({
  name: "auth",
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

      .addCase(customerSignUp.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(customerSignUp.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.message = action.payload.message;
      })
      .addCase(customerSignUp.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.isSuccess = false;
      })

      //verifyEmail case
      .addCase(verifyEmail.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(verifyEmail.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.message = action.payload.message;
      })
      .addCase(verifyEmail.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.isSuccess = false;
      })

      //verifyEmail case
      .addCase(login.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.message = action.payload.message;
      })
      .addCase(login.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.isSuccess = false;
      })

      //forgetPassword case
      .addCase(forgetPassword.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(forgetPassword.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.message = action.payload.message;
      })
      .addCase(forgetPassword.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.isSuccess = false;
      })

      //resetPassword case
      .addCase(resetPassword.pending, (state, _) => {
        state.isLoading = true;
      })
      .addCase(resetPassword.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.message = action.payload.message;
      })
      .addCase(resetPassword.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.isSuccess = false;
      });
  },
});

export const { reset } = authSlice.actions;
export default authSlice.reducer;
