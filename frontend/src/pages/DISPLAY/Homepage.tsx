import { Link } from "react-router-dom"
import image from "../../assets/my-photo.jpg"
import { Index } from "../../component/nav"
import Skills from "./Skills"
import { useLayoutEffect, useRef } from "react"
import gsap from 'gsap';

export const Homepage = () => {
  const overlayRef = useRef(null)
  const textRef = useRef(null)

  useLayoutEffect(() => {
    if(!overlayRef.current || !textRef.current) return;


    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

        tl.fromTo(overlayRef.current, {
          y: 0
        }, {
          y: "-100%",
          duration: 2,
          ease: 'power2.inOut',
          delay: 2
        })
        .fromTo(textRef.current, {opacity: 0},{opacity: 1, duration: 2, ease: "power2.inOut"})

    
    })
      

    return () => ctx.revert()

  },[])
  return (
    <div >
    <Index />
    <div className="w-full h-full flex md:flex-col  items-center justify-center px-[3.5rem] md:px-[2rem] mt-[3rem] gap-32 md:gap-5">
        <div className=" w-[50%]  md:w-[100%] md:h-[600px] sm:h-[500px] relative overflow-hidden">
          <div ref={overlayRef} className=" bg-[#f6f3ea] absolute inset-0 "></div>
          <img src={image} alt="" className="w-full h-full object-cover rounded-[10px] shadow-md"/>
        </div>
        <div ref={textRef} className=" w-[50%] md:w-[100%] flex flex-col  gap-5">
          <p className="text-[20px] font-apercuR pb-10 md:pb-5">FullStack Creative.</p>
          <p className="text-[3.5rem] md:text-[2.5rem] sm:text-[1.5rem] leading-[65px] md:leading-[50px] sm:leading-[40px]  pr-[2rem] md:pr-0 font-apercuM  " >Hi, my name is Yimika. I do photography, videography and content marketing. Let’s work together.</p>
          <Link to="/contact" className="">
            <button className="px-[2rem] py-[1rem] bg-black text-white rounded-md text-[18px] font-apercuR">Contact</button>
          </Link>
        </div>
    </div>
    <div className="w-full flex flex-col items-center gap-10 mt-20 px-[1rem]">
      <div className="flex md:flex-wrap md:justify-center items-center gap-5">
        <p className="text-[3rem] md:text-[1.1rem] font-DiptyqueBI ">Ile Ijo,</p>
        <p className="text-[3rem] md:text-[1.1rem] font-DiptyqueBI ">Engage Space,</p>
        <p className="text-[3rem] md:text-[1.1rem] font-DiptyqueBI ">Redlight Fashion Room,</p>
        <p className="text-[3rem] md:text-[1.1rem] font-DiptyqueBI ">Saint Moriartyy</p>
      </div>
      <p className="text-[20px] md:text-[18px] md:px-5 text-center font-apercuR">I’ve worked with variation of collectives such as Ile Ijo, Engage Space , Redlight Fashion Room and more. 
      </p>
    </div>
    <Skills />
    </div>
  )
}
