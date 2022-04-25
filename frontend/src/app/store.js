import { configureStore } from '@reduxjs/toolkit'
import authReducer from '../features/auth/authSlice'
import slotReducer from '../features/slots/slotSlice'
import userReducer from '../features/users/userSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    slots: slotReducer,
    users: userReducer,
  },
})
