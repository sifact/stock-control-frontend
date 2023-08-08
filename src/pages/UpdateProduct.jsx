import React, { useState } from "react";

import { toast } from "react-hot-toast";

import upload from "../utils/upload";
import { useUpdateProductMutation } from "../redux/api/apiSlice";
import { useLocation } from "react-router-dom";
import Header from "../components/Header";

const UpdateProduct = () => {
  const location = useLocation();

  const productData = location?.state?.productData;

  const [file, setFile] = useState(null);
  const [category, setCategory] = useState("Category");
  const [addProduct, {}] = useUpdateProductMutation();

  const { _id, img, title, costPrice, sellingPrice, quantity } = productData;
  const handleSubmit = async (e) => {
    e.preventDefault();

    let url = null;
    if (file) url = await upload(file);

    const form = e.target;

    const title = form.title.value;
    const costPrice = form.CostPrice.value;
    const quantity = form.Quantity.value;
    const sellingPrice = form.SellingPrice.value;

    const productInfo = {};

    if (title) {
      productInfo.title = title;
    }

    if (costPrice) {
      productInfo.costPrice = costPrice;
    }

    if (quantity) {
      productInfo.quantity = quantity;
    }

    if (sellingPrice) {
      productInfo.sellingPrice = sellingPrice;
    }

    if (category && !"category") {
      productInfo.category = category;
    }

    if (url) {
      productInfo.url = url;
    }

    addProduct({ body: productInfo, id: _id })
      .unwrap()
      .then(() => {
        toast.success("Product updated...");
      })
      .catch((error) => {
        toast.error("Something went wrong...");
        console.log(error);
      });
  };

  return (
    <div className="flex gap-20 mb-6 w-full">
      <div className="flex flex-col w-full items-center">
        <Header title={"Update"} subtitle={"Update products in realtime"} />
        <form
          className="bg-white p-6 rounded-lg shadow-md w-full md:w-3/5 h-auto"
          onSubmit={handleSubmit}
        >
          <div className="mb-4">
            <label className="block font-medium mb-2" htmlFor="title">
              Title
            </label>
            <input
              className="border border-gray-400 p-2 w-full rounded-sm outline-yellow-300"
              type="text"
              id="name"
              name="title"
              defaultValue={title}
            />
          </div>
          <div className="mb-4">
            <label className="block font-medium mb-2" htmlFor="number">
              CostPrice
            </label>
            <input
              className="border border-gray-400 p-2 w-full outline-yellow-300 rounded-sm"
              type="number"
              id="email"
              name="CostPrice"
              defaultValue={costPrice}
            />
          </div>
          <div className="mb-4">
            <label className="block font-medium mb-2" htmlFor="Quality">
              Selling Price
            </label>
            <input
              className="border border-gray-400 p-2 w-full outline-yellow-300 rounded-sm"
              type="number"
              name="SellingPrice"
              defaultValue={sellingPrice}
            />
          </div>

          <div className="mb-4">
            <label className="block font-medium mb-2" htmlFor="Quantity">
              Quantity
            </label>
            <input
              className="border border-gray-400 p-2 w-full outline-yellow-300 rounded-sm"
              type="number"
              name="Quantity"
              defaultValue={quantity}
            />
          </div>
          <div className="mb-4">
            <div className="dropdown inline-block relative">
              <select
                className="dropdown-button appearance-none border  py-2 px-3 pr-8 rounded leading-tight "
                onChange={(e) => setCategory(e.target.value)}
              >
                <option value="">Category</option>
                <option value="Cakes">Cakes</option>
                <option value="Drinks">Drinks</option>
                <option value="Burger">Burger</option>
                <option value="Pizza">Pizza</option>
                <option value="Oil">Oil</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-800">
                <svg
                  className="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M7.293 7.707a1 1 0 0 1 1.414 0L10 9.586l1.293-1.293a1 1 0 1 1 1.414 1.414l-2 2a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 0-1.414z" />
                </svg>
              </div>
            </div>
          </div>
          <div className="mb-4 flex flex-col">
            <label htmlFor="">Image</label>
            <input type="file" onChange={(e) => setFile(e.target.files[0])} />
          </div>

          <div className="text-right">
            <button className="bg-gray-800 py-2 px-3 text-white rounded-sm hover:bg-gray-900">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateProduct;
