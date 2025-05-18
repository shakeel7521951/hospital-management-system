import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import BACKEND_URL from '../../Base_Url.jsx';

export const appointmentApi = createApi({
  reducerPath: "appointmentApi",
  baseQuery: fetchBaseQuery({
    baseUrl: BACKEND_URL,
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
      query: () => ({
        url: "/all-appointments",
        method: "GET",
      }),
      providesTags: ['Appointment'], 
    }),

    getMYAppointments: builder.query({
      query: () => ({
        url: "/my-appointments",
        method: "GET",
      }),
      providesTags: ['Appointment'], 
    }),

    updateStatus: builder.mutation({
      query: ({ orderId, status }) => ({
        url: `/orders/${orderId}/status`,
        method: "PUT",
        body: {status},
      }),
      invalidatesTags: ['Appointment'],
    }),
  }),
});

// Export hooks
export const { useCreateAppointmentMutation, useGetAppointmentsQuery,useUpdateStatusMutation,useGetMYAppointmentsQuery } =
  appointmentApi;
