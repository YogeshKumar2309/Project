import Button from "./Button";
import {arrowRight} from "../assets/icons/index";
import { shoe8} from "../assets/images/index";




const PopularProducts = () => {
  
  return(
    <>
    <div  className="flex flex-col ">

      <div className="left">
        <p className="text-xl  font-bold">We Porvid You <span className= " text-[#ff6452] text-xl font-bold ">Super Quality </span>Shoes</p>
        <p className="text-sm text-gray-500 w-full text-justify py-2 ">Ensuring premuum comfort and style. our meticulousty  crafted footwear is designed to elevate your experience, providing you with unmatched  quality, innovation, and a touch of elegance. </p>
        <p className="text-sm text-gray-500 w-full text-justify mb-6">Our dedicaiton to detail and excellence ensures your satisfaciton</p>
        <Button btnName="Shop Now" btnColor={"[#ff6452]" }btnIcon={arrowRight} />
      </div>
      
      <div className="right mt-10 ">
        <img src={shoe8} alt="Shoe" className="object-contain" />
      </div>
    </div>
    </>
  );
};

export default PopularProducts;
