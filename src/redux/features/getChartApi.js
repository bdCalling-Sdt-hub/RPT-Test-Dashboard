import { baseApi } from "../api/baseApi";

const getChartApi = baseApi.injectEndpoints({
    endpoints:(builder)=>({
        getChart:builder.query({
            query:(year)=> `payment/chart?year=${year}`
        })
    })
})

export const {useGetChartQuery} = getChartApi;
