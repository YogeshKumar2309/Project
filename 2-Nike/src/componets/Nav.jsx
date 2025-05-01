import { useState } from "react";
import NikeLogo from "../assets/images/header-logo.svg";
import { Link } from "react-router-dom";
import { Links } from "../constants/index";
import { useLocation } from "react-router-dom";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (

    
    <>
    <header className="relative z-10 w-full flex justify-center   ">
      <nav className=" w-full max-w-[1200px] flex justify-between items-center px-8 py-4 sm:px-16  ">
        <Link to="/">
          <img className="w-22 sm:w-26 sm:h-12" src={NikeLogo} alt="logo" />
        </Link>

        {Links.map((link) => {
          return (
            <div key={link.path} className="hidden sm:block ">
              <Link
                to={link.path}
                className={`sm:text-sm  md:text-xl font-bold hover:text-blue-800 ${
                  location.pathname === link.path ? "text-blue-600" : "text-gray-700"
                }`}>
                {link.name}
              </Link>
            </div>
          );
        })}

        <div className="sm:hidden block ">
          <button className="text-xl " onClick={() => setIsOpen(!isOpen)}>
            {!isOpen ? "☰" : "✖"}
          </button>
        </div>

        {/* Mobile Links (Dropdown) */}
      {isOpen && (
        <div className="sm:hidden flex flex-col gap-4 px-8 pb-4 absolute bg-teal-200 top-16 w-[80vw] left-0">
          {Links.map((link) => (
            <Link
            key={link.path}
            to={link.path}
            onClick={() => setIsOpen(false)}
            className={`text-sm font-bold hover:text-gray-900 ${
              location.pathname === link.path ? "text-blue-600" : "text-gray-700"
            }`}
            >
              {link.name}
            </Link>
          ))}
      
        </div>
      )}
      </nav>
    </header>
      <div className="bg-red-600 h-0.5 w-full sm:hidden"></div>
      </>
  );
};

export default Nav;
