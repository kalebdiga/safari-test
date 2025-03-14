import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_BASE_API,
  }),
  endpoints: (builder) => ({
    login: builder.mutation({
      query: ({ body, accesstoken }) => ({
        url: "",
        method: "POST",
        body: body,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accesstoken}`,
          otpfor: "login",
        },
      }),
    }),
  }),
});

export const { useLoginMutation } = apiSlice;
