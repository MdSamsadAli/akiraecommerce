import React from "react";
import { FaTimes } from "react-icons/fa";

const Sidebar = ({ isSidebarOpen, closeSidebar }) => {
  return (
    <div>
      {isSidebarOpen && (
        <div className="w-1/3 fixed top-0 right-0 bg-white shadow-lg h-screen p-4 z-50 transition-all duration-300">
          <div>
            <h1>Your Cart</h1>
          </div>

          <span className="absolute right-0 top-0 p-4" onClick={closeSidebar}>
            <FaTimes />
          </span>
          <div className="flex justify-between">
            <div className="flex">
              <div>
                <img src="" alt="product" />
              </div>
              <div>
                <p>title</p>
              </div>
            </div>
            <div>
              <div>
                <p>$5045</p>
              </div>
              <div>
                <p>Qty: </p>
              </div>
            </div>
          </div>
          <div>
            <h2>
              SUb Total: $<span>6757</span>
            </h2>
          </div>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
