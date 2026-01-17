// This design was made by user Itskrish01 from UIVerse. https://uiverse.io/Itskrish01/shaggy-eel-44.
import React from "react";
import LinkedInLogo from "../icons/LinkedInIcon";
import AtIcon from "../icons/AtIcon";
import GithubLogo from "../icons/GithubIcon";

const AnimatedContactButtons: React.FC = () => {
  return (
    <div className="flex flex-col gap-14 justify-center items-center">
      <a
        href={"https://linkedin.com/in/romeupeniche"}
        target="_blank"
        rel="noopener noreferrer"
        className="flex group items-center gap-4 px-8 py-4 rounded-full backdrop-blur-lg border border-blue-500/30 bg-linear-to-tr from-black/60 to-black/40 shadow-lg hover:shadow-2xl hover:shadow-blue-500/20 hover:scale-105 hover:-translate-y-1 active:scale-95 transition-all duration-300 ease-out cursor-pointer hover:border-blue-500/60 hover:bg-linear-to-tr hover:from-blue-500/10 hover:to-black/40 group relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-linear-to-r from-transparent via-blue-400/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out"></div>

        <div className="relative z-10">
          <LinkedInLogo className="w-8 h-8 group-hover:rotate-5 text-blue-500 fill-current group-hover:text-blue-400 transition-all duration-300" />
        </div>

        <span className="relative z-10 text-xl font-medium text-gray-200 group-hover:text-white transition-colors duration-300">
          linkedin.com/in/romeupeniche
        </span>
      </a>

      <a
        href={"https://linkedin.com/in/romeupeniche"}
        target="_blank"
        rel="noopener noreferrer"
        className="flex group items-center gap-4 px-8 py-4 rounded-full backdrop-blur-lg border border-green-500/30 bg-linear-to-tr from-black/60 to-black/40 shadow-lg hover:shadow-2xl hover:shadow-green-500/20 hover:scale-105 hover:-translate-y-1 active:scale-95 transition-all duration-300 ease-out cursor-pointer hover:border-green-500/60 hover:bg-linear-to-tr hover:from-green-500/10 hover:to-black/40 group relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-linear-to-r from-transparent via-green-400/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out"></div>

        <div className="relative z-10">
          <AtIcon className="w-8 h-8 group-hover:rotate-5 text-green-500 fill-current group-hover:text-green-400 transition-all duration-300" />
        </div>

        <span className="relative z-10 text-xl font-medium text-gray-200 group-hover:text-white transition-colors duration-300">
          romeupeniche12@gmail.com
        </span>
      </a>

      {/* <button className="p-10 rounded-full backdrop-blur-lg border border-blue-500/30 bg-linear-to-tr from-black/60 to-black/40 shadow-lg hover:shadow-2xl hover:shadow-blue-500/20 hover:scale-110 hover:rotate-3 active:scale-95 active:rotate-0 transition-all duration-300 ease-out cursor-pointer hover:border-blue-500/60 hover:bg-linear-to-tr hover:from-blue-500/10 hover:to-black/40 group relative overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-r from-transparent via-blue-400/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out"></div>
        <div className="relative z-10">
          <LinkedInLogo className="w-40 h-40 text-blue-500 fill-current group-hover:text-blue-400 transition-colors duration-300" />
        </div>
      </button> */}

      {/* <button className="p-10 rounded-full backdrop-blur-lg border border-green-500/20 bg-linear-to-tr from-black/60 to-black/40 shadow-lg hover:shadow-2xl hover:shadow-green-500/30 hover:scale-110 hover:rotate-2 active:scale-95 active:rotate-0 transition-all duration-300 ease-out cursor-pointer hover:border-green-500/50 hover:bg-linear-to-tr hover:from-green-500/10 hover:to-black/40 group relative overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-r from-transparent via-green-400/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out"></div>
        <div className="relative z-10">
          <AtIcon className="w-40 h-40 text-green-500 fill-current group-hover:text-green-400 transition-colors duration-300" />
        </div>
      </button> */}

      <button className="p-10 rounded-full backdrop-blur-lg border border-indigo-500/20 bg-linear-to-tr from-black/60 to-black/40 shadow-lg hover:shadow-2xl hover:shadow-indigo-500/30 hover:scale-110 hover:-rotate-2 active:scale-95 active:rotate-0 transition-all duration-300 ease-out cursor-pointer hover:border-indigo-500/50 hover:bg-linear-to-tr hover:from-indigo-500/10 hover:to-black/40 group relative overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-r from-transparent via-indigo-400/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out"></div>
        <div className="relative z-10">
          <GithubLogo className="w-40 h-40 fill-current text-indigo-500 group-hover:text-indigo-400 transition-colors duration-300" />
        </div>
      </button>

      {/* <button className="p-5 rounded-full backdrop-blur-lg border border-red-500/20 bg-linear-to-tr from-black/60 to-black/40 shadow-lg hover:shadow-2xl hover:shadow-red-500/30 hover:scale-110 hover:rotate-2 active:scale-95 active:rotate-0 transition-all duration-300 ease-out cursor-pointer hover:border-red-500/50 hover:bg-linear-to-tr hover:from-red-500/10 hover:to-black/40 group relative overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-r from-transparent via-red-400/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out"></div>
        <div className="relative z-10">
          <svg
            className="w-50 h-50 fill-current text-red-500 group-hover:text-red-400 transition-colors duration-300"
            viewBox="0 0 576 512"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"></path>
          </svg>
        </div>
      </button> */}
    </div>
  );
};

export default AnimatedContactButtons;
