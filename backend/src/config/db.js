import mongoose from "mongoose"

export const connectDB = async ()=>{
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("Mongodb connected successfully");
        
    } catch (error) {
        console.error("error in connecting mongodb",error)
        process.exit(1)
    }
}