import {baseApi} from "../api/baseApi";
const getNotificationApi = baseApi.injectEndpoints({
    endpoints:(builder)=>({
        getNotification:builder.query({
            query:(page)=>({url:`notification/admin?page=${page}&sortBy=createdAt:desc`}),
            providesTags: [{ type: "notification", id: "LIST" }],
        }),

    })
})

export const  {useGetNotificationQuery} = getNotificationApi;