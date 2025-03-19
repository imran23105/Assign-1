import React from 'react'
import {FaEye,FaEdit } from "react-icons/fa";


const User = ({customer}) => {
  return (
    <div>
  <div className="flex items-center justify-between border-b p-3 my-[10px]">
      <div className="flex items-center gap-4">
        <img src={customer.avatar}  className="w-10 h-10 rounded-full" />
        <span>{customer.name}</span>
      </div>
      <span>{customer.date}</span>
      <div className="flex gap-2">
        <FaEdit className="text-black cursor-pointer hover:text-red-500 size-7" />
        <FaEye  className=" text-black cursor-pointer hover:text-red-500 size-7" />
      </div>
  </div>
    </div>
    
  );
};

export default User