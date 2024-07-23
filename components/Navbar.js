"use client"

import React from 'react'
import { useSession, signIn, signOut } from "next-auth/react"


import Link from 'next/link'



const Navbar = () => {
 
    const { data: session } = useSession()
    if(session) {
      return <>
        Signed in as {session.user.email} <br/>
        <button onClick={() => signOut()}>Sign out</button>
      </>
    }
  return (
   <nav className='w-full'>
    <div className='  h-12 flex justify-between px-4'>
   <a href='/' className="logo flex items-center font-bold text-white mt-2 cursor-pointer" >
    <span>
      <img src="/chai1.1.gif" className='w-[8rem] relative left-[25px]' alt="" />
    </span>

    GetMeaChai!!!
   </a>
{/* <ul className='flex items-center  gap-5 text-white '>
    <li>Home</li>
    <li>AboutUs</li>
    <li>Projects</li>
    <li>Signup</li>
    <li>Login</li>
</ul> */}
<div>
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
</div>
    </div>
   </nav>
  )
}

export default Navbar
