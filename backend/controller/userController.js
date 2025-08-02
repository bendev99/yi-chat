import User from "../models/userModel.js";

export const getAllUsers = async (req, res) => {
  try {
    const connectedUserId = req.user._id;
    const allUsers = await User.find({ _id: { $ne: connectedUserId } })
      .select("-password -__v")
      .sort({ createdAt: -1 });
    res.status(200).json(allUsers);
  } catch (error) {
    console.error("Erreur dans getAllUsers : ", error.message);
    res.status(500).json({ error: "Erreur serveur interne" });
  }
};
