import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: "https://product-management-backend.vercel.app/api/",
    // baseUrl: "http://localhost:8800/api/",
    credentials: "include",
  }),
  reducerPath: "adminApi",

  tagTypes: ["Products", "Books", "Sales"],

  endpoints: (build) => ({
    getProducts: build.query({
      query: ({ search, category }) => ({
        url: `products/`,
        method: "GET",
        params: { search, category },
      }),

      providesTags: ["Products"],
    }),

    addProduct: build.mutation({
      query: (product) => ({
        url: `products`,
        method: "POST",
        body: product,
      }),
      invalidatesTags: ["Products"],
    }),

    deleteProduct: build.mutation({
      query: (id) => ({
        url: `products/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Products"],
    }),

    updateProduct: build.mutation({
      query: ({ body, id }) => ({
        url: `/products/${id}`,
        method: "PATCH",
        body: {
          body,
        },
      }),
      invalidatesTags: ["Products"],
    }),

    // sales
    getSales: build.query({
      query: () => "sales/",
      providesTags: ["Products"],
    }),

    markAsSold: build.mutation({
      query: (product) => ({
        url: `sales/`,
        method: "POST",
        body: product,
      }),
      invalidatesTags: ["Products"],
    }),

    getSoldProducts: build.query({
      query: () => "sales/sold",
      providesTags: ["Products"],
    }),

    getCategories: build.query({
      query: () => "category/",
      providesTags: ["Products"],
    }),
  }),
});

export const {
  useGetProductsQuery,
  useAddProductMutation,
  useDeleteProductMutation,
  useUpdateProductMutation,
  useGetSalesQuery,
  useMarkAsSoldMutation,
  useGetSoldProductsQuery,
  useGetCategoriesQuery,
} = api;
