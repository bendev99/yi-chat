import bcrypt from "bcryptjs";
import User from "../models/userModel.js";
import generateToken from "../utils/generateToken.js";

// Fonction pour la méthode d'inscription
export const register = async (req, res) => {
  try {
    const { name, email, phone, gender, password, confirmPassword } = req.body;

    // Verifier si les deux mot de passe correspondent
    if (password !== confirmPassword) {
      return res
        .status(400)
        .json({ error: "Les deux mot de passe ne correspond pas" });
    }

    // Verifier si l'adresse email ou le numéro de téléphone existe déjà
    const user = await User.findOne({ email });
    const userPhone = await User.findOne({ phone });

    if (user) {
      return res.status(400).json({ error: "Adresse email existe déjà" });
    } else if (userPhone) {
      return res.status(400).json({ error: "Numéro de téléphone existe déjà" });
    }

    // Crypté le mot de passe
    const salt = await bcrypt.genSalt(10);
    const cryptPassword = await bcrypt.hash(password, salt);

    // Ajout de la nouvelle utilisateur s'il n'existe pas encore
    const newUser = new User({
      name,
      email,
      phone,
      gender,
      profilePic: `https://avatar.iran.liara.run/username?username=${name}`,
      password: cryptPassword,
    });

    if (newUser) {
      generateToken(newUser._id, res);

      await newUser.save();

      res.status(201).json({
        _id: newUser._id,
        name: newUser.name,
        email: newUser.email,
        phone: newUser.phone,
        gender: newUser.gender,
        profilePic: newUser.profilePic,
        password: newUser.password,
      });
    } else {
      res.status(400).json({ error: "Erreur lors de l'inscription" });
    }
  } catch (error) {
    console.log(
      "Erreur lors de l'ajout du nouvel utilisateur : ",
      error.message
    );
    res.status(500).json({ error: "Erreur du serveur" });
  }
};

// Fonction pour la méthode de connexion
export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Vérifier si l'utilisateur existe
    const user = await User.findOne({ email });

    // Verification du mot de passe
    const passVerification = await bcrypt.compare(
      password,
      user?.password || ""
    );

    if (!user) {
      if (!email.trim()) {
        return res.status(400).json({ error: "Tout les champs sont requis" });
      } else {
        return res.status(400).json({ error: "Adresse email incorrect" });
      }
    } else if (!passVerification) {
      if (!password.trim()) {
        return res.status(400).json({ error: "Mot de passe requis" });
      } else {
        return res.status(400).json({ error: "Mot de passe incorrect" });
      }
    }

    generateToken(user._id, res);

    res.status(200).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      phone: user.phone,
      gender: user.gender,
      profilePic: user.profilePic,
    });
  } catch (error) {
    console.log("Erreur lors de la connexion : ", error.message);
    res.status(500).json({ error: "Erreur du serveur" });
  }
};

// Fonction pour la deconnexion
export const logout = (req, res) => {
  try {
    res.cookie("jwt", "", { maxAge: 0 });
    res.status(200).json({ message: "Deconnecter avec succès" });
  } catch (error) {
    console.log("Erreur lors de la deconnexion : ", error.message);
    res.status(500).json({ error: "Erreur du serveur" });
  }
};
