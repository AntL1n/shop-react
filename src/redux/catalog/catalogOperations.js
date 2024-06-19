import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const catalogApi = createApi({
  reducerPath: "catalog",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://fakestoreapi.com",
  }),
  tagTypes: ["catalog"],
  endpoints: (builder) => ({
    getCatalog: builder.query({
      query: () => ({
        url: "/products",
        method: "GET",
      }),
      providesTags: ["catalog"],
    }),
  }),
});

export const { useGetCatalogQuery } = catalogApi;
