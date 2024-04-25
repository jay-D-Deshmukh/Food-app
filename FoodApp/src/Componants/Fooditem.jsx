import React, { useEffect, useState } from "react";
import { FaShoppingCart, FaHeart } from "react-icons/fa";

import axios from "axios";

function Fooditem() {
  const [fooddata, setitem] = useState([]);

  const fetchFoodItem = async () => {
    try {
      const data = await axios.get("http://localhost:3000/api/fooditem");
      setitem(data.data);
    } catch (error) {
      console.log("Error in Fetching the FoodItem ::",error)
      
    }

  };

  useEffect(()=>{
    fetchFoodItem()
  },[])
  console.log(fooddata)
  
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
            <div className="hidden md:flex flex-1 justify-center">
              {/* Empty space for future menu items */}
            </div>
            <div className="flex items-center flex-1 justify-center">
              <input
                type="text"
                className="border border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
                placeholder="Search..."
              />
              <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 ml-2 rounded">
                Search
              </button>
            </div>
            <div className="flex items-center">
              {/* Cart icon */}
              <FaShoppingCart className="h-8 w-8 text-black mr-10 cursor-pointer" />
              <FaHeart className="h-8 w-8 text-pink-700 cursor-pointer mr-10" />
            </div>
          </div>
        </div>
      </nav>
      <div className="flex flex-wrap gap-14 mt-12 mx-6">
        {fooddata.map((item,key)=>{
       return <div id={key} className=" max-w-xs bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-2xl">
        
          <img
          
            className="w-full h-56 object-cover object-center"
            src={item.image}
            
            alt={""}
            
          />
          <div className="p-4">
            <h2 className="text-gray-900 font-semibold text-lg">{item.name}</h2>
            <p className="mt-2 text-gray-600">{item.description}</p>
            <div className="mt-3 flex items-center justify-between">
              <span className="text-gray-900 font-bold">$ {item.price}</span>
              
              <button className="px-3 py-1 bg-gray-800 text-white text-xs font-bold uppercase rounded">
                Add to Cart
              </button>
              
            </div>
          </div>
        </div>
       }) }
      </div>
    </div>
  );
}

export default Fooditem;
