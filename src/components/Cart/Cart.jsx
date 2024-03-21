import React from "react";
import { useState, useEffect } from "react";
import { useCart } from "../Context/CartProvider";

const Cart = () => {
  const [value, setValue] = useState(1);

  const { cart } = useCart();
  const [quantities, setQuantities] = useState({});
  console.log(cart);

  const handleIncrement = (productId) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [productId]: (prevQuantities[productId] || 1) + 1,
    }));
  };

  const handleDecrement = (productId) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [productId]: Math.max((prevQuantities[productId] || 1) - 1, 0),
    }));
  };
  return (
    <>
      <div className="container mx-auto mt-10">
        <div className="flex shadow-md my-10">
          <div className="w-3/4 bg-white px-10 py-10">
            <div className="flex justify-between border-b pb-8">
              <h1 className="font-semibold text-2xl">Shopping Cart</h1>
              <h2 className="font-semibold text-2xl"> {cart.length} Items</h2>
            </div>

            <div className="flex mt-10 mb-5">
              <h3 className="font-semibold text-gray-600 text-xs uppercase w-2/5">
                Product Details
              </h3>
              <h3 className="font-semibold   text-gray-600 text-xs uppercase w-1/5 text-center">
                Quantity
              </h3>
              <h3 className="font-semibold   text-gray-600 text-xs uppercase w-1/5 text-center">
                Price
              </h3>
              <h3 className="font-semibold   text-gray-600 text-xs uppercase w-1/5 text-center">
                Total
              </h3>
            </div>
            {cart.map((item, index) => (
              <div
                className="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5"
                key={index}
              >
                <div className="flex w-2/5">
                  <div className="w-20">
                    <img className="h-24" src={item.thumbnail} alt="" />
                  </div>

                  <div className="flex flex-col justify-between ml-4 flex-grow">
                    <div>
                      <span className="font-bold text-sm"> {item.title}</span>{" "}
                      <br />
                      <span className="text-red-500 text-xs">{item.brand}</span>
                    </div>

                    <a
                      href="#"
                      className="font-semibold hover:text-red-500 text-gray-500 text-xs"
                    >
                      Remove
                    </a>
                  </div>
                </div>
                <span className="text-center w-1/5 font-semibold  ">
                  <button
                    onClick={() => handleDecrement(item.id)}
                    className="mx-3 font-bold text-2xl    hover:bg-red-300"
                  >
                    -
                  </button>
                  <input
                    className="text-center h-5 w-5    outline-none"
                    value={quantities[item.id] || 1}
                  />
                  <button
                    onClick={() => handleIncrement(item.id)}
                    className="mx-3 font-bold text-xl hover:bg-red-300"
                  >
                    +
                  </button>
                </span>
                <span className="text-center w-1/5 font-semibold text-sm">
                  {item.price}
                </span>
                <span className="text-center w-1/5 font-semibold text-sm">
                  {item.price * quantities[item.id] || item.price}
                </span>
              </div>
            ))}

            <a
              href="#"
              className="flex font-semibold text-indigo-600 text-sm mt-10"
            >
              Continue Shopping
            </a>
          </div>

          <div className="w-1/4 px-8 py-10">
            <h1 className="font-semibold text-2xl border-b pb-8">
              Order Summary
            </h1>
            <div className="flex justify-between mt-10 mb-5">
              <span className="font-semibold text-sm uppercase">Items 3</span>
              <span className="font-semibold text-sm">590$</span>
            </div>
            <div>
              <label className="font-medium inline-block mb-3 text-sm uppercase">
                Shipping
              </label>
              <select className="block p-2 text-gray-600 w-full text-sm">
                <option>Standard shipping - $10.00</option>
              </select>
            </div>
            <div className="py-10">
              <label className="font-semibold inline-block mb-3 text-sm uppercase">
                Promo Code
              </label>
              <input
                type="text"
                placeholder="Enter your code"
                className="p-2 text-sm w-full"
              />
            </div>
            <button className="bg-red-500 hover:bg-red-600 px-5 py-2 text-sm text-white uppercase">
              Apply
            </button>
            <div className="border-t mt-8">
              <div className="flex font-semibold justify-between py-6 text-sm uppercase">
                <span>Total cost</span>
                <span>$600</span>
              </div>
              <button className="bg-indigo-500 font-semibold hover:bg-indigo-600 py-3 text-sm text-white uppercase w-full">
                Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Cart;
