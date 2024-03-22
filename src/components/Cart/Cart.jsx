import React from "react";
import { useState, useEffect } from "react";
import { useCart } from "../Context/CartProvider";
import { useNavigate, Link } from "react-router-dom";
import ss from "../assets/ss.png";
const Cart = () => {
  const [validPromo, setValidPromo] = useState(null);
  const navigate = useNavigate();
  const [discount, setDiscount] = useState(0);
  const [promoCode, setPromoCode] = useState("");
  const { cart, setCart } = useCart();
  const [quantities, setQuantities] = useState({});
  const [clicked, setClicked] = useState(false);
  //const [totalcost, setTotalCost] = useState(1);

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
  function handleRemove(id) {
    const removeByFilter = cart.filter((filterItem) => filterItem.id != id);
    setCart(removeByFilter);
  }

  const getTotalPrice = () => {
    // Initialize totalPrice
    let totalPrice = 0;
    // Iterate over each item in the cart
    cart.map((item) => {
      // Retrieve the quantity of the current item from the quantities object
      const quantity = quantities[item.id] || 1;
      // Calculate the total price for the current item and add it to totalPrice
      totalPrice += item.price * quantity;
    });
    // Return the total price
    return totalPrice - discount;
  };

  function applyPromoCode() {
    if (promoCode == "PRATEEK80" && !clicked) {
      setClicked(true);
      setValidPromo("promo code applied sucessfully ( ͡• ͜ʖ ͡• )");
      setDiscount(getTotalPrice() * 0.2);
    } else if (!clicked) {
      setValidPromo("invalid code enter correct promocode ");
    }
  }
  return (
    <>
      {cart.length == 0 ? (
        <div className="flex justify-center items-center flex-col">
          <img className="  w-[70vw] h-[80vh] " src={ss} />{" "}
          <button
            className="   text-3xl font-serif bg-red-400  rounded-full p-9 mb-8 hover:bg-red-100 "
            onClick={() => navigate("/products")}
          >
            
            Add Items to cart
          </button>
        </div>
      ) : (
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
                        <span className="text-red-500 text-xs">
                          {item.brand}
                        </span>
                      </div>

                      <button
                        className="font-semibold hover:text-red-500 text-gray-500 text-xs w-11"
                        onClick={() => {
                          handleRemove(item.id);
                        }}
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                  <span className="text-center w-1/5 font-semibold  ">
                    <button
                      onClick={() => {
                        handleDecrement(item.id);
                      }}
                      className="mx-3 font-bold text-2xl    hover:bg-red-300"
                    >
                      -
                    </button>
                    <input
                      type="text"
                      readOnly
                      className="text-center h-5 w-5    outline-none"
                      value={quantities[item.id] || 1}
                    />
                    <button
                      onClick={() => {
                        handleIncrement(item.id);
                      }}
                      className="mx-3 font-bold text-xl hover:bg-red-300"
                    >
                      +
                    </button>
                  </span>
                  <span className="text-center w-1/5 font-semibold text-sm">
                    ₹ {item.price}
                  </span>
                  <span className="text-center w-1/5 font-semibold text-sm">
                    ₹ {item.price * quantities[item.id] || item.price}
                  </span>
                </div>
              ))}

              <button
                onClick={() => navigate("/products")}
                className="flex font-semibold text-indigo-600 text-sm mt-10"
              >
                Continue Shopping
              </button>
            </div>

            <div className="w-1/4 px-8 py-10">
              <h1 className="font-semibold text-2xl border-b pb-8">
                Order Summary
              </h1>
              <div className="flex justify-between mt-10 mb-5">
                <span className="font-semibold text-sm uppercase">
                  Items {cart.length}
                </span>
                <span className="font-semibold text-sm">
                  ₹ {getTotalPrice()}
                </span>
              </div>
              <div>
                <label className="font-medium inline-block mb-3 text-sm uppercase">
                  Shipping
                </label>
                <select className="block p-2 text-gray-600 w-full text-sm">
                  <option>Standard shipping - ₹10.00</option>
                </select>
              </div>
              <div className="py-4">
                <label className="font-semibold inline-block mb-3 text-sm uppercase">
                  Promo Code
                </label>
                <p className=" text-sm font-mono  ml-1 mb-2 text-blue-600">
                  apply "PRATEEK80" to get 20% discount{" "}
                </p>
                <input
                  type="text"
                  placeholder="Enter your code"
                  className="p-2 text-sm w-full bg-gray-300 rounded-lg"
                  onChange={(e) => setPromoCode(e.target.value)}
                />
                <span className="px-2 text-red-600"> {validPromo} </span>
              </div>

              <button
                className="bg-red-500 hover:bg-red-600 px-7 py-2 ml-3 text-sm text-white uppercase"
                onClick={applyPromoCode}
              >
                Apply
              </button>
              <div className="border-t mt-8">
                <div className="flex font-semibold justify-between py-6 text-sm uppercase">
                  <span>Total cost</span>
                  <span>₹ {getTotalPrice() + 10} </span>
                </div>
                <button className="bg-indigo-500 font-semibold hover:bg-indigo-600 py-3 text-sm text-white uppercase w-full">
                  Checkout
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
export default Cart;
