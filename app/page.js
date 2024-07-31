import Image from "next/image";
import Link from 'next/link'


export default function Home() {
  return (
    <div>
      <div className="text-white min-h-[40vh] flex flex-col items-center  justify-center">
        <h1 className="text-5xl flex items-center max-[600px]:text-4xl max-[510px]:text-3xl max-[510px]:gap-3 max-[340px]:text-2xl max-[510px]:ml-7 ">
          Buy Me a Chai{" "}
          <span>
            <img src="/chai1.1.gif" className="object-fill relative right-[30px] max-[600px]:w-32 max-[510px]:w-24 " alt="" autoplay />
          </span>
        </h1>

        <p className="max-[740px]:text-sm max-[600px]:text-xs max-[510px]:text-[10px] max-[430px]:text-[9px] max-[380px]:text-[8px] max-[340px]:text-[7.3px]">
          A crowdfunding platform for creators. Get funded by your fans and
          followers. Start now!
        </p>
        <div className="mt-5 ">
          <Link href="/login">
          <button
            type="button"
            className="text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none
         focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-6 mb-2 dark:border-gray-600 dark:text-gray-400
          dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800 "
          >
            Start Here
          </button>
          </Link>
          <Link href="/about">
          <button
            type="button"
            className="text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none
         focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center  mb-2 dark:border-gray-600 dark:text-gray-400
          dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800"
          >
            Read More
          </button>
          </Link>
        </div>
      </div>
      <div className=" h-1 bg-gray-700"></div>
      <div className="min-h-[50vh] ">
        <div className="support text-white  flex text-3xl justify-center mt-10 font-bold max-[480px]:text-2xl max-[370px]:text-xl ">
          <p>Your Fans Can Buy You A Chai</p>
        </div>
        <div className="flex  items-center justify-evenly  mt-10 min-h-[15vw] max-[850px]:flex-col max-[850px]:mb-10">
          <span className="text-white    flex  flex-col items-center">
            <img src="/support1.gif" className="" alt="" />
            <p className="font-bold mt-2">Fans want to help</p>
            <p className="mt-2 max-[960px]:text-sm">Your fans are available to help you.</p>
          </span>
          <span className="text-white   flex  flex-col items-center">
            <img src="/bitcoin.gif" className="w-[10rem]" alt="" />
            <p className="font-bold  ">Fans wants to contribute</p>
            <p className="mt-2 max-[960px]:text-sm">Your fans wants to contribute financially.</p>
          </span>
          <span className="text-white  flex flex-col items-center ]">
            <img src="/collaborate.gif" className="w-[10rem]" alt="" />
            <p className="font-bold ">Fans wants to collaborate</p>
            <p className="mt-2 max-[960px]:text-sm">Your fans are ready to collaborate with you.</p>
          </span>
        </div>

        <div></div>
      </div>
      <div className=" h-1 bg-gray-700"></div>
      <div className="flex  flex-col items-center min-h-[55vh] max-[400px]:min-h-[40vh]">
      <div className="text-white text-3xl font-bold justify-center flex mt-10 mb-10 max-[400px]:text-2xl max-[400px]:mt-8 max-[400px]:mb-5">
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
          className="max-[700px]:w-[350px] max-[700px]:h-[250px] max-[370px]:w-[300px] max-[370px]:h-[200px] max-[330px]:w-[270px] max-[330px]:h-[200px]"
        ></iframe>
      </div>
      </div>
      
    </div>
  );
}
