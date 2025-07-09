import bcrypt from "bcryptjs";
import User from "../models/userModel.js";
import generateToken from "../utils/generateToken.js";

export const register = async (req, res) => {
  // res.send("Page d'inscription");

  try {
    const { username, email, password, repassword } = req.body;

    // Verifier si les deux mot de passe correspondent
    if (password !== repassword) {
      return res
        .status(400)
        .json({ error: "Les deux mot de passe ne correspond pas" });
    }

    // Verifier si le nom d'utilisateur existe déjà
    const usernameVerification = await User.findOne({ username });
    const emailVerification = await User.findOne({ email });

    if (usernameVerification) {
      return res.status(400).json({ error: "Nom d'utilisateur existe déjà" });
    } else if (emailVerification) {
      return res.status(400).json({ error: "Adresse email existe déjà" });
    }

    // Crypté le mot de passe
    const salt = await bcrypt.genSalt(10);
    const cryptPassword = await bcrypt.hash(password, salt);

    // Ajout de la nouvelle utilisateur s'il n'existe pas encore
    const newUser = new User({
      username,
      email,
      password: cryptPassword,
    });

    if (newUser) {
      generateToken(newUser._id, res);

      await newUser.save();

      res.status(201).json({
        _id: newUser._id,
        username: newUser.username,
        email: newUser.email,
        password: newUser.password,
      });
    } else {
      res.status(400).json({ error: "Erreur lors de l'inscription" });
    }
  } catch (error) {
    console.log("Erreur lors de l'inscription : ", error.message);
    res.status(500).json({ error: "Erreur du serveur" });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    const passVerification = await bcrypt.compare(
      password,
      user?.password || ""
    );

    if (!user || !passVerification) {
      return res
        .status(400)
        .json({ error: "Adresse email ou mot de passe incorrect" });
    }

    generateToken(user._id, res);

    res
      .status(200)
      .json({ _id: user._id, username: user.username, email: user.email });
  } catch (error) {
    console.log("Erreur lors de la connexion : ", error.message);
    res.status(500).json({ error: "Erreur du serveur" });
  }
};

export const logout = (req, res) => {
  try {
    res.cookie("jwt", "", { maxAge: 0 });
    res.status(200).json({ message: "Deconnecter avec succès" });
  } catch (error) {
    console.log("Erreur lors de la deconnexion : ", error.message);
    res.status(500).json({ error: "Erreur du serveur" });
  }
};
