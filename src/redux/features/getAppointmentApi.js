import { baseApi } from "../api/baseApi";

const getAppointmentApi = baseApi.injectEndpoints({
    endpoints:(builder)=>({
        getAppointment:builder.query({
            query:({startDate,currentPage,endDate})=>`/appointment?page=${currentPage}&limit=10&startDate=${startDate}&endDate=${endDate}&sortBy=createdAt:desc`
        })
    })
})

export const {useGetAppointmentQuery} = getAppointmentApi;