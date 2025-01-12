import { useState } from "react"
import { Nav } from "./navbar/nav"
import { AnimatePresence } from "framer-motion"
import { FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";


export const Index = () => {
    const [isActive, setIsActive] = useState(false)
  return (
    <div className="w-full md:w-[90%] flex items-center justify-between md:mx-auto border">
      <div className="flex gap-5 ">
      <FaInstagram style={{fontSize: "25px", cursor: "pointer"}}/>
      </div>
        <Link to="/" className="">
          <h1 className="text-[3rem] md:text-[2rem]  font-apercuM">Ymkupnext!</h1>
        </Link>
        <div className="button  z-[999] cursor-pointer" onClick={() => setIsActive(!isActive)}>
            <div className={`burger  ${isActive ? 'burgeractive' : ''}`} ></div>
        </div>
        <AnimatePresence mode="wait">
            {isActive && <Nav /> }
        </AnimatePresence>
    </div>
  )
}
