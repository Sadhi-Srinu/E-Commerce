import React from "react";

const NewletterBox = () => {

    const onSubmitHandler = (event) => {
        event.preventDefault();
    }

  return <>
    <div className="text-center">
        <p className="text-2xl font-medium text-gray-800">Subscribe now & get 25% off</p>
        <p className="text-gray-400 mt-3">
        Lorem lpsum simply dummy text of the printing and typesetting industry. Lorem lpsum has been the.
        </p>
        <form onSubmit={onSubmitHandler} className="w-full sm:w-1/2 items-center flex gap-3 my-6 mx-auto border pl-3">
            <input type="email" placeholder="Enter your email" required className="w-full sm:flex-1 outline-none"/>
            <button type="submit" className="bg-black text-white text-xs px-10 py-4">Subscribe</button>
        </form>
    </div>
  </>;
};

export default NewletterBox;
