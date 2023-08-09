import React from "react";

import { useQuery } from "@tanstack/react-query";
import newRequest from "../utils/newRequest";

import Header from "../components/Header";
import ProductsTable from "../components/ProductsTable";
import {
  useGetProductsQuery,
  useGetSalesQuery,
  useGetSoldProductsQuery,
} from "../redux/api/apiSlice";

const SoldProducts = () => {
  const { data, isLoading, error } = useGetSoldProductsQuery();

  return (
    <>
      <div className=" my-10 mx-8">
        <Header
          title={"Sold Products"}
          subtitle={"Checkout sold products data"}
        />
        <table className="min-w-full bg-white border border-gray-200">
          <thead className="">
            <tr>
              <th className="px-6 py-3 border-b border-gray-200 ">ID</th>
              <th className="px-6 py-3 border-b border-gray-200 ">Img</th>
              <th className="px-6 py-3 border-b border-gray-200 ">Title</th>
              <th className="px-6 py-3 border-b border-gray-200 ">
                Sold Units
              </th>
              <th className="px-6 py-3 border-b border-gray-200 ">Stock</th>
            </tr>
          </thead>
          {isLoading
            ? "loading..."
            : error
            ? "Something went wrong..."
            : data.map((product, idx) => (
                <ProductsTable idx={idx} key={product._id} product={product} />
              ))}
        </table>
      </div>
    </>
  );
};

export default SoldProducts;
