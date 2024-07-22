import React from 'react'

const Navbar = () => {
  return (
   <nav className='w-full'>
    <div className='  h-12 flex justify-between px-4'>
   <div className="logo flex items-center font-bold text-white">
    GetMeaChai!!!
   </div>
<ul className='flex items-center  gap-5 text-white '>
    <li>Home</li>
    <li>AboutUs</li>
    <li>Projects</li>
    <li>Signup</li>
    <li>Login</li>
</ul>
    </div>
   </nav>
  )
}

export default Navbar
