import React from "react";
import { star } from "../assets/icons/index";

const SuperQualityProducts = ({ shoes }) => {
  return (
    <>
      <div className="flex flex-col gap-10 mt-8 m-auto w-[65%] ">
        {shoes.map((shoe) => (
          <div key={shoe.id} >
            <img
              src={shoe.image}
              alt="shoe_imgage"
              className="object-contain w-full"
            />
            <div className="ms-1 mt-4">
            <div className="flex items-center my-2 space-x-2">
              <img src={star} alt="arrow" className="w-5 h-5" />
              <p className="text-gray-500">({shoe.rating})</p>
            </div>
            <p className="font-bold my-2 ">{shoe.name}</p>
            <p className="text-[#ff6452] text-sm">${shoe.price}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default SuperQualityProducts;
