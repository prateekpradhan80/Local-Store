import React from "react";
import localstore from "../assets/logo.png";
import { Link, NavLink } from "react-router-dom";
import { IoIosCart } from "react-icons/io";
import { VscColorMode } from "react-icons/vsc";
import {useCart} from '../Context/CartProvider.jsx'

const Navbar = () => {
  const { cart, toggleTheme, theme } = useCart();
  const userData = JSON.parse(localStorage.getItem("user"));

  return (
    <>
      <div className=" mb-16  ">
        <header className={`fixed top-0 w-full z-50 ${theme==='white'?'bg-white':`bg-${theme}-500`}`}>
          <nav className="conatainer   flex justify-between p-1 border-b ">
            <NavLink to="/">
              <img className="w-40 h-16 rounded-full  " src={localstore} alt="logo" />
            </NavLink>
            <div className="flex  items-center justify-center ml-12   font-semibold text-lg font-serif   ">
              <NavLink
                className={({ isActive }) =>
                  `   mr-7 ${isActive ? "text-orange-900" : "text-gray-700"} `
                }
                to="/"
              >
                Home
              </NavLink>
              <NavLink
                to="allproducts"
                className={({ isActive }) =>
                  ` mr-7 ${isActive ? "text-orange-700" : "text-gray-700"} `
                }
              >
                All Products
              </NavLink>
              <NavLink
                to="aboutUs"
                className={({ isActive }) =>
                  ` mr-7 ${isActive ? "text-orange-700" : "text-gray-700"} `
                }
              >
                About Us{" "}
              </NavLink>
              <NavLink
                to="contact"
                className={({ isActive }) =>
                  `  ${isActive ? "text-orange-700" : "text-gray-700"} `
                }
              >
                Contact
              </NavLink>
            </div>

            <div className="flex justify-center items-center gap-10 mr-10 mb-3 ">
               
              <button className="  mt-2 bg-white rounded-full  ">
                <VscColorMode size={38} onClick={toggleTheme} />
              </button>
              <NavLink className="relative" to="/cart">
                <p className="text-md     font-bold px-1 text-white bg-red-400 rounded-2xl absolute  bottom-7 ">
                  {cart.length > 0 ? cart.length : null}
                </p>
                <IoIosCart className="size-12" />
              </NavLink>
              <Link to="login">
                <button className="text-2xl font-semibold bg-gray-200 hover:bg-gray-400 p-2 borde rounded-md">
                  Login
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
