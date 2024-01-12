import { useState,useRef } from "react"
import Ham from "./Ham";

const Hamburder = () => {

    const [menu, setMenu] = useState(false);

    const HandleMenu = ( ) => {
        
    } 

  return (
    <div>
        <span className="" onClick={HandleMenu}>

        </span>
        <div className="">
            <Ham />
        </div>
    </div>
  )
}

export default Hamburder