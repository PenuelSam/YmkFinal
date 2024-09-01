"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose")); // Use proper ES module import
const projectSchema = new mongoose_1.default.Schema({
    name: { type: String, required: true },
    videoUrls: [String],
    imageUrls: [String]
});
const Project = mongoose_1.default.model("Project", projectSchema);
exports.default = Project;
