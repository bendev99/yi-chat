import { EyeSlashIcon } from "@heroicons/react/16/solid";
import { EyeIcon } from "lucide-react";
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();

  // État pour la visibilité des mots de passe
  const [showPassword, setShowPassword] = useState(false);
  const [showRePassword, setShowRePassword] = useState(false);

  // Basculer la visibilité des mots de passe
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const toggleRePasswordVisibility = () => {
    setShowRePassword(!showRePassword);
  };

  // États pour les valeurs du formulaire
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    repassword: "",
  });

  // États pour les erreurs
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    password: "",
    repassword: "",
  });

  // Validation en temps réel
  const validateField = (name, value) => {
    let error = "";

    switch (name) {
      case "name":
        if (!value) error = "Veuillez entrer votre nom";
        else if (value.length < 5)
          error = "Le nom doit contenir au moins 5 caractères";
        break;

      case "email":
        if (!value) error = "Adresse email obligatoire";
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value))
          error = "Email invalide";
        break;

      case "password":
        if (!value) error = "Mot de passe requis";
        else if (value.length < 6)
          error = "Le mot de passe doit contenir au moins 6 caractères";
        break;

      case "repassword":
        if (!value) error = "Champ requis !";
        else if (value != formData.password)
          error = "Les deux mots de passe sont différents";
        break;

      default:
        break;
    }

    return error;
  };

  // Gestion des changements
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Soumission du formulaire
  const handleSubmit = (e) => {
    e.preventDefault();

    // Valider tous les champs avant soumission
    const newErrors = {
      name: validateField("name", formData.name),
      email: validateField("email", formData.email),
      password: validateField("password", formData.password),
      repassword: validateField("repassword", formData.repassword),
    };

    setErrors(newErrors);

    // Vérifier si le formulaire est valide
    const isValid = Object.values(newErrors).every((error) => error === "");

    if (isValid) {
      console.log("Formulaire valide:", formData);
      setFormData({ name: "", email: "", password: "", repassword: "" });
      setErrors({ name: "", email: "", password: "", repassword: "" });

      navigate("/home");
    }
  };

  return (
    <div className="bg-gradient-to-bl from-blue-800 to-cyan-400 min-h-screen flex items-center justify-center">
      <div className="flex w-[80%] mx-auto my-auto">
        <img
          src="/register.svg"
          alt="register img"
          className="hidden md:block md:w-1/2"
        />
        <div className="w-full md:w-1/2 max-h-screen p-5 items-center justify-center my-auto mx-auto">
          <form
            onSubmit={handleSubmit}
            className="p-6 bg-white rounded-lg shadow-xl shadow-cyan-950"
          >
            <h1 className="text-center font-bold text-3xl uppercase">
              Inscription
            </h1>

            {/* Champ pour le nom */}
            <div className={`flex flex-col ${errors.name ? "" : "mb-1"}`}>
              <label htmlFor="name" className="text-gray-600">
                Nom
              </label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Entrer votre nom"
                value={formData.name}
                onChange={handleChange}
                className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring placeholder:text-sm ${
                  errors.name
                    ? "border-red-500 focus:ring-red-200 -mb-1"
                    : "border-gray-300 focus:ring-blue-200 focus:border-blue-500"
                }`}
              />
              {errors.name && (
                <p className="ml-1 text-red-500 text-xs mt-1">{errors.name}</p>
              )}
            </div>

            {/* Champ pour l'adresse email */}
            <div className={`flex flex-col ${errors.email ? "" : "mb-1"}`}>
              <label htmlFor="email" className="text-gray-600">
                Adresse email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="exemple@gmail.com"
                value={formData.email}
                onChange={handleChange}
                className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring placeholder:text-sm ${
                  errors.email
                    ? "border-red-500 focus:ring-red-200 -mb-1"
                    : "border-gray-300 focus:ring-blue-200 focus:border-blue-500"
                }`}
              />
              {errors.email && (
                <p className="ml-1 text-red-500 text-xs mt-1">{errors.email}</p>
              )}
            </div>

            {/* Champ pour le mot de passe */}
            <div className={`${errors.password ? "mb-3" : "mb-1"}`}>
              <label htmlFor="password" className="text-gray-600 mb-2">
                Mot de passe
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  name="password"
                  placeholder="Entrer votre mot de passe"
                  value={formData.password}
                  onChange={handleChange}
                  className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring placeholder:text-sm ${
                    errors.password
                      ? "border-red-500 focus:ring-red-200"
                      : "border-gray-300 focus:ring-blue-200 focus:border-blue-500"
                  }`}
                />
                {errors.password && (
                  <p className="absolute left-1 top-full text-red-500 text-xs">
                    {errors.password}
                  </p>
                )}
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                  aria-label={
                    showPassword
                      ? "Masquer le mot de passe"
                      : "Afficher le mot de passe"
                  }
                >
                  {showPassword ? (
                    <EyeSlashIcon className="h-5 w-5 text-gray-500 cursor-pointer" />
                  ) : (
                    <EyeIcon className="h-5 w-5 text-gray-500 cursor-pointer" />
                  )}
                </button>
              </div>
            </div>

            {/* Champ pour confirmation mot de passe */}
            <div className={`${errors.password ? "mb-5" : "mb-5"}`}>
              <label htmlFor="password" className="text-gray-600 mb-2">
                Confirmer votre mot de passe
              </label>
              <div className="relative">
                <input
                  type={showRePassword ? "text" : "password"}
                  id="repassword"
                  name="repassword"
                  placeholder="Repeter votre mot de passe"
                  value={formData.repassword}
                  onChange={handleChange}
                  className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring placeholder:text-sm ${
                    errors.repassword
                      ? "border-red-500 focus:ring-red-200"
                      : "border-gray-300 focus:ring-blue-200 focus:border-blue-500"
                  }`}
                />
                {errors.repassword && (
                  <p className="absolute left-1 top-full text-red-500 text-xs">
                    {errors.repassword}
                  </p>
                )}
                <button
                  type="button"
                  onClick={toggleRePasswordVisibility}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                  aria-label={
                    showRePassword
                      ? "Masquer le mot de passe"
                      : "Afficher le mot de passe"
                  }
                >
                  {showRePassword ? (
                    <EyeSlashIcon className="h-5 w-5 text-gray-500 cursor-pointer" />
                  ) : (
                    <EyeIcon className="h-5 w-5 text-gray-500 cursor-pointer" />
                  )}
                </button>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-800 text-white font-medium py-2 px-4 rounded-lg transition duration-200 cursor-pointer"
            >
              Créer un compte
            </button>

            <p className="text-center">ou</p>

            {/* Bouton google */}
            <button
              type="submit"
              className="w-full bg-blue-800 hover:bg-blue-900 text-white font-medium py-2 px-4 rounded-lg transition duration-200 cursor-pointer"
            >
              <div className="items-center flex gap-5 justify-center">
                {/* <img src="/google.svg" alt="" className="w-5" /> */}
                Continuer avec google
              </div>
            </button>

            <p className="text-center mt-2 font-semibold">
              Déjà membre ?{" "}
              <span className="text-blue-600 cursor-pointer hover:underline">
                <NavLink to="/login">Connexion</NavLink>
              </span>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
