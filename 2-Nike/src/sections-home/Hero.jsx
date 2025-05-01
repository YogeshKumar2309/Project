import { useState } from "react";
import firstShoe from "../assets/images/big-shoe1.png";
import secondShoe from "../assets/images/big-shoe2.png";
import thirdShoe from "../assets/images/big-shoe3.png";
import Shoes from "./Shoes";

const shoesData = [
  { id: 1, image: firstShoe },
  { id: 2, image: secondShoe },
  { id: 3, image: thirdShoe },
];

const Hero = () => {
  const [selectedShoe, setSelectedShoe] = useState(firstShoe);



  return (
    <>
      <div className=" w-full max-w-[1200px] flex flex-col sm:flex-row ">
        <div className="flex flex-col justify-center items-center w-full sm:w-[50%] sm:h-[84vh] sm:justify-start sm:items-start sm:ms-[10%]">
          <p className="text-[8px] text-gray-500 sm:text-[16px] ">Our Summer collection</p>
          
          <span className="inline-block mt-1 font-bold bg-white py-0.5 sm:text-3xl sm:z-100 sm:pr-2 sm:py-2 md:text-4xl lg:text-5xl xl:text-7xl ">
            The New Arrival </span><span className="sm:text-3xl md:text-4xl lg:text-5xl xl:text-7xl font-bold"><span className="text-[#ff6452]  ">Nike </span >Shoes </span>        
          <p className="text-[7px] mt-1 text-gray-500 w-[80%] text-center sm:text-[15px] sm:w-[50%] sm:text-start sm:pt-2">
            Discover the latest Nike shoes, designed for performance and style.
            Whether you're hitting the gym or the streets, our new arrivals have
            you covered.
          </p>
        </div>

        <div className="flex  justify-between items-center  py-9 sm:bg-[#ebeefd] sm:flex-col sm:w-[50%]  right-0  sm:absolute   sm:top-0 sm:right-[10%] sm:pt-24">
          <div className="w-[60%]">
            {shoesData.map((shoe) => {
              if (shoe.image === selectedShoe) {
                return (
                  <img
                    src={shoe.image}
                    alt="shoe"
                    key={shoe.id}
                    className="w-[100%] h-[100%] object-contain "
                  />
                );
              }
            })}
          </div>
          <div className="w-[25%] flex flex-col justify-center items-center sm:flex-row sm:w-[70%] sm:gap-2 sm:mt-6 sm:rounded-lg sm:p-8 ">
            {shoesData.map((shoe) => (
              <Shoes
                image={shoe.image}
                onclick={() => setSelectedShoe(shoe.image)}
                key={shoe.id}
                isActive={shoe.image === selectedShoe}
                  />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
