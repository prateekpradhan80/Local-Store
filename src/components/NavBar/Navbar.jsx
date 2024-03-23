import React from "react";
import localstore from "../assets/logo.png";
import { Link, NavLink } from "react-router-dom";
import { IoIosCart } from "react-icons/io";

import { useCart } from "../Context/CartProvider";
const Navbar = () => {
  const { cart } = useCart();
  return (
    <>
      <div>
        <header className="bg-white border-b border-x-gray-200     ">
          <nav className="conatainer   flex justify-between p-1  ">
            <NavLink to="/">
              <img className="w-48 h-25  " src={localstore} alt="logo" />
            </NavLink>
            <div className="flex  items-center justify-center  font-semibold text-xl  ">
              <NavLink
                className={({ isActive }) =>
                  ` mr-7 ${isActive ? "text-orange-700" : "text-gray-700"} `
                }
                to="/"
              >
                Home
              </NavLink>
              <NavLink
                to="/products"
                className={({ isActive }) =>
                  ` mr-7 ${isActive ? "text-orange-700" : "text-gray-700"} `
                }
              >
                All Products
              </NavLink>
              <NavLink to='aboutUs' className={({isActive})=> ` mr-7 ${ isActive ? 'text-orange-700' : 'text-gray-700'} `} >About Us </NavLink>
              <NavLink className="mr-7">Contact</NavLink>
            </div>
            <div className="flex justify-center items-center gap-10 mr-20 mb-3 ">
              <NavLink className="relative" to="/cart">
                <p className="text-md  ml-7  font-bold px-1 text-white bg-red-400 rounded-2xl absolute  bottom-7 ">
                  {cart.length > 0 ? cart.length : null}
                </p>
                <IoIosCart className="size-12" />
              </NavLink>
              <Link to="login">
                <button className="text-2xl font-semibold bg-gray-200 hover:bg-gray-400 p-2 borde rounded-md">
                  Log In
                </button>
              </Link>
            </div>
          </nav>
        </header>
      </div>
    </>
  );
};

export default Navbar;
