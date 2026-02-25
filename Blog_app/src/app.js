import express from "express";
import multer from "multer";
import uploadfile from "./services/storage.service.js";


export const app = express();
app.use(express.json());
const upload = multer({storage:multer.memoryStorage()})


app.post("/create-blog",upload.single("image"), async (req,res)=>{
    console.log(req.body);
    console.log(req.file)

    const result = await uploadfile(req.file.buffer);
    console.log(result);
})
app.get("/get-blog",async (req,res)=>{
    
})
