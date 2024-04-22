import React from "react";

function Fooditem() {
  return (
    <div>
          <nav className="bg-gray-800 p-4">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="flex-shrink-0">
            <a href="#" className="text-white font-bold text-lg">Logo</a>
          </div>
          <div className="hidden md:flex flex-1 justify-center">
            <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Home</a>
            <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">About</a>
            <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Services</a>
            <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Contact</a>
          </div>
          <div className="flex flex-1 justify-center">
            <input type="text" className="border border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none" placeholder="Search..." />
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 ml-2 rounded">Search</button>
          </div>
        </div>
      </div>
    </nav>
    </div>
  );
}

export default Fooditem;
