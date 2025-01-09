import { useState } from "react"
import { Nav } from "./navbar/nav"
import { AnimatePresence } from "framer-motion"



export const Index = () => {
    const [isActive, setIsActive] = useState(false)
  return (
    <div className="w-full ">
        <div className="relative left-[3rem] top-[3rem]">
   <h1 className="text-[3rem] font-Inter">Ymkupnext!</h1>
   </div>
        <div className="button top-0 md:top-[1.5rem] md:right-[2rem] z-[999] cursor-pointer" onClick={() => setIsActive(!isActive)}>
            <div className={`burger  ${isActive ? 'burgeractive' : ''}`} ></div>
        </div>
        <AnimatePresence mode="wait">
            {isActive && <Nav /> }
        </AnimatePresence>
    </div>
  )
}
