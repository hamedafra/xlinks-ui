"use client";
import React, { useContext, useState } from "react";
import { UserContext } from "@/contaxt/userContaxt";
import { FaAngleDown } from "react-icons/fa";
import { FiLogOut, FiSettings, FiUser } from "react-icons/fi";

function HeaderProfile() {
  const user = useContext(UserContext).user;
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  // You can customize the content and styling of the profile section and drawer here
  return (
    <div className="relative ml-4 z-100">
      <button
        onClick={toggleDrawer}
        className="flex items-center focus:outline-none bg-red-600 p-2 rounded-md"
      >
        {/* <img
          src={user.avatar} // Assuming user.avatar is the URL of the user's avatar
          alt={user.name} // Assuming user.name is the user's name
          className="w-8 h-8 rounded-full"
        /> */}
        <FiUser className="m-1" />
        <span className="ml-2 text-gray-300 text-sm">sina koosha</span>
        <FaAngleDown className="ml-1" /> {/* Arrow icon */}
      </button>

      {isDrawerOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-gray-800 rounded-lg shadow-lg">
          {/* Add your drawer content here */}
          <ul className="mt-3 mr-3 mb-3">
            <li className="mb-1 p-2 hover:bg-gray-600 transition-bg duration-300 flex items-center">
              <FiUser className="m-1" /> {/* User icon */}
              <a href="/dashboard">داشبورد</a>
            </li>

            <li className="mb-1 p-2 hover:bg-gray-600 transition-bg duration-300 flex items-center">
              <FiLogOut className="m-1" /> {/* Logout icon */}
              <a href="#">خروج</a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default HeaderProfile;
