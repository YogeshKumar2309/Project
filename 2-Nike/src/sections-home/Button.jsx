import React from "react";
import { Link } from "react-router-dom";


const Button = ({ btnName, btnIcon }) => {
 
  return (

    <Link 
    to={"/products"}
    className={`bg-red-400 text-white text-xs md:text-[14px] xl:text-xl py-2 px-4 rounded-xl flex items-center justify-center w-fit 
     hover:bg-opacity-80 transition duration-300 ease-in-out`}>
      {btnName}
      {btnIcon ? <img src={btnIcon} alt="icon" className="ml-2" /> : null}       
    </Link>
  );
};

export default Button;
