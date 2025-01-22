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
      state.user = user ? JSON.parse(user) : null;
    },
  },
  extraReducers: (builder) => {
    builder

      // .addCase(fetchUserInfo.pending, (state) => {
      //   state.isLoading = true;
      // })
      // .addCase(fetchUserInfo.fulfilled, (state, action) => {
      //   state.isLoading = false;
      //   state.isError = false;
      //   state.isSuccess = true;
      //   state.message = action.payload.result.message;
      //   state.user = action.payload.result.data;
      // })
      // .addCase(fetchUserInfo.rejected, (state, action) => {
      //   state.isLoading = false;
      //   state.isError = true;
      //   state.message = action.payload.message;
      //   state.isSuccess = false;
      // })

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

export const { reset } = userSlice.actions;
export default userSlice.reducer;
