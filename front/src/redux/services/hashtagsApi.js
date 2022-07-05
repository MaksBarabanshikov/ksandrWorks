import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseUrl = '/api/hashtags'

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
    tagTypes: ['Process'],
    endpoints: build => ({
        // Получаем / Начинаем процесс обработки постов
        getProcess: build.query({
            query: () =>  `process`,
            providesTags: result => ['Process'],
            transformResponse(process, meta) {
                return {status: Number(meta.response.status)}
            }
        }),
        //Повторяющийся запрос на получение постов
        repeatGetProcess: build.query({
            query: () => 'process/status',
            providesTags: result => ['Process'],
            transformResponse(process, meta) {
                return {process, status: Number(meta.response.status)}
            }
        }),
        // Получаем посты инстаграм
        getInstagramPosts: build.query({
            query: () => 'all-instagram-posts',
        }),
        // Получаем pages fb
        getPages: build.query({
            query: () => `get-pages`,
        }),
        // Получаем сортированные хештеги
        getFavorites: build.query({
            query: () => 'sorted-hashtags',
        }),
        // завершение сессии
        stopProcess: build.query({
           query: () => 'process/exit'
        }),
        // Отправляем токен fb
        sendTokenFb: build.mutation({
            query: (data) => ({
                url: `/get-access-id`,
                method: 'POST',
                body: data
            }),
        }),
        // Отправляем выбранный page fb
        sendCurrentPage: build.mutation({
            query: (data) => ({
                url: 'current-fb-page',
                method: 'POST',
                body: data,
            }),
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
        sendFavorites: build.mutation({
            query:(data) => ({
                url: 'all-blocks',
                method: 'POST',
                body: data
            }),
            invalidatesTags: ['Process']
        }),
        // отправляем текущий пост
        sendCurrentPostId: build.mutation({
           query: (data) => ({
               url: 'post-id',
               method: 'POST',
               body: data
           })
        }),
        // выход fb
        exitFb: build.mutation({
            query: (data) => ({
                url: 'exit',
                method: 'POST',
                body: data
            }),
        }),
    })
})

export const {
    useGetProcessQuery,
    useRepeatGetProcessQuery,
    useGetPagesQuery,
    useLazyGetInstagramPostsQuery,
    useGetFavoritesQuery,
    useLazyStopProcessQuery,
    useSendTokenFbMutation,
    useSendCurrentPageMutation,
    useSendFileMutation,
    useSendFavoritesMutation,
    useSendCurrentPostIdMutation,
    useExitFbMutation
} = hashtagsApi