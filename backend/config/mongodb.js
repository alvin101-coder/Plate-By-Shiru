import mongoose from "mongoose";

const connectDB = async (params) => {
    mongoose.connection.on('connected', () => {
        console.log("connection secured");

    })
    await mongoose.connect(`${process.env.MONGODB_URI}/menu`)

}

export default connectDB