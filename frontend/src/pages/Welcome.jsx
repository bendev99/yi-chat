import { useState } from "react";
import { motion } from "framer-motion";

import NavBar from "../components/NavBar";
import ContactForm from "../components/ContactForm";
import Login from "./LoginForm";
import Register from "./RegisterForm";

const Welcome = () => {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);

  const handleContactClick = () => {
    setIsContactOpen(true);
  };
  const handleConnectClick = () => {
    setIsLoginOpen(true);
  };
  const handleRegisterClick = () => {
    setIsRegisterOpen(true);
  };

  const handleCloseContact = () => {
    setIsContactOpen(false);
  };
  const handleCloseLogin = () => {
    setIsLoginOpen(false);
  };
  const handleCloseRegister = () => {
    setIsRegisterOpen(false);
  };

  // Animation variants pour la section Hero
  const heroVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  // Animation variants pour les cartes
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay: i * 0.2, ease: "easeOut" },
    }),
  };

  // Animation variants pour la section Call-to-Action
  const ctaVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  return (
    <div className="min-h-screen bg-base-100 text-base-content">
      <NavBar
        onContactClick={handleContactClick}
        onConnexionClick={handleConnectClick}
      />
      {/* Section Hero */}
      <motion.div
        className="hero min-h-screen bg-base-100 p-15"
        initial="hidden"
        animate="visible"
        variants={heroVariants}
      >
        <div className="hero-content text-center text-base-content flex flex-col">
          <motion.h1
            className="text-6xl font-extrabold mb-6 tracking-tight"
            variants={heroVariants}
          >
            Bienvenue sur <span className="text-accent">YiChat</span>
          </motion.h1>
          <motion.p
            className="text-2xl mb-10 leading-relaxed opacity-90"
            variants={heroVariants}
          >
            Connectez-vous instantanément avec vos proches et collègues. Chat
            texte fluide, partage de fichiers sécurisé, et appels vidéo HD dans
            une interface élégante.
          </motion.p>
          <motion.button
            onClick={() => handleRegisterClick()}
            className="btn btn-accent btn-lg"
            whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
            whileTap={{ scale: 0.95 }}
          >
            Créer un compte
          </motion.button>
        </div>
      </motion.div>

      {/* Section Fonctionnalités */}
      <div className="py-20 bg-base-100 text-base-content shadow-md shadow-black m-16 rounded-2xl">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-4xl font-bold text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            Pourquoi choisir <span className="text-accent">YiChat</span> ?
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Chat Texte",
                description:
                  "Échangez des messages en temps réel avec une interface intuitive et rapide.",
                image: "/assets/images/texto.svg",
              },
              {
                title: "Partage de Fichiers",
                description:
                  "Envoyez des photos, vidéos et documents en toute sécurité et simplicité.",
                image: "/assets/images/media.svg",
              },
              {
                title: "Appels Vidéo",
                description:
                  "Profitez d'appels vidéo haute définition pour rester proche de vos contacts.",
                image: "/assets/images/video_call.svg",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="card bg-base-300 text-base-content shadow-xl"
                custom={index}
                initial="hidden"
                whileInView="visible"
                variants={cardVariants}
                viewport={{ once: true }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
              >
                <figure>
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="h-48 w-full object-cover"
                  />
                </figure>
                <div className="card-body">
                  <h3 className="card-title text-base-content">
                    {feature.title}
                  </h3>
                  <p>{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Section Call-to-Action */}
      <motion.div
        className="py-20 bg-base-100 text-base-content"
        initial="hidden"
        whileInView="visible"
        variants={ctaVariants}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-4 text-center">
          <motion.h2
            className="text-4xl font-bold text-neutral-content mb-6"
            variants={ctaVariants}
          >
            Prêt à rejoindre la conversation ?
          </motion.h2>
          <motion.p
            className="text-xl text-neutral-content mb-8 opacity-90"
            variants={ctaVariants}
          >
            Inscrivez-vous dès maintenant et découvrez une nouvelle façon de
            communiquer.
          </motion.p>
          <motion.button
            onClick={() => handleRegisterClick()}
            className="btn btn-primary btn-lg"
            whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
            whileTap={{ scale: 0.95 }}
          >
            S'inscrire gratuitement
          </motion.button>
        </div>
      </motion.div>

      <ContactForm isOpen={isContactOpen} onClose={handleCloseContact} />
      <Login isOpen={isLoginOpen} onClose={handleCloseLogin} />
      <Register isOpen={isRegisterOpen} onClose={handleCloseRegister} />
    </div>
  );
};

export default Welcome;
