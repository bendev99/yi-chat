import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Base de donner connecter");
  } catch (error) {
    console.log("Erreur de connexion au base de donner : ", error.message);
  }
};

export default connectDB;
