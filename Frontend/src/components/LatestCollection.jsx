import React, { useContext, useEffect, useState } from "react";
import {ShopContext} from "../context/ShopContext";
import Title from "./Title";
import ProductItem from "./ProductItem";

const LatestCollection = () => {
  const {products} = useContext(ShopContext);
  const [latestProducts, setLatestProducts] = useState([]);

  useEffect(()=>{
    setLatestProducts(products.slice(0,10));
  },[products])
  
  return <>
    <div className="my-10">
      <div className="text-center py-8 text-3xl">
        <Title text1={'Latest'} text2={'Collections'} />
        <p className="m-auto w-3/4 text-xs sm:text-sm md:text-base text-gray-600">
        Lorem lpsum simply dummy text of the printing and typesetting industry. Lorem lpsum has been the. 
        </p>
      </div>
       {/* Rendring Products */}
       <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
          {
            latestProducts.map((item,index)=>(
              <ProductItem key={index} id={item._id} price={item.price} image={item.image} name={item.name}/>
            ))
          }
       </div>
    </div>
  </>;
};

export default LatestCollection;
