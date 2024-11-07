import React from "react";
import {assets} from "../assets/assets"

const Footer = () => {
    
  return <>
    <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
      <div>
        <img src={assets.logo} alt="" className="mb-5 w-32" />
        <p className="w-full md:w-2/3 text-gray-600">
        Lorem lpsum simply dummy text of the printing and typesetting industry. Lorem lpsum has been the.Lorem lpsum simply dummy text of the printing and typesetting industry. Lorem lpsum has been the.
        </p>
      </div>
      <div>
        <p className="text-xl mb-5 font-medium">Company</p>
        <ul className="flex flex-col gap-1 text-gray-600">
          <li>Home</li>
          <li>About us</li>
          <li>Delivery</li>
          <li>Privacy policy</li>
        </ul>
      </div>
      <div>
        <p className="font-medium text-xl mb-5">Get in Touch</p>
        <ul className="flex flex-col gap-1 text-gray-600">
          <li>+91 9337642807</li>
          <li>reddysrinu138@gmail.com</li>
        </ul>
      </div>
    </div>
    <div>
        <hr/>
        <p className="py-5 text-sm text-center">Copyright 2024@ forver.com - All Right Reserved.</p>
      </div>
  </>;
};

export default Footer;
