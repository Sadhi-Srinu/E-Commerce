import React, { useState } from "react";

const BeautyAndMakeup = ({sizes,setSizes}) => {
   
  return <>
    <div className="flex gap-3">
          <div onClick={()=>setSizes(prev => prev.includes("8-10ML") ? prev.filter(item => item !== "8-10ML") : [...prev,"8-10ML"])}>
            <p className={`${sizes.includes("8-10ML") ? "bg-pink-100":"bg-slate-400"} px-3 py-1 cursor-pointer`}>8-10ML</p>
          </div>
          <div onClick={()=>setSizes(prev => prev.includes("100-150ML") ? prev.filter(item => item !== "100-150ML") : [...prev,"100-150ML"])}>
            <p className={`${sizes.includes("100-150ML") ? "bg-pink-100":"bg-slate-400"} px-3 py-1 cursor-pointer`}>100-150ML</p>
          </div>
          <div onClick={()=>setSizes(prev => prev.includes("200-250ML") ? prev.filter(item => item !== "200-250ML") : [...prev,"200-250ML"])}>
            <p className={`${sizes.includes("200-250ML") ? "bg-pink-100":"bg-slate-400"} px-3 py-1 cursor-pointer`}>200-250ML</p>
          </div>
          <div onClick={()=>setSizes(prev => prev.includes("300-500ML") ? prev.filter(item => item !== "300-500ML") : [...prev,"300-500ML"])}>
            <p className={`${sizes.includes("300-500ML") ? "bg-pink-100":"bg-slate-400"} px-3 py-1 cursor-pointer`}>300-500ML</p>
          </div>
          <div onClick={()=>setSizes(prev => prev.includes("600-750ML") ? prev.filter(item => item !== "600-750ML") : [...prev,"600-750ML"])}>
            <p className={`${sizes.includes("600-750ML") ? "bg-pink-100":"bg-slate-400"} px-3 py-1 cursor-pointer`}>600-750ML</p>
          </div>
          <div onClick={()=>setSizes(prev => prev.includes("750-1000ML") ? prev.filter(item => item !== "750-1000ML") : [...prev,"750-1000ML"])}>
            <p className={`${sizes.includes("750-1000ML") ? "bg-pink-100":"bg-slate-400"} px-3 py-1 cursor-pointer`}>750-1000ML</p>
          </div>
        </div>
  </>;
};

export default BeautyAndMakeup;
