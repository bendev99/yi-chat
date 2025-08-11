import { useState } from "react";
import { motion } from "framer-motion";

import NavBar from "../components/NavBar";
import Contact from "./Contact";
import Login from "./Login";
import Register from "./Register";

const Welcome = () => {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);

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
    <div className="min-h-screen bg-base-100 text-base-content md:pt-15 md:pb-5">
      <NavBar
        onContactClick={() => setIsContactOpen(true)}
        onConnexionClick={() => setIsLoginOpen(true)}
      />

      {/* Section Hero */}
      <motion.div
        className="flex flex-col gap-5 min-h-screen bg-base-100 shadow-md shadow-success-content p-20 md:p-25 md:mx-10 mx:mt-20 rounded-xl"
        initial="hidden"
        animate="visible"
        variants={heroVariants}
      >
        {/* Section Bienvenue */}
        <section className="flex flex-col hero-content text-base-content text-center">
          <motion.h1
            className="text-3xl md:text-6xl font-extrabold mb-6 tracking-tight"
            variants={heroVariants}
          >
            Bienvenue sur <span className="text-accent">YiChat</span>
          </motion.h1>
          <motion.p
            className="text-xl mb-10 leading-relaxed text-base-content/50"
            variants={heroVariants}
          >
            Connectez-vous instantanément avec vos proches et collègues. Chat
            texte fluide, partage de fichiers sécurisé, et appels vidéo HD dans
            une interface élégante.
          </motion.p>
          <motion.button
            onClick={() => setIsRegisterOpen(true)}
            className="btn btn-accent btn-lg"
            whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
            whileTap={{ scale: 0.95 }}
          >
            Créer un compte
          </motion.button>
        </section>

        {/* Section Fonctionnalités */}
        <section className="py-15 md:my-16 bg-base-100 text-base-content shadow-md rounded-2xl">
          <div className="container mx-auto px-2 md:px-4">
            <motion.h2
              className="text-2xl font-bold text-center mb-6 md:mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              Pourquoi choisir <span className="text-accent">YiChat</span> ?
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-8">
              {[
                {
                  title: "Chat Texte",
                  description:
                    "Échangez des messages en temps réel avec une interface intuitive et rapide.",
                  image: "/texto.svg",
                },
                {
                  title: "Partage de Fichiers",
                  description:
                    "Envoyez des photos, vidéos et documents en toute sécurité et simplicité.",
                  sousDesc: "En cours...",
                  image: "/media.svg",
                },
                {
                  title: "Appels Vidéo",
                  description:
                    "Profitez d'appels vidéo haute définition pour rester proche de vos contacts.",
                  sousDesc: "En cours...",
                  image: "/video_call.svg",
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
                      className="h-40 md:h-52 w-full object-cover"
                    />
                  </figure>
                  <div className="card-body">
                    <h3 className="card-title text-base-content">
                      {feature.title}
                    </h3>
                    <p className="text-base-content/60">
                      {feature.description}
                    </p>

                    <p className="text-base-content/40 text-center">
                      {feature.sousDesc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Section Call-to-Action */}
        <motion.section
          className="py-20 bg-base-100 text-base-content"
          initial="hidden"
          whileInView="visible"
          variants={ctaVariants}
          viewport={{ once: true }}
        >
          <div className="container mx-auto py-10 text-center bg-base-200 rounded-2xl shadow-md">
            <motion.h2
              className="text-4xl font-bold text-base-content mb-6"
              variants={ctaVariants}
            >
              Prêt à rejoindre la conversation ?
            </motion.h2>
            <motion.p
              className="text-xl text-base-content/50 mb-8 opacity-90"
              variants={ctaVariants}
            >
              Inscrivez-vous dès maintenant et découvrez une nouvelle façon de
              communiquer.
            </motion.p>
            <motion.button
              onClick={() => setIsRegisterOpen(true)}
              className="btn btn-primary btn-lg"
              whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
              whileTap={{ scale: 0.95 }}
            >
              S'inscrire gratuitement
            </motion.button>
          </div>
        </motion.section>
      </motion.div>

      <Contact isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
      <Login isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} />
      <Register
        isOpen={isRegisterOpen}
        onClose={() => setIsRegisterOpen(false)}
      />
    </div>
  );
};

export default Welcome;
