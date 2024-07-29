"use client";

import React, { useState } from "react";

import { useSession, signIn, signOut } from "next-auth/react";



import Link from "next/link";

const Navbar = () => {
  const { data: session } = useSession();
  const [showDropdown, setshowDropdown] = useState(false)
  // if(session) {
  //   return <>
  //     Signed in as {session.user.email} <br/>
  //     <button onClick={() => signOut()}>Sign out</button>
  //   </>
  // }
  return (
    <nav className="w-full fixed z-10">
      <div className="  h-12 flex justify-between px-4">
        <Link
          href="/"
          className="logo flex items-center font-bold text-white mt-2 cursor-pointer"
        >
          <span>
            <img
              src="/chai1.1.gif"
              className="w-[8rem] relative left-[25px]"
              alt=""
            />
          </span>
          GetMeaChai!!!
        </Link>
        {/* <ul className='flex items-center  gap-5 text-white '>
    <li>Home</li>
    <li>AboutUs</li>
    <li>Projects</li>
    <li>Signup</li>
    <li>Login</li>
</ul> */}
        <div className="relative">
          {session && <>
          
<button onClick={()=>{setshowDropdown(!showDropdown)}} onBlur={()=>{setTimeout(() => {
  setshowDropdown(false)
}, 100);}} id="dropdownDefaultButton" data-dropdown-toggle="dropdown" className="text-gray-900 mt-2 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none
         focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-6 mb-2 dark:border-gray-600 dark:text-gray-400
          dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800   inline-flex items-center  " type="button">Welcome {session.user.email} <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
<path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
</svg>
</button>


<div id="dropdown" className={`z-10 ${showDropdown?"":"hidden"} absolute left-[7.7rem]  bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700`}>
    <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
      <li>
        <Link href="/dashboard" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</Link>
      </li>
      <li>
        <Link  href={`${session.user.name}`} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Your Page</Link>
      </li>
    
      <li>
        <Link href="#" onClick={()=>{signOut()}} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Sign out</Link>
      </li>
    </ul>
</div>
</>
}
        
          {session && (
            <button
              type="button"
              className="text- gray-900 mt-2 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none
         focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-6 mb-2 dark:border-gray-600 dark:text-gray-400
          dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800 "onClick={()=>{signOut()}}
            >
              Logout
            </button>
          )}
          {!session && 
          <Link href={"/login"}>
            <button
              type="button"
              className="text-gray-900 mt-2 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none
         focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-6 mb-2 dark:border-gray-600 dark:text-gray-400
          dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800 "
            >
              Login
            </button>
          </Link>
          }
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
