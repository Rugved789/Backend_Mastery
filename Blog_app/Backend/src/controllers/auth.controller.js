import { userModel } from "../models/user.model.js";


async function registerUser(req,res) {
    const {userName,email,password} = req.body;

    const user = await userModel.create({
        userName,email,password
    })
}

export default {registerUser};