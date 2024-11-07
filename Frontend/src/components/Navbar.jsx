import React, { useContext, useState } from "react";
import {assets} from "../assets/assets"
import {AlignRight, ChevronLeft, Heart, Search, ShoppingCart, UserRound} from "lucide-react"
import { Link, NavLink } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";

const Navbar = () => {

    const [visible, setVisible] = useState(false);
    const {setShowSearch, getCartCount, token, setToken, navigate, setCartItems} = useContext(ShopContext)

    const logout = () => {
        navigate('/login')
        localStorage.removeItem('token') // Removing token in localStorage
        setToken('')
        setCartItems({})
       
    }

  return <>
    <div className="flex items-center justify-between py-5 font-medium">
       <Link to='/'> <img src={assets.logo} alt="" className="w-36"/></Link>

        <ul className="hidden sm:flex text-sm gap-5 text-gray-700">
            <NavLink to='/' className="flex flex-col items-center gap-1">
                <p>Home</p>
                <hr className="border-none w-2/4 h-[1.5px] bg-gray-700 hidden"/>
            </NavLink>
            <NavLink to='/collection' className="flex flex-col items-center gap-1">
                <p>Collection</p>
                <hr className="border-none w-2/4 h-[1.5px] bg-gray-700 hidden"/>
            </NavLink>
            <NavLink to='/about' className="flex flex-col items-center gap-1">
                <p>About</p>
                <hr className="border-none w-2/4 h-[1.5px] bg-gray-700 hidden"/>
            </NavLink>
            <NavLink to='/contact' className="flex flex-col items-center gap-1">
                <p>Contact</p>
                <hr className="border-none w-2/4 h-[1.5px] bg-gray-700 hidden"/>
            </NavLink>
        </ul>

        <div className="flex items-center gap-6">
            <Search className="w-5 cursor-pointer" onClick={(()=>setShowSearch(true))}/>

            <div className="group relative">
                <UserRound className="w-5 cursor-pointer" onClick={()=>token ? null : navigate('/login')} />
                    {/* Dropdown Menu */}
                {
                    token && 
                    <div className="group-hover:block hidden absolute dropdown-menu right-0 pt-4">
                    <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded">
                        <p className="cursor-pointer hover:text-black">My Profile</p>
                        <p onClick={()=>navigate('/orders')} className="cursor-pointer hover:text-black">Orders</p>
                        <p className="cursor-pointer hover:text-black">Wishlist</p>
                        <p onClick={logout} className="cursor-pointer hover:text-black">Logout</p>
                    </div>
                    </div>
                }
            </div>
            <Link to="/cart" className="relative">
                <ShoppingCart className="w-5 min-w-5" />
                <p className="absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]">{getCartCount()}</p>
            </Link>
            
            <AlignRight className="w-5 cursor-pointer sm:hidden" onClick={()=>setVisible(true)}/>
        </div>
        {/* Sidebar menu for small screens */}
        <div className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${visible ? 'w-full':'w-0'}`}>
            <div className="flex flex-col text-gray-600">
                <div onClick={()=>setVisible(false)} className="flex items-center gap-4 cursor-pointer p-3">
                    <ChevronLeft className="h-4" />
                    <p>Back</p>
                </div>
                <NavLink className='py-2 pl-6 ' onClick={()=>setVisible(false)} to='/'>Home</NavLink>
                <NavLink className='py-2 pl-6 ' onClick={()=>setVisible(false)} to='/collection'>Collection</NavLink>
                <NavLink className='py-2 pl-6 ' onClick={()=>setVisible(false)} to='/about'>About</NavLink>
                <NavLink className='py-2 pl-6 ' onClick={()=>setVisible(false)} to='/contact'>Contact</NavLink>
            </div>
        </div>
    </div> 
  </>;
};

export default Navbar;
