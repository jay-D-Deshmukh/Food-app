import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { RiSearchLine } from "react-icons/ri";
import { IoLocationOutline } from "react-icons/io5";

function Home() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

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

  return (
    <div>
      <div className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0 bg-cover h-2/3">
          {images.map((image, index) => (
            <img
              key={index}
              style={{ height: "calc(100% + 0px)" }}
              className={`absolute inset-0 w-full  object-cover bg-cover transition-opacity duration-1000 ${
                index === currentImageIndex ? "opacity-100" : "opacity-0"
              }`}
              src={image}
              alt={`Image ${index + 1}`}
            />
          ))}
        </div>
        <div className="absolute inset-0 flex  flex-col items-center">
          <div className="text-white text-7xl mt-24 p-10 font-extrabold">
            Zomato
          </div>
          <samp className="text-white text-4xl pb-8 ">
            Discover the best food & drinks in Pune
          </samp>

          

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
        <div className="font-thin  absolute  text-center top-2/3 mt-10">
          <div className="text-5xl text-gray-800">
            Popular locations in India
          </div>
          <div className="text-gray-600 text-xl mt-10">
            From swanky upscale restaurants to the cosiest hidden gems serving
            the most incredible food,
            <br /> Zomato covers it all. Explore menus, and millions of
            restaurant photos and reviews from users
            <br /> just like you, to find your next great meal
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
