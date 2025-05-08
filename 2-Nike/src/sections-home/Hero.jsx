import { useState } from "react";
import firstShoe from "../assets/images/big-shoe1.png";
import secondShoe from "../assets/images/big-shoe2.png";
import thirdShoe from "../assets/images/big-shoe3.png";
import Shoes from "./Shoes";
import Button from "./Button";
import {arrowRight} from "../assets/icons/index";
import HeroData from "./HeroData";

const shoesData = [
  { id: 1, image: firstShoe },
  { id: 2, image: secondShoe },
  { id: 3, image: thirdShoe },
];

const LiveData = [
  { id: 1, live: "1k", title: "Brands" },
  { id: 2, live: "500", title: "Shops" },
  { id: 3, live: "250k", title: "Custermers" },
];


const Hero = () => {
  const [selectedShoe, setSelectedShoe] = useState(firstShoe);



  return (  
    <>
      <div className=" w-full   flex flex-col sm:flex-row   sm:h-[80vh] md:h-[90vh] lg:h-[100vh]">

        <div className="left sm:flex sm:flex-col text-center  sm:text-center-none sm:w-[50%]  sm:justify-start sm:items-start sm:ms-[10%] ">
          
          <p className="text-xs text-gray-500 sm:text-base md:text-xl lg:text-2xl xl:text-2xl">Our Summer collection</p>
          
         
          <span className="text-2xl inline sm:inline-block  font-bold bg-white py-0.5 sm:text-3xl sm:z-100 sm:pr-4 sm:py-2 md:text-4xl lg:text-5xl xl:text-7xl 2xl:w-[38vw] 2xl:pb-4 ">
            The New Arrival</span><span className=" text-2xl  sm:text-3xl md:text-4xl lg:text-5xl xl:text-7xl  font-bold "><span className="text-[#ff6452]  "> Nike </span >Shoes </span>              
        


          <p className="text-sm mt-1 w-[80vw] m-auto sm:m-0 text-gray-500  sm:text-base sm:text-justify sm:w-[53%] sm:pt-2 lg:text-[19px] lg:text-2xl  xl:w-[28vw] xl:mt-10 ">
            Discover the latest Nike shoes, designed for performance and style.
            Whether you're hitting the gym or the streets, our new arrivals have
            you covered.
          </p>
        <div className="mt-6  flex justify-center sm:flex-none  sm:my-6  ">
          <Button  btnIcon={arrowRight} btnName="Shop Now"  /></div>
      
          <div className=" flex justify-around sm:w-[75vw] md:w-[28vw] md:mt-0 p-0 md:text-start lg:w-[32vw]">
          {
            LiveData.map((data) => {
              return (
                <HeroData
                  live={data.live}
                  title={data.title}
                  key={data.id}
                />
              );
            })
          }
          </div>         
        </div>

        <div className="right flex  justify-between items-center  py-9 sm:bg-[#ebeefd] sm:flex-col sm:w-[50%]  right-0  sm:absolute sm:h-[80vh]  sm:top-0 sm:right-[10%] sm:pt-24 md:h-[98vh] lg:h-[100vh]">
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
          <div className="w-[25%] flex flex-col justify-center items-center sm:flex-row sm:w-[70%] sm:gap-2 sm:mt-6 sm:rounded-lg sm:p-8 x">
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
