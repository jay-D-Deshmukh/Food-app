import React from 'react';
import Footer from './Footer';

function StartPage() {
    return (
        <div>
        <div className="relative h-screen flex items-center justify-center">
            <div className="absolute inset-0 bg-cover h-2/3">
                <img src="https://b.zmtcdn.com/web_assets/81f3ff974d82520780078ba1cfbd453a1583259680.png" alt="Image" className="w-full h-full object-cover" />
            </div>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
                <div className="text-white text-7xl font-extrabold">
                    Zomato
                </div>
                <samp className="text-white text-5xl pb-8 ">
                Find the best restaurants,<br/> {" "} cafés and bars in India
                </samp>
                <div className="absolute top-0 right-10 p-5">
                    <nav className="flex flex-row items-end gap-14">
                        <a href="#" className="text-white text-xl">Add restaurant</a>
                        <a href="#" className="text-white text-xl">Login</a>
                        <a href="#" className="text-white text-xl">Sign up</a>
                    </nav>
                </div>
            </div>
            <div className='font-thin  absolute  text-center top-2/3 mt-10'>
                <div className='text-5xl text-gray-800'>
                Popular locations in India
                </div>
                <div className='text-gray-600 text-xl mt-10'>
                From swanky upscale restaurants to the cosiest hidden gems serving the most incredible food,<br/> Zomato covers it all. Explore menus, and millions of restaurant photos and reviews from users<br/> just like you, to find your next great meal
                </div>
            </div>
            
            </div>
               <Footer/>
            </div>
        
    );
}

export default StartPage;
