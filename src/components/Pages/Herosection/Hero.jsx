import React, { useEffect, useState } from "react";
import baner from "../../assets/baner.png";
import { FaShippingFast } from "react-icons/fa";
import { BsCartCheckFill } from "react-icons/bs";
import { TbTruckReturn } from "react-icons/tb";
import { RiSecurePaymentLine } from "react-icons/ri";
import jeans from "../../assets/jeans.jpeg";
import dress from "../../assets/dress.jpg";
import shoes from "../../assets/shoes.jpg";
import saree from "../../assets/saree.jpg";
import lap from "../../assets/Lap.jpeg";
import phone from "../../assets/phn.jpeg";
import { Link } from "react-router-dom";
import { useCart } from "../../Context/CartProvider";
const Hero = () => {
  const [popularProduct, setPopularProduct] = useState([]);
   const{addToCart}=useCart();
  useEffect(() => {
    fetch("https://dummyjson.com/products/search?q=phone")
      .then((res) => res.json())
      .then((data) => setPopularProduct(data.products));
  }, []);
  console.log(popularProduct);
  function buttonClick(item){
    addToCart(item);
  }
  return (
    <>
      {/*    Banner image  */}
      <div className="h-[90vh]">
        <img src={baner} className=" h-full w-full" />
      </div>

      {/*     secure payment   ----- Easy return    */}

      <div className="flex justify-center gap-24 px-5 pt-9">
        <div className="bg-red-500 px-5 py-3  rounded text-white flex gap-2 flex-col items-center hover:scale-110 transition duration-500">
          <RiSecurePaymentLine size={30} />
          <p>SECURE PAYMENT</p>
        </div>
        <div className="bg-red-500 px-5 py-3  rounded text-white flex gap-2 flex-col items-center animate-bounce   hover:scale-110 transition duration-500">
          <FaShippingFast size={30} />
          <p>FREE SHIPPING</p>
        </div>
        <div className="bg-red-500 px-5 py-3  rounded text-white flex gap-2 flex-col items-center animate-bounce hover:scale-110 transition duration-500">
          <BsCartCheckFill size={30} />
          <p> AUTHENTIC PRODUCTS</p>
        </div>
        <div className="bg-red-500 px-5 py-3  rounded text-white flex gap-2 flex-col items-center hover:scale-110 transition duration-500">
          <TbTruckReturn size={30} />
          <p>EASY RETURN</p>
        </div>
      </div>

      <div>
        {/*     that paragraph   /// Popular products and hovered image  */}

        <section className="text-gray-600 body-font mb-5 ">
          <div className="container px-5 py-10  mx-auto my-5 flex flex-wrap">
            {/*     that paragraph  */}

            <div className="flex w-full  my-10 flex-wrap">
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
          </div>
          {/*    Popular Products section  */}
          <span className=" flex justify-center  font-serif font-semibold text-5xl text-red-500  animate-pulse  ">
            POPULAR PRODUCTS
          </span>
          <div className="flex mx-4 mt-10 ">
            {popularProduct &&
              popularProduct.map((item, index) => (
                <div
                  className="lg:w-1/4 md:w-1/2 p-2 mx-2  w-full mb-28 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg"
                  key={index}
                >
                  <Link to={`/product/${item.id}`} className="block relative h-60 rounded overflow-hidden">
                    <img
                      alt="ecommerce"
                      className=" w-full h-full block transform transition-transform duration-300 hover:scale-110"
                      src={item.images[0]}
                    />
                  </Link>
                  <div className="mt-4">
                    <h2 className="text-red-900 title-font text-lg font-medium">
                      {item.title}
                    </h2>
                    <h3 className="text-black text-xs tracking-widest title-font mb-1">
                      {item.brand}
                    </h3>
                    <span className="mt-1 font-semibold">Price: ₹{item.price}</span>
                    <div className="">
                    <span className="text-yellow-500">Ratings : {item.rating}⭐</span>
                      <button onClick={()=>buttonClick(item)} className="  bg-blue-600 px-9 text-black  ml-11  text-xl rounded-lg  hover:scale-95 transition duration-500 hover:bg-green-500">Add to Cart</button>
                       
                    </div>

                    
                  </div>

                </div>
              ))}
          </div>

          {/*   that hoverd images  */}

          <div className="flex flex-wrap md:-m-2   ">
            <div className="flex flex-wrap w-1/2 hover:scale-75 hover:translate-x-4 hover:skew-y-3 transtion duration-500">
              <div className="md:p-2 p-1 w-1/2 ">
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
        </section>
      </div>
    </>
  );
};

export default Hero;
