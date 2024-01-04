import Layout from '@/components/layout'
import Image from 'next/image';
import { FaArrowRight } from "react-icons/fa";




 

const index = () => {
  return (
    <Layout>
        <main className="h-screen w-screen bg-home overflow-hidden">
         <div className="flex flex-row  justify-between text-xl text-white p-5 m-5">
            <span className="flex uppercase text-4xl font-extrabold">n</span>
            <span className="">Ntwari Ashimwe Fiacre/(+250) 790 100 86</span>
         </div>
         
         <div className="flex flex-row text-lg w-32 h-9">
            <span className="text-often font-extrabold text-2xl pl-4">Hi there</span>
            <span className="text-white text-xl p-1">
                ,I am Ntwari Ashimwe Fiacre
            </span>
         </div>
         <div className="flex flex-row justify-center items-center mt-32 rounded-l-xl  w-40 h-8 border border-solid border-often text-white hover:bg-often hover:transition-colors cursor-pointer">
             <span className="flex j">More about Me</span>
             <span className="flex justify-center items-center w-8 h-8 border border-solid border-often float-right right-0 rounded-full bg-often"><FaArrowRight/></span>
         </div>

         <div className="flex flex-1 flex-row justify-end items-end pr-8">
            <Image 
             src='/rengukokyojuro.png'
             alt='renguko kyojuro'
             width={400}
             height={400}

            />
         </div>

    </main>
    </Layout>
  )
}

export default index