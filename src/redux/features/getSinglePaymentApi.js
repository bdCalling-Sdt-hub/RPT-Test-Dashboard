import { baseApi } from "../api/baseApi";

const getSinglePaymentApi = baseApi.injectEndpoints({
    endpoints:(builder)=>({
        getSinglePayment:builder.query({
            query:(id)=>`/payment/${id}`
        })
    })
})

export const {useGetSinglePaymentQuery} = getSinglePaymentApi