import mongoose from "mongoose";
import { config } from "dotenv"; 

config()

const connection = mongoose.connect(
    process.env.SECRET_KEY
)

export default connection