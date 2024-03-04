import { baseApi } from "../../api/baseApi";

const getSingleBlogApi = baseApi.injectEndpoints({
    endpoints:(builder)=>({
        getSingleBlog:builder.query({
            query:(id)=>`/blog/${id}`
        })
    })
})

export const {useGetSingleBlogQuery} = getSingleBlogApi;