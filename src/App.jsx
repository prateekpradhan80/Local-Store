import React from "react";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { Layout } from "./components/Layout/Layout.jsx";
import Home from "./components/Pages/Home/Home.jsx";
import Cart from "./components/Pages/Cart/Cart.jsx";
import User from "./components/User/User.jsx";
import Login from "./components/Authentication/Log in/Login.jsx";
import Signup from "./components/Authentication/Sign up/Signup.jsx";
import { CartProvider } from "./components/Context/CartProvider.jsx";
import AboutUs from "./components/Pages/AboutUs/AboutUs.jsx";
import Contact from "./components/Pages/Contact/Contact.jsx";
import SingleProduct from "./components/Pages/Products/SingleProduct.jsx";

import AllProducts from "./components/Pages/All Products/AllProducts.jsx";
import { productInfoLoader } from "./components/Pages/All Products/AllProducts.jsx";
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="cart" element={<Cart />} />
      <Route path="login" element={<Login />} />
      <Route path="signup" element={<Signup />} />
      <Route path="user/:id" element={<User />} />
      <Route
        loader={productInfoLoader}
        path="allproducts"
        element={<AllProducts />}
      />
       
      <Route path="aboutUs" element={<AboutUs />} />
      <Route path="contact" element={<Contact />} />

      <Route path="product/:productId" element={<SingleProduct />} />
    </Route>
  )
);

export function App() {
  return (
    <CartProvider>
      <RouterProvider router={router} />
      <ToastContainer />
    </CartProvider>
  );
}
