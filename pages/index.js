import Layout from '@/components/layout'
import Image from 'next/image';
import { FaArrowRight,FaDribbble,FaFacebook, FaFigma, FaInstagram, FaWhatsapp  } from "react-icons/fa";
 




 

const index = () => {
  return (
    <Layout>
        <main className="h-screen w-screen bg-home overflow-hidden">
         <div className="flex flex-row  justify-between text-xl text-white p-5 m-5">
            <span className="flex uppercase text-4xl font-extrabold">n</span>
            <span className="hidden md:flex lg:flex xl:flex 2xl:flex">Ntwari Ashimwe Fiacre/(+250) 790 100 86</span>
         </div>
         
         <div className="flex flex-row text-lg w-60 h-9">
            <span className="text-often font-extrabold text-2xl pl-4">Hi there</span>
            <span className="text-white text-xl p-1">
                ,I am Ntwari Ashimwe Fiacre
            </span>
         </div>
         <div className="flex flex-row justify-center items-center mt-32 rounded-l-lg rounded-r-full  w-64 h-12 border border-solid border-often text-white hover:bg-often hover:transition-colors cursor-pointer ">
             <span className="flex text-2xl font-bold">More about Me</span>
             <span className="flex justify-center ml-8 items-center w-12 h-12 border border-solid border-often float-right rounded-full bg-often"><FaArrowRight/></span>
         </div>

         <div className="flex flex-1 flex-row justify-end items-end">
            <Image 
             src='/rengukokyojuro.png'
             alt='renguko kyojuro'
             width={400}
             height={400}

            />
         </div>
         <div className="text-white flex flex-row justify-around w-56 ml-5 p-3">
             <span className="flex justify-center items-center hover:cursor-pointer border border-solid border-gray-500 rounded-full bg-gray-500 shadow shadow-slate-400 hover:shadow-md w-[32px] h-[32px]"><FaFacebook /></span>
             <span className="flex justify-center items-center hover:cursor-pointer border border-solid border-gray-500 rounded-full bg-gray-500 shadow shadow-slate-400 hover:shadow-md w-[32px] h-[32px]"><FaInstagram /></span>
             <span className="flex justify-center items-center hover:cursor-pointer border border-solid border-gray-500 rounded-full bg-gray-500 shadow shadow-slate-400 hover:shadow-md w-[32px] h-[32px]"><FaFigma /></span>
             <span className="flex justify-center items-center hover:cursor-pointer border border-solid border-gray-500 rounded-full bg-gray-500 shadow shadow-slate-400 hover:shadow-md w-[32px] h-[32px]"><FaDribbble /></span>
             <span className="flex justify-center items-center hover:cursor-pointer border border-solid border-gray-500 rounded-full bg-gray-500 shadow shadow-slate-400 hover:shadow-md w-[32px] h-[32px]"><FaWhatsapp /></span>
         </div>
    </main>
    </Layout>
  )
}

export default index