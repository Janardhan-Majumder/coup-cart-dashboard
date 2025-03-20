import baseApi from "../../api/baseApi";

export const dashboardApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // DashboardHome page
    getTotalCounts: builder.query({
      query: () => ({
        url: "/v1/dashboard",
        method: "GET",
      }),
      providesTags: ["dashboard"],
    }),
    // Earning in DashboardHome page
    getEarnings: builder.query({
      query: () => ({
        url: `/v1/dashboard/monthly-earnings`,
        method: "GET",
        // headers: { Authorization: `Bearer ${token}` },
      }),
      providesTags: ["dashboard"],
    }),

    getAllUsers: builder.query({
      query: () => ({
        url: `/v1/users/getAll`,
        method: "GET",
      }),
      providesTags: ["dashboard"],
    }),
  }),
});

export const {
  useGetTotalCountsQuery,
  useGetEarningsQuery,
  useGetAllUsersQuery,
} = dashboardApi;
