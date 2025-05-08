import Button from "./Button";
import {arrowRight} from "../assets/icons/index";
import { shoe8} from "../assets/images/index";




const PopularProducts = () => {
  
  return(
    <>
    <div  className="flex flex-col  sm:flex-row sm:w-[85vw] sm:justify-between  m-auto bg-red-200 xl:mt-16 ">

      <div className="left sm:flex sm:flex-col justify-center items-start sm:w-[50vw] sm:m-auto sm:mx-3 ">
        <p className=" font-bold text-2xl  sm:text-3xl md:text-4xl lg:text-5xl xl:text-7xl">We Porvid You <span className= " text-[#ff6452] text-2xl  sm:text-3xl md:text-4xl lg:text-5xl xl:text-7xl font-bold ">Super Quality </span>Shoes</p>

        <p className="text-sm text-gray-500 w-full text-justify py-2 xl:mt-6 md:text-xl">Ensuring premuum comfort and style. our meticulousty  crafted footwear is designed to elevate your experience, providing you with unmatched  quality, innovation, and a touch of elegance. </p>
        <p className="text-sm text-gray-500 w-full text-justify mb-6 md:text-xl">Our dedicaiton to detail and excellence ensures your satisfaciton</p>
        <Button btnName="Shop Now" btnIcon={arrowRight} />
      </div>
      
      <div className=" mt-10 w-[50vw]   flex justify-center items-center m-auto ">
       
        <img src={shoe8} alt="Shoe" className="object-contain  " />
        
      </div>
    </div>



   
    </>
  );
};

export default PopularProducts;
