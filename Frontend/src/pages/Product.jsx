import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/assets";
import RelatedProducts from "../components/RelatedProducts";

const Product = () => {

  const {productId} = useParams();
  const {products, currency, addToCart, addToWishlist} = useContext(ShopContext);
  const [productData, setProductData] = useState(false);
  const [image, setImage] = useState('');
  const [size, setSize] = useState('');

  const fetchProductData = async () => {
    products.map((item)=>{
      if(item._id === productId) {
        setProductData(item)
        setImage(item.image[0])
        return null;
      }
    })
  }

  useEffect(()=>{
    fetchProductData();
  },[productId, products])

  return productData ? (
    <div className="pt-10 border-t-2 transition-opacity ease-in duration-500 opacity-100">
      {/* Product Data */}
      <div className="flex gap-12 sm:gap-12 flex-col sm:flex-row">
        {/* Product Images */}
        <div className="flex flex-1 flex-col-reverse gap-3 sm:flex-row sm:gap-8">
          <div className="flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full">
             {
              productData.image.map((item,index)=>(
                <img onClick={()=>setImage(item)} src={item} key={index} alt="" className="w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer" />
              ))
             }
          </div>
          <div className="w-full sm:w-[80%]">
            <img src={image} alt="" className="w-full h-auto"/>
          </div>
        </div>
        {/* Product informaction */}
        <div className="flex-1">
             <h1 className="font-medium text-2xl mt-2">{productData.name}</h1>
             <div className="flex items-center mt-2 gap-1">
              <img src={assets.star_icon} alt="" className="w-3 5" />
              <img src={assets.star_icon} alt="" className="w-3 5" />
              <img src={assets.star_icon} alt="" className="w-3 5" />
              <img src={assets.star_icon} alt="" className="w-3 5" />
              <img src={assets.star_dull_icon} alt="" className="w-3 5" />
              <p className="pl-2">(122)</p>
             </div>
             <p className="mt-5 text-3xl font-medium">{currency}{productData.price}</p>
             <p className="mt-5 text-gray-500 md:w-4/5">{productData.description}</p>
             <div className="flex flex-col my-8 gap-4">
                <p>Select Size</p>
                <div className="gap-2 flex">
                  {productData.sizes.map((item,index)=>(
                    <button onClick={()=>setSize(item)} className={`border py-2 px-4 bg-gray-100 ${item === size ? 'border-orange-500' : ''}`} key={index}>{item}</button>
                  ))}
                </div>
             </div>
            <div className="flex gap-2">
            <button onClick={()=>addToCart(productData._id, size)} className="bg-black text-white px-8 py-3 text-sm active:bg-gray-700">Add to Cart</button>
            </div>
             <hr className="mt-8 sm:w-4/5"/>
             <div className="text-sm mt-5 flex flex-col text-gray-500 gap-1">
              <p>100% Orginal product.</p>
              <p>Cash on delivery is available on this product.</p>
              <p>Easy return and exhange policy with in 7 days.</p>
             </div>
        </div>
      </div>
      {/* Description & Review */}
      <div className="mt-20">
        <div className="flex">
          <b className="border px-5 py-3 text-sm">Description</b>
          <p className="px-5 py-3 text-sm border">Reviews (122)</p>
        </div>
        <div className="flex flex-col gap-4 border px-6 py-6 text-sm text-gray-500">
          <p>Lorem lpsum simply dummy text of the printing and typesetting industry. Lorem lpsum has been the.Lorem lpsum simply dummy text of the printing and typesetting industry. Lorem lpsum has been the.</p>
          <p>Lorem lpsum simply dummy text of the printing and typesetting industry. Lorem lpsum has been the.Lorem lpsum simply dummy text of the printing and typesetting industry. Lorem lpsum has been the.</p>
        </div>
      </div>
      {/* Display related products */}
      <RelatedProducts category={productData.category} subCategory={productData.subCategory}/>
    </div>
  ) : <div className="opacity-0"></div>
};

export default Product;