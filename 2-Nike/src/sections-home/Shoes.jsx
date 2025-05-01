

const Shoes = ({ image, onclick,isActive }) => {





  return (
    <button 
    onClick={onclick}
    className={`p-2  hover:bg-sky-100 rounded-2xl  flex justify-center items-center w-full h-full bg-[#ebeefd] mt-2 object-contain box-shadow-sm outline-none box-border
     ${isActive ?'border border-red-500' : ''} 
     sm:bg-[#626270]  `}>
      <img src={image} alt="" />
    </button>
  );
};

export default Shoes;
