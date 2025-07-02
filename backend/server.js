import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("Bienvenu sur express.js");
});

app.listen(8000, () => console.log("Server demmarer"));
