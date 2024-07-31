"use client";

import React, { useState } from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import Link from "next/link";

const Navbar = () => {
  const { data: session } = useSession();
  const [showDropdown, setshowDropdown] = useState(false);

  return (
    <nav className="w-full fixed z-10">
      <div className={`h-12 flex justify-between max-[740px]:justify-items-start   px-4 max-[740px]:px-0 max-[740px]:mr-5 max-[600px]:text-sm max-[600px]:pb-2 ${session ? "max-[640px]:flex-col max-[640px]:items-center" : ""}`}>
        <Link href="/" className="logo flex items-center font-bold text-white mt-2 cursor-pointer">
          <span>
            <img
              src="/chai1.1.gif"
              className={`w-[8rem] relative left-[25px] max-[740px]:w-[5rem] max-[740px]:h-[80px] me-2 ${session ? "max-[640px]:hidden" : ""}`}
              alt="GetMeaChai!!!"
            />
          </span>
          GetMeaChai!!!
        </Link>

        <div className="relative ">
          {session ? (
            <>
              <button
                onClick={() => setshowDropdown(!showDropdown)}
                onBlur={() => {
                  setTimeout(() => {
                    setshowDropdown(false);
                  }, 100);
                }}
                id="dropdownDefaultButton"
                className="text-gray-900 max-[500px]:text-[9px] max-[386px]:me-1 max-[386px]:px-1 max-[360px]:ml-2 max-[740px]:py-2 mt-2 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-6 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800 inline-flex items-center"
                type="button"
              >
                Welcome {session.user.email}
                <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                </svg>
              </button>

              <div id="dropdown" className={`z-10 ${showDropdown ? "" : "hidden"} absolute left-[7.7rem] bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700`}>
                <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
                  <li>
                    <Link href="/dashboard" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                      Dashboard
                    </Link>
                  </li>
                  <li>
                    <Link href={`${session.user.name}`} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                      Your Page
                    </Link>
                  </li>
                  <li>
                    <Link href="#" onClick={() => signOut()} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                      Sign out
                    </Link>
                  </li>
                </ul>
              </div>

              <button
                type="button"
                className="text-gray-900 mt-2 hover:text-white border max-[740px]:me-2 max-[740px]:px-3 max-[740px]:py-2.5 max-[600px]:text-xs max-[505px]:me-0 max-[386px]:px-2 border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-6 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800"
                onClick={() => signOut()}
              >
                Logout
              </button>
            </>
          ) : (
            <Link href="/login">
              <button
                type="button"
                className="text-gray-900 mt-2 hover:text-white border  border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-6 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800"
              >
                Login
              </button>
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
