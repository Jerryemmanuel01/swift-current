import { configureStore } from '@reduxjs/toolkit';
import authSlice from "../services/features/auth/authSlice"
import supportSlice from "../services/features/support/supportSlice";
export const store = configureStore({
  reducer: {
    auth: authSlice,
    support: supportSlice
  },
  
  devTools: true,
});
