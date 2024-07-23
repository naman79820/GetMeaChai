import Image from "next/image";


export default function Home() {
  return (
    <div>
      <div className="text-white min-h-[40vh] flex flex-col items-center  justify-center">
        <h1 className="text-5xl flex items-center">
          Buy Me a Chai{" "}
          <span>
            <img src="/chai1.1.gif" className="object-fill relative right-[30px]" alt="" autoplay />
          </span>
        </h1>

        <p>
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
      <div className=" h-1 bg-gray-700"></div>
      <div className="min-h-[50vh] ">
        <div className="support text-white  flex text-3xl justify-center mt-10 font-bold ">
          <p>Your Fans Can Buy You A Chai</p>
        </div>
        <div className="flex  items-center justify-evenly  mt-10 min-h-[15vw]">
          <span className="text-white    flex  flex-col items-center">
            <img src="/support1.gif" className="w-[11rem] " alt="" />
            <p className="font-bold mt-2">Fans want to help</p>
            <p className="mt-2">Your fans are available to help you.</p>
          </span>
          <span className="text-white   flex  flex-col items-center">
            <img src="/bitcoin.gif" className="w-[11rem]" alt="" />
            <p className="font-bold  ">Fans wants to contribute</p>
            <p className="mt-2">Your fans wants to contribute financially.</p>
          </span>
          <span className="text-white  flex flex-col items-center ]">
            <img src="/collaborate.gif" className="w-[11rem]" alt="" />
            <p className="font-bold ">Fans wants to collaborate</p>
            <p className="mt-2">Your fans are ready to collaborate with you.</p>
          </span>
        </div>

        <div></div>
      </div>
      <div className=" h-1 bg-gray-700"></div>
      <div className="flex  flex-col items-center min-h-[55vh]">
      <div className="text-white text-3xl font-bold justify-center flex mt-10 mb-10">
        Learn more about us
      </div>
      <div>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/t9dv050OxqY?si=o3wlc8fdB3zu17pS"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </div>
      </div>
      
    </div>
  );
}
