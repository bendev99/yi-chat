import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ContactForm = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Réinitialiser l'erreur du champ modifié si la valeur est valide
    if (
      name === "name" &&
      value.trim() &&
      /^[A-Za-zÀ-ÿ\s'-]{4,60}$/.test(value)
    ) {
      setErrors((prev) => ({ ...prev, name: "" }));
    } else if (
      name === "email" &&
      value.trim() &&
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
    ) {
      setErrors((prev) => ({ ...prev, email: "" }));
    } else if (name === "phone" && value.trim() && /^[0-9]{10}$/.test(value)) {
      setErrors((prev) => ({ ...prev, phone: "" }));
    } else if (name === "message" && value.trim()) {
      setErrors((prev) => ({ ...prev, message: "" }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let hasErrors = false;
    const newErrors = {
      name: "",
      email: "",
      phone: "",
      message: "",
    };

    // Validation du champ name
    if (!formData.name.trim()) {
      newErrors.name = "Le nom est requis";
      hasErrors = true;
    } else if (formData.name.length < 4) {
      newErrors.name = "Le nom doit contenir au moins 4 lettres";
      hasErrors = true;
    }

    // Validation du champ email
    if (!formData.email.trim()) {
      newErrors.email = "L'email est requis";
      hasErrors = true;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Entrer une adresse email valide";
      hasErrors = true;
    }

    // Validation du champ phone
    if (!formData.phone.trim()) {
      newErrors.phone = "Le numéro de téléphone est requis";
      hasErrors = true;
    } else if (!/^[0-9]{10}$/.test(formData.phone)) {
      newErrors.phone = "Le numéro doit contenir exactement 10 chiffres";
      hasErrors = true;
    }

    // Validation du champ message
    if (!formData.message.trim()) {
      newErrors.message = "Le message ne peut pas être vide";
      hasErrors = true;
    }

    setErrors(newErrors);

    if (!hasErrors) {
      console.log("Form submitted:", formData);
      onClose();
      setFormData({ name: "", email: "", phone: "", message: "" });
      setErrors({ name: "", email: "", phone: "", message: "" });
    }
  };

  // Animation variants pour la modale
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

  // Animation variants pour le contenu de la modale
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
          <motion.div className="modal-box relative" variants={contentVariants}>
            <motion.button
              className="btn btn-sm btn-circle absolute right-2 top-2"
              onClick={onClose}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              ✕
            </motion.button>
            <h3 className="text-xl font-bold mb-4 text-center uppercase">
              Contact
            </h3>
            <div className="space-y-4">
              {/* CHAMP POUR LE NOM */}
              <div className="form-control">
                <span className="label">Nom</span>
                <label className="input validator w-full">
                  <svg
                    className="h-[1em] opacity-50"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <g
                      strokeLinejoin="round"
                      strokeLinecap="round"
                      strokeWidth="2.5"
                      fill="none"
                      stroke="currentColor"
                    >
                      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                      <circle cx="12" cy="7" r="4"></circle>
                    </g>
                  </svg>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    placeholder="Entrer votre nom"
                    pattern="[A-Za-z]*"
                    minLength="4"
                    title="Le nom doit contenir au moins 4 lettres"
                  />
                </label>
                {errors.name && (
                  <p className="text-error text-sm mt-1">{errors.name}</p>
                )}
                <p className="validator-hint hidden">
                  Le nom doit contenir au moins 4 lettres
                </p>
              </div>

              {/* CHAMP POUR L'EMAIL */}
              <div className="form-control">
                <span className="label">Adresse email</span>
                <label className="input validator w-full">
                  <svg
                    className="h-[1em] opacity-50"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <g
                      strokeLinejoin="round"
                      strokeLinecap="round"
                      strokeWidth="2.5"
                      fill="none"
                      stroke="currentColor"
                    >
                      <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                    </g>
                  </svg>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="exemple@gmail.com"
                    title="Entrer une adresse email valide"
                    required
                  />
                </label>
                {errors.email && (
                  <p className="text-error text-sm mt-1">{errors.email}</p>
                )}
                <div className="validator-hint hidden">
                  Entrer une adresse email valide
                </div>
              </div>

              {/* CHAMP POUR LE TELEPHONE */}
              <div className="form-control">
                <span className="label">Numéro de téléphone</span>
                <label className="input validator w-full">
                  <svg
                    className="h-[1em] opacity-50"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                  >
                    <g fill="none">
                      <path
                        d="M7.25 11.5C6.83579 11.5 6.5 11.8358 6.5 12.25C6.5 12.6642 6.83579 13 7.25 13H8.75C9.16421 13 9.5 12.6642 9.5 12.25C9.5 11.8358 9.16421 11.5 8.75 11.5H7.25Z"
                        fill="currentColor"
                      ></path>
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M6 1C4.61929 1 3.5 2.11929 3.5 3.5V12.5C3.5 13.8807 4.61929 15 6 15H10C11.3807 15 12.5 13.8807 12.5 12.5V3.5C12.5 2.11929 11.3807 1 10 1H6ZM10 2.5H9.5V3C9.5 3.27614 9.27614 3.5 9 3.5H7C6.72386 3.5 6.5 3.27614 6.5 3V2.5H6C5.44771 2.5 5 2.94772 5 3.5V12.5C5 13.0523 5.44772 13.5 6 13.5H10C10.5523 13.5 11 13.0523 11 12.5V3.5C11 2.94772 10.5523 2.5 10 2.5Z"
                        fill="currentColor"
                      ></path>
                    </g>
                  </svg>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="tabular-nums"
                    required
                    placeholder="Phone"
                    pattern="[0-9]*"
                    minLength="10"
                    maxLength="10"
                    title="Entrer un numéro de téléphone valide"
                  />
                </label>
                {errors.phone && (
                  <p className="text-error text-sm mt-1">{errors.phone}</p>
                )}
                <p className="validator-hint hidden">Must be 10 digits</p>
              </div>

              {/* CHAMP POUR LE MESSAGE */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Message</span>
                </label>
                <fieldset className="fieldset">
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    className="textarea h-24 w-full"
                    placeholder="Entrer votre message"
                    title="Entrer votre message"
                    required
                  ></textarea>
                </fieldset>
                {errors.message && (
                  <p className="text-error text-sm mt-1">{errors.message}</p>
                )}
              </div>

              <div className="modal-action">
                <motion.button
                  className="btn btn-primary"
                  onClick={handleSubmit}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Envoyer
                </motion.button>
                <motion.button
                  className="btn"
                  onClick={onClose}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Annuler
                </motion.button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ContactForm;
