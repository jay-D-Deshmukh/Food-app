import React, { useEffect, useState } from "react";
import { FaShoppingCart, FaHeart } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { addItem } from "../Cartsclice/cartSclice";
import { addTOWishlist } from "../WishlistSlice/wishListslice";
import { useSelector } from "react-redux";
import Footer from "./Footer";

import axios from "axios";

function Fooditem() {
  const [fooddata, setFoodData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const wishlist = useSelector((state) => state.wishlist);

  const fetchFoodItem = async () => {
    try {
      const data = await axios.get("http://localhost:3000/api/fooditem");
      setFoodData(data.data);
    } catch (error) {
      console.log("Error in Fetching the FoodItem ::", error);
    }
  };

  useEffect(() => {
    fetchFoodItem();
  }, []);

  const addTocart = (item) => {
    dispatch(addItem(item));
  };

  const addTowishlist = (item) => {
    dispatch(addTOWishlist(item));
  };

  const filteredFoodData = fooddata.filter((item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <nav className="bg-white">
        <div className="w-full mx-auto px-4 shadow-md p-5">
          <div className="flex justify-between items-center ">
            <div className="flex-shrink-0">
              <a href="#" className="text-black font-extrabold text-4xl">
                Zomato
              </a>
            </div>
            <div className="hidden md:flex flex-1 justify-center"></div>
            <div className="flex items-center flex-1 justify-center">
              <input
                type="text"
                className="border border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 ml-2 rounded">
                Search
              </button>
            </div>
            <div className="flex items-center relative">
              <div>
                {cart.item.length > 0 && (
                  <div className="absolute h-6 w-6 bg-black rounded-full flex justify-center">
                    <h1 className="text-white font-bold">{cart.item.length}</h1>
                  </div>
                )}
                <FaShoppingCart className="h-9 w-9 text-black mr-10 cursor-pointer" />
              </div>
              {wishlist.item.length > 0 && (
                <div className="absolute h-6 w-6 bg-black rounded-full flex justify-center  right-16 top-0">
                  <h1 className="text-white">{wishlist.item.length}</h1>
                </div>
              )}
              <FaHeart className="h-9 w-9 text-pink-700 cursor-pointer mr-10" />
            </div>
          </div>
        </div>
      </nav>
      <div className="flex flex-wrap gap-14 mt-12 mx-6">
        {filteredFoodData.map((item, key) => {
          return (
            <div
              key={item._id}
              className=" max-w-xs bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-2xl"
            >
              <img
                className="w-full h-56 object-cover object-center"
                src={item.image}
                alt={""}
              />
              <div className="p-4">
                <h2 className="text-gray-900 font-semibold text-lg">
                  {item.name}
                </h2>
                <p className="mt-2 text-gray-600">{item.description}</p>
                <div className="mt-3 flex items-center justify-between">
                  <span className="text-gray-900 font-bold">
                    $ {item.price}
                  </span>
                  <button
                    onClick={() => addTowishlist(item)}
                    className="px-3 py-1 bg-gray-800 text-white text-xs font-bold uppercase rounded dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
                  >
                    Add to Wishlist
                  </button>
                  <button
                    onClick={() => addTocart(item)}
                    className="px-3 py-1 bg-gray-800 text-white text-xs font-bold uppercase rounded dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="pt-20">
        <Footer />
      </div>
    </div>
  );
}

export default Fooditem;
