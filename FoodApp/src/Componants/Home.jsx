import React, { useState, useEffect } from "react";
import { Link,useNavigate } from "react-router-dom";
import Footer from "./Footer";


function Home() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const navigate = useNavigate();

  // Array of image URLs
  const images = [
    "https://images.unsplash.com/photo-1499028344343-cd173ffc68a9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTV8fHxlbnwwfHx8fHw%3D",
    "https://media.istockphoto.com/id/1081422898/photo/pan-fried-duck.webp?b=1&s=170667a&w=0&k=20&c=RRljEgn_wsgIq_9bHcX1pJi6E842KKxr82xzftiDe8I=",
    "https://images.unsplash.com/photo-1447078806655-40579c2520d6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://media.istockphoto.com/id/953140058/photo/cooking-nd-seasoning-spices-border-on-black-slate-background.webp?b=1&s=170667a&w=0&k=20&c=8Vmnl8mHhMmc2WvnEEj0RDajvg75bizccWzrTXIh2z8=",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      // Increment current image index cyclically
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds (adjust time as needed)

    // Cleanup function to clear interval
    return () => clearInterval(interval);
  }, []); // Empty dependency array ensures effect runs only once on mount
  const gotoOrderPage =()=>{
    navigate("/Fooditem")
  }
  return (
    <div>
      <div className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0 bg-cover h-2/3">
          {images.map((image, index) => (
            <img
              key={index}
              // style={{ height: "calc(100% + 0px)" }}
              className={`absolute inset-0 w-full h-96  object-cover bg-cover transition-opacity duration-1000 ${
                index === currentImageIndex ? "opacity-100" : "opacity-0"
              }`}
              src={image}
              alt={`Image ${index + 1}`}
            />
          ))}
        </div>
        <div className="absolute inset-0 flex  flex-col items-center">
          <div className="text-white text-7xl mt-16 p-8 font-extrabold">
            Zomato
          </div>
          <samp className="text-white text-4xl pb-8 ">
            Discover the best food & drinks in India
          </samp>
          <div className="max-w-96 mx-auto">
            <div className="relative flex items-center w-96 h-12 rounded-lg focus-within:shadow-lg bg-white overflow-hidden">
              <div className="grid place-items-center h-full w-12 text-gray-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>

              <input
                className="peer h-full w-full outline-none text-sm text-gray-700 pr-2"
                type="text"
                id="search"
                placeholder="Search something.."
              />
            </div>
          </div>

          <div className="absolute top-0 right-10 p-5">
            <nav className="flex flex-row items-end gap-14">
              <Link to="#" className="text-white text-xl">
                Add restaurant
              </Link>
              <Link to="/login" className="text-white text-xl">
                Log in
              </Link>
              <Link to="/register" className="text-white text-xl">
                Sign up
              </Link>
            </nav>
          </div>
        </div>
        <div className="font-thin flex gap-9 absolute mt-12 text-center top-96">
          <div className="bg-slate-500 w-96 h-56 relative rounded-2xl overflow-hidden transition-transform transform hover:scale-105">
            <img src="https://b.zmtcdn.com/webFrontend/e5b8785c257af2a7f354f1addaf37e4e1647364814.jpeg?output-format=webp&fit=around|402:360&crop=402:360;*,*" alt="" className="bg-cover overflow-hidden w-full h-full" />
            <div className="absolute inset-x-0 bottom-0 bg-white bg-opacity-90 text-gray-700 font-semibold text-xl p-4">              
            <button
            onClick={gotoOrderPage}
            >Order Online</button>
            </div>
          </div>
          <div className="bg-slate-500 w-96 h-56 relative rounded-2xl overflow-hidden transition-transform transform hover:scale-105">
            <img src="https://images.pexels.com/photos/941861/pexels-photo-941861.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" className="bg-cover overflow-hidden w-full h-full" />
            <div className="absolute inset-x-0 bottom-0 bg-white bg-opacity-90 text-gray-700 font-semibold text-xl p-4">
              <p>Dining</p>
            </div>
          </div>
          <div className="bg-slate-500 w-96 h-56 relative rounded-2xl overflow-hidden transition-transform transform hover:scale-105">
            <img src="https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" className="bg-cover overflow-hidden w-full h-full" />
            <div className="absolute inset-x-0 bottom-0 bg-white bg-opacity-90 text-gray-700 font-semibold text-xl  p-4">
              <p>Nightlife and Clubs</p>
              
            </div>
          </div>

          
          </div>

          
     
    </div>
    <Footer/>
    </div>
  );
}

export default Home;
