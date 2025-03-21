import baseApi from "../../api/baseApi";

export const notificationApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // DashboardHome page
    getAllNotification: builder.query({
      query: () => ({
        url: "/v1/notifications",
        method: "GET",
      }),
      providesTags: ["notification"],
    }),
  }),
});

export const { useGetAllNotificationQuery } = notificationApi;
