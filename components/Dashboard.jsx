"use client"
import React ,{useEffect,useState} from 'react'
import { useSession, signIn, signOut } from "next-auth/react";
import {useRouter} from 'next/navigation'
import { updateProfile , fetchuser } from '@/actions/useraction';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Bounce } from "react-toastify";


const Dashboard = (params) => {
  const { data: session , uodate } = useSession();
  const router = useRouter();
  const [form, setform] = useState({});
  
  useEffect(() => {
    if (status === "loading") return; // Wait for the session to load
    if (!session) {
      router.push("/login");
    } else {
      getData();
    }
  }, [session, status]);

   const getData= async()=>{
    let u = await fetchuser(session.user.name)
setform (u)
   }

   const handleSubmit =async(e)=>{
    
  let a = await updateProfile(e , session.user.name)
  
   
 {
     toast('Profile has been saved!', {
       position: "top-right",
       autoClose: 3000,
       hideProgressBar: false,
       closeOnClick: true,
       pauseOnHover: true,
       draggable: true,
       progress: undefined,
       theme: "dark",
       transition: Bounce,
       });
       
    
 
    }
   
    
  
   
   }




   const handleChange = (e)=>{
    setform({...form , [e.target.name] : e.target.value})
   }
  return (
    
    <div className='w-full '>
      <ToastContainer
position="top-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="dark"

/>
      <div className=' text-3xl text-white flex justify-center pt-24 mb-5 overflow-y-hidden'>
       <p> Welcome to your Dashboard</p>
       
      </div>
      <form action={handleSubmit}>
      <div className=' w-[40vw] mx-auto' >
        <p className='text-white'>Name</p>
        <input value={form.name?form.name:""} onChange={handleChange} type="text" name="name" id="name"  className='bg-neutral-800 w-[32vw]  mx-auto pl-2 h-10 mt-2 rounded-md text-white'/>
        <p className='text-white mt-4'>Email</p>
        <input value={form.email?form.email:""} onChange={handleChange} type="text" name="email" id="email"  className='bg-neutral-800 w-[32vw]  mx-auto pl-2 h-10 mt-2 rounded-md text-white'/>
        <p className='text-white mt-4'>Username</p>
        <input value={form.username?form.username:""} onChange={handleChange} type="text" name="username" id="username"  className='bg-neutral-800 w-[32vw]  mx-auto pl-2 h-10 mt-2 rounded-md text-white'/>
        <p className='text-white mt-4'>Profile Picture</p>
        <input value={form.profilepic?form.profilepic:""} onChange={handleChange} type="text" name="profilepic" id="profilepic"  className='bg-neutral-800 w-[32vw]  mx-auto pl-2 h-10 mt-2 rounded-md text-white'/>
        <p className='text-white mt-4'>Cover picture</p>
        <input value={form.coverpic?form.coverpic:""} onChange={handleChange} type="text" name="coverpic" id="cover"  className='bg-neutral-800 w-[32vw]  mx-auto pl-2 h-10 mt-2 rounded-md text-white'/>
        <p className='text-white mt-4'>Razorpay Id</p>

        <input value={form.razorpayid?form.razorpayid:""} onChange={handleChange}  type="password" name="razorpayid" id="razorpayid"  className='bg-neutral-800 w-[32vw]  mx-auto pl-2 h-10 mt-2 rounded-md text-white'/>
        <p className='text-white mt-4'>Razorpay Secret</p>

<input value={form.razorpaysecret?form.razorpaysecret:""} onChange={handleChange}  type="pass" name="razorpaysecret" id="razorpaysecret"  className='bg-neutral-800 w-[32vw]  mx-auto pl-2 h-10 mt-2 rounded-md text-white'/>
        <div>
        <button  className='className="text- gray-900  w-[32vw] hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none
         focus:ring-gray-300 font-medium rounded-lg text-sm px-5 mt-5 py-2.5 text-center me-6 mb-2 dark:border-gray-600 dark:text-gray-400
          dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800 "'>Save</button>
          </div>
       </div>
       </form>
    </div>

  )
}

export default Dashboard
