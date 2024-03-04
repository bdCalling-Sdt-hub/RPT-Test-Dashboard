import { baseApi } from "../../api/baseApi";

const getAppointmentApi = baseApi.injectEndpoints({
    endpoints:(builder)=>({
        getSingleMembership : builder.query({
            query:(id)=>`/membership/${id}`,
            providesTags:["membership"]
        })
    })
})

export const {useGetSingleMembershipQuery} = getAppointmentApi;