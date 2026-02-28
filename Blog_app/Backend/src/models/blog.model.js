import mongoose, { Schema } from "mongoose";

const blogSchema = new mongoose.Schema({
    img_url:String,
    caption:String,
})

export const blogModel= mongoose.model("blog",blogSchema);