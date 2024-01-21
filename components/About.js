import Layout from '@/components/layout';
import CircleSkills from '@/utils/CircleSkills';
 
 const About = () => {
   return (
     <Layout>
        <main className="bg-home w-screen h-screen">
          <div className="justify-center items-center text-center lg:w-full md:w-full w-[314px]">
            <p className="flex justify-center items-center">
              <span className="lg:text-9xl md:text-7xl xl:text-9xl text-5xl text-gray-800 to-transparent font-extrabold z-0 relative ">resume</span>
              <span className="uppercase font-bold lg:text-5xl md:text-5xl text-3xl text-white z-10 relative md:right-[29%] md:top-[18px] lg:right-[29%] lg:top-[18px] xl:right-[29%] xl:top-[18px] top-[3pc]  right-20">about</span>
              <span className="uppercase font-bold lg:text-5xl md:text-5xl text-3xl text-often z-10 relative  md:right-[28%] md:top-[18px] lg:right-[28%] lg:top-[18px] xl:right-[28%] xl:top-[18px] top-[3pc] right-16">me</span>
            </p>
          </div>
           
           <p className="text-white font-bold text-xl m-[23px] top-10 relative">Personal Information</p>

           <div className="flex md:flex-row lg:flex-row space-y-4 flex-col pt-10 text-white space-x-5 ml-8">
            <div className="w-[315px] flex flex-col h-52 text-lg space-y-6">
               <span className="">First name: Fiacre</span>
               <span className="">Last name: Ntwari Ashimwe</span>
               <span className="">Age: 23 Years</span>
               <span className="">Nationality: Rwandan</span>
            </div>

            <div className="w-[375px] flex flex-col left-0 text-lg space-y-6">
               <span className="">Address: Kigali,Rwanda</span>
               <span className="">Phone: +250 790 100 861</span>
               <span className="">Email: ntwarifiacre043@gmail.com</span>
               <span className="">Language: Kinyarwanda, English, Japanese</span>
            </div>

            <div className=""id="boxes">
              <span className="">

              </span>
              <span className="">

              </span>
              <span className="">
               
              </span>
            </div>


              <div className="" id="downloadCv"></div>

              {/* <hr/> */}

           </div>

              <h2>My Skills</h2>
              <div className="" id="gridCircles">
                <CircleSkills />
              </div>

              <hr />

              <h2>Experience && Education</h2>
              <div className="">
                <div className="">
                  <span>Experience</span><span>&& Education</span>
                </div>
                <div className="">
                  <span>Experience &&</span><span>Education</span>
                </div>
              </div>

              <p className='text-6xl transition-transform rotate-180 text-often'>
                What do I do
              </p>
              <div className="" id="content">
                 <span></span>
                 <span></span>
                 <span></span>
                 <span></span>
                 <span></span>
              </div>
        </main>
     </Layout>
   )
 }
 
 export default About