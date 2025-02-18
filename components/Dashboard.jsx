"use client"
import React, { useEffect, useState } from 'react';
import { useSession, signIn, signOut } from "next-auth/react";
import { useRouter } from 'next/navigation';
import { updateProfile, fetchuser } from '@/actions/useraction';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Bounce } from "react-toastify";

const Dashboard = (params) => {
  const { data: session, status } = useSession(); // Destructure status here
  const router = useRouter();
  const [form, setform] = useState({});

  useEffect(() => {
    if (status === "loading") return; // Wait for the session to load
    if (!session) {
      router.push("/login");
    } else {
      getData();
    }
  }, [session, status]); // Include status in the dependency array

  const getData = async () => {
    try {
      if (!session || !session.user || !session.user.name) {
        throw new Error('User session is not available or username is missing');
      }

      let u = await fetchuser(session.user.name);
      setform(u);
    } catch (error) {
      console.error(error);
      toast.error('Failed to fetch user data');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    try {
      if (!form.username) {
        throw new Error('Username is missing');
      }

      let result = await updateProfile(form, session.user.name);
      if (result.error) {
        throw new Error(result.error);
      }
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
    } catch (error) {
      console.error('Error saving profile:', error);
      toast.error('Failed to save profile');
    }
  };

  const handleChange = (e) => {
    setform({ ...form, [e.target.name]: e.target.value });
  };

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
      <div className=' text-3xl text-white flex justify-center pt-24 mb-5 overflow-y-hidden max-[640px]:text-2xl max-[368px]:text-xl'>
        <p> Welcome to your Dashboard</p>
      </div>
      <form onSubmit={handleSubmit}>
        <div className=' w-[40vw] mx-auto max-[580px]:ml-20 max-[900px]:ml-40 max-[430px]:ml-10'>
          <p className='text-white'>Name</p>
          <input value={form.name ? form.name : ""} onChange={handleChange} type="text" name="name" id="name" className='bg-neutral-800 w-[32vw] max-[900px]:w-[120%] max-[430px]:w-[200%] max-[900px]:mr-10 max-[580px]:w-[150%] max-[580px]:mx-0 mx-auto pl-2 h-10 mt-2 rounded-md text-white' />
          <p className='text-white mt-4'>Email</p>
          <input value={form.email ? form.email : ""} onChange={handleChange} disabled type="text" name="email" id="email" className='bg-neutral-800 w-[32vw] max-[900px]:w-[120%] max-[430px]:w-[200%] max-[580px]:w-[150%] disabled:hover:cursor-not-allowed  mx-auto pl-2 h-10 mt-2 rounded-md text-white' />
          <p className='text-white mt-4'>Username</p>
          <input value={form.username ? form.username : ""} disabled onChange={handleChange} type="text" name="username" id="username" className='bg-neutral-800 w-[32vw] max-[900px]:w-[120%] max-[430px]:w-[200%] max-[580px]:w-[150%] disabled:hover:cursor-not-allowed  mx-auto pl-2 h-10 mt-2 rounded-md text-white' />
          <p className='text-white mt-4'>Profile Picture</p>
          <input value={form.profilepic ? form.profilepic : ""} onChange={handleChange} type="text" name="profilepic" id="profilepic" className='bg-neutral-800 w-[32vw] max-[900px]:w-[120%] max-[430px]:w-[200%] max-[580px]:w-[150%]  mx-auto pl-2 h-10 mt-2 rounded-md text-white' />
          <p className='text-white mt-4'>Cover picture</p>
          <input value={form.coverpic ? form.coverpic : ""} onChange={handleChange} type="text" name="coverpic" id="cover" className='bg-neutral-800 w-[32vw] max-[900px]:w-[120%] max-[580px]:w-[150%] max-[430px]:w-[200%]  mx-auto pl-2 h-10 mt-2 rounded-md text-white' />
          <p className='text-white mt-4'>Razorpay Id</p>
          <input value={form.razorpayid ? form.razorpayid : ""} onChange={handleChange} type="password" name="razorpayid" id="razorpayid" className='bg-neutral-800 w-[32vw] max-[900px]:w-[120%] max-[430px]:w-[200%] max-[580px]:w-[150%]  mx-auto pl-2 h-10 mt-2 rounded-md text-white' />
          <p className='text-white mt-4'>Razorpay Secret</p>
          <input value={form.razorpaysecret ? form.razorpaysecret : ""} onChange={handleChange} type="password" name="razorpaysecret" id="razorpaysecret" className='bg-neutral-800 w-[32vw] max-[430px]:w-[200%]  max-[900px]:w-[120%] max-[580px]:w-[150%] mx-auto pl-2 h-10 mt-2 rounded-md text-white' />
          <div>
            <button className='text-gray-900  w-[32vw] hover:text-white border max-[900px]:w-[120%] max-[580px]:w-[150%] max-[430px]:w-[200%] border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 mt-5 py-2.5 text-center me-6 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800'>Save</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Dashboard;
