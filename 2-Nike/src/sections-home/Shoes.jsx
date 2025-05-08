

const Shoes = ({ image, onclick,isActive }) => {





  return (
    <button 
    onClick={onclick}
    className={`p-2 rounded-2xl hover:bg-[#ff6452] flex justify-center items-center w-full h-full bg-[#acafbf92] mt-2 object-contain box-shadow-sm outline-none box-border
     ${isActive ?'border-2 border-red-500 bg-[#ff63520f]' : ''} 
  `}>
      <img src={image} alt="" />
    </button>
  );
};

export default Shoes;
