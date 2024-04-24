import React from "react";
import { footer } from "../data/Data";
import logo from "../logo/logo-w.png";

const Footer = () => {
  return (
    <div className="bg-gray-900">
      <div className="w-10/12 m-auto">
        <div className="flex justify-between pt-14 pb-14">
          <div className="text-gray-500 w-1/4">
            <div className="mb-5">
              <img src={logo} alt="logo" />
            </div>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              type and scrambled it to make a type specimen book. It has Lorem
              Ipsum.
            </p>
          </div>
          {footer.map((val, index) => (
            <div className="text-gray-500" key={index}>
              <h1 className="text-2xl mb-5 text-white">{val.header}</h1>
              <p>{val.content1}</p>
              <p>{val.content2}</p>
              <p>{val.content3}</p>
              <p>{val.content4}</p>
              <p>{val.content5}</p>
              <p>{val.content6}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;
