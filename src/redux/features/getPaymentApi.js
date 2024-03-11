import { baseApi } from "../api/baseApi";

const getPaymentApi = baseApi.injectEndpoints({
  endpoints: (builder) => {
    return {
      getPayment: builder.query({
        query: ({startDate, endDate}) => {
        //   console.log(page);
          return `/payment?&startDate=${startDate}&endDate=${endDate}`;
        },
      }),
    };
  },
});

export const { useGetPaymentQuery } = getPaymentApi;
