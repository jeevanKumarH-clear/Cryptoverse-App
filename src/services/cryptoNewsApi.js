import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

  const cryptoNewsHeaders =  {
    accept : 'application/json',
    TI_API_KEY: '008af21ca9f84f509e0b81bd8a7cf446'
  }

const baseUrl = 'https://api.tokeninsight.com';

const createRequest = (url) => ({url, headers: cryptoNewsHeaders});

export const cryptoNewsApi = createApi({
    reducerPath: 'cryptoNewsApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getCryptoNews: builder.query({
            query: (count) => createRequest(`/api/v1/news/list?_limit=${count}`)
        })
    })
})

export const {
    useGetCryptoNewsQuery,
} = cryptoNewsApi;