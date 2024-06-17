import mongoose from "mongoose";

const connectDb = async() => {
    try {
        await mongoose.connect(process.env.DB);
        console.log("Database connected "+process.env.DB);

    } catch (error) {
        console.error(error);
    }
};

export default connectDb;