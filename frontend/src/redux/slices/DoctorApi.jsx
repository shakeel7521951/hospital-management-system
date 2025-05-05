// src/redux/slices/userApi.jsx
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const doctorApi = createApi({
  reducerPath: "doctorApi",
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
    getDoctors: builder.query({
      query: () => ({
        url: "/get-doctors",
        method: "GET",
      }),
      providesTags: ['Doctors'], 
    }),

    addDoctor: builder.mutation({
      query: (formData) => ({
        url: "/add-doctor",
        method: "POST",
        body: formData,
      }),
      invalidatesTags: ['Doctors'],
    }),

    deleteDoctor: builder.mutation({
      query: (id) => ({
        url: `/delete-doctors/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ['Doctors'],
    }),

    editDoctor: builder.mutation({
      query: ({ id, data }) => ({
        url: `/edit-doctors/${id}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ['Doctors'],
    }),
  }),
});

export const {
  useGetDoctorsQuery,
  useAddDoctorMutation,
  useDeleteDoctorMutation,
  useEditDoctorMutation,
} = doctorApi;
