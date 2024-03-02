import mongoose from 'mongoose'

const MONGO_URI="mongodb://127.0.0.1:27017/Mern"
async function connectToMongoose(){
   
    console.log("mongodb connected")
   return mongoose.connect(MONGO_URI)
}

export default connectToMongoose