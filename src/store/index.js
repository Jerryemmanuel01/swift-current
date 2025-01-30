import { configureStore } from "@reduxjs/toolkit";
import authSlice from "../services/features/auth/authSlice";
import supportSlice from "../services/features/support/supportSlice";
import userSlice from "../services/features/user/userSlice";
import userInfoSlice from "../services/features/userInfo/userInfoSlice";
import fundingSlice from "../services/features/funding/fundingSlice";
export const store = configureStore({
  reducer: {
    auth: authSlice,
    support: supportSlice,
    userInfo: userInfoSlice,
    user: userSlice,
    funding: fundingSlice,
  },

  devTools: true,
});
