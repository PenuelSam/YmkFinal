"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
require("dotenv/config.js");
const mongoose_1 = __importDefault(require("mongoose"));
const path_1 = __importDefault(require("path"));
const cloudinary_1 = require("cloudinary");
const user_1 = __importDefault(require("./routes/user"));
const auth_1 = __importDefault(require("./routes/auth"));
const project_1 = __importDefault(require("./routes/project"));
cloudinary_1.v2.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});
mongoose_1.default.connect(process.env.CONN_STR)
    .then((con) => console.log("DB connected"))
    .catch((err) => console.log(err));
const app = (0, express_1.default)();
const port = 9000;
app.use((req, res, next) => {
    req.setTimeout(300000); // Set timeout to 5 minutes (300000 ms)
    res.setTimeout(300000); // Set timeout to 5 minutes (300000 ms)
    next();
});
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use((0, cors_1.default)({
    origin: process.env.FRONTEND_URL,
    credentials: true,
}));
//app.use(express.static(path.join(__dirname, "../../frontend/dist")));
app.use(express_1.default.static(path_1.default.join(__dirname, "../../frontend/dist")));
app.use('/api/user', user_1.default);
app.use('/api/auth', auth_1.default);
app.use('/api/project', project_1.default);
app.get("*", (req, res) => {
    res.sendFile(path_1.default.join(__dirname, "../../frontend/dist/index.html"));
});
/*app.get('*', (req: Request, res: Response) => {
   res.sendFile(path.join(__dirname,"../../frontend/dist/index.html"))
})*/
app.listen(process.env.PORT || port, () => {
    console.log(`Server is running on port ${port}`);
});
