import React from "react";
import localstore from "../../components/assets/logo.png";
import { Link } from "react-router-dom";
const Navbar = () => {
  console.log(localstore);
  return (
    <>
      <div>
        <header className="bg-white border-b border-x-gray-200 ">
          <nav className="conatainer   flex justify-between p-1  ">
            <Link to="/">
              <img className="w-48 h-25  " src={localstore} alt="logo" />
            </Link>
            <div className="flex  items-center justify-center  font-semibold text-xl  ">
              <Link className="mr-7 " to="/">
                Home
              </Link>
              <Link className="mr-7">All Products</Link>
              <Link className="mr-7">Men</Link>
              <Link className="mr-7">Kids</Link>
            </div>
            <div className="flex justify-center items-center gap-10 mr-20 ">
              <Link className="inline-flex items-center " to="/cart">
                Cart
              </Link>
              <Link>Log in</Link>
            </div>
          </nav>
        </header>
      </div>
    </>
  );
};

export default Navbar;
