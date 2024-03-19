import React from "react";
import logo from "../../components/assets/logo.png";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <>
      <footer className="bg-black text-white">
        <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
          <div className="w-64 md:max-0 mx-auto text-center md:text-left">
            <img src={logo} className="rounded-lg" />
          </div>
          <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium tracking-widest text-lg mb-3">
                MENU
              </h2>
              <ul className="list-none mb-10">
                <li>Features</li>
                <li className="mt-1">Info Center</li>
                <li className="mt-1">News Blog</li>
                <li className="mt-1">Login</li>
              </ul>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium tracking-widest text-lg mb-3">
                COMPANY
              </h2>
              <ul className="list-none mb-10">
                <li>About Us</li>
                <li className="mt-1">Strategic Partners</li>
                <li className="mt-1">Careers</li>

                <li className="mt-1">Terms & Conditions</li>
              </ul>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium tracking-widest text-lg mb-3">
                HELP
              </h2>
              <ul className="list-none mb-10">
                <li>Payment</li>
                <li className="mt-1">Shipping</li>
                <li className="mt-1"> Cancellation and Returns</li>
                <li className="mt-1">Report Infringement</li>
              </ul>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium tracking-widest text-lg mb-3">
                Registered Office Address
              </h2>
              <ul className="list-none mb-10">
                <li>Local Store Private Limited</li>
                <li className="mt-1">
                  Buildings Alyssa , Begonia & Clove Embasy
                </li>
                <li className="mt-1">Odisha , India</li>
                <li className="mt-1"> 044-6543738</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="bg-gray-500 text-white">
          <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
            <p className="text-lg text-center sm:text-left">
              Made with ❤️ ©️ 2024 Prateek Pradhan
            </p>

            <div className="inline-flex sm:ml-auto sm:mt-0  justify-center sm:justify-start">
              <Link className="px-4 hover:text-red-300"> <FaInstagram size={30} /></Link>
              <Link className="px-4 hover:text-red-300"> <FaFacebook size={30} /></Link>
              <Link className="px-4 hover:text-red-300">  <FaSquareXTwitter size={30} /></Link>
              
             
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
