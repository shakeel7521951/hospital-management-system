import { configureStore } from "@reduxjs/toolkit";
import { userApi } from "./slices/UserApi";
import userReducer from "./slices/UserSlice";
import { doctorApi } from "./slices/DoctorApi";
import { appointmentApi } from "./slices/AppointmentApi";

export const store = configureStore({
  reducer: {
    [userApi.reducerPath]: userApi.reducer,
    user: userReducer,
    [doctorApi.reducerPath]: doctorApi.reducer,
    [appointmentApi.reducerPath]:appointmentApi.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(userApi.middleware,doctorApi.middleware,appointmentApi.middleware),
  devTools: process.env.NODE_ENV !== "production",
});
