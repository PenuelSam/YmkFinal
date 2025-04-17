import { useLayoutEffect, useRef, useState } from "react"
import { Nav } from "./navbar/nav"
import { AnimatePresence } from "framer-motion"
//import { FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";
import gsap from 'gsap';


export const Index = () => {
    const [isActive, setIsActive] = useState(false)
    const logoRef = useRef(null)
    const buggerRef = useRef(null)

   

    useLayoutEffect(() => {
      if(!logoRef.current || !buggerRef.current) return;

      const hasAnimated = sessionStorage.getItem("navbarAnimation");

      if(hasAnimated) return;
    
      const logo = logoRef.current as HTMLElement
      const bugger = buggerRef.current as HTMLElement
      

        const ctx = gsap.context(() => {
          const rect = logo.getBoundingClientRect()
  
          const Xaxis = window.innerWidth / 2 - (rect.left + rect.width /2)
          const Yaxis = window.innerHeight / 2 - (rect.top + rect.height / 2)

          const tl = gsap.timeline()
      
    
            tl.fromTo(logo, {x: Xaxis, y: Yaxis ,scale: 2},{x: 0, y: 0, scale: 1, ease: "power1.inOut", duration: 2})
              .fromTo(bugger, {opacity: 0},{opacity: 1, duration: 1, ease: "power2.in"})

              sessionStorage.setItem("navbarAnimation", "true")

        })

        return () => ctx.revert()

    },[])

  return (
    <div className="w-full md:w-[90%]  h-[5rem]  px-[3rem] md:px-0 py-5 md:mx-auto">
        <Link to="/" className=" absolute z-[999]" >
          <h1 ref={logoRef} className="text-[3rem] md:text-[2.3rem]  font-apercuM">Ymkupnext!</h1>
        </Link>
        <div ref={buggerRef} className="button  z-[999] cursor-pointer " onClick={() => setIsActive(!isActive)}>
            <div className={`burger  ${isActive ? 'burgeractive' : ''}`} ></div>
        </div>
        <AnimatePresence mode="wait">
            {isActive && <Nav /> }
        </AnimatePresence>
    </div>
  )
}
