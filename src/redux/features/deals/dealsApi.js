import baseApi from "../../api/baseApi";

export const dealsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // DashboardHome page
    getAllDeals: builder.query({
      query: () => ({
        url: "/v1/",
        method: "GET",
      }),
      providesTags: ["deals"],
    }),

    //  add subscription
    addDeals: builder.mutation({
      query: (addDealData) => ({
        url: "/v1/",
        method: "POST",
        body: addDealData,
      }),
      invalidatesTags: ["deals"],
    }),

    //  edit category
    editDeals: builder.mutation({
      query: ({ dealId, editDealData }) => ({
        url: `/v1/${dealId}`,
        method: "PUT",
        body: editDealData,
      }),
      invalidatesTags: ["deals"],
    }),
  }),
});

export const { useGetAllSubsriptionsQuery, useAddSubscriptionMutation } =
  dealsApi;
