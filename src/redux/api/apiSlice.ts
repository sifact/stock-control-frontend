import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: "https://product-management-backend.vercel.app/api/",
    credentials: "include",
  }),
  reducerPath: "adminApi",

  tagTypes: ["Products", "Books", "Sales"],

  endpoints: (build) => ({
    getProducts: build.query({
      query: () => ({
        url: `products/`,
        method: "GET",
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

    getSales: build.query({
      query: () => "sales/",
      providesTags: ["Sales"],
    }),
  }),
});

export const {
  useGetProductsQuery,
  useAddProductMutation,
  useDeleteProductMutation,
  useUpdateProductMutation,
  useGetSalesQuery,
} = api;

// getFilterTerms: build.query({
//   query: () => `book/`,
//   providesTags: ["Filter"],
// }),

// getBook: build.query({
//   query: (id) => `book/${id}`,
//   providesTags: ["Book"],
// }),

// getBooks: build.query({
//   query: ({ search, genre, year }) => ({
//     url: `book/`,
//     method: "GET",
//     params: { search, genre, year },
//   }),

//   providesTags: ["Books"],
// }),
