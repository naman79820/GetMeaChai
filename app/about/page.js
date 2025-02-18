import React from "react";

const About = () => {
  return (
    <div className=" flex max-[1430px]:flex-col ">
      <div className="text-white w-full h-[80vh] flex  flex-col pt-40 max-[930px]:pt-24 ">
        <p className=" font-bold text-6xl text-wrap w-[80%] ml-5 max-[930px]:text-5xl max-[520px]:text-4xl  max-[380px]:text-3xl">
          Changing the world With small contributions
        </p>
        <p className="text-xl w-[80%] ml-5 mt-5 max-[930px]:text-base max-[520px]:text-[12px ] max-[460px]:text-[11px]">
          Changing the world often begins with small contributions, each
          seemingly insignificant but collectively powerful. Every act of
          kindness, responsible choice, or community effort, no matter how
          minor, can create ripples that lead to significant impact. These small
          actions accumulate over time, fostering progress and inspiring
          transformation. By consistently making thoughtful, positive
          changes—whether through supporting local initiatives, adopting
          sustainable practices, or simply being considerate—we contribute to a
          larger movement. This collective effort can drive meaningful progress
          and create a more compassionate, resilient world. Thus, each
          individual’s small contributions play a crucial role in shaping a
          better future for everyone.
        </p>
      </div>
      <div className="">
       <img src="/banner.jpg" className="mt-32 max-[1430px]:mt-0 w-[95%] h-[70%] object-cover rounded-xl   " alt="" />
      </div>
    </div>
  );
};

export default About;
export const metadata = {
  title: "About Us - Get Me A Chai"
  
}
