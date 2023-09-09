"use client";

import { useRouter } from "next/navigation";
import { UserContext } from "@/contaxt/userContaxt";
import React, { useEffect, useContext } from "react";
import Spinner from "@/components/Spiner/Spiner";
import { FiCreditCard, FiLogOut } from "react-icons/fi";

const Dashboard = () => {
  const user = useContext(UserContext);
  const router = useRouter();

  useEffect(() => {
    if (!user.user & !user.isLoading) {
      router.push("/login?message=Unauthorized");
    }
  }, [router, user]);

  if (!user.user) {
    return <Spinner />;
  }

  return (
    <div className="flex h-screen">
      <div className="flex-5 bg-gray-800 p-4">
        {/* Information Box */}
        <div className="bg-gray-900 p-3 rounded-lg shadow-lg mb-6 flex gap-2">
          <div className="text-sm font-semibold mr-3 text-gray-100 shadow-lg">
            حجم باقی مانده{" "}
          </div>
          <div className="text-sm font-bold mb-1  text-green-400">12GB</div>
        </div>
        <div>
          <ul className="mt-3 mr-3 mb-3">
            <li className="mb-1 p-2 text-gray-100  hover:bg-gray-600 transition-bg duration-300 flex items-center cursor-pointer rounded-md">
              <FiCreditCard className="m-2 text-red-800" />
              <a href="#">داشبورد</a>
            </li>
            <li className="mb-1 p-2 text-gray-100  hover:bg-gray-600 transition-bg duration-300 flex items-center cursor-pointer rounded-md">
              <FiCreditCard className="m-2  text-red-800" />
              <a href="#">خرید پکیج</a>
            </li>
            <li className="mb-1 p-2 text-gray-100  hover:bg-gray-600 transition-bg duration-300 flex items-center cursor-pointer rounded-md">
              <FiLogOut className="m-2 text-red-800" />
              <a href="#">خروج</a>
            </li>
          </ul>
        </div>
      </div>
      {/* Content Box */}
      <div className="flex-1 bg-gray-100 p-4">Content goes here</div>

      {/* Right Navbar */}
    </div>
  );
};

export default Dashboard;
