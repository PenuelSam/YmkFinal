

import { Modal } from "./Modal"
import { IoClose } from "react-icons/io5";
import { useState } from "react";
import { Projects } from "../../data/projects";
import { Link } from "react-router-dom";



export const Images = () => {
   const [modal, setModal] = useState(false)

  const projects = Projects.filter(prod => prod.imageUrls.length > 0)

    

  return (
    <div>
        {modal && <Modal />}
        {modal && (
            <div className="fixed right-5 top-5 z-[999] cursor-pointer " onClick={() => setModal(!modal)}><IoClose fontSize={40}/></div>
        )}
        
        
        <div className="  top-[6rem] relative flex flex-col items-center justify-between">
       
        <div className="w-full flex   items-center gap-5  md:mx-5 md:w-[90%] justify-center">
            {/*<h1 className="text-[15rem] font-IFkicaBold">{totalLength < 10 ? `0${totalLength}` : totalLength} -</h1>*/}
            <h1 className="text-[5rem]   sm:text-[3.5rem] xsm:text-[3rem] flex justify-center font-bold uppercase font-apercuB ">Images</h1>
        </div>
        
      
        {
            projects && (
                <div className="  md:w-full  mx-[1rem]  sm:w-[90%] grid grid-cols-3 md:grid-cols-1 gap-4 mt-[3rem]  mb-[3rem] " >
      
                
                    {
                        
                        projects.map((prod) => {
                            const Images = prod.imageUrls
                            return (
                                <div onClick={() => setModal(!modal)} className="cursor-pointer">
                                     
                                    
                                   
                                <div className="w-full  relative">
                                {Images.slice(0,1).map((url, index) => (
                                     
                                      <Link key={index} to={`/image/${prod._id}`} className="block relative">
                                      <div className="   my-2">
                                         <img src={url} alt="" className="w-full h-full object-cover rounded-[10px] shadow-md" />
                                         <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 bg-white/50 px-[10px] py-3 rounded-md z-[998]">
                                            <p className="text-[#000] font-apercuR text-[18px]">Explore {prod.name}</p>
                                        </div>
                                       </div>
                                      </Link>
                                       
                                       
                                    ))}
                                </div>
                                </div>
                            )      
                           
                    }   )
                        
                    }
                
                </div>
            )
        }


        </div>
        <div className="w-full h-[20vh]"></div>
    </div>
  )
}
