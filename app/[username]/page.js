import React from 'react'



const Username = (params) => {
  return (
    <div>
      {params.username}
      <div className='relative flex flex-col items-center justify-center '>
        <img src="/banner.jpg" className=' w-full h-[45vh] object-cover object-[100%,30%] mt-4' alt="" />
        <div className='flex flex-col r '>
            <img src="/logo.jpg" className='rounded-full w-40 absolute right-[54.5rem] top-[22rem]' alt="" />
            <div>
            <ul className='text-white mt-24 flex flex-col items-center'>@xNamanval
                <li className='mt-2 text-sm text-gray-400'>
                    Likes to create sites & play games
                </li>
                <li className='mt-5 text-sm text-gray-400'>
                    9,719 members . 1 post . $15,450/release
                </li>
            </ul>
            
            </div>
        </div>
        <div className='flex gap-5 mt-5 mb-5'>
        <div className=' w-[35vw] h-[40vh] bg-neutral-700 overflow-auto '>
         <p className='mt-10 ml-7 font-bold text-xl'>Supporters</p>
         <span className=' flex items-center gap-1'>
            
             <img src="/logo1.gif" className='w-14' alt="" />
             <p> Naman donated</p> <p className='font-bold'> $30</p> <p> with a message "i support you bro </p>
            
         </span>
         <span className=' flex items-center gap-1'>
            
            <img src="/logo1.gif" className='w-14' alt="" />
            <p> Naman donated</p> <p className='font-bold'> $30</p> <p> with a message "i support you bro </p>
           
        </span>
        
        
        </div>
        <div className=' w-[35vw] min-h-[40vh] bg-neutral-700 '>
         <p className=' mt-10 font-bold text-xl ml-7'>
            Make a Payment
         </p>
         <div className='w-full'>
            <input type="text" name="" id="" placeholder='Enter Name' className='bg-neutral-900 w-[32vw] ml-7 mx-auto pl-2 h-10 mt-4 rounded-md text-white'/>
            <input type="text" name="" id="" placeholder='Enter Message' className='bg-neutral-900 w-[32vw] ml-7 mx-auto pl-2 h-10 mt-3 rounded-md text-white'/>
            <input type="text" name="" id="" placeholder='Enter Amount  ' className='bg-neutral-900 w-[32vw] ml-7 mx-auto pl-2 h-10 mt-3 rounded-md text-white'/>
            <button
              type="button"
              className="text-gray-900 mt-2 bg-neutral-900 ml-7 w-[32vw] hover:bg-gray-900 focus:ring-4 focus:outline-none
         focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-6 mb-2 dark:border-gray-600 dark:text-gray-400
          dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800 "
            >
              Pay
            </button>
            <div className='flex '>
            <button
              type="button"
              className="text-gray-900 mt-2 bg-neutral-900 ml-7 w-[100px] hover:bg-gray-900 focus:ring-4 focus:outline-none
         focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-6 mb-2 dark:border-gray-600 dark:text-gray-400
          dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800 "
            >
              Pay 10$
            </button>
            <button
              type="button"
              className="text-gray-900 mt-2 bg-neutral-900  w-[100px] hover:bg-gray-900 focus:ring-4 focus:outline-none
         focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-6 mb-2 dark:border-gray-600 dark:text-gray-400
          dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800 "
            >
              Pay 25$
            </button>
            <button
              type="button"
              className="text-gray-900 mt-2 bg-neutral-900  w-[100px] hover:bg-gray-900 focus:ring-4 focus:outline-none
         focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-6 mb-2 dark:border-gray-600 dark:text-gray-400
          dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800 "
            >
              Pay 50$
            </button>
            </div>
         </div>
        </div>
        </div>
      </div>


      
    </div>
  )
}

export default Username
