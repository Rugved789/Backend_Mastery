import mongoose from "mongoose";

async function connectDB() {
    await mongoose.connect("mongodb+srv://rugved:@backendmastery.qepsgvr.mongodb.net/backend");


    console.log("Connected to DB");

}


export default connectDB;


// 5aYmBg7lC9zKbBfo