import {Schema, model} from "mongoose";

export type ProjectType = {
    _id: string;
    name: string;
    videoUrls: string[];
    imageUrls: string[];
}

const projectSchema = new Schema<ProjectType>({
    name: String,
    videoUrls: [String],
    imageUrls: [String]
})

const Project = model<ProjectType>("Project", projectSchema)

export default Project