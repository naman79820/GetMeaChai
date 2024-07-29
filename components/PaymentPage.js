"use client";
import React , {useState , useEffect} from "react";
import Script from "next/script";

import Razorpay from "razorpay";
import { useSession } from "next-auth/react";
import { fetchuser } from "@/actions/useraction";
import { fetchpayments } from "@/actions/useraction";
import { initiate } from "@/actions/useraction";
const PaymentPage = ({ username }) => {
  const [paymentform, setpaymentform] = useState({});
  const [currentUser, setcurrentUser] = useState({})
  const [payments, setpayments] = useState([])
  const { data: session } = useSession();
  useEffect(() => {
    
  getData()
   
  }, [])
  
  const handleChange = (e) => {

    setpaymentform({ ...paymentform, [e.target.name]: e.target.value });
  };

  const getData = async () => {
    let u =  await fetchuser(username)
    setcurrentUser(u)
    let dbpayments = await fetchpayments(username)
    setpayments(dbpayments)
  }
  
  const pay = async (amount) => {

    let a = await initiate(amount, username, paymentform );
   
    let orderId = a.id
   
    var options = {
      
      key: process.env.NEXT_PUBLIC_KEY_ID, // Enter the Key ID generated from the Dashboard
      amount: amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
      currency: "INR",
      name: "Get Me A Chai", //your business name
      description: "Test Transaction",
      image: "https://example.com/your_logo", 
      order_id: orderId, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
      callback_url: `${process.env.NEXT_PUBLIC_URL}/api/razorpay`,
      prefill: {
        //We recommend using the prefill parameter to auto-fill customer's contact information especially their phone number
        name: "Gaurav Kumar", //your customer's name
        email: "gaurav.kumar@example.com",
        contact: "9000090000", //Provide the customer's phone number for better conversion rates
      },
      notes: {
        address: "Razorpay Corporate Office",
      },
      theme: {
        color: "#3399cc",
      }
      
    };
 
    if (typeof window !== "undefined" && window.Razorpay) {
      var rzp1 = new window.Razorpay(options);
      rzp1.open();
    } else {
      console.error("Razorpay SDK not loaded");
    }
 ;
   
  };
  return (
    <>
   <Script src="https://checkout.razorpay.com/v1/checkout.js"></Script>
      <div>
        
        <div className="relative flex flex-col items-center justify-center ">
          <img
            src="/banner.jpg"
            className=" w-full h-[45vh] object-cover object-[100%,30%] mt-4"
            alt=""
          />
          <div className="flex flex-col r ">
            <img
              src="/logo.jpg"
              className="rounded-full w-40 absolute right-[54.5rem] top-[22rem]"
              alt=""
            />
            <div>
              <ul className="text-white mt-24 flex flex-col items-center">
                {username}
                <li className="mt-2 text-sm text-gray-400">
                  Likes to create sites & play games
                </li>
                <li className="mt-5 text-sm text-gray-400">
                  9,719 members . 1 post . $15,450/release
                </li>
              </ul>
            </div>
          </div>
          <div className="flex gap-5 mt-5 mb-5">
            <div className=" w-[35vw] h-[40vh] bg-neutral-700 overflow-auto ">
              <p className="mt-10 ml-7 font-bold text-xl">Supporters</p>
              {payments.length > 0 ? (
    payments.map((p, i) => (
      <span key={i} className="flex items-center gap-1">
        <img src="/logo1.gif" className="w-14" alt="" />
        <p>{p.name} donated</p>
        <p className="font-bold">₹{p.amount}</p>{" "}
        <p>with a message "{p.message}"</p>
      </span>
    ))
  ) : (
    <div className="flex mt-5  h-full ">
      <p className="text-gray-400 font-bold ml-7">No supporters yet!</p>
    </div>
  )}
            </div>
            <div className=" w-[35vw] min-h-[40vh] bg-neutral-700 ">
              <p className=" mt-10 font-bold text-xl ml-7">Make a Payment</p>
              <div className="w-full">
                <input
                  onChange={handleChange}
                  value={paymentform.name}
                  type="text"
                  name="name"
                  id=""
                  placeholder="Enter Name"
                  className="bg-neutral-900 w-[32vw] ml-7 mx-auto pl-2 h-10 mt-4 rounded-md text-white"
                />
                <input
                  onChange={handleChange}
                  value={paymentform.message}
                  type="text"
                  name="message"
                  id=""
                  placeholder="Enter Message"
                  className="bg-neutral-900 w-[32vw] ml-7 mx-auto pl-2 h-10 mt-3 rounded-md text-white"
                />
                <input
                 
                  onChange={handleChange}
                  value={paymentform.amount}
                  type="text"
                  name="amount"
                  id=""
                  placeholder="Enter Amount  "
                  className="bg-neutral-900 w-[32vw] ml-7 mx-auto pl-2 h-10 mt-3 rounded-md text-white"
                />
                <button  onClick={() => pay(Number.parseInt(paymentform.amount)*100)}
                  type="button"
                  className="text-gray-900 mt-2 bg-neutral-900 ml-7 w-[32vw] hover:bg-gray-900 focus:ring-4 focus:outline-none
         focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-6 mb-2 dark:border-gray-600 dark:text-gray-400
          dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800 "
                >
                  Pay
                </button>
                <div className="flex ">
                  <button 
                    onClick={() => pay(1000)}
                    type="button"
                    className="text-gray-900 mt-2 bg-neutral-900 ml-7 w-[100px] hover:bg-gray-900 focus:ring-4 focus:outline-none
         focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-6 mb-2 dark:border-gray-600 dark:text-gray-400
          dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800 "
                  >
                    Pay 10₹
                  </button>
                  <button
                    onClick={() => pay(2500)}
                    type="button"
                    className="text-gray-900 mt-2 bg-neutral-900  w-[100px] hover:bg-gray-900 focus:ring-4 focus:outline-none
         focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-6 mb-2 dark:border-gray-600 dark:text-gray-400
          dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800 "
                  >
                    Pay 25₹
                  </button>
                  <button
                    onClick={() => pay(5000)}
                    type="button"
                    className="text-gray-900 mt-2 bg-neutral-900  w-[100px] hover:bg-gray-900 focus:ring-4 focus:outline-none
         focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-6 mb-2 dark:border-gray-600 dark:text-gray-400
          dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800 "
                  >
                    Pay 50₹
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PaymentPage;
