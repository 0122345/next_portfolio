import Layout from '@/components/layout'
import Image from 'next/image';
import Link from 'next/link';
import SendButton from '@/utils/SendButton';
import { FaArrowRight,FaDribbble,FaFacebook, FaFigma, FaInstagram, FaWhatsapp  } from "react-icons/fa";
import styles from './name.module.css'
 




 

const index = () => {
  return (
    <Layout>
        <main className="h-screen w-screen bg-home overflow-hidden">
         <div className="flex flex-row  justify-between text-xl text-white p-4 m-5">
            <span className="flex uppercase text-5xl font-extrabold text-blue-700">n</span>
            <span className={styles.name} >Ntwari Ashimwe Fiacre/(+250) 790 100 861</span>
            
         </div>
         
         <div className="flex flex-row text-lg w-64 h-9 ml-16 mt-20 ">
            <span className="text-often font-extrabold text-3xl pl-4">Hi there</span>
            <span className="text-white text-2xl font-bold p-1">
                ,I am Ntwari Ashimwe Fiacre
            </span>
         </div>
         {/* <div className="flex ml-12 mt-48 rounded-l-lg rounded-r-full  w-72 h-12 border border-solid border-often text-white hover:bg-often hover:transition-colors cursor-pointer space-x-4 space-y-0">
            <Link href="/about">
            <span className="flex text-2xl font-bold">More about Me</span>
             <span className="flex justify-center items-center ml-8 w-12 h-12 border border-solid border-often float-right rounded-full bg-often"><FaArrowRight/></span>
            </Link>    
         </div> */}

         <div className="">
            <Link href=''>
               <SendButton />
            </Link>
         </div>

         <div className="flex flex-row lg:justify-end items-end justify-evenly lg:top-[30%] lg:relative top-56 absolute z-0">
            <Image 
             src='/rengukokyojuro.png'
             alt='renguko kyojuro'
             width={400}
             height={400}

            />
         </div>
         <div className="text-white z-10 flex flex-row justify-around  w-72  bottom-10 left-8 space-x-4  absolute">
             <span className="links"><FaFacebook /></span>
             <span className="links"><FaInstagram /></span>
             <span className="links"><FaFigma /></span>
             <span className="links"><FaDribbble /></span>
             <span className="links"><FaWhatsapp /></span>
         </div>
    </main>
    </Layout>
  )
}

export default index