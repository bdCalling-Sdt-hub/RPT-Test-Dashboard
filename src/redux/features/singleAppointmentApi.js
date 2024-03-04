import { baseApi } from "../api/baseApi";

const getAppointmentApi = baseApi.injectEndpoints({
    endpoints:(builder)=>({
        getSingleAppointment:builder.query({
            query:(id)=>`/appointment/${id}`
        })
    })
})

export const {useGetSingleAppointmentQuery} = getAppointmentApi