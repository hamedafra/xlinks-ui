import React, { useContext, useState } from "react";
import { UserContext } from "@/contaxt/userContaxt";
import { FaAngleDown } from "react-icons/fa";
import { FiLogOut, FiUser } from "react-icons/fi";
import Cookies from "universal-cookie";

function HeaderProfile() {
  const { user, reFetchUser } = useContext(UserContext);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const cookies = new Cookies();

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const handleLogout = () => {
    cookies.remove("access_token");
    cookies.remove("refresh_token");
    reFetchUser();
  };

  // You can customize the content and styling of the profile section and drawer here
  return (
    <div className="relative ml-4 z-100">
      <button
        onClick={toggleDrawer}
        className="flex items-center focus:outline-none bg-red-600 p-2 rounded-md"
      >
        <FiUser className="m-1" />
        <span className="ml-2 text-gray-300 text-sm">{user.name}</span>
        <FaAngleDown className="ml-1" /> {/* Arrow icon */}
      </button>

      {isDrawerOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-gray-800 rounded-lg shadow-lg">
          <ul className="mt-3 mr-3 mb-3">
            <li
              className="mb-1 p-2 hover:bg-gray-600 transition-bg duration-300 flex items-center cursor-pointer"
              onClick={handleLogout}
            >
              <FiLogOut className="m-1" />
              <a href="#">خروج</a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default HeaderProfile;
