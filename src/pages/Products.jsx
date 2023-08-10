import React, { useState } from "react";

import {
  useDeleteProductMutation,
  useGetProductsQuery,
  useMarkAsSoldMutation,
} from "../redux/api/apiSlice";
import { toast } from "react-hot-toast";
import { Link } from "react-router-dom";
import SearchFilter from "../components/SearchFilter";
import Header from "../components/Header";

const Products = () => {
  const [filters, setFilters] = useState({
    category: "",
    search: "",
  });

  const { search, category } = filters;

  const { data, isLoading, error } = useGetProductsQuery({
    ...(search && { search }),
    ...(category && { category }),
  });

  return (
    <div className="m-[1.5rem] ">
      <Header title={"Products"} subtitle={"All products at a glance"} />
      <div className="text-left w-full">
        <SearchFilter filters={filters} setFilters={setFilters} />
      </div>
      <div
        className="mb-32 mt-6 pr-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8
      gap-y-20 container mx-auto"
      >
        {isLoading
          ? "loading..."
          : error
          ? "Something went wrong..."
          : data.map((product, idx) => (
              <Product key={product._id} product={product} />
            ))}
      </div>
    </div>
  );
};

export default Products;

const Product = ({ product }) => {
  const [deleteProduct, {}] = useDeleteProductMutation();
  const [markSold, {}] = useMarkAsSoldMutation();

  const handleDelete = (id) => {
    const agree = window.confirm("Are you sure you wanna delete this Product?");
    if (agree) {
      deleteProduct(id)
        .unwrap()
        .then(() => {
          toast.success("Product is deleted...");
        })
        .catch((error) => {
          console.log(error);
          toast.error(error.data);
          console.log(error.data);
        });
    }
  };

  const handleSold = (product) => {
    markSold(product)
      .unwrap()
      .then(() => {
        toast.success("Product is sold...");
      })
      .catch((error) => {
        console.log(error);
        toast.error(error.data);
        console.log(error.data);
      });
  };
  const { _id, img, title, category, costPrice, sellingPrice, quantity } =
    product;
  return (
    <div className="relative space-y-6">
      <div className="h-[300px]  bg-gradient-to-tr from-gray-900 to-green-50 rounded-lg relative">
        <img
          className="object-cover w-full h-full rounded-lg mix-blend-overlay"
          src={img}
          alt=""
        />
        <div className="absolute inset-0 mt-8">
          <h2
            style={{ width: "fit-content" }}
            className={`text-white text-sm transition px-2 cursor-pointer ${
              quantity < 1 ? `bg-red-500` : `bg-yellow-500`
            } rounded-r-md font-bold`}
          >
            {quantity < 1 ? `Out of stock` : `In stock`}
          </h2>
        </div>
      </div>
      <div className="rounded-lg space-y-3 ">
        <div className="flex justify-between items-center">
          <h1 className=" font-semibold">{title}</h1>
          <p className="opacity-60">{category}</p>
        </div>
        <div className="flex justify-between text-sm">
          <div className="opacity-60 space-y-3">
            <p>Cost Price: Tk {costPrice}</p>
            <p>Selling Price: Tk {sellingPrice}</p>
          </div>
          <div className="space-y-3 ">
            <p className="text-right"> {quantity} pcs</p>
            <p>
              <button
                className="px-8 py-1 border border-gray-800 rounded-bl-[15%] text-black rounded-sm "
                onClick={() => handleSold(product)}
              >
                Mark Sold
              </button>
            </p>
          </div>
        </div>
        <hr />
        <div className="flex justify-between pt-2">
          <Link
            key={_id}
            to={`/updateProduct/${_id}`}
            state={{ productData: product }}
          >
            <button className="px-8 py-1 border-2 border-gray-800  rounded-sm ">
              Update
            </button>
          </Link>
          <button
            onClick={() => handleDelete(_id)}
            className="px-8 py-1 border-2 border-gray-800  text-red-600 rounded-sm "
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};
