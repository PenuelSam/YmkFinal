import { useState } from "react"
import { Nav } from "./navbar/nav"
import { AnimatePresence } from "framer-motion"
//import { FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";


export const Index = () => {
    const [isActive, setIsActive] = useState(false)
  return (
    <div className="w-full md:w-[90%] flex items-center px-[3rem] md:px-0 justify-between md:mx-auto">
        <Link to="/" className=" ">
          <h1 className="text-[3rem] md:text-[2.3rem]  font-apercuM">Ymkupnext!</h1>
        </Link>
        <div className="button  z-[999] cursor-pointer " onClick={() => setIsActive(!isActive)}>
            <div className={`burger  ${isActive ? 'burgeractive' : ''}`} ></div>
        </div>
        <AnimatePresence mode="wait">
            {isActive && <Nav /> }
        </AnimatePresence>
    </div>
  )
}
