import mongoose from "mongoose";

const connectDB = async () =>{
    try{
        const conn = await mongoose.connect(process.env.DB_URL);
        console.log(`Connect to Mongo DB${conn}`)

    }catch(error){
        console.log(`Error in mongodb ${error}`)
    }

}
export default connectDB;