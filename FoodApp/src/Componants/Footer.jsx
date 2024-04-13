import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaLinkedin,
} from "react-icons/fa";

function Footer() {
  return (
    <div>
      <div className="bg-gray-100">
        <div className="flex justify-between p-8">
          <h1 className="ml-52 text-4xl font-extrabold">Zomato</h1>
          <div className="flex gap-4 mr-10 text-xl">
            <select className="border border-gray-300 rounded-md px-3 py-1">
              <option value="india">India</option>
              <option value="uae">UAE</option>
            </select>
            <select className="border border-gray-300 rounded-md px-3 py-1">
              <option value="english">English</option>
              <option value="english">Hindi</option>
              <option value="english">Marathi</option>
            </select>
          </div>
        </div>
        <div className="max-w-screen-lg px-4 sm:px-6 text-gray-800 sm:grid md:grid-cols-5 sm:grid-cols-2 mx-auto">
          <div className="p-5">
            <div className="text-sm uppercase text-black font-semibold">
              About Zomato
            </div>
            <div className="text-gray-500">
              <a className="my-3 block" href="/#">
                Who We Are <span className="text-teal-600 text-xs p-1"></span>
              </a>
              <a className="my-3 block" href="/#">
                Blog <span className="text-teal-600 text-xs p-1"></span>
              </a>
              <a className="my-3 block" href="/#">
                Work With Us
                <span className="text-teal-600 text-xs p-1">New</span>
              </a>
              <a className="my-3 block" href="/#">
                Report Fraud <span className="text-teal-600 text-xs p-1"></span>
              </a>
              <a className="my-3 block" href="/#">
                Blog <span className="text-teal-600 text-xs p-1"></span>
              </a>
              <a className="my-3 block" href="/#">
                Press Kit <span className="text-teal-600 text-xs p-1"></span>
              </a>
              <a className="my-3 block" href="/#">
                Contact Us <span className="text-teal-600 text-xs p-1"></span>
              </a>
            </div>
          </div>
          <div className="p-5">
            <div className="text-sm uppercase text-black font-semibold">
              ZOMAVERSE
            </div>
            <div className="text-gray-500">
              <a className="my-3 block" href="/#">
                Zomato <span className="text-teal-600 text-xs p-1"></span>
              </a>
              <a className="my-3 block" href="/#">
                Blinkid <span className="text-teal-600 text-xs p-1"></span>
              </a>
              <a className="my-3 block" href="/#">
                Feeding India{" "}
                <span className="text-teal-600 text-xs p-1"></span>
              </a>
              <a className="my-3 block" href="/#">
                Hyperpure <span className="text-teal-600 text-xs p-1"></span>
              </a>
              <a className="my-3 block" href="/#">
                Zomaland <span className="text-teal-600 text-xs p-1"></span>
              </a>
            </div>
          </div>
          <div className="p-5">
            <div className="text-sm uppercase text-black font-semibold">
              FOR RESTAURANTS
            </div>
            <div className="text-gray-500">
              <a className="my-3 block" href="/#">
                Partner With Us{" "}
                <span className="text-teal-600 text-xs p-1"></span>
              </a>
              <a className="my-3 block" href="/#">
                Apps For You <span className="text-teal-600 text-xs p-1"></span>
              </a>
            </div>
          </div>
          <div className="p-5">
            <div className="text-sm uppercase text-black font-semibold">
              Learm More
            </div>
            <div className="text-gray-500">
              <a className="my-3 block" href="/#">
                Privacy <span className="text-teal-600 text-xs p-1"></span>
              </a>
              <a className="my-3 block" href="/#">
                Security <span className="text-teal-600 text-xs p-1"></span>
              </a>
              <a className="my-3 block" href="/#">
                Terms <span className="text-teal-600 text-xs p-1"></span>
              </a>
              <a className="my-3 block" href="/#">
                Sitemap <span className="text-teal-600 text-xs p-1"></span>
              </a>
            </div>
          </div>
          <div className="p-5">
            <div className="text-sm uppercase text-black font-semibold">
              Socal Links
            </div>
            <div className="text-gray-900 text-xl flex space-x-4">
              <a href="/#" className="my-3 block">
                <FaFacebook />
              </a>
              <a href="/#" className="my-3 block">
                <FaInstagram />
              </a>
              <a href="/#" className="my-3 block">
                <FaTwitter />
              </a>
              <a href="/#" className="my-3 block">
                <FaYoutube />
              </a>
              <a href="/#" className="my-3 block">
                <FaLinkedin />
              </a>
            </div>
            <div className="mt-5">
              <a href="#" className="w-full min-w-xl">
                <img
                  src="https://mcqmate.com/public/images/icons/playstore.svg"
                  alt="Playstore Button"
                  class="h-14"
                />
              </a>
              
                
              
                <img
                  src="https://www.svgrepo.com/show/303128/download-on-the-app-store-apple-logo.svg"
                  alt="Youtube Button"
                  class="h-30"
                />
             
            </div>
          </div>
        </div>
      </div>
      <div class=" p-64 flex  flex-col-reverse justify-between pt-5 pb-10 border-t lg:flex-row">
        <p class="text-sm text-gray-600">
        By continuing past this page, you agree to our Terms of Service, Cookie Policy, Privacy Policy and Content Policies. All trademarks are properties of their respective owners. 2008-2024 © Zomato™ Ltd. All rights reserved.
        </p>
        
      </div>
    </div>
  );
}

export default Footer;
