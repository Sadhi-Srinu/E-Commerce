import React from "react";

function Innerwears({sizes, setSizes}) {
  return <>
    <div className="flex gap-3">
          <div onClick={()=>setSizes(prev => prev.includes("32B") ? prev.filter(item => item !== "32B") : [...prev,"32B"])}>
            <p className={`${sizes.includes("32B") ? "bg-pink-100":"bg-slate-400"} px-3 py-1 cursor-pointer`}>32B</p>
          </div>
          <div onClick={()=>setSizes(prev => prev.includes("32C") ? prev.filter(item => item !== "32C") : [...prev,"32C"])}>
            <p className={`${sizes.includes("32C") ? "bg-pink-100":"bg-slate-400"} px-3 py-1 cursor-pointer`}>32C</p>
          </div>
          <div onClick={()=>setSizes(prev => prev.includes("32D") ? prev.filter(item => item !== "32D") : [...prev,"32D"])}>
            <p className={`${sizes.includes("32D") ? "bg-pink-100":"bg-slate-400"} px-3 py-1 cursor-pointer`}>32D</p>
          </div>
          <div onClick={()=>setSizes(prev => prev.includes("34B") ? prev.filter(item => item !== "34B") : [...prev,"34B"])}>
            <p className={`${sizes.includes("34B") ? "bg-pink-100":"bg-slate-400"} px-3 py-1 cursor-pointer`}>34B</p>
          </div>
          <div onClick={()=>setSizes(prev => prev.includes("34C") ? prev.filter(item => item !== "34C") : [...prev,"34C"])}>
            <p className={`${sizes.includes("34C") ? "bg-pink-100":"bg-slate-400"} px-3 py-1 cursor-pointer`}>34C</p>
          </div>
          <div onClick={()=>setSizes(prev => prev.includes("34D") ? prev.filter(item => item !== "34D") : [...prev,"34D"])}>
            <p className={`${sizes.includes("34D") ? "bg-pink-100":"bg-slate-400"} px-3 py-1 cursor-pointer`}>34D</p>
          </div>
          <div onClick={()=>setSizes(prev => prev.includes("36B") ? prev.filter(item => item !== "36B") : [...prev,"36B"])}>
            <p className={`${sizes.includes("36B") ? "bg-pink-100":"bg-slate-400"} px-3 py-1 cursor-pointer`}>36B</p>
          </div>
        </div> 
  </>;
}

export default Innerwears;
