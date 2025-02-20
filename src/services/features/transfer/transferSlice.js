import { createAsyncThunkWithHandler } from "../../api/apiHandler";
import { createSlice } from "@reduxjs/toolkit";
import transferService from "./transferService";

const initialState = {
  isLoading: false,
  message: "",
  isSuccess: false,
  isError: false,
  firstTransactionId: "",
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

export const transferFee = createAsyncThunkWithHandler(
  "transfer/transferFee",
  async (data, _) => {
    return await transferService.transferFee(data);
  }
);

export const upgradeFee = createAsyncThunkWithHandler(
  "transfer/upgradeFee",
  async (data, _) => {
    return await transferService.upgradeFee(data);
  }
);

export const blockchainFee = createAsyncThunkWithHandler(
  "transfer/blockchainFee",
  async (data, _) => {
    return await transferService.blockchainFee(data);
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
      state.firstTransactionId = "";
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
        state.firstTransactionId = action.payload.result.data;
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
        state.firstTransactionId = action.payload.result.data;
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
        state.firstTransactionId = action.payload.result.data;
        state.message = action.payload.result.message;
      })
      .addCase(cryptoTransfer.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload.message;
        state.isSuccess = false;
      })
      .addCase(transferFee.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(transferFee.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.message = action.payload.result.message;
      })
      .addCase(transferFee.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload.message;
        state.isSuccess = false;
      })
      .addCase(upgradeFee.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(upgradeFee.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.message = action.payload.result.message;
      })
      .addCase(upgradeFee.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload.message;
        state.isSuccess = false;
      })
      .addCase(blockchainFee.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(blockchainFee.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.message = action.payload.result.message;
      })
      .addCase(blockchainFee.rejected, (state, action) => {
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
      });
  },
});

export const { reset } = transferSlice.actions;
export default transferSlice.reducer;
