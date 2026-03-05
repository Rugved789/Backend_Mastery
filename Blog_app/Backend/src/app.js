import express from "express";
import multer from "multer";
import uploadfile from "./services/storage.service.js";
import { blogModel } from "./models/blog.model.js";
import cors from "cors";
import authRoutes from "./routes/auth.route.js";
import postRoutes from "./routes/post.routes.js"
import cookieParser from "cookie-parser";

export const app = express();
// enable CORS middleware (remember the function call)
app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.use("/api/auth", authRoutes);
app.use("/api/auth", postRoutes);

const upload = multer({ storage: multer.memoryStorage() });

app.post("/create-blog", upload.single("image"), async (req, res) => {
  const result = await uploadfile(req.file.buffer);

  const blog = await blogModel.create({
    img_url: result.url,
    caption: req.body.caption,
  });

  return res.status(201).json({
    message: "blog Created",
    blog,
  });
});

app.get("/get-blog", async (req, res) => {
  const userBlog = await blogModel.find();

  return res.status(200).json({
    message: "Blog got sucessfully",
    userBlog,
  });
});
