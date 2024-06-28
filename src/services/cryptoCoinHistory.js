// // import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// //   const cryptoCoinHistoryHeaders =  {
// //     'x-rapidapi-key': '6b45e7ca4bmsh32a65e508a11984p134512jsnd7006196a46f',
// //     'x-rapidapi-host': 'tokeninsight-crypto-api1.p.rapidapi.com',
// //     TI_API_KEY: '008af21ca9f84f509e0b81bd8a7cf446',
// //     params: {
// //         interval: 'day',
// //         length: '90',
// //         vs_currency: 'usd'
// //       },
// //   }

// // const baseUrl = 'https://tokeninsight-crypto-api1.p.rapidapi.com';


// // const createRequest = (url) => ({url, headers: cryptoCoinHistoryHeaders});

// // export const cryptoCoinHistoryApi = createApi({
// //     reducerPath: 'cryptoCoinHistoryApi',
// //     baseQuery: fetchBaseQuery({ baseUrl }),
// //     endpoints: (builder) => ({
// //         getCryptoCoinHistory: builder.query({
// //             query: (coinName) => createRequest(`/api/v1/history/coins/bitcoin`)
// //         })
// //     })
// // })

// // export const {
// //     useGetCryptoCoinHistoryQuery,
// // } = cryptoCoinHistoryApi;

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const cryptoCoinHistoryApiHeaders = {
    accept : 'application/json',
  'x-rapidapi-key': "6b45e7ca4bmsh32a65e508a11984p134512jsnd7006196a46f", // Use your actual API key here
  'x-rapidapi-host': 'tokeninsight-crypto-api1.p.rapidapi.com',
  TI_API_KEY: '008af21ca9f84f509e0b81bd8a7cf446', // Use your actual TI API key here
};

// const baseUrl = 'https://tokeninsight-crypto-api1.p.rapidapi.com';
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

// import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
// import axios from 'axios';

// const baseUrl = 'https://tokeninsight-crypto-api1.p.rapidapi.com/api/v1';

// const cryptoApiHeaders = {
//   'x-rapidapi-key': "6b45e7ca4bmsh32a65e508a11984p134512jsnd7006196a46f",
//   'x-rapidapi-host': 'tokeninsight-crypto-api1.p.rapidapi.com',
//   'TI_API_KEY': '008af21ca9f84f509e0b81bd8a7cf446',
// };

// const axiosBaseQuery =
//   ({ baseUrl }) =>
//   async ({ url, method, data, params }) => {
//     try {
//       const result = await axios({
//         url: baseUrl + url,
//         method,
//         data,
//         params,
//         headers: cryptoApiHeaders,
//       });
//       return { data: result.data };
//     } catch (axiosError) {
//       let err = axiosError;
//       return {
//         error: {
//           status: err.response?.status,
//           data: err.response?.data || err.message,
//         },
//       };
//     }
//   };

// export const cryptoCoinHistoryApi = createApi({
//   reducerPath: 'cryptoCoinHistoryApi',
//   baseQuery: axiosBaseQuery({ baseUrl }),
//   endpoints: (builder) => ({
//     getCryptoCoinHistory: builder.query({
//       query: ({ coinName, interval = 'day', length = '90', vs_currency = 'usd' }) => ({
//         url: `/history/coins/${coinName}`,
//         method: 'GET',
//         params: { interval, length, vs_currency },
//       }),
//     }),
//   }),
// });

// export const { useGetCryptoCoinHistoryQuery } = cryptoCoinHistoryApi;

