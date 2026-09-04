import { configureStore } from '@reduxjs/toolkit';

import authReducer from '../features/auth/authSlice';
import hotelReducer from '../features/hotels/hotelSlice';
export const store = configureStore({
  reducer: {
    auth: authReducer,
    hotels:hotelReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;