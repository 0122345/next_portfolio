import Layout from '@/components/layout'
import { FaDribbble,FaFacebook, FaFigma, FaInstagram, FaWhatsapp  } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { BsTelephoneFill } from "react-icons/bs";
import styles from "./contact.module.css"


const Contact = () => {




  
  return (
       <Layout>
         <main className="bg-home text-white w-screen h-screen">
          <div className="flex justify-center items-center text-3xl font-bold" id="heading">
            <p>contact me</p>
            <span className="uppercase">get in</span>
            <span className="uppercase">touch</span>
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
           <form action=""className='flex flex-col right-[25px] w- h- top-[33%] absolute' >
              <div className="" >
              {/* styles={styles.inputup} */}
              <span className="flex flex-row space-x-6" id="together">
                <input type="text" name="" id="" style={styles.input} />
                <label htmlFor="Name" >Name</label>
                <input type="email" name="" id=""  />
                <label htmlFor="Email" >Email</label>
                <input type="text" name="" id=""  />
                <label htmlFor="Subject">Subject</label>
                </span>
               <span className="">
                <textarea name="" id="" cols="30" rows="10" ></textarea>
               </span>
              </div>
               <button type="submit" className='uppercase'>send message</button>
           </form>
        </div>
         </main>
       </Layout>
  )
}

// style={styles.label}
// style={styles.input}
// style={styles.input}
// style={styles.input}
// style={styles.input}

export default Contact