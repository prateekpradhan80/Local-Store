import React from "react";
import localstore from "../../components/assets/logo.png";
import { Link } from "react-router-dom";
const Navbar = () => {
  console.log(localstore);
  return (
    <>
      <div>
        <header className="bg-white border-b border-x-gray-200 ">
          <nav className="conatainer   flex justify-between p-1 items-center">
            <Link to='/'>
              <img className="w-48 h-25 ml-4 " src={localstore} alt="logo" />
            </Link>
            <div className="flex  items-center justify-center text-lg  ">
              <Link className="mr-5 " to="/" >Home</Link>
              <Link className="mr-5">All Products</Link>
              <Link className="mr-5">Men</Link>
              <Link className="mr-5">Kids</Link>
            </div>
            <div className="flex justify-center items-center gap-10 mr-20 ">
              <Link className="inline-flex items-center " to='/cart'>Cart</Link>
              <Link>Log in</Link>
            </div>
          </nav>
        </header>
      </div>
    </>
  );
};

export default Navbar;
