import baseApi from "../../api/baseApi";

export const categoryApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // DashboardHome page
    getAllCategory: builder.query({
      query: () => ({
        url: "/v1/",
        method: "GET",
      }),
      providesTags: ["category"],
    }),

    //  add subscription
    addCategory: builder.mutation({
      query: (addCategoryData) => ({
        url: "/v1/",
        method: "POST",
        body: addCategoryData,
      }),
      invalidatesTags: ["category"],
    }),

    //  edit category
    editCategory: builder.mutation({
      query: ({ categoryId, editCategoryData }) => ({
        url: `/v1/${categoryId}`,
        method: "PUT",
        body: editCategoryData,
      }),
      invalidatesTags: ["category"],
    }),
  }),
});

export const {
  useGetAllSubsriptionsQuery,
  useAddSubscriptionMutation,
  useEditCategoryMutation,
} = categoryApi;
