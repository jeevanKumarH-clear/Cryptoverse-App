import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const cryptoCoinHistoryApiHeaders = {
  accept: "application/json",
  "x-rapidapi-key": process.env.REACT_APP_RAPID_API_KEY,
  "x-rapidapi-host": "tokeninsight-crypto-api1.p.rapidapi.com",
  TI_API_KEY: process.env.REACT_APP_TI_API_KEY,
};

const baseUrl = "https://tokeninsight-crypto-api1.p.rapidapi.com";

const createRequest = (url, params) => ({
  url,
  params,
  headers: cryptoCoinHistoryApiHeaders,
});

export const cryptoCoinHistoryApi = createApi({
  reducerPath: "cryptoCoinHistoryApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getCryptoCoinHistory: builder.query({
      query: ({
        currency,
        interval = "day",
        length = "90",
        vs_currency = "usd",
      }) =>
        createRequest(`/api/v1/history/coins/${currency}`, {
          interval,
          length,
          vs_currency,
        }),
    }),
    getExchanges: builder.query({
      query: () => createRequest(`/api/v1/exchanges/list`)
    })
  }),
});

export const { useGetCryptoCoinHistoryQuery, useGetExchangesQuery } = cryptoCoinHistoryApi;
