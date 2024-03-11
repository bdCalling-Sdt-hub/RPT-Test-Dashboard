import { baseApi } from "../api/baseApi";

const getAppointmentApi = baseApi.injectEndpoints({
    endpoints:(builder)=>({
        getAppointment:builder.query({
            query:()=>'/appointment?sortBy=createdAt:desc'
        })
    })
})

export const {useGetAppointmentQuery} = getAppointmentApi;