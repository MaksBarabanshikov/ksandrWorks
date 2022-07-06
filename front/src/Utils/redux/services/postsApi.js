import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"

export const postsApi = createApi({
    reducerPath: 'postsApi',
    tagTypes: ['posts'],
    baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:8080/'}),
    endpoints: build => ({
        getPosts: build.query({
            query: () => `posts`,
            providesTags: (result) => result
                ? [
                    ...result.map(({id}) => ({type: 'posts', id})),
                    {type: 'posts', id: 'LIST'},
                ]
                : [{type: 'posts', id: 'LIST'}],
        }),
        addProduct: build.mutation({
            query: body => ({
                url: 'posts',
                method: "POST",
                body,
            }),
            invalidatesTags: [{type: 'posts', id: 'LIST'}]
        }),
        deleteProducts: build.mutation({
            query: id => ({
                url: `posts/${id}`,
                method: 'DELETE'
            }),
            invalidatesTags: [{type: 'posts', id: 'LIST'}]
        })
    }),
})

export const {
    useGetPostsQuery,
    useAddProductMutation,
    useDeleteProductsMutation,
} = postsApi