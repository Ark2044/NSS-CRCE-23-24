//src/lib/utils.js
import mongoose from "mongoose"

export const connectToDb = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected to MongoDB database');
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};