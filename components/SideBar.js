import Link from "next/link";
import React, { useState } from 'react';
import { FaHome,FaBriefcase } from 'react-icons/fa';
import { IoMdPerson,IoIosJournal } from "react-icons/io";
import { FaPhone } from "react-icons/fa6";
import DarkMode from "@/utils/DarkMode";
import Hamburder from "@/utils/Hamburder";



 

const SideBar = () => {

  const [isOn, setIsOn] = useState(false);
  const handleToggle =() => {
    setIsOn(!isOn);
  };

  

  return (
    <main className="flex flex-col right-11 top-16 fixed ">
      {/* <div className="">
      <Hamburder className='mr-[4pc] right-16' />
      </div> */}
      <div className="flex text-often w-10 h-8 top-[-4px] mr-[2pc] space-x-4 relative flex-row ">
        
        <DarkMode />
         
      </div>
    <div className="top-24 mt-12">

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