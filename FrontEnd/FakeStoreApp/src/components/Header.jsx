import React from "react";
import { FaStore } from "react-icons/fa";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <>
      <div className="bg-blue-500 flex justify-between p-3">
        <div className="flex items-center">
          <span>Fake Store App</span>
          <FaStore />
        </div>
        <div className="flex gap-3">
          <Link to={"/"}>Home</Link>
          <Link to={"/about"}>About</Link>
          <Link to={"/contactUs"}>ContactUs</Link>
          <Link to={"/products"}>Products</Link>
        </div>
      </div>
    </>
  );
};

export default Header;
