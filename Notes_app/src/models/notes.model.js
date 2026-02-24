import mongoose from "mongoose";


const noteSchema = new mongoose.Schema({
    title:String,
    desc:String,
})


export const nodeModel = mongoose.model("note",noteSchema);

