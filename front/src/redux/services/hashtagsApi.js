import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
///api/hashtags/process

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
    endpoints: build => ({
        getProcess: build.query({
            query: () =>  `/process`,
             queryFn: async (_arg, _queryApi, _extraOptions, fetchWithBQ) => {
                const firstStatus = await fetchWithBQ('/process')
                if (firstStatus.error) throw firstStatus.error
                 const status = firstStatus.status
                 const secondStatus = await fetchWithBQ('/process/status')
                 return secondStatus.status ? {data: secondStatus.data} : { error: secondStatus.error }
            }


        }),
        repeatGetProcess: build.query({
            query: () => '/process/status'
        })
    })
})

export const { useGetProcessQuery, useRepeatGetProcessQuery } = hashtagsApi