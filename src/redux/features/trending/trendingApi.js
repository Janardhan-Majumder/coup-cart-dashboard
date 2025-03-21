import baseApi from "../../api/baseApi";

export const trendingApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // DashboardHome page
    getTrendingPlaces: builder.query({
      query: () => ({
        url: "/v1/trending-places/",
        method: "GET",
      }),
      providesTags: ["trending"],
    }),
  }),
});

export const { useGetTrendingPlacesQuery } = trendingApi;
