import { baseApi } from "../api/baseApi";

const getRecentAppointmentApi = baseApi.injectEndpoints({
    endpoints:(builder)=>({
        getRecentAppointment:builder.query({
            query:()=>`/appointment?page=${1}&sortBy=createdAt:desc`
        })
    })
})

export const {useGetRecentAppointmentQuery} = getRecentAppointmentApi;