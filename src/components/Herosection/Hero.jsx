import React from "react";
import baner from "../assets/baner.png";
import { FaShippingFast } from "react-icons/fa";
import { BsCartCheckFill } from "react-icons/bs";
import { TbTruckReturn } from "react-icons/tb";
import { RiSecurePaymentLine } from "react-icons/ri";
import jeans from "../assets/jeans.jpeg";
import dress from "../assets/dress.jpg";
import shoes from "../assets/shoes.jpg";
import saree from "../assets/saree.jpg";
import lap from "../assets/Lap.jpeg";
import phone from "../assets/phn.jpeg";
const Hero = () => {
  return (
    <>
      <div className="h-[90vh]">
        <img src={baner} className=" h-full w-full" />
      </div>

      <div className="flex justify-center gap-24 px-5 pt-9">
        <div className="bg-red-500 px-5 py-3  rounded text-white flex gap-2 flex-col items-center hover:scale-110 transition duration-500">
          <RiSecurePaymentLine size={30} />
          <p>SECURE PAYMENT</p>
        </div>
        <div className="bg-red-500 px-5 py-3  rounded text-white flex gap-2 flex-col items-center hover:scale-110 transition duration-500">
          <FaShippingFast size={30} />
          <p>FREE SHIPPING</p>
        </div>
        <div className="bg-red-500 px-5 py-3  rounded text-white flex gap-2 flex-col items-center hover:scale-110 transition duration-500">
          <BsCartCheckFill size={30} />
          <p> AUTHENTIC PRODUCTS</p>
        </div>
        <div className="bg-red-500 px-5 py-3  rounded text-white flex gap-2 flex-col items-center hover:scale-110 transition duration-500">
          <TbTruckReturn size={30} />
          <p>EASY RETURN</p>
        </div>
      </div>
      <div>
        <section className="text-gray-600 body-font">
          <div className="container px-5 py-16 mx-auto flex flex-wrap">
            <div className="flex w-full mb-20 flex-wrap">
              <h1 className="sm:text-3xl text-2xl  font-semibold font-serif title-font text-red-500 lg:w-1/3 lg:mb-0 mb-4">
                Where Luxury Meets Simplicity
              </h1>
              <p className="lg:pl-6 lg:w-2/3 mx-auto leading-relaxed text-lg font-serif ">
                LOCAL STORE is an e-commerce platform that sells apparel, baby
                products, consumer electronics, beauty products, gourmet food,
                groceries, health and personal care products,kitchen items,
                jewelry, watches, lawn and garden items, musical instruments,
                sporting goods, tools, automotive items, toys and games, and
                farm supplies.
              </p>
            </div>
            <div className="flex flex-wrap md:-m-2 -m-1">
              <div className="flex flex-wrap w-1/2 hover:scale-75 hover:translate-x-4 hover:skew-y-3 transtion duration-500">
                <div className="md:p-2 p-1 w-1/2">
                  <img
                    alt="gallery"
                    className=" w-full  object-cover h-full object-center block "
                    src={jeans}
                  />
                </div>
                <div className="md:p-2 p-1 w-1/2">
                  <img
                    alt="gallery"
                    className="w-full object-cover h-full object-center block"
                    src={dress}
                  />
                </div>
                <div className="md:p-2 p-1 w-full">
                  <img
                    alt="gallery"
                    className="w-full h-full object-cover object-center block"
                    src={shoes}
                  />
                </div>
              </div>
              <div className="flex flex-wrap w-1/2 hover:scale-75 hover:translate-x-4 hover:skew-x-3 transtion duration-500">
                <div className="md:p-2 p-1 w-full">
                  <img
                    alt="gallery"
                    className="w-full h-full object-cover object-center block"
                    src={saree}
                  />
                </div>
                <div className="md:p-2 p-1 w-1/2">
                  <img
                    alt="gallery"
                    className="w-full object-cover h-full object-center block"
                    src={lap}
                  />
                </div>
                <div className="md:p-2 p-1 w-1/2">
                  <img
                    alt="gallery"
                    className="w-full object-cover h-full object-center block"
                    src={phone}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Hero;
