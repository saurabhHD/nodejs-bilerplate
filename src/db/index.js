import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async ()=> {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
        console.log(`Mongodb connected DB hosted on: ${connectionInstance.connection.host}`)
    } catch (error) {
        console.log("Mongodb connection error : ", error)
        throw error
    }
}

export default connectDB