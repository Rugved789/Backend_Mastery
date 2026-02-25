import ImageKit from "@imagekit/nodejs";
import dotenv from "dotenv";

dotenv.config();

if (!process.env.IMAGEKIT_PRIVATE_KEY) {
  throw new Error("IMAGEKIT_PRIVATE_KEY is not set in environment variables");
}

const imageKit = new ImageKit({
  privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
});

async function uploadfile(buffer) {
  const result = await imageKit.files.upload({
    file: buffer.toString("base64"),
    fileName: "image.png",
  });
  return result;
}

export default uploadfile;
