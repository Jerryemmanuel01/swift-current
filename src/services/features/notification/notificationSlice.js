import { createAsyncThunkWithHandler } from "../../api/apiHandler";
import { createSlice } from "@reduxjs/toolkit";
import notificationService from "./notificationService";

const notifications = localStorage.getItem("SC_user_notifications");

const initialState = {
  message: "",
  isLoading: false,
  isSuccess: false,
  isError: false,
  notification: null,
  isNotificationMessage: "",
  isNotificationLoading: false,
  isNotificationSuccess: false,
  isNotificationError: false,
  notifications: notifications ? JSON.parse(notifications) : null,
};

export const getAllNotifications = createAsyncThunkWithHandler(
  "notification/getAllNotifications",
  async () => {
    return await notificationService.getAllNotifications();
  }
);

export const getNotification = createAsyncThunkWithHandler(
  "notification/getNotification",
  async (data, _) => {
    return await notificationService.getNotification(data);
  }
);

const notificationSlice = createSlice({
  name: "notification",
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = false;
      state.message = "";
    },
    resetNotifications: (state) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = false;
      state.message = "";
      state.notifications = null;
    },
    resetNotification: (state) => {
      state.notification = null;
      state.isNotificationMessage = "";
      state.isNotificationLoading = false;
      state.isNotificationSuccess = false;
      state.isNotificationError = false;
    },
  },

  extraReducers: (builder) => {
    builder

      .addCase(getAllNotifications.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllNotifications.fulfilled, (state, action) => {
        state.isError = false;
        state.isLoading = false;
        state.isSuccess = true;
        state.message = action.payload.result.message;
        state.notifications = action.payload.result.data;
      })
      .addCase(getAllNotifications.rejected, (state, action) => {
        state.isError = true;
        state.isLoading = false;
        state.message = action.payload.message;
        state.isSuccess = false;
      })
      .addCase(getNotification.pending, (state) => {
        state.isNotificationLoading = true;
      })
      .addCase(getNotification.fulfilled, (state, action) => {
        state.isNotificationError = false;
        state.isNotificationLoading = false;
        state.isNotificationSuccess = true;
        state.isNotificationMessage = action.payload.result.message;
        state.notification = action.payload.result.data;
      })
      .addCase(getNotification.rejected, (state, action) => {
        state.isNotificationError = true;
        state.isNotificationLoading = false;
        state.isNotificationMessage = action.payload.message;
        state.isNotificationSuccess = false;
      });
  },
});

export const { reset, resetNotifications, resetNotification} = notificationSlice.actions;
export default notificationSlice.reducer;
