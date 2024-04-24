import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


export const baseApi = createApi({
    reducerPath:'api',
    baseQuery:fetchBaseQuery({
        baseUrl:'https://api.rptlabs.org/v1/',
        // baseUrl:'http://103.145.138.54:8282/v1/',
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