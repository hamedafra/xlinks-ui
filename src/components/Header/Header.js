import { BiLinkAlt } from "react-icons/bi";

import MobileNav from "@/components/mobilNav/mobilNav";
import Link from "next/link";
import HeaderAuth from "../HeaderAuth/HeaderAuth";
import { useContext } from "react";
import { UserContext } from "@/contaxt/userContaxt";
import HeaderProfile from "../HeaderProfile/HeaderProfile";

function Header() {
  const user = useContext(UserContext).user;
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
          {user ? <HeaderProfile /> : <HeaderAuth />}
        </div>
      </header>
    </>
  );
}

export default Header;
