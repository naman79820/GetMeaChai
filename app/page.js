import Image from "next/image";

export default function Home() {
  return (
    <div >
     <div className="text-white min-h-[40vh] flex flex-col items-center  justify-center">
     
      <h1 className="text-5xl flex items-center">Buy Me a Chai <span >
        <img src="/chai1.1.gif" className="object-fill"  alt="" autoplay /></span></h1>
        
      <p >
        A crowdfunding platform for creators. Get funded by your fans and
        followers. Start now!
      </p>
      <div className="mt-5 ">
      <button
        type="button"
        className="text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none
         focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-6 mb-2 dark:border-gray-600 dark:text-gray-400
          dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800 "
      >
        Start Here
      </button>
      <button
        type="button"
        className="text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none
         focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center  mb-2 dark:border-gray-600 dark:text-gray-400
          dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800"
      >
       Read More
      </button>
      </div>
      </div>
     <div className=" h-1 bg-gray-700">
      hii
     </div>
    </div>
  );
}
