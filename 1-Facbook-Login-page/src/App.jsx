import React from "react";
import facebookImg from "./assets/facbookImg.svg";

const App = () => {
  return (
    <>
      <div className="container bg-[#f2f4f7] flex justify-center items-center h-screen">
        <div className="left flex flex-col  w-[45%]">
          <img className="w-80 " src={facebookImg} alt="FacbookImg" />
          <div className="text-3xl ms-8 w-xl">
            Facebook helps you connect and share with the people in your life.
          </div>
        </div>

        <div className="right flex flex-col bg-white p-6 rounded-lg shadow-lg w-[30%] ">
          <input
            className="rounded-xl w-full  p-3 text-xl my-2 border-1 border-gray-300  outline-blue-600"
            type="text"
            placeholder="Email address or phone number"
          />
          <input
            className="rounded-xl w-full  p-3 text-xl my-2 border-1 border-gray-300  outline-blue-600"
            type="password"
            placeholder="Password"
          />
          <button className="rounded-xl bg-blue-600 my-2 text-xl font-bold text-white py-3 cursor-pointer hover:bg-blue-700">
            Log in
          </button>
          <div className="text-center text-md text-blue-600 cursor-pointer hover:underline m-2">
            Forgotten password?
          </div>
          <div className="my-3  bg-gray-300 h-[1px] " />
          <button className="rounded-xl bg-green-600 my-2 text-xl font-bold text-white py-3 cursor-pointer  inline-block mx-25 hover:bg-green-700">
            Create new Account
          </button>
        </div>
      </div>
    </>
  );
};

export default App;
