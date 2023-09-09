import React from "react";

function HeaderAuth() {
  return (
    <div class="inline-flex items-center h-full ml-5 lg:w-2/5 lg:justify-end lg:ml-0">
      <a href="/login" class="ml-5 font-medium hover:text-gray-200">
        ورود
      </a>
      <a
        href="/sinup"
        class="px-4 py-2 text-xs font-bold text-white uppercase transition-all duration-150 bg-red-700 rounded shadow outline-none  hover:bg-red-800 "
      >
        ثبت نام
      </a>
    </div>
  );
}

export default HeaderAuth;
