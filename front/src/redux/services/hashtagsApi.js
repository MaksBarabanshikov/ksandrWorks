import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
///api/hashtags/process

export const baseUrl = 'https://localhost:3000/'

export const hashtagsApi = createApi({
    reducerPath: 'hashtagsApi',
    baseQuery: fetchBaseQuery({
        baseUrl,
        mode: 'no-cors',
        prepareHeaders: (headers, {getProcess}) => {
            headers.set('Access-Control-Allow-Origin', '*')
            headers.set('Content-Type', 'application/json')
            return headers
        }
    }),
    endpoints: build => ({
        getProcess: build.query({
            query: () =>  `api/hashtags/process`
        })
    })
})

export const { useGetProcessQuery } = hashtagsApi