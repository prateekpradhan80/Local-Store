import React from "react";

import { useState, useEffect } from "react";
import cart from "../../assets/cart.jpg";
import {  useNavigate } from "react-router-dom";
const Signup = () => {
  const navigate=useNavigate()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("user", JSON.stringify(formData));
    navigate('/login')
  };

  return (
    <>
      <img src={cart} />
      <div className="container px-5  mx-auto flex relative ">
        <div className="lg:w-1/3 md:w-1/2 opacity-0.2 rounded-lg p-12 flex flex-col md:ml-auto w-full mt-10 md:mt-0 absolute bottom-56 left-0 shadow-xl">
          <h2 className="text-gray-900 text-3xl mb-1 font-medium title-font">
            Sign up
          </h2>
          <form onSubmit={handleSubmit}>
            <div className="  mb-4">
              <label htmlFor="name" className="leading-7 text-lg text-gray-600">
                Name
              </label>
              <input
              autoComplete="off"
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="  mb-4">
              <label
                htmlFor="email"
                className="leading-7 text-lg text-gray-600"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                autoComplete="off"
                onChange={handleChange}
                value={formData.email}
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="  mb-4">
              <label
                htmlFor="password"
                className="leading-7 text-lg text-gray-600"
              >
                Password
              </label>
              <input
                type="password"
                id="pasword"
                name="password"
                onChange={handleChange}
                value={formData.password}
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
             
            <button className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg on">
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Signup;
