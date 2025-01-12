import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import { menuSlide, slide } from "../anim"
import { Curve } from "./Curve"

export const Nav = () => {

    const navItems = [
        {
          title: "Home",
          href: "/",
        },
        {
          title: "Work",
          href: "/work",
        },
        {
            title: "Contact",
            href: "/contact",
        },
      
    ]

  return (
    <motion.div variants={menuSlide} initial="initial" animate="enter" exit="exit"  className="menu z-[998] md:w-[100%]">
        <div className="body  md:px-[20px]">
            <div className="nav  ">
                <div className="header md:mb-0">
                    {
                        navItems.map((nav, index) => (
                            <motion.div className="mt-3 md:mt-1" custom={index} variants={slide} animate="enter" exit="exit" key={index}>
                                <Link className="text-[2rem]  font-apercuR" to={nav.href}>{nav.title}</Link>
                            </motion.div>
                        ))
                    }
                </div>
                <div className="w-full h-[1px] bg-[#818080]"></div>
                <div className="footer md:gap-[10px]">
                  
                  <div className="flex items-center  gap-2 text-[15px] md:text-[13px] sm:text-[12px]">
                  <p className="font-apercuB">&copy; 2024</p>
                  <p className="font-apercuB">Ymkupnext!</p>
                  </div>
                 
                  <p className="text-[15px] md:text-[13px] sm:text-[12px] font-apercuB">Creative Director</p>
                </div>
            </div>
            <Curve />
        </div>
    </motion.div>
  )
}
