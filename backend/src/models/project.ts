// Use require for mongoose
const mongoose = require('mongoose');

// Define the ProjectType interface for TypeScript
export type ProjectType = {
    _id: string;
    name: string;
    videoUrls: string[];
    imageUrls: string[];
};

// Define the schema without passing type arguments directly to mongoose.Schema
const projectSchema = new mongoose.Schema({
    name: { type: String, required: true },
    videoUrls: [{ type: String }],
    imageUrls: [{ type: String }]
});

// Define the model without directly passing type arguments to mongoose.model
const Project = mongoose.model("Project", projectSchema);

// Export the model as default
export default Project;
