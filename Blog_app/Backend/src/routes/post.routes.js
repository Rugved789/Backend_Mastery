import express from "express";
import jwt from "jsonwebtoken";

const router = express.Router();

router.post("/create-post", (req, res) => {
  console.log(req.body);
  console.log(req.cookies);

  const token = req.cookies.token;

  if (!token) {
    return res.status(401).json({
      message: "user is not authorised",
    });
  }

  try{
      jwt.verify(token,process.env.JWT_SECRET);
  }
  catch(err){
    return res.status(401).json({
        message:"Token is invalid"
    })
  }


  res.send("Post Created Successfully");
});

export default router;
