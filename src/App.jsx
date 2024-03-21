import React, { useState } from "react";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import { Layout } from "./components/Layout/Layout.jsx";
import Home from "./components/Home/Home.jsx";
import Cart from "./components/Cart/Cart.jsx";
import User from "./components/User/User.jsx";
import Login from "./components/Log in/Login.jsx";
import Signup from "./components/Sign up/Signup.jsx";
import AllProducts from "./components/All Products/AllProducts.jsx";
import { productInfoLoader } from "./components/All Products/AllProducts.jsx";
import { CartProvider } from "./components/Context/CartProvider.jsx";
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="/" element={<Home />} />
      <Route path="cart" element={<Cart />} />
      <Route path="login" element={<Login />} />
      <Route path="signup" element={<Signup />} />
      <Route path="user/:userid" element={<User />} />
      <Route
        loader={productInfoLoader}
        path="products"
        element={<AllProducts />}
      />
    </Route>
  )
);

function App() {
  return (
    <CartProvider>
      <RouterProvider router={router} />
    </CartProvider>
  );
}

export default App;
