import { Index } from "../../component/nav";
import { Projects } from "../../data/projects";
import { useRef, useState } from "react";
import { FaPlay } from "react-icons/fa";

export const Videos = () => {
    const [playingIndex, setPlayingIndex] = useState<string | null>(null); // Track the currently playing video index
    const videoRefs = useRef<HTMLVideoElement[]>([]); // Array of refs for each video

    const handlePlayPause = (index: string) => {
        const currentVideo = videoRefs.current[parseInt(index)];

        // Pause the currently playing video if it's different
        if (playingIndex !== null && playingIndex !== index) {
            const previousVideo = videoRefs.current[parseInt(playingIndex)];
            if (previousVideo) {
                previousVideo.pause();
                previousVideo.controls = false;
                previousVideo.style.display = "none"; 
            }
        }

        // Play or pause the current video
        if (currentVideo.paused) {
            currentVideo.style.display = "block";
            currentVideo.play();
            currentVideo.controls = true;
            setPlayingIndex(index);
        } else {
            currentVideo.pause();
            currentVideo.controls = false;
            currentVideo.style.display = "none"; 
            setPlayingIndex(null);
        }
    };

    return (
        <div className="relative">
            <Index />
            <div className="ml-5 relative top-[10rem]">
                <h1 className="text-[5rem] md:text-[6rem] sm:text-[3.5rem] xsm:text-[3rem] md:flex md:justify-center font-bold uppercase font-Inter">
                    Videos
                </h1>
            </div>
            {Projects && (
                <div className="max-w-[1400px] md:w-full md:px-[1rem] mx-auto grid grid-cols-2 md:grid-cols-1  gap-4 mt-[15rem]  mb-[3rem]">
                    {Projects.map((prod, prodIndex) =>
                        prod.videoUrls.map((url, index) => {
                            const uniqueIndex = `${prodIndex}-${index}`; // Create a unique index for each video
                            return (
                                <div key={uniqueIndex}>
                                     <div  className="flex  gap-4 m-2 relative group h-[300px]">
                                    {/* Cover Image */}
                                    <img
                                        src={prod.coverPhoto}
                                        alt={`Thumbnail for video ${index + 1}`}
                                        className={`absolute top-0 left-0 w-full h-full object-cover transition-all duration-300  ${
                                            playingIndex === uniqueIndex ? "hidden" : "block"
                                        }`}
                                    />
                                    {/* Play Button Overlay */}
                                    {playingIndex !== uniqueIndex && (
                                        <div
                                            className="absolute left-[45%] top-[40%] flex items-center w-[60px] h-[60px]  bg-black/50 rounded-full justify-center cursor-pointer"
                                            onClick={() => handlePlayPause(uniqueIndex)}
                                        >
                                           <FaPlay style={{fontSize: "25px", color: "white", fill: "white"}}/>
                                        </div>
                                    )}
                                    {/* Video Element */}
                                    <div className="w-full h-[400px] flex items-center justify-center">
                                    <video
                                        ref={(el) => {
                                            if (el) videoRefs.current[parseInt(uniqueIndex)] = el;
                                        }}
                                        src={url}
                                        className={`absolute top-0 left-0 w-full h-full object-contain transition-all duration-300 ${
                                            playingIndex === uniqueIndex ? "" : "hidden"
                                        }`}
                                    />
                                    </div>
                                    
                                     </div>
                                    <h1 className="text-[1.3rem] text-center font-bold underline font-Inter">{prod.name}</h1>
                                </div>
                               
                            );
                        })
                    )}
                </div>
            )}
        </div>
    );
};
