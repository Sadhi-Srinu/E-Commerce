import React, { useEffect } from "react";
import { assets } from "../assets/assets";
import axios from "axios";
import { useState } from "react";
import {backendUrl} from "../App"
import {toast} from 'react-toastify'
import BeautyAndMakeup from "../sizes/BeautyAndMakeup";
import { Sizes } from "../sizes/Sizes";
import Innerwears from "../sizes/Innerwears";
import ShowSizes from "../sizes/ShowSizes";

const Add = ({token}) => {

  const [image1, setImage1] = useState(false)
  const [image2, setImage2] = useState(false)
  const [image3, setImage3] = useState(false)
  const [image4, setImage4] = useState(false)
  const [image5, setImage5] = useState(false)

  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState("");
  const [subCategory, setSubCategory] = useState("");
  const [bestseller, setBestseller] = useState(false);
  const [sizes, setSizes] = useState([]);
 
  const onSubmitHandler = async (e) => {
    e.preventDefault();

    try{
      const formData = new FormData()
      formData.append("name",name)
      formData.append("description",description)
      formData.append("price",price)
      formData.append("category",category)
      formData.append("subCategory",subCategory)
      formData.append("bestseller",bestseller)
      formData.append("sizes",JSON.stringify(sizes))

      image1 && formData.append("image2",image2)
      image2 && formData.append("image3",image3)
      image3 && formData.append("image1",image1)
      image4 && formData.append("image4",image4)
      image5 && formData.append("image5",image5)

      const response = await axios.post(backendUrl + "/api/product/add",formData,{headers:{token}})
      
      
      
      if(response.data.success) {
        toast.success(response.data.message)
        setName('')
        setDescription('')
        setImage1(false)
        setImage2(false)
        setImage3(false)
        setImage4(false)
        setImage5(false)
        setPrice('')
        setSizes([])
      } else {
        toast.error(response.data.message)
      }

    } catch (error) {
      console.log(error);
      toast.error(error.message)
    }
  }

  console.log(category);
  console.log(subCategory);

  return <>
    <form onSubmit={onSubmitHandler} className="flex flex-col w-full items-start gap-3">
      <div>
        <p className="mb-2">Upload Image</p>
        <div className="flex gap-2">
          <label htmlFor="image1">
            <img className="w-28" src={!image1 ? assets.upload_area : URL.createObjectURL(image1)} alt="" />
            <input onChange={(e)=>setImage1(e.target.files[0])} type="file" id="image1" hidden/>
          </label>
          <label htmlFor="image2">
            <img className="w-28" src={!image2 ? assets.upload_area : URL.createObjectURL(image2)} alt="" />
            <input onChange={(e)=>setImage2(e.target.files[0])} type="file" id="image2" hidden/>
          </label>
          <label htmlFor="image3">
            <img className="w-28" src={!image3 ? assets.upload_area : URL.createObjectURL(image3)} alt="" />
            <input onChange={(e)=>setImage3(e.target.files[0])} type="file" id="image3" hidden/>
          </label>
          <label htmlFor="image4">
            <img className="w-28" src={!image4 ? assets.upload_area : URL.createObjectURL(image4)} alt="" />
            <input onChange={(e)=>setImage4(e.target.files[0])} type="file" id="image4" hidden/>
          </label>
        </div>
      </div>

      <div className="w-full">
        <p className="mb-2">Product Name</p>
        <input type="text" onChange={(e)=>setName(e.target.value)} value={name} placeholder="Type here..." className="w-full max-w-[500px] py-2 px-3" required/>
      </div>

      <div className="w-full">
        <p className="mb-2">Product Description</p>
        <textarea type="text" onChange={(e)=>setDescription(e.target.value)} value={description} placeholder="Write content here..." className="w-full max-w-[500px] py-2 px-3" required/>
      </div>
  
      <div className="flex flex-col sm:flex-row gap-2 w-full sm:gap-8">
        <div>
          <p className="mb-2">Product Category</p>
          <select onChange={(e)=>setCategory(e.target.value)} className="w-full px-3 py-2">
            <option value="Men">Men</option>
            <option value="Women">Women</option>
            <option value="Kids">Kids</option>
          </select>
        </div>

        <div>
          <p className="mb-2">Sub Category</p>
          <select onChange={(e)=>setSubCategory(e.target.value)} className="w-full px-3 py-2">
            <option value="Topwear">Topwear</option>
            <option value="Bottomwear">Bottomwear</option>
            <option value="Winterwear">Winterwear</option>
            <option value="Innerwears">Innerwears</option>
            <option value="Kurtis">Kurtis</option>
            <option value="Sarees & Suits">Sarees & Suits</option>
            <option value="Dhotis">Dhotis</option>
            <option value="Beauty & Makeup">Beauty & Makeup</option>
            <option value="Footwears">Footwears</option>
            <option value="Jewellery">Jewellery</option>
          </select>
        </div>
       
      <div>
        <p className="mb-2 ">Product Price</p>
        <input onChange={(e)=>setPrice(e.target.value)} value={price} className="w-full px-3 py-2 sm:w-[120px]" type="Number" placeholder="25"/>
      </div>
      </div>

      {/* Sizes */}
      <div>
        <p className="mb-2">Product Sizes</p>
       <div>
        {
          subCategory === "Beauty & Makeup" ? <BeautyAndMakeup sizes={sizes} setSizes={setSizes}/> : ""   
        } 
        </div> 
        <div>
          {
            subCategory === "Topwear" || subCategory === "Bottomwear" || subCategory === "Winterwear" || subCategory === "Kurtis" || subCategory === "Sarees & Suits" ?
            <Sizes sizes={sizes} setSizes={setSizes} /> : ""
          }
        </div>
        <div>
        {
         subCategory === "Innerwears" && category === "Women" ? <Innerwears sizes={sizes} setSizes={setSizes}/> : ""   
        } 
        </div> 
        <div>
        {
          subCategory === "Footwears" ? <ShowSizes sizes={sizes} setSizes={setSizes}/> : ""   
        } 
        </div> 
        <div>
        {
          category === "Men" && subCategory === "Innerwears" ?  <Sizes sizes={sizes} setSizes={setSizes} /> : ""   
        } 
        </div> 
        
      </div>
    
      <div className="flex gap-2 mt-2">
        <input onChange={()=>setBestseller(prev => !prev)} checked={bestseller} type="checkbox" id="bestseller"/>
        <label className="cursor-pointer" htmlFor="bestseller">Add to Bestseller</label>
      </div>

      <button type="submit" className="w-28 py-3 mt-4 bg-black text-white">ADD</button>
    </form>
  </>;
};

export default Add;
