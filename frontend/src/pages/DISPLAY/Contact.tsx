import { IoLogoInstagram, IoMdMail } from "react-icons/io";
import { Link } from "react-router-dom";
import { Index } from "../../component/nav";

export const Contact = () => {
  return (
    <div className="">
      <Index />
      <div className="flex flex-col gap-10  ml-10 my-[20rem]">
        <h1 className="text-[5rem] md:text-[2rem] uppercase font-Inter ">
          Contact Me
        </h1>
        <div className="flex flex-col gap-10">
          <p className="font-Inter text-[1.5rem] md:text-[1rem] sm:text-[0.8rem] xsm:text-[0.5rem]">
            YMKUPNEXT! IS YOUR FAVOURITE DIRECTOR'S FAVOURITE DIRECTOR
          </p>
          <div className="flex items-center gap-5">
            <p className="text-[1.5rem] md:text-[1rem] sm:text-[0.8rem] xsm:text-[0.5rem] font-Inter">
              contactymk30@gmail.com
            </p>
            <div className="w-[0.5px] h-10 md:h-5 bg-white"></div>
            <Link
              to="mailto:contactymk30@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-5 border-2 border-black px-3 py-1 rounded-full"
            >
              <p>click  to send me a mail</p>
              <IoMdMail className="text-[30px] md:text-[20px]" />
            </Link>
            <Link to="https://www.instagram.com/ymkupnext" target="_blank">
              <IoLogoInstagram className="text-[30px] md:text-[20px]" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};