import { Link } from "react-router-dom"
import background from "../../assets/ovmbr/ov-un.mp4"
import { Index } from "../../component/nav"

export const Homepage = () => {
  return (
    <div className=" relative w-full h-full md:flex md:flex-col md:items-center md:justify-center">
      <h1 className="text-[5rem] md:text-[2rem] sm:text-[2.5rem] xsm:text-[1.5rem]   font-bold pl-[7rem] md:pl-0 md:relative md:left-[-1.5rem]">Welcome  To   Ymkupnext's Portfolio</h1>
        <Index />
        <div className="w-full h-full px-[7rem] md:px-[3rem]">
            <video src={background} autoPlay muted loop className="w-full h-full object-cover" />   
        </div>
        <div>
            <div className=" w-full  px-[7rem] md:px-[3rem]">
            
            <div className="flex justify-between md:gap-[15rem]   w-full  items-center ">
                <Link to="/images"><h1 className="text-[5rem] md:text-[2rem] sm:text-[1.5rem] xsm:text-[1rem] font-bold underline font-IFkicaMedium">IMAGES</h1></Link>
                <Link to="/videos"><h1 className="text-[5rem] md:text-[2rem] sm:text-[1.5rem] xsm:text-[1rem] font-bold underline font-IFkicaMedium">VIDEOS</h1></Link>
            </div>
            </div>
        </div>
        
    </div>
  )
}
