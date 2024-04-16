import React from "react";
import { Link } from "react-router-dom";
import { navbar } from "../data/Data";
import { BiSearch, BiShoppingBag } from "react-icons/bi";

const Header = () => {
  return (
    <>
      <div className="flex flex-wrap justify-between pt-3 pb-3 w-10/12 m-auto">
        <div className="logo">
          <img src="./images/logo.png" alt="logo" />
        </div>
        <ul className="flex flex-wrap text-xl font-semibold">
          {navbar.map((nav, index) => (
            <li className="mr-5" key={index}>
              <Link className="hover:text-red-600" to={nav.path}>
                {nav.nav}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap text-2xl">
          <Link className="mr-4 hover:text-red-600">
            <BiSearch />
          </Link>
          <div className="relative">
            <Link className="hover:text-red-600">
              <BiShoppingBag />
            </Link>
            <div className="items_count">
              <span className="text-white">0</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
