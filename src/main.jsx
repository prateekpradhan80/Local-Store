import React from "react";
import ReactDOM from "react-dom/client";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import "./index.css";
import { Layout } from "./components/Layout/Layout.jsx";
import Home from "./components/Home/Home.jsx";
import Cart from "./components/Cart/Cart.jsx";
import User from "./components/User/User.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="/" element={<Home />} />
      <Route path="cart" element={<Cart />} />
      <Route path="user/:userid" element={<User />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <RouterProvider router={router} />
  </>
);