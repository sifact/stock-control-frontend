import React from "react";

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
  const { data, isLoading, error } = useGetProductsQuery();

  return (
    <div className="m-[1.5rem] ">
      <Header title={"Products"} subtitle={"All products at a glance"} />
      <div className="text-left w-full">
        <SearchFilter />
      </div>
      <div
        className="mb-32 mt-6 pr-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8
      gap-y-12 container mx-auto"
      >
        {isLoading
          ? "loading..."
          : error
          ? "Something went wrong..."
          : data.map(
              (product, idx) =>
                product.quantity > 0 && (
                  <Product key={product._id} product={product} />
                )
            )}
      </div>
    </div>
  );
};

export default Products;

const Product = ({ product }) => {
  const [deleteProduct, {}] = useDeleteProductMutation();
  const [markSold, {}] = useMarkAsSoldMutation();

  const handleDelete = (id) => {
    console.log(id);
    const agree = window.confirm("Are you sure you wanna delete this Product?");
    if (agree) {
      deleteProduct(id)
        .unwrap()
        .then(() => {
          toast.success("Product is deleted...");
          navigate("/products");
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
      <div className="h-[300px]  bg-gradient-to-tr from-gray-900 to-green-50 rounded-lg">
        <img
          className="object-cover w-full h-full rounded-lg mix-blend-overlay"
          src={img}
          alt=""
        />
      </div>
      <div className="rounded-lg space-y-3 ">
        <div className="flex justify-between items-center">
          <h1 className="text-xl font-semibold">{title}</h1>
          <p className="opacity-60 text-xl">{category}</p>
        </div>
        <div className="flex justify-between text-sm">
          <div className="opacity-60 space-y-3">
            <p>Cost Price: {costPrice}</p>
            <p>Selling Price: {sellingPrice}</p>
          </div>
          <div className="space-y-3">
            <p> {quantity} pcs</p>
            <p>
              <button
                className="px-2 py-1 border border-gray-800 rounded-bl-[15%] text-black rounded-sm "
                onClick={() => handleSold(product)}
              >
                Mark Sold
              </button>
            </p>
          </div>
        </div>

        <div className="flex justify-between pt-2">
          <Link
            key={_id}
            to={`/updateProduct/${_id}`}
            state={{ productData: product }}
          >
            <button className="px-2 py-1 bg-gray-800 rounded-bl-[15%] text-white rounded-sm ">
              Update
            </button>
          </Link>
          <button
            onClick={() => handleDelete(_id)}
            className="px-2 py-1 bg-gray-800 rounded-bl-[15%] text-red-600 rounded-sm "
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};
