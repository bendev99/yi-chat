import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";

const Contact = ({ isOpen, onClose }) => {
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

  const [loading, setLoading] = useState(false);

  const service_id = "service_9wrxqtf";
  const template_id = "yichat_contact";
  const public_key = "oYOMMJgqCBdlKZwD1";

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    // Mettre à jour formData
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Validation en temps réel et définition des erreurs
    const newErrors = { ...errors };

    if (name === "name") {
      if (!value.trim()) {
        newErrors.name = "Le nom est requis";
      } else if (value.length < 4) {
        newErrors.name = "Le nom doit contenir au moins 4 lettres";
      } else if (!/^[A-Za-zÀ-ÿ\s'-]{4,60}$/.test(value)) {
        newErrors.name =
          "Le nom doit contenir entre 4 et 60 lettres, espaces, apostrophes ou tirets";
      } else {
        newErrors.name = "";
      }
    } else if (name === "email") {
      if (!value.trim()) {
        newErrors.email = "L'email est requis";
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
        newErrors.email = "Entrer une adresse email valide";
      } else {
        newErrors.email = "";
      }
    } else if (name === "phone") {
      if (!value.trim()) {
        newErrors.phone = "Le numéro de téléphone est requis";
      } else if (!/^[0-9]{10}$/.test(value)) {
        newErrors.phone = "Le numéro doit contenir exactement 10 chiffres";
      } else {
        newErrors.phone = "";
      }
    } else if (name === "message") {
      if (!value.trim()) {
        newErrors.message = "Le message ne peut pas être vide";
      } else {
        newErrors.message = "";
      }
    }

    setErrors(newErrors);
  };

  // Fonction pour gérer la soumission du formulaire
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // Vérifier s'il y a des erreurs
    const dataCheck = Object.values(formData).every(
      (value) => value.trim() !== ""
    );

    if (dataCheck) {
      emailjs
        .send(service_id, template_id, formData, public_key)
        .then(
          (response) => {
            toast.success("Message envoyé avec succès !");

            setFormData({ name: "", email: "", phone: "", message: "" });
            onClose();
          },
          (error) => {
            toast.error(
              "Échec de l'envoi du message. Veuillez réessayer plus tard." +
                error
            );
          }
        )
        .finally(() => {
          setLoading(false);
        });
    } else {
      toast.error("Veuillez corriger les erreurs dans le formulaire.");
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
                    title="Le nom doit contenir au moins 4 lettres"
                  />
                </label>
                {errors.name && (
                  <p className="text-error text-sm mt-1">{errors.name}</p>
                )}
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
                    minLength="10"
                    maxLength="10"
                    title="Entrer un numéro de téléphone valide"
                  />
                </label>
                {errors.phone && (
                  <p className="text-error text-sm mt-1">{errors.phone}</p>
                )}
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
                  className="btn"
                  onClick={onClose}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Annuler
                </motion.button>

                <motion.button
                  className="btn btn-primary"
                  onClick={handleSubmit}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  disabled={loading}
                >
                  {loading ? (
                    <span className="loading loading-spinner"></span>
                  ) : (
                    "Envoyer"
                  )}
                </motion.button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Contact;
