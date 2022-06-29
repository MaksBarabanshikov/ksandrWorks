import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
///api/hashtags/process

export const baseUrl = 'https://localhost:8080/api/hashtags/'

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
        // Получаем pages fb
        getPages: build.query({
            query: () => `get-pages`
        }),
        // Получаем сортированные хештеги
        getFavorites: build.query({
            query: () => 'sorted-hashtags',
        }),
        // Отправляем токен fb
        sendTokenFb: build.mutation({
            query: (data) => ({
                url: `get-access-id`,
                method: 'POST',
                body: data
            })
        }),
        // Отправляем выбранный page fb
        sendCurrentPage: build.mutation({
            query: (data) => ({
                url: 'current-fb-page',
                method: 'POST',
                body: data
            })
        }),
        // Отправляем файл txt
        sendFile: build.mutation({
            query: (data) => ({
                url: 'file-of-hashtags',
                method: 'POST',
                body: data
            })
        }),
        // Отправляем хештеги
        sendFavorites: build.mutation( {
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