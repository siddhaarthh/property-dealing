import mongoose from "mongoose"; // Import mongoose

// Connect to MongoDB
const ConnectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log(`MongoDB Connected`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
  }
};

export default ConnectDB;
