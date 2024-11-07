import React from "react";

const ShowSizes = ({sizes, setSizes}) => {
  return <>
     <div className="flex gap-3">
          <div onClick={()=>setSizes(prev => prev.includes("7") ? prev.filter(item => item !== "7") : [...prev,"7"])}>
            <p className={`${sizes.includes("7") ? "bg-pink-100":"bg-slate-400"} px-3 py-1 cursor-pointer`}>7</p>
          </div>
          <div onClick={()=>setSizes(prev => prev.includes("8") ? prev.filter(item => item !== "8") : [...prev,"8"])}>
            <p className={`${sizes.includes("8") ? "bg-pink-100":"bg-slate-400"} px-3 py-1 cursor-pointer`}>8</p>
          </div>
          <div onClick={()=>setSizes(prev => prev.includes("9") ? prev.filter(item => item !== "9") : [...prev,"9"])}>
            <p className={`${sizes.includes("9") ? "bg-pink-100":"bg-slate-400"} px-3 py-1 cursor-pointer`}>9</p>
          </div>
          <div onClick={()=>setSizes(prev => prev.includes("10") ? prev.filter(item => item !== "10") : [...prev,"10"])}>
            <p className={`${sizes.includes("10") ? "bg-pink-100":"bg-slate-400"} px-3 py-1 cursor-pointer`}>10</p>
          </div>
          <div onClick={()=>setSizes(prev => prev.includes("11") ? prev.filter(item => item !== "11") : [...prev,"11"])}>
            <p className={`${sizes.includes("11") ? "bg-pink-100":"bg-slate-400"} px-3 py-1 cursor-pointer`}>11</p>
          </div>
        </div>
  </>;
};

export default ShowSizes;
