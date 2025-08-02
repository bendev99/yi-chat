import { useState } from "react";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/16/solid";
import { NavLink, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  // États pour les valeurs du formulaire
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  // États pour les erreurs
  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  // État pour la visibilité du mot de passe
  const [showPassword, setShowPassword] = useState(false);

  // Basculer la visibilité du mot de passe
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  // Validation en temps réel
  const validateField = (name, value) => {
    let error = "";

    switch (name) {
      case "email":
        if (!value) error = "Email est requis";
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value))
          error = "Email invalide";
        break;
      case "password":
        if (!value) error = "Mot de passe requis";
        else if (value.length < 6)
          error = "Le mot de passe doit contenir au moins 6 caractères";
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
      email: validateField("email", formData.email),
      password: validateField("password", formData.password),
    };

    setErrors(newErrors);

    // Vérifier si le formulaire est valide
    const isValid = Object.values(newErrors).every((error) => error === "");

    if (isValid) {
      // Soumettre les données (ex: appel API)
      console.log("Formulaire valide:", formData);
      setFormData({ email: "", password: "" });
      setErrors({ mail: "", password: "" });

      navigate("/home");
    }
  };

  return (
    <div className="bg-gradient-to-bl from-blue-800 to-cyan-400 min-h-screen flex items-center justify-center">
      <div className="flex w-[80%] mx-auto my-auto">
        <div className="w-full md:w-1/2 max-h-screen p-5 items-center justify-center my-auto mx-auto">
          <form
            onSubmit={handleSubmit}
            className="p-6 bg-white rounded-lg shadow-xl shadow-cyan-950"
          >
            <h1 className="text-4xl font-bold text-center text-gray-800 uppercase">
              Connexion
            </h1>

            {/* Champ Email */}
            <div className={`flex flex-col ${errors.email ? "" : "mb-1"}`}>
              <label htmlFor="email" className="text-gray-600">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="exemple@gmail.com"
                className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring placeholder:text-sm ${
                  errors.email
                    ? "border-red-500 focus:ring-red-200"
                    : "border-gray-300 focus:ring-blue-200 focus:border-blue-500"
                }`}
              />
              {errors.email && (
                <p className="text-red-500 text-xs">{errors.email}</p>
              )}
            </div>

            {/* Champ Mot de passe */}
            <div className={`flex flex-col ${errors.email ? "" : "mb-3"}`}>
              <label htmlFor="password" className="text-gray-600">
                Mot de passe
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring placeholder:text-sm ${
                    errors.password
                      ? "border-red-500 focus:ring-red-200"
                      : "border-gray-300 focus:ring-blue-200 focus:border-blue-500"
                  }`}
                  placeholder="Entrer votre mot de passe"
                />
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
              {errors.password && (
                <p className="text-red-500 text-xs">{errors.password}</p>
              )}
            </div>

            <p className="text-blue-600 font-semibold text-right mb-3 cursor-pointer hover:underline">
              Mot de passe oublié ?
            </p>

            {/* Bouton de soumission */}
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-800 text-white font-medium py-2 px-4 rounded-lg transition duration-200 cursor-pointer"
            >
              Se connecter
            </button>

            <p className="text-center">ou</p>

            {/* Bouton google */}
            <button
              type="submit"
              className="w-full bg-blue-800 hover:bg-blue-900 text-white font-medium py-2 px-4 rounded-lg transition duration-200 cursor-pointer"
            >
              <div className="items-center flex gap-5 justify-center">
                {/* <img src="/assets/icons/google.svg" alt="" className="w-5" /> */}
                Se connecter avec google
              </div>
            </button>

            <p className="text-center m-5 font-semibold">
              Nouveau ?{" "}
              <span className="text-blue-600 cursor-pointer hover:underline">
                <NavLink to="/register">Créer un conmpte</NavLink>
              </span>
            </p>
          </form>
        </div>

        <img src="/login.svg" alt="" className="hidden md:block md:w-1/2" />
      </div>
    </div>
  );
};

export default Login;
