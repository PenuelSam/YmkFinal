import mongoose from 'mongoose'; // Use proper ES module import

export type ProjectType = {
    _id: string;
    name: string;
    videoUrls: string[];
    imageUrls: string[];
};

const projectSchema = new mongoose.Schema<ProjectType>({
    name: { type: String, required: true },
    videoUrls: [String],
    imageUrls: [String]
});

const Project = mongoose.model<ProjectType>("Project", projectSchema);

export default Project;
