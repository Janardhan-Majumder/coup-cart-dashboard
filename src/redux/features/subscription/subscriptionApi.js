import baseApi from "../../api/baseApi";

export const subscriptionApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // DashboardHome page
    getAllSubsriptions: builder.query({
      query: () => ({
        url: "/",
        method: "GET",
      }),
      providesTags: ["subscription"],
    }),

    //  add subscription
    addSubscription: builder.mutation({
      query: (addCategoryData) => ({
        url: "/v1/subscription/create",
        method: "POST",
        body: addCategoryData,
      }),
      invalidatesTags: ["subscription"],
    }),
  }),
});

export const { useGetAllSubsriptionsQuery, useAddSubscriptionMutation } =
  subscriptionApi;
