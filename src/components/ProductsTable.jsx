import React from "react";
import { toast } from "react-hot-toast";
import newRequest from "../utils/newRequest";

const ProductsTable = ({ product, idx }) => {
  const { img, title, soldUnits, quantity } = product;

  console.log(product);
  return (
    <tbody>
      <tr className="">
        <td className="px-6 py-2 border-b border-gray-200 text-center">
          {idx + 1}
        </td>
        <td className="px-6 py-2 border-b border-gray-200 text-center">
          <div className="h-[100px] rounded-lg">
            <img
              className="object-cover w-full h-full rounded-lg"
              src={img}
              alt=""
            />
          </div>
        </td>

        <td className="px-6 py-2 border-b border-gray-200 text-center">
          {title}
        </td>
        <td className="px-6 py-2 border-b border-gray-200 text-center">
          {soldUnits}
        </td>
        <td className="px-6 py-2 border-b border-gray-200 text-center">
          {quantity}
        </td>
      </tr>

      {/* Add more rows as needed */}
    </tbody>
  );
};

export default ProductsTable;
