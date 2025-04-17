import { useParams } from "react-router-dom";
import { useState } from "react";
import { IoIosArrowDropright } from "react-icons/io";
import { IoIosArrowDropleft } from "react-icons/io";
import { Projects } from "../../data/projects";
import { Index } from "../../component/nav";

export const ImageView = () => {
  const { imageId } = useParams();
  const Project = Projects.find((prod) => prod._id === imageId);
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);
  const [showModal, setShowModal] = useState(false);

interface Project {
    _id: string;
    name: string;
    imageUrls: string[];
}



const handleImageClick = (index: number): void => {
    setSelectedImageIndex(index);
    setShowModal(true);
};

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleNextImage = () => {
    if (Project) {
      setSelectedImageIndex(
        ((selectedImageIndex ?? 0) + 1) % Project.imageUrls.length
      );
    }
  };

  const handlePrevImage = () => {
    if (Project) {
      setSelectedImageIndex(
        ((selectedImageIndex ?? 0) - 1 + Project.imageUrls.length) %
          Project.imageUrls.length
      );
    }
  };

  return (
    <>
    <Index />
    <div className="w-full h-full  md:px-2 sm:px-0 flex flex-col items-center py-[3rem]">
      <h1 className="text-[3rem] pb-3 font-apercuB">{Project?.name}</h1>

      {/* Image grid section */}
      <div className=" md:w-full  mx-[1rem]  sm:w-[90%] grid grid-cols-3 md:grid-cols-2 gap-4 mt-[3rem]  mb-[3rem]  place-items-center">
        {Project?.imageUrls.map((url, index) => (
          <div
            key={url}
            className="  cursor-pointer"
            onClick={() => handleImageClick(index)}
          >
            <img
              src={url}
              alt="image"
              className="w-full h-full object-cover rounded-[10px]"
            />
          </div>
        ))}
      </div>

      {/* Modal section */}
      {showModal && (
        <div className="fixed top-0 left-0 w-full h-full bg-[#f6f3ea] z-[999]  flex items-center justify-center">
          <div className=" w-[80%] h-[80%] ">
            <button
              className="absolute top-5 md:right-3  sm:right-5 right-[3rem] text-[30px]  text-[#333] cursor-pointer "
              onClick={handleCloseModal}
            >
              &times;
            </button>
           
            <div className="w-full h-full flex items-center justify-center">
              <img
                src={Project?.imageUrls[selectedImageIndex ?? 0]}
                alt="Selected image"
                className="w-full h-full object-cover rounded-[10px]"
              />
            </div>
            <div className="absolute bottom-[45%] md:left-2  left-[3rem]">
            <button
                className="text-[3rem] font-bold cursor-pointer text-[#333]"
                onClick={handlePrevImage}
              >
                <IoIosArrowDropleft style={{fontSize: "30px"}}/>
              </button>
            </div>
            <div className="absolute bottom-[45%]  md:right-2 right-[3rem] flex gap-5">
              
              <button
                className="text-[3rem] font-bold cursor-pointer text-[#333]"
                onClick={handleNextImage}
              >
              <IoIosArrowDropright style={{fontSize: "30px"}}/>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
    </>
    
  );
};