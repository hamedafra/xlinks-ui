import { BiLinkAlt } from "react-icons/bi";

import MobileNav from "@/components/mobilNav/mobilNav";
import Link from "next/link";
function Header() {
  return (
    <>
      <header class="w-full text-gray-200 bg-gray-800 border-t border-gray-100 shadow-sm body-font">
        <div class="container flex flex-row flex-wrap items-center p-3 mx-auto  justify-around">
          <div className="bg-red-800 rounded-full p-2  hidden md:block   ">
            <Link href={"/"}>
              <BiLinkAlt fontSize={20} />
            </Link>
          </div>
          <div className="sm:hidden">
            <MobileNav />
          </div>
          <nav class=" flex-wrap items-center text-base  md:ml-auto hidden md:flex">
            <Link
              href={"/"}
              class="mr-5 font-medium hover:text-gray-300 text-sm"
            >
              خانه
            </Link>
            <a href="#_" class="mr-5  hover:text-gray-300  text-sm font-medium">
              پلن ها
            </a>
          </nav>

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
        </div>
      </header>
    </>
  );
}

export default Header;
