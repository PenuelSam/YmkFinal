
import { useParams } from "react-router-dom"

import { Projects } from "../../data/projects";
export const ImageView = () => {
        const {imageId} = useParams();
        /*const {data: Project} = useQuery("fetchProjectById", () => apiClient.fetchProjectById(imageId as string),{
            enabled: !!imageId
        })*/

            const Project = Projects.find((prod) => prod._id === imageId)
      
    return (
        <div className="container mx-auto h-screen flex flex-col justify-center items-center">
            <h1>Image View</h1>
            <div className="flex justify-center items-center gap-4">
                    {
                        Project?.imageUrls.slice(1).map((url) => (
                            <div className="w-[200px] h-[350px]">
                            <img src={url} alt="image" className="w-full h-full object-cover"/>
                            </div>
                        ))
                    }
                </div>
        </div>
    )
}