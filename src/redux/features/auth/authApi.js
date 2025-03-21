// import { baseApi } from "../api/baseApi";

import baseApi from "../../api/baseApi";

export const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // 01. login
    login: builder.mutation({
      query: (loginData) => ({
        url: "/v1/auth/login",
        method: "POST",
        body: loginData,
      }),
    }),

    // 02. forgot password
    forgotPassword: builder.mutation({
      query: (data) => {
        return {
          url: `/v1/auth/forgot-password`,
          method: "POST",
          body: data,
        };
      },
      invalidatesTags: ["auth"],
    }),

    // 03. verify email
    verifyEmail: builder.mutation({
      query: ({ code }) => {
        return {
          url: `/v1/auth/verify-email`,
          method: "POST",
          // headers: { Authorization: `Bearer ${token}` },
          body: { oneTimeCode: code },
        };
      },
      invalidatesTags: ["auth"],
    }),

    // 04. reset password
    resetPassword: builder.mutation({
      query: ({ token, password }) => {
        return {
          url: `/v1/auth/reset-password`,
          method: "POST",
          headers: { Authorization: `Bearer ${token}` },
          body: { password: password },
        };
      },
      invalidatesTags: ["auth"],
    }),
    // change password
    changePassword: builder.mutation({
      query: ({ token, password }) => {
        return {
          url: `/v1/auth/change-password`,
          method: "POST",
          headers: { Authorization: `Bearer ${token}` },
          body: { password: password },
        };
      },
      invalidatesTags: ["auth"],
    }),

    // 05. resend otp
    resendOtp: builder.query({
      query: (id) => ({
        url: `/otp/resend?userId=${id}`,
        method: "GET",
      }),
      providesTags: ["auth"],
    }),

    // 10. logout
    logout: builder.mutation({
      query: () => ({
        url: "/logout",
        method: "POST",
      }),
    }),
  }),
});

export const {
  useLoginMutation,
  useForgotPasswordMutation,
  useVerifyEmailMutation,
  useResetPasswordMutation,
  // useResendOtpQuery,
  useLazyResendOtpQuery,
  useLogoutMutation,
} = authApi;
