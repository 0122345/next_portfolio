import React from 'react'
// import './CardTwo.css'

const CardTwo = () => {


  const card = {
    width: "190px",
    height: "120px",
    padding: "0.5rem",
    background: "rgba(198, 198, 198, 0.34)",
    borderRadius: "8px",
    
    filter: "blur(2px)",
    borderBottom: "3px solid rgba(255, 255, 255, 0.440)",
    borderLeft: "2px  rgba(255, 255, 255, 0.545) outset",
    boxShadow: "-40px 50px 30px rgba(0, 0, 0, 0.280)",
    transform: "skewX(10deg)",
    transition: ".4s",
    overflow:" hidden",
    color:" white",
  }; 
  

  const red = {
    width: "10px",
    height: "10px",
    borderRadius: "50%",
    backgroundColor:"#ff605c",
    boxShadow: "-5px 5px 5px rgba(0, 0, 0, 0.280)",
  }

  const align = {
    padding: "1rem",
    display: "flex",
    flexDirection: "row",
    gap: "5px",
    alignSelf: "flex-start",
  }

  const yellow =  {
    width: "10px",
    height: "10px",
    borderRadius: "50%",
    backgroundColor: "#ffbd44",
    boxShadow:"-5px 5px 5px rgba(0, 0, 0, 0.280)",
  }
  
  const green = {
    width: "10px",
    height: "10px",
    borderRadius: "50%",
    backgroundColor: "#00ca4e",
    boxShadow: "-5px 5px 5px rgba(0, 0, 0, 0.280)",
  }

  const header = {
    textAlign: "center",
    margin: "1.3rem",
    color: "rgb(218, 244, 237)",
    textShadow: "-10px 5px 10px rgba(0, 0, 0, 0.573)",
  }

  return (
    <div className='flex justify-center items-center'>
        <div class="card" style={card} className='flex  hover:h-[654px] hover:transform hover:skew-x-0 cursor-pointer hover:blur-0'>
    <div class="align" style={align}>
        <span class="red" style={red}></span>
        <span class="yellow" style={yellow}></span>
        <span class="green" style={green}></span>
    </div>

    <h1 className='' style={header}>HOVER ME</h1>
    <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde explicabo enim rem odio assumenda?
    </p>
    </div>
    </div>
  )
}

export default CardTwo