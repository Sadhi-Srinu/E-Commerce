import React from "react";
import Title from "../components/Title";
import { assets } from "../assets/assets";
import NewletterBox from "../components/NewletterBox";

const Contact = () => {

  return <>
    <div className="text-center pt-10 border-t text-2xl">
      <Title text1={'Contact'} text2={'Us'}/>
    </div>
    <div className="my-10 flex flex-col justify-center md:flex-row gap-10 mb-20">
      <img src={assets.contact_img} className="w-full md:max-w-[480px]" alt="" />
      <div className="flex flex-col items-start justify-center gap-6">
        <p className="font-semibold text-xl text-gray-600">Our Store</p>
        <p className="text-gray-500">760006 Bhubneswar</p>
        <p className="text-gray-500">Tel: +91 9337642807 <br/> Email: reddysrinu138@gmail.com</p>
        <p className="font-semibold text-gray-600 text-xl">Careers at Forever</p>
        <p className="text-gray-500">Learn more about our teams and job openings.</p>
        <button className="border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500">Explore Jobs</button>
      </div>
    </div>
    <NewletterBox/>
  </>;
};

export default Contact;