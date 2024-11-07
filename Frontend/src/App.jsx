import React from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {Routes, Route} from "react-router-dom"
import Home from "./pages/Home"
import Collection from "./pages/Collection"
import Product from "./pages/Product"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Cart from "./pages/Cart"
import Login from "./pages/Login"
import PlaceOrder from "./pages/PlaceOrder"
import Orders from "./pages/Orders"
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import SearchBar from "./components/SearchBar";
import Wishlist from "./pages/Wishlist";
import Verify from "./pages/Verify";



const App = () => {
 
  return <>
    <div className="px-4 sm:px-[5vm] md:px-[7vm] lg:px-[9vm]">
      <ToastContainer />
      <Navbar/>
      <SearchBar/>
      
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/collection" element={<Collection/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/product/:productId" element={<Product/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/place-order" element={<PlaceOrder/>}/>
        <Route path="/orders" element={<Orders/>}/>
        <Route path="/wishlist" element={<Wishlist/>}/>
        <Route path="/verify" element={<Verify/>} />
      </Routes>
      <Footer/>
    </div>
  </>;
};

export default App;