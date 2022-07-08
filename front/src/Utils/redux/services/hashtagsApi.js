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
    tagTypes: ['Process, Com, Rep, Del'],
    endpoints: build => ({
        //<---------------------------------------------------------------------->

        // Получаем / Начинаем процесс обработки постов
        getProcess: build.query({
            query: () =>  `process`,
            keepUnusedDataFor: 8,
            transformResponse(process, meta) {
                return {status: Number(meta.response.status)}
            }
        }),
        //Повторяющийся запрос на получение статуса
        repeatGetProcess: build.query({
            query: () => 'process/status',
            providesTags: result => ['Process'],
            keepUnusedDataFor: 8,
            transformResponse(process, meta) {
                return {process, status: Number(meta.response.status)}
            }
        }),
        //<---------------------------------------------------------------------->




        //GET STATUS NEW
        getStatusProcess: build.query({
           query: () => 'process/status',
            providesTags: result => ['Process','Com', 'Rep', 'Del'],
            keepUnusedDataFor: 8,
            transformResponse(method, meta) {
                return {method, status: Number(meta.response.status)}
            }

        }),
        // commenting
        getCommenting: build.mutation({
            query: () => ({
                url: 'process/comment',
                method: 'GET'
            }),
            invalidatesTags: [{type: 'Com'}],
            keepUnusedDataFor: 1,
            transformResponse(data, meta) {
                return {status: Number(meta.response.status)}
            },

        }),
        // commenting
        getReply: build.mutation({
            query: () => ({
                url: 'process/reply',
                method: 'GET'
            }),
            invalidatesTags: [{type: 'Rep'}],
            keepUnusedDataFor: 1,
            transformResponse(data, meta) {
                return {status: Number(meta.response.status)}
            },
        }),
        // commenting
        getDel: build.mutation({
            query: () => ({
                url: 'process/delete',
                method: 'GET'
            }),
            invalidatesTags: [{type: 'Del'}],
            keepUnusedDataFor: 1,
            transformResponse(data, meta) {
                return {status: Number(meta.response.status)}
            },
        }),
        // Получаем посты инстаграм
        exitProcess: build.mutation({
            query: () => ({
                url: 'process/exit',
                method: 'GET'
            }),
            invalidatesTags: ['Process','Com', 'Rep', 'Del']
        }),
        getInstagramPosts: build.query({
            query: () => 'all-instagram-posts',
        }),
        // Получаем Pages fb
        getPages: build.query({
            query: () => `get-pages`,
        }),
        // Получаем сортированные хештеги
        getFavorites: build.query({
            query: () => 'sorted-hashtags',
        }),
        // завершение сессии
        stopProcess: build.query({
           query: () => 'process/stop'
        }),
        // Отправляем токен fb
        sendTokenFb: build.mutation({
            query: (data) => ({
                url: `get-access-id`,
                method: 'POST',
                body: data
            }),
        }),
        // Новый токен
        refreshFacebookToken: build.mutation({
            query: (data) => ({
                url: `refresh-access`,
                method: 'POST',
                body: data
            }),
            invalidatesTags: ['Process']
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
            })
        }),
        // отправляем текущий пост
        sendCurrentPostId: build.mutation({
           query: (data) => ({
               url: 'post-id',
               method: 'POST',
               body: data
           }),
            invalidatesTags: ['Process','Com', 'Rep', 'Del']
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
    useGetStatusProcessQuery,
    useSendTokenFbMutation,
    useSendCurrentPageMutation,
    useRefreshFacebookTokenMutation,
    useSendFileMutation,
    useSendFavoritesMutation,
    useSendCurrentPostIdMutation,
    useExitProcessMutation,
    useExitFbMutation,
    useGetCommentingMutation,
    useGetReplyMutation,
    useGetDelMutation,
} = hashtagsApi