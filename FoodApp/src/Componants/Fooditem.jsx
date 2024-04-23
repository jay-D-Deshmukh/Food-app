import React from "react";
import { FaShoppingCart, FaHeart } from 'react-icons/fa';

function Fooditem() {
  return (
    <div>
        <nav className="bg-white">
        <div className="w-full mx-auto px-4 shadow-md p-5">
          <div className="flex justify-between items-center ">
            <div className="flex-shrink-0">
              <a href="#" className="text-black font-extrabold text-4xl">Zomato</a>
            </div>
            <div className="hidden md:flex flex-1 justify-center">
              {/* Empty space for future menu items */}
            </div>
            <div className="flex items-center flex-1 justify-center">
              <input type="text" className="border border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none" placeholder="Search..." />
              <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 ml-2 rounded">Search</button>
            </div>
            <div className="flex items-center">
              {/* Cart icon */}
              <FaShoppingCart className="h-8 w-8 text-black mr-10 cursor-pointer" />
              <FaHeart className="h-8 w-8 text-pink-700 cursor-pointer mr-10" />


            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Fooditem;
