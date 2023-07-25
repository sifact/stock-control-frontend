import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import newRequest from "../utils/newRequest";
const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loginError, setLoginError] = useState("");

    const navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoginError("");

        try {
            const res = await newRequest.post("auth/login", {
                email,
                password,
            });
            localStorage.setItem("currentUser", JSON.stringify(res.data));
            navigate("/dashboard");
        } catch (error) {
            setLoginError(error.response.data);
        }
    };

    return (
        <section
            className="h-full flex justify-center items-center"
            style={{ height: "100vh" }}
        >
            <div className="w-[400px] h-[350px]  p-10 mt-24 shadow-md rounded-sm ">
                <h1 className="text-center mb-6 text-3xl font-bold text-gray-800">
                    Login
                </h1>

                {loginError && <p className="text-red-400">{loginError}</p>}
                <form className="w-full" onSubmit={handleSubmit}>
                    <div className="w-full mb-6">
                        <input
                            className="p-2 w-full rounded-sm border outline-gray-800"
                            type="email"
                            placeholder="Email"
                            onChange={(e) => setEmail(e.target.value)}
                        />

                        <br />
                    </div>
                    <div className="w-full mb-6">
                        <input
                            className="p-2 w-full rounded-sm border outline-gray-800"
                            type="password"
                            placeholder="password"
                            onChange={(e) => setPassword(e.target.value)}
                        />

                        <br />
                    </div>

                    <button className="p-2 mt-3 mb-3 bg-gray-800 hover:bg-gray-900 w-full rounded-sm text-xl text-gray-100">
                        Login
                    </button>
                </form>
            </div>
        </section>
    );
};

export default Login;
