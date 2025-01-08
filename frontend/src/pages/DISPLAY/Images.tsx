
import { Index } from "../../component/nav"
import { Modal } from "./Modal"
import { IoClose } from "react-icons/io5";
import { useState } from "react";
import { Projects } from "../../data/projects";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";



export const Images = () => {
   const [modal, setModal] = useState(false)
    

    //const {data: Projects} = useQuery("fetchProjects",apiclient.fetchProjects)

   

    

    
 
      
      



    //const imageLength = Projects.map((prod) => prod.imageUrls )
//const totalLength = imageLength.length



    

  return (
    <div>
        {modal && <Modal />}
        {modal && (
            <div className="fixed right-5 top-5 z-[999] cursor-pointer " onClick={() => setModal(!modal)}><IoClose fontSize={40}/></div>
        )}
        
        {!modal && <Index />}
        <div className=" h-full top-[10rem] relative flex flex-col items-start justify-between">
       
        <div className=" flex  h-[40rem] md:h-[20rem] items-center gap-5 ml-10 md:ml-5 md:w-[90%] md:justify-center">
            {/*<h1 className="text-[15rem] font-IFkicaBold">{totalLength < 10 ? `0${totalLength}` : totalLength} -</h1>*/}
            <h1 className="text-[15rem] md:text-[6rem]  sm:text-[3.5rem] xsm:text-[3rem] md:flex md:justify-center font-bold uppercase font-IFkicaMedium ">Images</h1>
        </div>
        
      
        {
            Projects && (
                <div className=" w-full flex flex-col"  >
      
                
                    {
                        
                        Projects.map((prod) => {
                            const Images = prod.imageUrls
                            return (
                                <div onClick={() => setModal(!modal)} className="cursor-pointer">
                                     
                                     <p className="text-[3rem] md:text-[1.5rem] my-5 w-[95%] mx-auto font-IFkicaLight">{`${prod.name}`}</p>
                                   
                                <div className="w-full pl-[3rem] md:pl-[1rem]">

                                <Swiper
                      spaceBetween={5}
                      slidesPerView={3.5}
                      breakpoints={{
                        768: { slidesPerView: 2.5 }, // For tablets
                        480: { slidesPerView: 1.5 }, // For mobile devices
                      }}
                    >
                               
                                {Images.map((url, index) => (
                                     <SwiperSlide key={index} onClick={() => setModal(!modal)}>
                                       <div className="  w-full  my-2">
                                         <img src={url} alt="" className="w-full h-full object-cover rounded-md" />
                                       </div>
                                       </SwiperSlide>
                                    ))}

                    </Swiper>
                                   
                                </div>
                                </div>
                            )      
                           
                    }   )
                        
                    }
                
                </div>
            )
        }


        </div>
    </div>
  )
}
