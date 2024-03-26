import React from "react";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import { useCart } from "../../Context/CartProvider";

const SingleProduct = () => {
  const { addToCart } = useCart();
  const [productData, setProductData] = useState({});
  const { productId } = useParams();
  useEffect(() => {
    fetch(`https://dummyjson.com/products/${productId}`)
      .then((res) => res.json())
      .then((data) => setProductData(data));
  }, []);

  function addButton(productData) {
    addToCart(productData);
  }

  console.log(productData);
  return (
    <>
      <div className="mt-12">
        <Link
          className="hover:bg-blue-900 ml-40 py-1 bg-blue-500 rounded-full text-white px-5"
          to="/allproducts"
        >
          ← Return to Products page
        </Link>
      </div>

      <section className="text-gray-600 body-font overflow-hidden">
        <div className="container px-5 py-24 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <img
              alt="ecommerce"
              className="lg:w-1/2 max-h-[50vh] lg:h-auto rounded transform-transition duration-300 hover:scale-110"
              src={productData.thumbnail}
            />
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-4 lg:mt-0">
              <h2 className="text-sm title-font text-gray-500 tracking-widest mb-2">
                {productData.brand}
              </h2>
              <h1 className="text-gray-900 text-3xl title-font font-medium mb-3">
                {" "}
                {productData.title}
              </h1>
              <button className="bg-blue-800 text-white px-2 mb-3 rounded-md">
                {productData.rating}☆
              </button>
              <p className="leading-relaxed mb-4">{productData.description}</p>

              <div className="flex">
                <span className="title-font font-medium text-2xl text-gray-900">
                  Price : ₹{productData.price}
                </span>
                <button
                  className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded"
                  onClick={() => addButton(productData)}
                >
                  Add To Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SingleProduct;
