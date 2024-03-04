import { baseApi } from "../../api/baseApi";

const getAllBlogApi = baseApi.injectEndpoints({
    endpoints:(builder)=>({
        getAllBlog:builder.query({
            query:(page)=>`/blog?page=${page}`
        })
    })
})

export const {useGetAllBlogQuery} = getAllBlogApi;