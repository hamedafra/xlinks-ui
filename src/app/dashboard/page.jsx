"use client";

import { useRouter } from "next/navigation";
import { UserContext } from "@/contaxt/userContaxt";
import React, { useEffect, useContext } from "react";
import Spinner from "@/components/Spiner/Spiner";

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
      {/* Content Box */}
      <div className="flex-1 bg-gray-100 p-4">Content goes here</div>

      {/* Right Navbar */}
      <div className="flex-5 bg-gray-800 p-4">
        {/* Information Box */}
        <div className="bg-white p-6 rounded-lg shadow-lg mb-6">
          <div className="text-xl font-semibold mb-3">Total Bandwidth</div>
          <div className="text-2xl font-bold mb-4">12GB</div>
          <ul className="space-y-2"></ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
