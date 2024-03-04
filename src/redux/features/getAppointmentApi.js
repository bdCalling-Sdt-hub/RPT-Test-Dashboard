import { baseApi } from "../api/baseApi";

const getAppointmentApi = baseApi.injectEndpoints({
    endpoints:(builder)=>({
        getAppointment:builder.query({
            query:()=>'/appointment'
        })
    })
})

export const {useGetAppointmentQuery} = getAppointmentApi;