import mongoose from "mongoose";


//connect to the mongodb database

const connectDB =async () => {
    mongoose.connection.on('connected',()=>('Database connected'))
    await mongoose.connect(`${process.env.MONGODB_URI}/lms`)
}

export default connectDB; 