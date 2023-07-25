import React, { useState } from "react";

import { toast } from "react-hot-toast";
import newRequest from "../utils/newRequest";
import upload from "../utils/upload";
import { useAddProductMutation } from "../redux/api/apiSlice";
import Header from "../components/Header";

const CreateProduct = () => {
  const [file, setFile] = useState(null);
  const [category, setCategory] = useState("Category");
  const [addProduct, {}] = useAddProductMutation();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const url = await upload(file);

    const form = e.target;

    const title = form.title.value;
    const costPrice = form.CostPrice.value;
    const quantity = form.Quantity.value;
    const sellingPrice = form.SellingPrice.value;

    const productInfo = {
      img: url,
      title,
      costPrice,
      quantity,
      sellingPrice,
      url,
      category,
    };

    addProduct(productInfo)
      .unwrap()
      .then(() => {
        toast.success("Product added...");
      })
      .catch((error) => {
        toast.error("Something went wrong...");
        console.log(error);
      });
  };

  return (
    <div className=" my-[1.5rem]  w-full">
      <Header title={"Add Product"} subtitle={"Add all data about a product"} />
      <div className="flex flex-col w-full items-center">
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
              required
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
              required
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

export default CreateProduct;
