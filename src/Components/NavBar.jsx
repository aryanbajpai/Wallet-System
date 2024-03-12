import React from "react";
import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <div className="px-7 flex justify-between border-b-2 border-green-300">
      <Link to={"/"}>
        <h1 className="text-[40px] font-bold py-2">
          <i>PAISA</i>
        </h1>
      </Link>
      <Link to={"/login"}>
        <button className="text-2xl font-semibold">
          <div className="flex gap-1 py-[22px] px-4 h-full hover:bg-green-600">
            <i>LOGIN</i>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              class="w-8 h-8 m-auto"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15M12 9l-3 3m0 0 3 3m-3-3h12.75"
              />
            </svg>
          </div>
        </button>
      </Link>
    </div>
  );
};
