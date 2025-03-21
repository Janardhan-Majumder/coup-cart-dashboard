import baseApi from "../../api/baseApi";

export const subscriptionApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // DashboardHome page
    getAllSubsriptions: builder.query({
      query: () => ({
        url: "/v1/subscription",
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

    // edit subscription
    editSubscription: builder.mutation({
      query: ({ categoryId, editCategoryData }) => ({
        url: `/v1/${categoryId}`,
        method: "PUT",
        body: editCategoryData,
      }),
      invalidatesTags: ["subscription"],
    }),
  }),
});

export const {
  useGetAllSubsriptionsQuery,
  useAddSubscriptionMutation,
  useEditSubscriptionMutation,
} = subscriptionApi;
