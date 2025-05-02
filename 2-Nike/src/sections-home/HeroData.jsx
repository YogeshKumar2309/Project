import React from "react";

const HeroData = ({live , title}) => {
  return (
    <>
      <div className=" mt-3 flex flex-col   w-full sm:w-[50%] ">
       
        <p className="font-bold text-xl  xl:text-2xl 2xl:text-3xl "> {live}+</p>
        <p className="text-sm text-gray-400  xl:text-xl 2xl:text-2xl ">{title}</p>       
    
      </div>
      
      
    </>
  );
};

export default HeroData;
