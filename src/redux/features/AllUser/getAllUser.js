import { baseApi } from "../../api/baseApi";

const getAllUserApi = baseApi.injectEndpoints({
    endpoints:(builder)=>({
        getAllUser:builder.query({
            query:()=>'/users'
        })
    })
})

export const {useGetAllUserQuery} = getAllUserApi;