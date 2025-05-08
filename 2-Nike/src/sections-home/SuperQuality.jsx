import SuperQualityProducts from "./SuperQualityProducts";
import {shoe4, shoe5, shoe6, shoe7} from "../assets/images/index.js"

let SuperQualityShoeses = [
  {
    id: 1,
    rating: 4.5,
    name: "Nike Air Jordan-01",
    price: 150,
    image: shoe4,
  },
  {
    id: 2,
    rating: 4.5,
    name: "Nike Air Jordan-02",
    price: 150,
    image: shoe5,
  },
  {
    id: 3,
    rating: 4.5,
    name: "Nike Air Jordan-03",
    price: 150,
    image: shoe6,
  },
  {
    id: 4,
    rating: 4.5,
    name: "Nike Air Jordan-04",
    price: 150,
    image: shoe7,
  }
]


const SuperQuality = () => {
  return (
    <>
      <div className="flex flex-col ">
        <p className="text-2xl font-bold">Our <span className="text-[#ff6452]">Popular </span>Products</p>
        <p className="text-gray-500 text-sm mt-2 mb-4">
          Experience top-notch quality with our exclusive range of Nike products.
        </p>
      <SuperQualityProducts shoes={SuperQualityShoeses} />
      </div>
    </>
  );
};

export default SuperQuality;
