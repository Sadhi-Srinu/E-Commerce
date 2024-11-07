import React from "react";
import Title from "../components/Title";
import { assets } from "../assets/assets";
import NewletterBox from "../components/NewletterBox"

const About = () => {

  return <>
    <div className="pt-8 border-t text-2xl text-center">
      <Title text1={'About'} text2={'Us'}/>
    </div>
    <div className="my-10 flex flex-col md:flex-row gap-16">
      <img src={assets.about_img} alt="" className="w-full md:max-w-[450px]" />
      <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
        <p>E-commerce, put simply, is the practice of buying and selling goods or services using the Internet. It has gained immense popularity as a way of doing business because it's convenient and accessible at the same time.</p>
        <p>E-Commerce empower Companies to scale their Business accordingly, allowing Businesses to sell their products, services and brands anywhere in the world regardless of the country and the time zones.</p>
        <b className="text-gray-800">Our Mission</b>
        <p>With e-commerce methods and opportunities, almost any company can enter the global market. For example, one of the best ways is to become a seller on global platforms like Amazon and eBay. You can sell goods or offer services via the Internet to consumers anywhere in the world.</p>
      </div>
    </div>
    <div className="text-xl py-4 ">
      <Title text1={'Why'} text2={'Choose Us'}/>
    </div>
    <div className="flex flex-col md:flex-row text-sm mb-20">
      <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
        <b>Quality Assurance:</b>
        <p className="text-gray-600">Quality assurance in e-commerce involves assessing the quality of products and services, identifying defects or errors, and implementing measures to improve the quality of products and services. This process all aims for one goal: to meet customer expectations.</p>
      </div>
      <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
        <b>Convenience:</b>
        <p className="text-gray-600">E-commerce gives customers the freedom to shop anywhere and at any time and with any retailer. There is no constraint of closing hours/opening hours like that of the traditional brick-and-mortar stores.</p>
      </div>
      <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
        <b>Exceptional Customer Service:</b>
        <p className="text-gray-600">Exceptional service creates a sense of trust and reliability, making your customers feel more comfortable and confident in their buying decisions. Positive support experiences can turn one-time shoppers into loyal repeat buyers, driving long-term revenue growth and encouraging a stable customer base</p>
      </div>
    </div>
    <NewletterBox/>
  </>;
};

export default About;
