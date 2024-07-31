import React from "react";

const Footer = () => {
  return (
    <footer className="w-full ">
      <div className="bg-[#0a0a0a] h-11 flex items-center justify-center px-4 text-white max-[850px]:text-sm max-[650px]:text-xs max-[365px]:text-[11px] max-[330px]:text-[10px] max-[330px]:px-1" >
       <p className="max-[530px]:hidden" >
        Copyright &copy;
        </p>
        <p className="max-[450px]:hidden"> Get me a Chai - 
        </p>
        <p>
        Fund your projects with chai - Made by Naman Chhabra :) 
        </p>
      </div>
    </footer>
  );
};

export default Footer;
