import Link from "next/link";
import React, { useState } from 'react';
import { FaToggleOff, FaToggleOn,FaHome,FaBriefcase } from 'react-icons/fa';
import { IoMdPerson,IoIosJournal } from "react-icons/io";
import { FaPhone } from "react-icons/fa6";



 

const SideBar = () => {

  const [isOn, setIsOn] = useState(false);
  const handleToggle =() => {
    setIsOn(!isOn);
  };

  const toggleStyle = {
    width: '34px',
    height: '24px',

  }


  return (
    <main className="flex flex-col right-11 top-16 fixed">
      <div className="flex text-often w-10 h-8 top-8" id="toggle">
        <button className="" onClick={handleToggle }>
          {isOn ? <FaToggleOn style={toggleStyle}/> : <FaToggleOff style={toggleStyle}/>}
        </button>
         
      </div>
    <div className="top-24">
        <Link href="">
        <span className=" flex justify-center items-center border border-solid border-gray-500 rounded-full bg-black w-[42px] h-[42px] text-white focus:text-often hover:text-often active:text-often text-2xl m-4 hover:cursor-pointer"><FaHome /></span>
        </Link>
        <Link href="about">
        <span className="flex justify-center items-center border border-solid border-gray-500 rounded-full bg-black w-[42px] h-[42px] text-white focus:text-often text-2xl m-4 hover:text-often active:text-often hover:cursor-pointer"><IoMdPerson /></span>
        </Link>
        <Link href="/contact">
        <span className="flex justify-center items-center border border-solid border-gray-500 rounded-full bg-black w-[42px] h-[42px] text-white focus:text-often text-2xl m-4 hover:text-often active:text-often hover:cursor-pointer"><FaBriefcase /></span>
        </Link>
        <Link href="">
        <span className="flex justify-center items-center border border-solid border-gray-500 rounded-full bg-black w-[42px] h-[42px] text-white focus:text-often text-2xl m-4 hover:text-often active:text-often hover:cursor-pointer"><IoIosJournal /></span>
        </Link>
        <Link href="">
        <span className="flex justify-center items-center border border-solid border-gray-500 rounded-full bg-black w-[42px] h-[42px] text-white focus:text-often text-2xl m-4 hover:text-often active:text-often hover:cursor-pointer"><FaPhone /></span>
        </Link>
         
    </div>
    </main>
  )
}

export default SideBar