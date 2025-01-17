import { configureStore } from "@reduxjs/toolkit";
import authSlice from "../services/features/auth/authSlice";
import supportSlice from "../services/features/support/supportSlice";
import userSlice from "../services/features/user/userSlice";
export const store = configureStore({
  reducer: {
    auth: authSlice,
    support: supportSlice,
    user: userSlice,
  },

  devTools: true,
});
