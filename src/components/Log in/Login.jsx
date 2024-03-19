import React from "react";
import cart from "../assets/cart.jpg";
import { Link } from "react-router-dom";
const Login = () => {
  return (
    <>
      <img className="mt-4" src={cart} />

      <div class="container px-5  mx-auto flex relative ">
        <div class="lg:w-1/3 md:w-1/2 opacity-0.2 rounded-lg p-12 flex flex-col md:ml-auto w-full mt-10 md:mt-0 absolute bottom-60 left-0 shadow-xl">
          <h2 class="text-gray-900 text-3xl mb-1 font-medium title-font">
            Login
          </h2>
          <div class="  mb-4">
            <label for="email" class="leading-7 text-lg text-gray-600">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div class="  mb-4">
            <label for="message" class="leading-7 text-lg text-gray-600">
              Password
            </label>
            <input
              type="password"
              id="pasword"
              name="password"
              class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <button class="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
            Log in
          </button>
          <p class="text-md text-gray-500 mt-3">
            Don't have an account ?   <Link  to='/signup' className="hover:underline"> SignUp</Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Login;
