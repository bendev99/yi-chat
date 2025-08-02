import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import {
  AtSymbolIcon,
  EyeIcon,
  EyeSlashIcon,
  LockClosedIcon,
  PhoneIcon,
  UserIcon,
} from "@heroicons/react/16/solid";
import Login from "./LoginForm";

const Register = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const navigate = useNavigate();

  const handlePassword = () => {
    setShowPassword(!showPassword);
  };
  const handleConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Validation pour le champ "name"
    if (name === "name") {
      if (!value.trim()) {
        setErrors((prev) => ({ ...prev, name: "Le nom est requis" }));
      } else if (value.length < 4) {
        setErrors((prev) => ({
          ...prev,
          name: "Le nom doit contenir au moins 4 caractères",
        }));
      } else if (!/^[A-Za-zÀ-ÿ\s'-]{4,60}$/.test(value)) {
        setErrors((prev) => ({
          ...prev,
          name: "Le nom ne peut contenir que des lettres, espaces, apostrophes ou tirets",
        }));
      } else {
        setErrors((prev) => ({ ...prev, name: "" }));
      }
    }

    // Validation pour le champ "email"
    else if (name === "email") {
      if (!value.trim()) {
        setErrors((prev) => ({ ...prev, email: "L'email est requis" }));
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
        setErrors((prev) => ({
          ...prev,
          email: "Entrer une adresse email valide",
        }));
      } else {
        setErrors((prev) => ({ ...prev, email: "" }));
      }
    }

    // Validation pour le champ "phone"
    else if (name === "phone") {
      if (!value.trim()) {
        setErrors((prev) => ({
          ...prev,
          phone: "Le numéro de téléphone est requis",
        }));
      } else if (!/^[0-9]{10}$/.test(value)) {
        setErrors((prev) => ({
          ...prev,
          phone: "Entrer un numéro de téléphone valide",
        }));
      } else {
        setErrors((prev) => ({ ...prev, phone: "" }));
      }
    }

    // Validation pour le champ "password"
    else if (name === "password") {
      if (!value.trim()) {
        setErrors((prev) => ({
          ...prev,
          password: "Le mot de passe est requis",
        }));
      } else if (value.length < 6) {
        setErrors((prev) => ({
          ...prev,
          password: "Le mot de passe doit contenir au moins 6 caractères",
        }));
      } else {
        setErrors((prev) => ({ ...prev, password: "" }));
      }
    }

    // Validation pour le champ "confirmPassword"
    else if (name === "confirmPassword") {
      if (!value.trim()) {
        setErrors((prev) => ({
          ...prev,
          confirmPassword: "La confirmation du mot de passe est requise",
        }));
      } else if (value !== formData.password) {
        setErrors((prev) => ({
          ...prev,
          confirmPassword: "Les mots de passe ne correspondent pas",
        }));
      } else {
        setErrors((prev) => ({ ...prev, confirmPassword: "" }));
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    // Validation du nom
    if (!formData.name.trim()) {
      newErrors.name = "Le nom est requis";
    } else if (formData.name.length < 4) {
      newErrors.name = "Le nom doit contenir au moins 4 caractères";
    } else if (!/^[A-Za-zÀ-ÿ\s'-]{4,60}$/.test(formData.name)) {
      newErrors.name =
        "Le nom ne peut contenir que des lettres, espaces, apostrophes ou tirets";
    }

    // Validation de l'email
    if (!formData.email.trim()) {
      newErrors.email = "L'email est requis";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Entrer une adresse email valide";
    }

    // Validation du téléphone
    if (!formData.phone.trim()) {
      newErrors.phone = "Le numéro de téléphone est requis";
    } else if (!/^[0-9]{10}$/.test(formData.phone)) {
      newErrors.phone = "Entrer un numéro de téléphone valide (10 chiffres)";
    }

    // Validation du mot de passe
    if (!formData.password.trim()) {
      newErrors.password = "Le mot de passe est requis";
    } else if (formData.password.length < 6) {
      newErrors.password =
        "Le mot de passe doit contenir au moins 6 caractères";
    }

    // Validation de la confirmation du mot de passe
    if (!formData.confirmPassword.trim()) {
      newErrors.confirmPassword = "La confirmation du mot de passe est requise";
    } else if (formData.confirmPassword !== formData.password) {
      newErrors.confirmPassword = "Les mots de passe ne correspondent pas";
    }

    setErrors(newErrors);

    // Si aucune erreur, soumettre et naviguer
    if (Object.keys(newErrors).length === 0) {
      console.log("Inscription réussie:", formData);
      setFormData({
        name: "",
        email: "",
        phone: "",
        password: "",
        confirmPassword: "",
      });
      setErrors({});
      navigate("/home");
    }
  };

  const handleCancel = () => {
    setFormData({
      name: "",
      email: "",
      phone: "",
      password: "",
      confirmPassword: "",
    });
    setErrors({
      name: "",
      email: "",
      phone: "",
      password: "",
      confirmPassword: "",
    });
    onClose();
  };

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.3, ease: "easeOut" },
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      transition: { duration: 0.2, ease: "easeIn" },
    },
  };

  const contentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, delay: 0.1, ease: "easeOut" },
    },
  };
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="modal modal-open fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
          variants={modalVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <motion.div
            className="modal-box bg-base-200 text-base-content relative"
            variants={contentVariants}
          >
            <motion.button
              className="btn btn-sm btn-circle absolute right-2 top-2"
              onClick={onClose}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              ✕
            </motion.button>
            <h3 className="text-xl font-bold text-center mb-4 uppercase">
              Inscription
            </h3>
            <div className="space-y-4">
              {/* CHAMP POUR LE NOM */}
              <div className="form-control">
                <span className="label text-base-content">Nom</span>
                <label className="input validator w-full bg-base-100 text-base-content flex items-center">
                  <UserIcon className="w-5 h-5 fill-gray-500" />
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    placeholder="Entrer votre nom"
                    pattern="[A-Za-zÀ-ÿ\s'-]*"
                    minLength="4"
                    maxLength="60"
                    title="Seulement des lettres (y compris accentuées), espaces, apostrophes ou tirets (4-60 caractères)"
                    className="bg-base-100 text-base-content w-full"
                  />
                </label>
                {errors.name && (
                  <p className="text-error text-sm mt-1">{errors.name}</p>
                )}
                <p className="validator-hint hidden text-base-content">
                  Entrer votre vrai nom (au moins 4 caractères, lettres y
                  compris accentuées, espaces, apostrophes ou tirets)
                </p>
              </div>

              {/* CHAMP POUR L'EMAIL */}
              <div className="form-control">
                <span className="label text-base-content">Adresse email</span>
                <label className="input validator w-full bg-base-100 text-base-content flex items-center">
                  <AtSymbolIcon className="w-5 h-5 fill-gray-500" />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="exemple@gmail.com"
                    required
                    className="bg-base-100 text-base-content w-full"
                  />
                </label>
                {errors.email && (
                  <p className="text-error text-sm mt-1">{errors.email}</p>
                )}
                <div className="validator-hint hidden text-base-content">
                  Entrer une adresse email valide
                </div>
              </div>

              {/* CHAMP POUR TELEPHONE */}
              <div className="form-control">
                <span className="label text-base-content">
                  Numéro de téléphone
                </span>
                <label className="input validator w-full bg-base-100 text-base-content flex items-center">
                  <PhoneIcon className="w-5 h-5 fill-gray-500" />
                  <input
                    type="tel"
                    name="phone" // Identifie le champ dans handleInputChange
                    value={formData.phone} // Lie la valeur à l'état formData.phone
                    onChange={handleInputChange} // Déclenche handleInputChange à chaque saisie
                    className="tabular-nums"
                    required
                    placeholder="Phone"
                    pattern="[0-9]*"
                    minLength="10"
                    maxLength="10"
                    title="Must be 10 digits"
                  />
                </label>
                {errors.phone && (
                  <p className="text-error text-sm">{errors.phone}</p>
                )}
              </div>

              {/* CHAMP POUR LE MOT DE PASSE */}
              <div className="form-control">
                <span className="label text-base-content">Mot de passe</span>
                <label className="input validator w-full bg-base-100 text-base-content flex items-center">
                  <LockClosedIcon className="w-5 h-5 fill-gray-500" />
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    placeholder="Entrer votre mot de passe"
                    required
                    minLength="6"
                    className="bg-base-100 text-base-content w-full"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="text-sm mt-1"
                  >
                    {showPassword ? (
                      <EyeSlashIcon className="h-5 w-5 text-gray-500 cursor-pointer" />
                    ) : (
                      <EyeIcon className="h-5 w-5 text-gray-500 cursor-pointer" />
                    )}
                  </button>
                </label>
                {errors.password && (
                  <p className="text-error text-sm mt-1">{errors.password}</p>
                )}
                <div className="validator-hint hidden text-base-content">
                  Le mot de passe doit contenir au moins 6 caractères
                </div>
              </div>

              {/* CHAMP POUR LA CONFIRMATION DU MOT DE PASSE */}
              <div className="form-control">
                <span className="label text-base-content">
                  Confirmer le mot de passe
                </span>
                <label className="input validator w-full bg-base-100 text-base-content flex items-center">
                  <LockClosedIcon className="w-5 h-5 fill-gray-500" />
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                    placeholder="Confirmer votre mot de passe"
                    required
                    className="bg-base-100 text-base-content w-full"
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="text-sm mt-1"
                  >
                    {showConfirmPassword ? (
                      <EyeSlashIcon className="h-5 w-5 text-gray-500 cursor-pointer" />
                    ) : (
                      <EyeIcon className="h-5 w-5 text-gray-500 cursor-pointer" />
                    )}
                  </button>
                </label>
                {errors.confirmPassword && (
                  <p className="text-error text-sm mt-1">
                    {errors.confirmPassword}
                  </p>
                )}
                <div className="validator-hint hidden text-base-content">
                  Doit correspondre au mot de passe
                </div>
              </div>

              {/* CHECK BOX */}
              <div className="flex items-center mx-3 gap-15">
                <div className="form-control">
                  <label className={`label gap-2 cursor-pointer`}>
                    <input
                      type="checkbox"
                      className="checkbox border-gray-500"
                    />
                    <span className="label-text">Male</span>
                  </label>
                </div>
                <div className="form-control">
                  <label className={`label gap-2 cursor-pointer`}>
                    <input
                      type="checkbox"
                      className="checkbox border-gray-500"
                    />
                    <span className="label-text">Male</span>
                  </label>
                </div>
              </div>

              <div className="flex justify-end space-x-4 mt-6">
                <motion.button
                  className="btn bg-base-300 text-base-content"
                  onClick={handleCancel}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Annuler
                </motion.button>
                <motion.button
                  className="btn btn-primary bg-base-300 text-base-content"
                  onClick={handleSubmit}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Inscription
                </motion.button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Register;
