import React, { useState } from "react";

import { toast } from "react-hot-toast";
import newRequest from "../utils/newRequest";
import Header from "../components/Header";

const CreateUser = () => {
  const [role, setRole] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;

    const username = form.username.value;
    const email = form.email.value;
    const password = form.password.value;
    const mobile = form.mobile.value;
    const branch = form.branch.value;

    const userInfo = {
      username,
      email,
      password,
      mobile,
      branch,
      role,
    };
    // console.log(userInfo);
    try {
      await newRequest.post("auth/register", userInfo);
      toast.success("User created successfully...");
      form.reset();
    } catch (error) {
      console.log(error.response.data);
    }
  };

  return (
    <div className=" my-[1.5rem]  w-full">
      <Header title={"Add User"} subtitle={"Add all data about a user"} />
      <div className="flex flex-col w-full items-center">
        <form
          className="bg-white p-6 rounded-lg shadow-md w-full md:w-3/6 h-auto"
          onSubmit={handleSubmit}
        >
          <div className="mb-4">
            <label className="block font-medium mb-2" htmlFor="name">
              Username
            </label>
            <input
              className="border border-gray-400 p-2 w-full rounded-sm outline-yellow-300"
              type="text"
              id="name"
              name="username"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block font-medium mb-2" htmlFor="number">
              Email
            </label>
            <input
              className="border border-gray-400 p-2 w-full outline-yellow-300 rounded-sm"
              type="email"
              id="email"
              name="email"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block font-medium mb-2" htmlFor="Quantity">
              Password
            </label>
            <input
              className="border border-gray-400 p-2 w-full outline-yellow-300 rounded-sm"
              type="password"
              name="password"
            />
          </div>
          <div className="mb-4">
            <label className="block font-medium mb-2" htmlFor="Quantity">
              Mobile
            </label>
            <input
              className="border border-gray-400 p-2 w-full outline-yellow-300 rounded-sm"
              type="text"
              name="mobile"
            />
          </div>
          <div className="mb-4">
            <label className="block font-medium mb-2" htmlFor="Quality">
              Branch
            </label>
            <input
              className="border border-gray-400 p-2 w-full outline-yellow-300 rounded-sm"
              type="text"
              name="branch"
            />
          </div>
          <div className="mb-4">
            <div className="dropdown inline-block relative">
              <select
                className="dropdown-button appearance-none border  py-2 px-3 pr-8 rounded leading-tight "
                onChange={(e) => setRole(e.target.value)}
              >
                <option value="">Role</option>
                <option value="admin">Admin</option>
                <option value="user">User</option>
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

export default CreateUser;
