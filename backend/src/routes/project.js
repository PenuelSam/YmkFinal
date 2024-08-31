"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const multer_1 = __importDefault(require("multer"));
const cloudinary_1 = require("cloudinary");
const project_1 = __importDefault(require("../models/project"));
const router = express_1.default.Router();
const storage = multer_1.default.memoryStorage();
const upload = (0, multer_1.default)({
    storage: storage,
    limits: {
        fileSize: 2 * 1024 * 1024 * 1024 //2GB
    }
});
function uploadImages(imageFiles) {
    return __awaiter(this, void 0, void 0, function* () {
        const uploadPromises = imageFiles.map((image) => {
            return new Promise((resolve, reject) => {
                const uploadStream = cloudinary_1.v2.uploader.upload_stream({
                    resource_type: 'image',
                    chunk_size: 6000000, // 6MB
                }, (error, result) => {
                    if (error) {
                        reject(new Error(`Image upload error: ${error.message}`));
                    }
                    else if (result && result.secure_url) {
                        resolve(result.secure_url);
                    }
                    else {
                        reject(new Error('Image upload failed: No secure URL returned.'));
                    }
                });
                uploadStream.end(image.buffer);
            });
        });
        const imageUrls = yield Promise.all(uploadPromises);
        return imageUrls;
    });
}
function uploadVideos(videoFiles) {
    return __awaiter(this, void 0, void 0, function* () {
        const uploadPromises = videoFiles.map((video) => {
            return new Promise((resolve, reject) => {
                const uploadStream = cloudinary_1.v2.uploader.upload_stream({
                    resource_type: 'video',
                    chunk_size: 6000000, // 6MB
                }, (error, result) => {
                    if (error) {
                        reject(new Error(`Video upload error: ${error.message}`));
                    }
                    else if (result && result.secure_url) {
                        resolve(result.secure_url);
                    }
                    else {
                        reject(new Error('Video upload failed: No secure URL returned.'));
                    }
                });
                uploadStream.end(video.buffer);
            });
        });
        const videoUrls = yield Promise.all(uploadPromises);
        return videoUrls;
    });
}
router.post('/upload', upload.fields([{ name: 'imageFiles', maxCount: 10 }, { name: 'videoFiles', maxCount: 3 }]), (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const files = req.files;
        const imageFiles = files.imageFiles || [];
        const videoFiles = files.videoFiles || [];
        const newProject = req.body;
        //upload images and videos to cloudinary
        const [imageUrls, videoUrls] = yield Promise.all([
            uploadImages(imageFiles),
            uploadVideos(videoFiles)
        ]);
        //if upload successful add the urls to the new project
        newProject.imageUrls = imageUrls;
        newProject.videoUrls = videoUrls;
        //save the project in database
        const project = new project_1.default(newProject);
        yield project.save();
        //return a 201 status
        res.status(201).send(project);
    }
    catch (error) {
        console.log("Error creating project", error);
        res.status(500).json({ message: "something went wrong" });
    }
}));
router.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const projects = yield project_1.default.find();
        res.status(200).json(projects);
    }
    catch (error) {
        res.status(500).json({ message: "Error fetching projects" });
    }
}));
router.get("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id.toString();
    try {
        const project = yield project_1.default.findOne({ _id: id });
        res.status(200).json(project);
    }
    catch (error) {
        res.status(500).json({ message: "something went wrong" });
    }
}));
router.put("/:projectId", upload.fields([{ name: 'imageFiles', maxCount: 10 }, { name: 'videoFiles', maxCount: 3 }]), (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const updatedProject = req.body;
        console.log(updatedProject);
        const files = req.files;
        let updatedImageUrls = [];
        let updatedVideoUrls = [];
        console.log('Received files:', files);
        if (files) {
            if (files.imageFiles) {
                console.log('Image files:', files.imageFiles);
                updatedImageUrls = yield uploadImages(files.imageFiles);
            }
            if (files.videoFiles) {
                console.log('Video files:', files.videoFiles);
                updatedVideoUrls = yield uploadVideos(files.videoFiles);
            }
        }
        const project = yield project_1.default.findOneAndUpdate({
            _id: req.params.projectId
        }, updatedProject, { new: true });
        if (!project) {
            return res.status(404).json({ message: "Project not found" });
        }
        if (project) {
            project.imageUrls = [...updatedImageUrls, ...(updatedProject.imageUrls || [])];
            project.videoUrls = [...updatedVideoUrls, ...(updatedProject.videoUrls || [])];
        }
        //const files = req.files as { [fieldname: string]: Express.Multer.File[] } | undefined;
        /*if (files) {
          if (files.imageFiles) {
            updatedImageUrls = await uploadImages(files.imageFiles);
          }
  
          if (files.videoFiles) {
            updatedVideoUrls = await uploadVideos(files.videoFiles);
          }
        }*/
        // Debugging logs to check received files
        console.log(project);
        yield (project === null || project === void 0 ? void 0 : project.save());
        res.status(201).json(project);
    }
    catch (error) {
        res.status(500).json({ message: "Something went wrong" });
        console.log(error);
    }
}));
exports.default = router;
