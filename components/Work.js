import Image from 'next/image';
import Link from 'next/link';
import Layout from '@/components/layout';
// import cardone from '@/utils/CardOne';
// import cardThree from '@/utils/CardThree';
import CardTwo from '@/utils/CardTwo';



const Work = () => {
  return (
    <Layout >
      <main className="h-screen w-screen bg-slate-900 overflow-hidden">
      <div className="">
        <span className="">WORKS</span>
        <span>
          <span className=''>
            MY
          </span>
          <span className="">
            PORTFOLIO
          </span>
        </span>
        
      </div>
      <div className=""id='cards'>
         {/* <cardone /> */}
         {/* <cardThree /> */}
         <CardTwo />
      </div>
    </main>
    </Layout>
    
  )
}

export default Work