import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


export const baseApi = createApi({
    reducerPath:'api',
    baseQuery:fetchBaseQuery({
        baseUrl:'http://api.rptlabs.org/v1/',
        headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${localStorage.getItem("token")}`,
        }
    }),
    tagTypes:["membership","notification"],
    endpoints:()=>({
        // getUser:builder.query({
        //     query:()=>'/users'
        // })
    })
})

// export const {useGetUserQuery} = baseApi;