import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
///api/hashtags/process

export const baseUrl = '/api/hashtags/'

export const hashtagsApi = createApi({
    reducerPath: 'hashtagsApi',
    baseQuery: fetchBaseQuery({
        baseUrl,
        mode: 'no-cors',
        prepareHeaders: (headers, ) => {
            headers.set('Access-Control-Allow-Origin', '*')
            headers.set('Content-Type', 'application/json')
            return headers
        }
    }),
    endpoints: build => ({
        // Получаем / Начинаем процесс обработки постов
        getProcess: build.query({
            query: () =>  `process`
        }),
        //Повторяющийся запрос на получение постов
        repeatGetProcess: build.query({
            query: () => 'process/status'
        }),
        // Получаем посты инстаграм
        getInstagramPosts: build.query({
            query: () => 'all-instagram-posts'
        }),
        getPages: build.query({
            query: () => `get-pages`
        }),
        getFavorites: build.query({
            query: () => 'sorted-hashtags',
        }),
        sendTokenFb: build.mutation({
            query: (data) => ({
                url: `get-access-id`,
                method: 'POST',
                body: data
            })
        }),
        sendCurrentPage: build.mutation({
            query: (data) => ({
                url: 'current-fb-page',
                method: 'POST',
                body: data
            })
        }),
        sendFile: build.mutation({
            query: (data) => ({
                url: 'file-of-hashtags',
                method: 'POST',
                body: data
            })
        }),
        sendFavorites: build.mutation({
            query:(data) => ({
                url: 'all-blocks',
                method: 'POST',
                body: data
            })
        })
    })
})

export const {
    useGetProcessQuery,
    useRepeatGetProcessQuery,
    useGetPagesQuery,
    useGetInstagramPostsQuery,
    useGetFavoritesQuery,
    useSendTokenFbMutation,
    useSendCurrentPageMutation,
    useSendFileMutation,
    useSendFavoritesMutation
} = hashtagsApi