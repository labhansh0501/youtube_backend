import mongoose from "mongoose";
import { DB_NAME } from "../constants.js" 

const connectDB = async () =>
{
    try {
        const connnectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log(`MongoDB Connected !! DB HOST: ${connnectionInstance.connection.host}`)
    } catch (error) {
        console.log("monogo db connection error" , error)
        process.exit(1)
    }
}


export default connectDB;