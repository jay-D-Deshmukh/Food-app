import React from "react";

function Fooditem() {
  return (
    <div>
      <nav className="bg-red-300 py-4 w-1/2">
        <div className="container mx-auto flex justify-between items-center">
          <div>
            <a href="#" className="text-gray-600 text-lg font-bold">
              Logo
            </a>
          </div>
          <div className="flex-1 flex justify-center">
            <form className="w-full max-w-xl">
              <div className="flex items-center border border-gray-300 rounded-full">
                <input
                  className="appearance-none bg-transparent border-none w-full text-gray-600 py-1 px-2 leading-tight focus:outline-none"
                  type="text"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button
                  className="flex-shrink-0 bg-transparent text-gray-600 hover:text-gray-800 focus:outline-none"
                  type="button"
                >
                  <svg
                    className="h-4 w-4 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9 0a9 9 0 1 1-1.945 17.661l-3.367 3.367a1 1 0 0 1-1.414-1.414l3.366-3.367A9 9 0 0 1 9 0zm0 2a7 7 0 1 0 0 14A7 7 0 0 0 9 2z" />
                  </svg>
                </button>
              </div>
            </form>
          </div>
          <div>
            <ul className="flex space-x-4">
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-800">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-800">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-800">
                  Services
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-800">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Fooditem;
