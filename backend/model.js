import  mongoose  from "mongoose";

const userSchema = new mongoose.Schema({
    name:String,
    phone:String,
    email:String,
    uid:String,
    profilePhoto:String,
    coverPhoto:String,
    gender:String,
    dob:String
})

const user = mongoose.model("user", userSchema)

export default user