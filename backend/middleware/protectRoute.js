import jwt from "jsonwebtoken";
import User from "../models/userModel.js";

const protectRoute = async (req, res, next) => {
  try {
    const token = req.cookies.jwt;
    if (!token) {
      return res.status(401).json({ error: "Accès refuser : sans token" });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    if (!decoded) {
      return res.status(401).json({ error: "Accès refuser : token invalide" });
    }

    const user = await User.findById(decoded.userId).select("-password");
    if (!user) {
      return res.status(404).json({ error: "Utilisateur introuvable" });
    }

    req.user = user;

    next();
  } catch (error) {
    console.log("Erreur dans protectRoute middleware : ", error.message);
    res.status(500).json({ error: "Erreur interne" });
  }
};

export default protectRoute;
