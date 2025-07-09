import express from "express";
import dotenv from "dotenv";

import authRoutes from "./routes/authRoutes.js";
import connectDB from "./db/connectDB.js";

const app = express();
const port = process.env.PORT || 5000;

dotenv.config();

app.use(express.json());
app.use("/auth", authRoutes);

// app.get("/", (req, res) => {
//   res.send("Page d'accueil");
// });

app.listen(5000, () => {
  connectDB();
  console.log(`Server démarer sur le port ${port}`);
});
