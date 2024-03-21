import React from "react";
import localstore from "../../components/assets/logo.png";
import { Link, NavLink } from "react-router-dom";
import { IoIosCart } from "react-icons/io";
const Navbar = () => {
  return (
    <>
      <div>
        <header className="bg-white border-b border-x-gray-200 ">
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
              <NavLink className="mr-7">Men</NavLink>
              <NavLink className="mr-7">Kids</NavLink>
            </div>
            <div className="flex justify-center items-center gap-10 mr-20 ">
              <NavLink className="" to="/cart">
                <IoIosCart size={40} />
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
