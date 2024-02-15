import React from "react";
import { Link } from "react-router-dom";
import { navbar } from "../data/Data";

const Header = () => {
  return (
    <div>
      <ul
        className="flex bg-red-700
      "
      >
        {navbar.map((nav, index) => (
          <li className="mr-4">
            <Link to={nav.path}>{nav.nav}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Header;
