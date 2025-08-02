import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  EyeIcon,
  EyeSlashIcon,
  LockClosedIcon,
  UserIcon,
} from "@heroicons/react/16/solid";

const Login = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  const handlePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (
      name === "email" &&
      value.trim() &&
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
    ) {
      setErrors((prev) => ({ ...prev, email: "" }));
    } else if (name === "password" && value.trim() && value.length >= 6) {
      setErrors((prev) => ({ ...prev, password: "" }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let hasErrors = false;
    const newErrors = {
      email: "",
      password: "",
    };

    if (!formData.email.trim()) {
      newErrors.email = "L'email est requis";
      hasErrors = true;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Entrer une adresse email valide";
      hasErrors = true;
    }

    if (!formData.password.trim()) {
      newErrors.password = "Le mot de passe est requis";
      hasErrors = true;
    } else if (formData.password.length < 6) {
      newErrors.password =
        "Le mot de passe doit contenir au moins 6 caractères";
      hasErrors = true;
    }

    setErrors(newErrors);

    if (!hasErrors) {
      console.log("Login submitted:", formData);
      setFormData({ email: "", password: "" });
      setErrors({ email: "", password: "" });
      onClose();
      navigate("/home");
    }
  };

  const handleCancel = () => {
    setFormData({ email: "", password: "" });
    setErrors({ email: "", password: "" });
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
              Connexion
            </h3>
            <div className="space-y-4">
              {/* Champ pour le nom */}
              <div className="form-control">
                <span className="label text-base-content">Adresse email</span>
                <label className="input validator w-full bg-base-100 text-base-content flex items-center">
                  <UserIcon className="w-5 h-5 fill-gray-500" />
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
                    onClick={handlePassword}
                    className="absolute inset-y-0 right-0 pr-3 flex items-center"
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

              <div className="flex justify-between items-center mt-6">
                <motion.div
                  className="text-sm text-base-content hover:text-primary cursor-pointer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                ></motion.div>
                <div className="space-x-4">
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
                    Connexion
                  </motion.button>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Login;
