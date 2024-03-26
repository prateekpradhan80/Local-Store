import React from "react";
import { useEffect, useState } from "react";
import { useCart } from "../../Context/CartProvider";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Shimmer from "../../Shimmer/Shimmer";

const Products = (props) => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const { addToCart, cart, setCart } = useCart();
  const [searchItem, setSearchItem] = useState("");
  const [minm, setMinm] = useState("");
  const [maxm, setMaxm] = useState("");

  useEffect(() => {
    if (props.liveProduct) {
      fetch(`https://dummyjson.com/products/`)
        .then((res) => res.json())
        .then((res) => {
          setData(res.products);
          setFilteredData(res.products);
        });
    } else {
      fetch(`https://dummyjson.com/products/category/${props.selectProduct}`)
        .then((res) => res.json())
        .then((res) => {
          setData(res.products);
          setFilteredData(res.products);
        });
    }
  }, [props.selectProduct, props.liveProduct]);

  const searchProduct = (e) => {
    const query = e.target.value;
    setSearchItem(query);
  };

  const btnFilter = () => {
    const filteredData = data.filter((item) =>
      item.title.toLowerCase().includes(searchItem.toLowerCase())
    );
    setFilteredData(filteredData);
  };

  const filterPrice = () => {
    const filterPrice = data.filter(
      (item) => (!minm || item.price >= minm) && (!maxm || item.price <= maxm)
    );
    setFilteredData(filterPrice);
  };

  function handleAddToCart(product) {
    const isProductInCart =
      cart.filter((item) => item.id === product.id).length > 0;

    // If the product is not in the cart, add it
    if (!isProductInCart) {
      addToCart(product);
      toast.success("Product added to cart!");
    }
  }

  return (
    <>
      {/* Filter functionality  */}
      <div>
        <div className=" flex justify-center items-center mt-4 ">
          <input
            className="bg-gray-200 w-[30vw] rounded-l-xl    p-4 "
            placeholder="Search for Products  "
            value={searchItem}
            onChange={searchProduct}
          />
          <button
            onClick={btnFilter}
            className="bg-blue-700 p-4 rounded-r-xl text-xl font-serif hover:bg-blue-400 "
          >
            Filter Products
          </button>
        </div>

        <div className="flex justify-center mt-2">
          <input
            className="border-4 p-3 "
            placeholder="minimum Price"
            value={minm}
            onChange={(e) => setMinm(e.target.value)}
          />
          <input
            className="border-4   p-3"
            placeholder="maximum Price "
            value={maxm}
            onChange={(e) => setMaxm(e.target.value)}
          />
          <button
            className="bg-blue-700 p-4 rounded-r-xl text-xl font-serif hover:bg-blue-400 "
            onClick={filterPrice}
          >
            Filter Price
          </button>
        </div>
      </div>
      {!filteredData.length ? (
        <Shimmer />
      ) : (
        <div className=" flex flex-wrap gap-7 justify-center  mt-10">
         { filteredData.map((product, index) => ( <div
            className="border shadow-2xl p-3 w-[20vw] h-fit   bg-red-100"
            key={index}
          >
            <Link to={`/product/${product.id}`}>
              <img
                className="hover:scale-90 transition duration-500  max-h-48 w-full    "
                src={product.thumbnail}
              />
            </Link>
            <p className="text-red-600 text-lg   font-semibold  ">
              {product.title}
            </p>

            <p className="font-mono">
              Price: ₹{product.price} || Stock : {product.stock}{" "}
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
          </div>)
           )}
        </div>
      )}

      {/*  shoing all products */}

      <div className=" flex flex-wrap gap-7 justify-center  mt-10">
        {filteredData ? (
          filteredData.map((product, index) => (
            <div
              className="border shadow-2xl p-3 w-[20vw] h-fit   bg-red-100"
              key={index}
            >
              <Link to={`/product/${product.id}`}>
                <img
                  className="hover:scale-90 transition duration-500  max-h-48 w-full    "
                  src={product.thumbnail}
                />
              </Link>
              <p className="text-red-600 text-lg   font-semibold  ">
                {product.title}
              </p>

              <p className="font-mono">
                Price: ₹{product.price} || Stock : {product.stock}{" "}
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
    </>
  );
};

export default Products;
