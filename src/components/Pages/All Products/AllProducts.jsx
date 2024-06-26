import React from "react";
import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import productImg from "../../assets/productImg.jpg";
import Products from "../Products/Products";
import { useCart } from "../../Context/CartProvider";
export const productInfoLoader = async () => {
  const response = await fetch("https://dummyjson.com/products/categories");
  return response.json();
};

const AllProducts = () => {
  const [selectedProduct, setSelectedProduct] = useState();
  const [liveProduct, setliveProduct] = useState(true);
  const product = useLoaderData();
  const { theme } = useCart();

  /*   using this you can also create but it is taking some time to render , but using loader it takes less to time render
  const [product, setProduct] = useState([]);
  useEffect(() => {
    fetch("https://dummyjson.com/products/categories")
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);
*/
  function handleButton(product) {
    setliveProduct(false);
    setSelectedProduct(product);
  }

  return (
    <>
      <div className={"bg-" + theme + "-500"}>
        <div className="relative    ">
          <img className="w-full h-[40vh]" src={productImg}></img>
          <div className="absolute top-7">
            <h1 className=" ml-5 text-2xl font-serif text-white">
              All PRODUCTS
            </h1>

            {product ? (
              product.map((product, index) => (
                <button
                  className=" border  bg-red-500 p-3 text-sm  m-5 gap-2 rounded-lg  text-white hover:scale-110 transition duration-500"
                  key={index}
                  onClick={() => handleButton(product)}
                >
                  {product.toUpperCase()}
                </button>
              ))
            ) : (
              <p>Loading...</p>
            )}
          </div>
          <Products selectProduct={selectedProduct} liveProduct={liveProduct} />
          ;
        </div>
      </div>
    </>
  );
};

export default AllProducts;
