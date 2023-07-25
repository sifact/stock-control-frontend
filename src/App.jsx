import { useContext, useState } from "react";

import "./App.css";
import { RouterProvider } from "react-router";
import router from "./Routes/Routes";

function App() {
    return (
        <div className="">
            <RouterProvider router={router} />
        </div>
    );
}

export default App;
