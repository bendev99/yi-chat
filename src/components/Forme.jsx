import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

export default function LoginForm() {
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

  // États pour le touché des champs
  const [touched, setTouched] = useState({
    email: false,
    password: false,
  });

  // État pour la visibilité du mot de passe
  const [showPassword, setShowPassword] = useState(false);

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

    // Validation en temps réel après première interaction
    if (touched[name]) {
      setErrors({
        ...errors,
        [name]: validateField(name, value),
      });
    }
  };

  // Gestion du blur
  const handleBlur = (e) => {
    const { name } = e.target;

    setTouched({
      ...touched,
      [name]: true,
    });

    // Déclencher la validation après le blur
    setErrors({
      ...errors,
      [name]: validateField(name, formData[name]),
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
      // Réinitialiser le formulaire si besoin
      // setFormData({ email: '', password: '' });
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md"
    >
      <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
        Connexion
      </h2>

      {/* Champ Email */}
      <div className="mb-4">
        <label htmlFor="email" className="block text-gray-700 mb-2">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          onBlur={handleBlur}
          className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring ${
            errors.email
              ? "border-red-500 focus:ring-red-200"
              : "border-gray-300 focus:ring-blue-200 focus:border-blue-500"
          }`}
          placeholder="votre@email.com"
        />
        {errors.email && (
          <p className="mt-1 text-red-500 text-sm">{errors.email}</p>
        )}
      </div>

      {/* Champ Mot de passe */}
      <div className="mb-6">
        <label htmlFor="password" className="block text-gray-700 mb-2">
          Mot de passe
        </label>
        <div>
          <input
            type={showPassword ? "text" : "password"}
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            onBlur={handleBlur}
            className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring ${
              errors.password
                ? "border-red-500 focus:ring-red-200"
                : "border-gray-300 focus:ring-blue-200 focus:border-blue-500"
            }`}
            placeholder="••••••"
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
              <EyeSlashIcon className="h-5 w-5 text-gray-500" />
            ) : (
              <EyeIcon className="h-5 w-5 text-gray-500" />
            )}
          </button>
        </div>
        {errors.password && (
          <p className="mt-1 text-red-500 text-sm">{errors.password}</p>
        )}
      </div>

      {/* Bouton de soumission */}
      <button
        type="submit"
        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition duration-200"
      >
        Se connecter
      </button>
    </form>
  );
}
