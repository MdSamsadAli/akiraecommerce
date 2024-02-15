import React from "react";
import { Link } from "react-router-dom";

const TopBar = () => {
  return (
    <div className="bg-red-600">
      <ul>
        <li>
          <Link>ENGLISH</Link>
          <Link>usd</Link>
          <Link>Free shipping for all orders of $150</Link>
        </li>
      </ul>
    </div>
  );
};

export default TopBar;
