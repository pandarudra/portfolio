import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between flex-wrap bg-sky-950 shadow-lg shadow-white p-6">
      <div className="flex items-center flex-shrink-0 text-white mr-6 ">
        <span className="text-white text-2xl font-bold">rudra_826</span>
      </div>
      <div className="block lg:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center px-3 py-2  text-white  hover:text-white "
        >
          <span>&#9776;</span>
        </button>
      </div>
      <div
        className={`${
          isOpen ? "block" : "hidden"
        } w-full block flex-grow lg:flex lg:items-center lg:w-auto`}
      >
        <div className="text-xl lg:flex-grow">
          <Link
            to="/"
            className="block px-2 rounded-md z-10  border-white hover:border-2 mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-4"
          >
            Home
          </Link>
          <Link
            to="/projects"
            className="block px-2 rounded-md z-10  hover:border-2 border-white mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-4"
          >
            Projects
          </Link>
          <Link
            to="/about"
            className="block px-2 rounded-md z-10  hover:border-2 border-white mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-4"
          >
            About
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
