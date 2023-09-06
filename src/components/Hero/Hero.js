import { FaDownload, FaSpotify, FaYoutube } from "react-icons/fa";
import Image from "next/image";
import torrent from "../../../public/torrent.png";
export default function Hero() {
  return (
    <section class="bg-gray-900">
      <div class="py-8 px-4 flex   mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12 ">
        <div class="flex mb-8 gap-3 justify-center  mt-5 flex-col flex-1">
          <h1 class="mb-4 text-2xl font-bold  tracking-tight leading-none text-gray-100  ">
            مای لینکز
          </h1>
          <div className="flex items-center justify-center ">
            <a
              href="#"
              class="inline-flex justify-center items-center py-3 px-3 gap-1 text-center text-white rounded-lg font-extrabold  bg-red-600 "
            >
              <svg
                class="ml-2 -mr-1 w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </a>
            <a
              href="#"
              class="inline-flex justify-center items-center py-3 px-5 text-white border-gray-100 font-black hover:text-gray-300 "
            >
              مشاهد پلن ها
            </a>
          </div>
        </div>
        <div class="px-4 flex-col mx-auto text-center  items-center  flex-1">
          <div class="flex flex-col justify-center items-center mt-8 text-gray-500 sm:justify-between">
            <div className="mb-4">
              <span class="font-semibold text-gray-400 uppercase">
                سایت های پشتیبانی شده
              </span>
            </div>
            <div className="flex gap-5 flex-wrap justify-center items-center">
              <div className="flex  mr-5 mb-5 p-3 gap-1 rounded-full bg-green-600 ">
                <FaSpotify className="text-white text-xl " />
                <span className="text-white">Spotify</span>
              </div>
              <div className="flex  mr-5 mb-5 p-3 gap-1 rounded-full bg-red-800 ">
                <FaYoutube className="text-white text-xl " />
                <span className="text-white">Youtube</span>
              </div>
              <div className="flex  mr-5 mb-5 p-3 gap-1 rounded-full bg-green-600 ">
                <Image src={torrent} alt="torrent" width={20} />
                <span className="text-white">torrent</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
