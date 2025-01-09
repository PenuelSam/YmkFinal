import { Link } from "react-router-dom"
import image from "../../assets/my-photo.jpg"
import { Index } from "../../component/nav"
import Skills from "./Skills"

export const Homepage = () => {
  return (
    <div >
    <Index />
    <div className="w-full h-full flex md:flex-col items-center justify-center px-[3.5rem] md:px-[2rem] mt-[3rem] gap-32">
        <div className="flex-1  border mt-32 ">
          <img src={image} alt="" className="w-full h-full object-cover"/>
        </div>
        <div className="flex-1  flex flex-col gap-10 md:gap-5">
          <p className="text-[20px] font-Inter">FullStack Creative.</p>
          <p className="text-[4rem] md:text-[2rem] leading-[80px] md:leading-[1.6] pr-[2rem] md:pr-0 font-Inter tracking-tight font-semibold" >Hi, my name is Yimika. I do photography, videography and content marketing. Let’s work together.</p>
          <Link to="/contact" className="mt-20 md:mt-5">
            <button className="px-[2rem] py-[1rem] bg-black text-white rounded-md text-[18px]">Contact</button>
          </Link>
        </div>
    </div>
    <div className="w-full flex flex-col items-center gap-10 mt-20 px-[1rem]">
      <div className="flex md:flex-col items-center gap-5">
        <p className="text-[3rem] md:text-[2rem] font-Inter italic">Ile Ijo,</p>
        <p className="text-[3rem] md:text-[2rem] font-Inter italic">Engage Space,</p>
        <p className="text-[3rem] md:text-[2rem] font-Inter italic">Redlight Fashion Room,</p>
        <p className="text-[3rem] md:text-[2rem] font-Inter italic">Saint Moriartyy</p>
      </div>
      <p className="text-[20px] md:text-[18px] text-center font-Inter">I’ve worked with variation of collectives such as Ile Ijo, Engage Space , Redlight Fashion Room and more. 
      </p>
    </div>
    <Skills />
    </div>
  )
}
