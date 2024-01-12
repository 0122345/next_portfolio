// import '../public/send.css'

const SendButton = () => {
//    const button =  {
//     fontFamily: 'inherit',
//     fontSize:'20px',
//     background: 'royalblue',
//     color:'white',
//     padding: '0.7em 1em',
//     paddingLeft: '0.9em',
//     display: 'flex',
//     alignItems: 'center',
//     border: 'none',
//     borderRadius: '16px',
//     overflow: 'hidden',
//     transition: 'all 0.2s',
//     cursor:' pointer'
//   }







  return (
    <div className='flex ml-12 mt-48 rounded-l-lg rounded-r-full  w-72 h-12 border border-solid border-often text-white hover:bg-often hover:transition-colors cursor-pointer space-x-4 space-y-0'>
        <button>
    <div className="svg-wrapper-1">
    <div className="svg-wrapper">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="24"
        height="24"
      >
        <path fill="none" d="M0 0h24v24H0z"></path>
        <path
          fill="currentColor"
          d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
        ></path>
      </svg>
    </div>
  </div>
  <span className='flex text-2xl font-bold'>More about Me</span>
</button>

    </div>
  )
}

export default SendButton