import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const cryptoCoinHistoryApiHeaders = {
    accept : 'application/json',
  'x-rapidapi-key': "6b45e7ca4bmsh32a65e508a11984p134512jsnd7006196a46f",
  'x-rapidapi-host': 'tokeninsight-crypto-api1.p.rapidapi.com',
  TI_API_KEY: '008af21ca9f84f509e0b81bd8a7cf446',
};

const baseUrl = 'https://tokeninsight-crypto-api1.p.rapidapi.com'

const createRequest = (url, params) => ({
  url,
  params, 
  headers: cryptoCoinHistoryApiHeaders
});

export const cryptoCoinHistoryApi = createApi({
  reducerPath: 'cryptoCoinHistoryApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getCryptoCoinHistory: builder.query({
      query: ({ currency, interval = 'day', length = '90', vs_currency = 'usd' }) => 
        createRequest(`/api/v1/history/coins/${currency}`, { interval, length, vs_currency }),
    }),
  }),
});

export const { useGetCryptoCoinHistoryQuery } = cryptoCoinHistoryApi;