import React from "react";
import { useEffect, useState } from "react";
import { useCart } from "../Context/CartProvider";

const SingleProduct = (props) => {
  const [data, setData] = useState([]);
  const [buttonText, setButtonText] = useState("Add to Cart");
  const { addToCart, cart, setCart } = useCart();
  useEffect(() => {
    if (props.liveProduct) {
      fetch(`https://dummyjson.com/products/`)
        .then((res) => res.json())
        .then((res) => setData(res.products));
    } else {
      fetch(`https://dummyjson.com/products/category/${props.selectProduct}`)
        .then((res) => res.json())
        .then((res) => setData(res.products));
    }
  }, [props.selectProduct, props.liveProduct]);

  function handleAddToCart(product) {
   const isProductInCart = cart.filter((item) => item.id === product.id ).length>0;

    // If the product is not in the cart, add it
    if (!isProductInCart) {
      addToCart(product);
      
    }
  }
  return (
    <div className=" flex flex-wrap gap-7 justify-center  mt-10">
      {data ? (
        data.map((product, index) => (
          <div
            className="border shadow-2xl p-3 w-[20vw] h-fit   bg-red-100"
            key={index}
          >
            <img
              className="hover:scale-90 transition duration-500  max-h-64 w-full    "
              src={product.thumbnail}
            />
            <p className="text-red-600 text-lg   font-semibold  ">
              {product.title}
            </p>
            <p className="text-gray-700">{product.description}</p>
            <p className="font-mono">
              Price: ₹{product.price} | | Stock : {product.stock}{" "}
            </p>
            <p className=" mb-3 font-semibold text-yellow-500">
              Rating: {product.rating}⭐
            </p>
            <button
              onClick={() => handleAddToCart(product)}
              className=" mx-3 bg-green-400  text-xl rounded-lg w-11/12 hover:scale-95 transition duration-500 hover:bg-green-500  "
            >
              Add to Cart
            </button>
          </div>
        ))
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default SingleProduct;
