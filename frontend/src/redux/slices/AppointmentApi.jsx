import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const appointmentApi = createApi({
  reducerPath: "appointmentApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:4000/api/v1",
    prepareHeaders: (headers, { getState }) => {
      const token = getState()?.user?.profile?.token;
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      return headers;
    },
    credentials: "include",
  }),
  endpoints: (builder) => ({
    // Create a new appointment
    createAppointment: builder.mutation({
      query: (appointmentData) => ({
        url: "/create-appointment",
        method: "POST",
        body: appointmentData,
      }),
    }),

    // Get all appointments (if needed)
    getAppointments: builder.query({
      query: () => "/all-appointments",
    }),
  }),
});

// Export hooks
export const {
  useCreateAppointmentMutation,
  useGetAppointmentsQuery,
} = appointmentApi;
