import { baseApi } from "../api/baseApi";

const getPaymentApi = baseApi.injectEndpoints({
  endpoints: (builder) => {
    return {
      getPayment: builder.query({
        query: ({startDate, endDate,currentPage}) => {
        //   console.log(page);
          return `/payment?page=${currentPage}&limit=10&startDate=${startDate}&endDate=${endDate}`;
        },
      }),
    };
  },
});

export const { useGetPaymentQuery } = getPaymentApi;
