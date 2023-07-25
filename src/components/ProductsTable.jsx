import React from "react";
import { toast } from "react-hot-toast";
import newRequest from "../utils/newRequest";

const ProductsTable = ({ product, idx, refetch }) => {
  const { code, brand, total, issueDate, _id } = product;

  const handleDelete = async () => {
    try {
      await newRequest.delete(`products/delete/${_id}`);
      refetch();
      toast.success("Product deleted...");
    } catch (error) {
      console.log(error.response.data);
    }
  };
  return (
    <tbody>
      <tr
        className={`${(idx + 1) % 2 !== 0 ? "bg-gray-800 text-white" : ""}  `}
      >
        <td className="px-6 py-2 border-b border-gray-200 text-center">
          {idx + 1}
        </td>
        <td className="px-6 py-2 border-b border-gray-200 text-center">
          {code}
        </td>
        <td className="px-6 py-2 border-b border-gray-200 text-center">
          {brand}
        </td>
        <td className="px-6 py-2 border-b border-gray-200 text-center">
          {total}
        </td>
        <td className="px-6 py-2 border-b border-gray-200 text-center">
          {issueDate}
        </td>
        <td className="px-6 py-2 border-b border-gray-200 text-center">
          <button className="px-3 py-1 bg-white text-gray-950 rounded-sm mr-2">
            Update
          </button>
          <button
            className="px-3 py-1 bg-white text-red-500 rounded-sm  "
            onClick={handleDelete}
          >
            Delete
          </button>
        </td>
      </tr>

      {/* Add more rows as needed */}
    </tbody>
  );
};

export default ProductsTable;
