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
        <span className=" text-often text-2xl m-4 hover:cursor-pointer"><FaHome /></span>
        <span className="text-often text-2xl m-4 hover:cursor-pointer"><IoMdPerson /></span>
        <span className="text-often text-2xl m-4 hover:cursor-pointer"><FaBriefcase /></span>
        <span className="text-often text-2xl m-4 hover:cursor-pointer"><IoIosJournal /></span>
        <span className="text-often text-2xl m-4 hover:cursor-pointer"><FaPhone /></span>
    </div>
    </main>
  )
}

export default SideBar