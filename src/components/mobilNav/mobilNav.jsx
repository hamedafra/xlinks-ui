"use strict";
import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

function MobilNav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="text-2xl text-white"
      >
        {isOpen ? <FaTimes color="white" /> : <FaBars color="white" />}
      </button>

      <div
        className={`absolute top-0 left-0 w-full ${
          isOpen ? "h-screen" : "h-0"
        } bg-black transition-height duration-500 ease-in-out`}
      >
        <div
          className={`flex flex-col items-center space-y-8 py-8 ${
            isOpen ? "block" : "hidden"
          }`}
        >
          <ul className="space-y-8">
            <li className="text-white hover:text-indigo-200">
              <a href="javascript:void(0)">Home</a>
            </li>
            <li className="text-white hover:text-indigo-200">
              <a href="javascript:void(0)">Blog</a>
            </li>
            <li className="text-white hover:text-indigo-200">
              <a href="javascript:void(0)">About Us</a>
            </li>
            <li className="text-white hover:text-indigo-200">
              <a href="javascript:void(0)">Contact Us</a>
            </li>
          </ul>

          <div className="mt-3 space-y-2">
            <a
              href="javascript:void(0)"
              className="block w-1/2 px-4 py-2 mx-auto text-center text-white bg-gray-600 rounded-md shadow hover:bg-gray-800"
            >
              Sign in
            </a>
            <a
              href="javascript:void(0)"
              className="block w-1/2 px-4 py-2 mx-auto text-center text-gray-800 bg-white rounded-md shadow hover:bg-gray-100"
            >
              Sign up
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MobilNav;
