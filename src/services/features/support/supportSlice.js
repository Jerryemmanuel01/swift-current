import { createAsyncThunkWithHandler } from "../../api/apiHandler";
import { createSlice } from "@reduxjs/toolkit";
import supportService from "./supportService";

const initialState = {
  isLoading: false,
  message: "",
  isSuccess: false,
  isError: false,
};

export const sendMessage = createAsyncThunkWithHandler(
  "support/sendMessage",
  async (data, _) => {
    return await supportService.send_message(data);
  }
);

const supportSlice = createSlice({
  name: "support",
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

      .addCase(sendMessage.pending, (state, _) => {
        state.isLoading = true;
      })
      .addCase(sendMessage.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.message = action.payload.message;
      })
      .addCase(sendMessage.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.isSuccess = false;
      });
  },
});

export const { reset } = supportSlice.actions;
export default supportSlice.reducer;
