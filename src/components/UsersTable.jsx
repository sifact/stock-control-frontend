import React from "react";
import newRequest from "../utils/newRequest";
import { toast } from "react-hot-toast";

const UsersTable = ({ user, idx, refetch }) => {
  const { username, email, _id } = user;

  const handleDelete = async () => {
    try {
      const agree = window.confirm("Are you sure you wanna delete this User?");
      if (agree) {
        await newRequest.delete(`users/delete/${_id}`);
        refetch();
        toast.success("User deleted...");
      }
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
          {username}
        </td>
        <td className="px-6 py-2 border-b border-gray-200 text-center">
          {email}
        </td>
        <td className="px-6 py-2 border-b border-gray-200 text-center">
          {user?.mobile && user.mobile}
        </td>
        <td className="px-6 py-2 border-b border-gray-200 text-center">
          {user?.branch && user.branch}
        </td>
        <td className="px-6 py-2 border-b border-gray-200 text-center">
          {user?.role && user.role}
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

export default UsersTable;
