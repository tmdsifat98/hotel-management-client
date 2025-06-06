import React from "react";
import logo from "../assets/Logo-app.webp";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { MdCall, MdEmail } from "react-icons/md";
import { FaHouse } from "react-icons/fa6";
import { Link } from "react-router";
import { GrSend } from "react-icons/gr";

const Footer = () => {
  return (
    <footer className="bg-gray-200 dark:bg-gray-600 text-gray-800 dark:text-gray-300 py-8 mt-12">
      <div className="w-11/12 mx-auto grid grid-cols-2 gap-6 items-start">
        <div className="flex flex-col lg:flex-row justify-around items-start gap-4 lg:gap-0 ">
          <div className="flex flex-col justify-start items-start gap-3">
            <Link to="/" className="flex items-center justify-center gap-2">
              <img className="h-8 md:h-11" src={logo} />
            </Link>
            <p className="w-44 lg:w-72">Stay Better, Book Smarter — Find Your Room in One Click!!</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-1">Useful Links</h3>
            <ul>
              <li>
                <Link to="/termsAndCondition" className="hover:underline">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link to="/privacyPolicy" className="hover:underline">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/returnPolicy" className="hover:underline">
                  Return Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row justify-around items-start gap-7">
          <div>
            <h3 className="text-lg font-semibold mb-1">Contact Us</h3>
            <p className="flex gap-1 items-center">
              <FaHouse /> <span>Cox's Bazar, Chittagong</span>
            </p>
            <p className="flex items-center gap-1">
              <MdEmail /> tmdsifat98@gmail.com
            </p>
            <p className="flex items-center gap-1">
              <MdCall /> +880 1521730173
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-3">Follow Us on</h3>
            <div className="flex gap-3">
              <a
                href="https://www.facebook.com/Sifat.tarafder.5/"
                target="_blank"
              >
                <FaFacebook
                  size={23}
                  className="text-blue-600 hover:text-blue-500 transition"
                />
              </a>
              <a href="https://x.com/SifatTarafder98" target="_blank">
                <FaTwitter
                  size={23}
                  className="text-sky-600 hover:text-sky-500 transition"
                />
              </a>
              <a href="https://www.instagram.com/sifat_trf98/" target="_blank">
                <FaInstagram
                  size={23}
                  className="text-pink-600 hover:text-pink-500 transition"
                />
              </a>
              <a href="https://www.youtube.com/@s3tgamer427" target="_blank">
                <FaYoutube
                  size={26}
                  className="text-red-600 hover:text-red-500 transition"
                />
              </a>
            </div>
            <div className="border w-44 border-gray-400 mt-2 rounded pl-2 flex items-center">
              <input placeholder="Write message" className="bg-transparent text-sm w-11/12 border-none outline-0" type="text" name="" id="" />
              <button className="button-common py-2 px-4 cursor-pointer"><GrSend/></button>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center mt-10 text-sm text-gray-600 dark:text-gray-400 border-t-2 pt-7">
        © 2025 Lodgify | All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;