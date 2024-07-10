import mongoose from "mongoose";

let connected = false;

export const connectToDB = async () => {
    if (connected) {
        console.log("Already connected");
        return;
    } 
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        connected = true;
    } catch (error) {
        console.log(error);
    }
};
