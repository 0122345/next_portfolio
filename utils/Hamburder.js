import { useState,useRef } from "react"
import Ham from "./Ham";
// import List from "./list";
 
const Hamburder = () => {

    const [menu, setMenu] = useState(false);

    const HandleMenu = ( ) => {
        setMenu(!menu)
    } 

  return (
    <div>
        <span className="" onClick={HandleMenu}>
              {/* <List/> */}
        </span>
        <div className="">
            <Ham />
        </div>
    </div>
  )
}

export default Hamburder