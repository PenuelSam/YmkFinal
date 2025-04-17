import { Link } from "react-router-dom"
import { skills } from "../../data/projects"


function Skills() {
  return (
    <div className="px-[3.5rem] mt-[3rem] md:px-[2rem]">
      <h1 className="text-[4rem] md:text-[2rem] text-center font-apercuM">What I do.</h1>
      <div className="  md:w-full  mx-[1rem]  sm:w-[90%] grid grid-cols-3 md:grid-cols-1 gap-4 mt-[3rem]  mb-[3rem] ">
            {
                skills.map((s) => (
                    <div className="w-full h-full flex flex-col items-center gap-5">
                        <div className="w-full h-full mb-10 md:w-full"><img src={s.image} alt="" className="w-full h-full object-cover rounded-md"/></div>
                        <div><h1 className="text-[2rem] font-bold font-apercuM capitalize">{s.skill}</h1></div>
                        <div><p className="text-[18px] text-center font-apercuR">{s.text}</p></div>
                    </div>
                ))
            }
      </div>
      <Link to="/contact" className="mt-20 flex justify-center">
      <button className="px-[2rem] py-[1rem] bg-black text-white rounded-md font-apercuR text-[18px]">Wanna talk?</button>
      </Link>
      <div className="w-full h-[20vh] bg-transparent"></div>
    </div>
  )
}

export default Skills
