import { baseApi } from "../../api/baseApi";

const loginApi = baseApi.injectEndpoints({
    endpoints:(builder)=>({
        getUser:builder.query({
            query:()=>'/users'
        })
    })
})

export const {useGetUserQuery} = loginApi