import React from "react";
import {NavLink} from 'react-router-dom'
import {CirclePlus, ClipboardList, ShoppingBasket} from 'lucide-react'

const Sidebar = () => {

  return <>
    <div className="w-[18%] min-h-screen border-r-2">
        <div className="gap-4 flex flex-col pt-6 pl-[20%] text-[15px]">
            <NavLink to="/add" className="flex items-center gap-3 border border-gray-300 border-r-0 px-3 py-2 rounded-l">
                <CirclePlus className="w-5 h-5" />
                <p className="hidden md:block">Add Items</p>
            </NavLink>

            <NavLink to="/list" className="flex items-center gap-3 border border-gray-300 border-r-0 px-3 py-2 rounded-l">
                <ClipboardList className="w-5 h-5" />
                <p className="hidden md:block">List Items</p>
            </NavLink>

            <NavLink to="/orders" className="flex items-center gap-3 border border-gray-300 border-r-0 px-3 py-2 rounded-l">
                <ShoppingBasket className="w-5 h-5" />
                <p className="hidden md:block">Orders</p>
            </NavLink>
        </div>
    </div>
  </>;
};

export default Sidebar;
