import Layout from '@/components/layout';
import { FaDribbble,FaFacebook, FaFigma, FaInstagram, FaWhatsapp,FaMail  } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { BsTelephoneFill } from "react-icons/bs";
 


const Contact = () => {
 
  return (
       <Layout>
         <main className="bg-home text-white w-screen h-screen">
          <div className="flex justify-center items-center font-bold" id="heading">
            <p className='text-8xl text-slate-700 z-0'>contact me</p>
            <span className="uppercase text-4xl text-often z-10 text-center ">get in</span>
            <span className="uppercase text-4xl text-white z-10 text-center">touch</span>
          </div>
        <div className="" id="left">
          <span className="flex flex-col p-7 text-md w-56 h-56 space-y-5">
            <h2 className='text-2xl'>
              do not be shy!
            </h2>
            <p>
            Feel free to get in touch with me. 
            I am always open to discussing new 
            projects, creative ideas or 
            opportunities to be part of your 
            visions.
            </p>
          </span>
            
           <span className="">
             <span>
             <MdEmail />
             </span>
             <span>
               <p>mail me</p>
               <p>ntwarifiacre043@gmail.com</p>
             </span>
           </span>

           <span className="">
             <span>
             <BsTelephoneFill />
             </span>
             <span>
               <p>call me</p>
               <p>+250 790 100 861</p>
             </span>
           </span>

           <div className="text-white z-10 flex flex-row justify-around  w-72  bottom-10 left-8 space-x-4  absolute">
             <span className="links"><FaFacebook /></span>
             <span className="links"><FaInstagram /></span>
             <span className="links"><FaFigma /></span>
             <span className="links"><FaDribbble /></span>
             <span className="links"><FaWhatsapp /></span>
         </div>
        </div>

        <div className="" id="rightBottom">
           <form action=""className='flex flex-col right-[18pc] space-y-8 top-[33%] absolute p-14' >
              <div className="" >
              
              <span className="flex flex-row space-x-6" id="together">
                <input type="text" name="" id=""className='inputs' />
                <label htmlFor="Name">Name</label>
                <input type="email" name="" id="" className='inputs' />
                <label htmlFor="Email" >Email</label>
                <input type="email" name="" id="" className='inputs' />
                <label htmlFor="Subject">Subject</label>
                </span>
               <span className="pt-5">
                <textarea name="" id="" cols="66" rows="10"className='inputs'></textarea>
               </span>
              </div>
               <button type="submit" className='uppercase w-52 h-12 bg-often text-white rounded-lg'>
                send message <FaMail/>
                </button>
           </form>
        </div>
         </main>
       </Layout>
  )
}



export default Contact;