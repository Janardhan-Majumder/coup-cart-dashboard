import baseApi from "../../api/baseApi";

export const redeemApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // DashboardHome page
    getAllRedeem: builder.query({
      query: () => ({
        url: "/v1/",
        method: "GET",
      }),
      providesTags: ["redeem"],
    }),
  }),
});

export const { useGetAllRedeemQuery } = redeemApi;
