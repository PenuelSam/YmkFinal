import { Link } from "react-router-dom"
import image from "../../assets/my-photo.jpg"
import { Index } from "../../component/nav"
import Skills from "./Skills"

export const Homepage = () => {
  return (
    <div >
    <Index />
    <div className="w-full h-full flex md:flex-col  items-center justify-center px-[3.5rem] md:px-[2rem] mt-[3rem] gap-32 md:gap-5">
        <div className=" w-[50%]  md:w-[95%] md:h-[600px]">
          <img src={image} alt="" className="w-full h-full object-cover"/>
        </div>
        <div className=" w-[50%] md:w-[95%] flex flex-col  gap-5 md:gap-5">
          <p className="text-[20px] font-apercuR pb-10 md:pb-5">FullStack Creative.</p>
          <p className="text-[3.5rem] md:text-[2.5rem] sm:text-[1.5rem] leading-[65px] md:leading-[50px]  pr-[2rem] md:pr-0 font-apercuM  " >Hi, my name is Yimika. I do photography, videography and content marketing. Let’s work together.</p>
          <Link to="/contact" className="">
            <button className="px-[2rem] py-[1rem] bg-black text-white rounded-md text-[18px] font-apercuR">Contact</button>
          </Link>
        </div>
    </div>
    <div className="w-full flex flex-col items-center gap-10 mt-20 px-[1rem]">
      <div className="flex md:flex-wrap md:justify-center items-center gap-5">
        <p className="text-[3rem] md:text-[1.5rem] font-DiptyqueBI ">Ile Ijo,</p>
        <p className="text-[3rem] md:text-[1.5rem] font-DiptyqueBI ">Engage Space,</p>
        <p className="text-[3rem] md:text-[1.5rem] font-DiptyqueBI ">Redlight Fashion Room,</p>
        <p className="text-[3rem] md:text-[1.5rem] font-DiptyqueBI ">Saint Moriartyy</p>
      </div>
      <p className="text-[20px] md:px-5 text-center font-apercuR">I’ve worked with variation of collectives such as Ile Ijo, Engage Space , Redlight Fashion Room and more. 
      </p>
    </div>
    <Skills />
    </div>
  )
}
