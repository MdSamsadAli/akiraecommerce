import React from "react";
import { Link } from "react-router-dom";
import Icon from "../components/Icon";

const TopBar = () => {
  return (
    <div className="bg-red-600">
      <ul className="flex place-content-between">
        <li className="bg-blue-800">
          <Link className="mr-2 text-white uppercase border-r-red-950 p-5">
            ENGLISH
          </Link>
          <Link className="mr-2 text-white uppercase border-r-red-950 p-5">
            usd
          </Link>
          <Link className="mr-2 text-white uppercase border-r-red-950 p-5">
            Free shipping for all orders of $150
          </Link>
        </li>
        <li>
          <Icon />
        </li>
      </ul>
    </div>
  );
};

export default TopBar;
