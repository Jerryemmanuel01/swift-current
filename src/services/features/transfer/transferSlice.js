import { createAsyncThunkWithHandler } from "../../api/apiHandler";
import { createSlice } from "@reduxjs/toolkit";
import transferService from "./transferService";

const initialState = {
  isLoading: false,
  message: "",
  isSuccess: false,
  isError: false,
};


export const internalTransfer = createAsyncThunkWithHandler(
  "transfer/internal",
  async (data, _) => {
    return await transferService.internalTransfer(data);
  }
);

export const internationalTransfer = createAsyncThunkWithHandler(
  "transfer/international",
  async (data, _) => {
    return await transferService.internationalTransfer(data);
  }
);
export const localTransfer = createAsyncThunkWithHandler(
  "transfer/local",
  async (data, _) => {
    return await transferService.localTransfer(data);
  }
);

export const cryptoTransfer = createAsyncThunkWithHandler(
  "transfer/crypto",
  async (data, _) => {
    return await transferService.cryptoTransfer(data);
  }
);

export const purchaseToken = createAsyncThunkWithHandler(
  "transfer/purchase-token",
  async (data, _) => {
    return await transferService.purchaseToken(data);
  }
);

const transferSlice = createSlice({
  name: "transfer",
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

      .addCase(internalTransfer.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(internalTransfer.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.message = action.payload.result.message;
      })
      .addCase(internalTransfer.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload.message;
        state.isSuccess = false;
      })
      .addCase(internationalTransfer.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(internationalTransfer.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.message = action.payload.result.message;
      })
      .addCase(internationalTransfer.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload.message;
        state.isSuccess = false;
      })
      .addCase(localTransfer.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(localTransfer.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.message = action.payload.result.message;
      })
      .addCase(localTransfer.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload.message;
        state.isSuccess = false;
      })
      .addCase(cryptoTransfer.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(cryptoTransfer.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.message = action.payload.result.message;
      })
      .addCase(cryptoTransfer.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload.message;
        state.isSuccess = false;
      })
      .addCase(purchaseToken.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(purchaseToken.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.message = action.payload.result.message;
      })
      .addCase(purchaseToken.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload.message;
        state.isSuccess = false;
      })
  },
});

export const { reset } = transferSlice.actions;
export default transferSlice.reducer;
