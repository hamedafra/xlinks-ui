"use client";
import { FaCheckCircle } from "react-icons/fa";
import { IconName, TiTick } from "react-icons/ti";
import TikIcon from "../Icon/TikIcon";
export default function ThreeTierPricing() {
  return (
    <section className="bg-gray-800">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
          <h2 className="mb-4 text-4xl tracking-tight font-bold text-gray-100">
            پلن ها
          </h2>
        </div>
        <div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">
          {/* First Price Box */}
          <div class="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-100 bg-gray-950 rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
            <h3 class="mb-4 text-2xl font-semibold">پلن برنزی</h3>

            <div class="flex justify-center items-baseline my-8">
              <span class="mr-2 text-xl font-extrabold">100 هزار تومان</span>
              <span class="text-gray-500 dark:text-gray-400 dark:text-gray-400">
                /ماهانه
              </span>
            </div>

            <ul role="list" class="mb-8 space-y-4 text-left">
              <li class="flex items-center space-x-3">
                <TikIcon />
                <span>100 گیگ پهنای باند ماهانه</span>
              </li>
              <li class="flex items-center space-x-3">
                <TikIcon />
                <span>
                  Team size:{" "}
                  <span class="font-semibold">15 روز نگهداری فایل</span>
                </span>
              </li>
            </ul>
            <a
              href="#"
              class="text-white bg-red-800 hover:bg-primary-700 rounded-xl  p-3  hover:bg-red-900"
            >
              شروع کنید
            </a>
          </div>

          {/* Second Price Box */}
          <div class="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-100 bg-gray-950 rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
            <h3 class="mb-4 text-2xl font-semibold">پلن برنزی</h3>

            <div class="flex justify-center items-baseline my-8">
              <span class="mr-2 text-xl font-extrabold">100 هزار تومان</span>
              <span class="text-gray-500 dark:text-gray-400 dark:text-gray-400">
                /ماهانه
              </span>
            </div>

            <ul role="list" class="mb-8 space-y-4 text-left">
              <li class="flex items-center space-x-3">
                <TikIcon />
                <span>100 گیگ پهنای باند ماهانه</span>
              </li>
              <li class="flex items-center space-x-3">
                <TikIcon />
                <span>
                  Team size:{" "}
                  <span class="font-semibold">15 روز نگهداری فایل</span>
                </span>
              </li>
            </ul>
            <a
              href="#"
              class="text-white bg-red-800 hover:bg-primary-700  rounded-xl  p-3 hover:bg-red-900 "
            >
              شروع کنید
            </a>
          </div>
          {/* Third Price Box */}
          <div class="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-100 bg-gray-950 rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
            <h3 class="mb-4 text-2xl font-semibold">پلن برنزی</h3>

            <div class="flex justify-center items-baseline my-8">
              <span class="mr-2 text-xl font-extrabold">100 هزار تومان</span>
              <span class="text-gray-500 dark:text-gray-400 dark:text-gray-400">
                /ماهانه
              </span>
            </div>

            <ul role="list" class="mb-8 space-y-4 text-left">
              <li class="flex items-center space-x-3">
                <TikIcon />
                <span>100 گیگ پهنای باند ماهانه</span>
              </li>
              <li class="flex items-center space-x-3">
                <TikIcon />
                <span>
                  <span className="font-semibold p-1">15 روز نگهداری فایل</span>
                </span>
              </li>
            </ul>
            <a
              href="#"
              class="text-white bg-red-800 hover:bg-primary-700   rounded-xl  p-3  hover:bg-red-900"
            >
              شروع کنید
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
