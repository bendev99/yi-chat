import { useState } from "react";
import { toast } from "react-hot-toast";
import { useAuthContext } from "../context/AuthContext";

const useRegister = () => {
  const [loading, setLoading] = useState(false);
  const { setAuthUser } = useAuthContext();

  const signup = async ({
    name,
    email,
    phone,
    password,
    confirmPassword,
    gender,
  }) => {
    const success = handleFormErrors({
      name,
      email,
      phone,
      password,
      confirmPassword,
      gender,
    });

    if (!success) return;

    setLoading(true);
    try {
      const res = await fetch("/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          phone,
          password,
          confirmPassword,
          gender,
        }),
      });

      const data = await res.json();

      if (data.error) {
        throw new Error(data.error);
      }

      localStorage.setItem("chat-user", JSON.stringify(data));

      setAuthUser(data);

      console.log(data);
    } catch (error) {
      console.log("Error during registration:", error.message);
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };
  return { loading, signup };
};

export default useRegister;

function handleFormErrors({ name, email, phone, password, confirmPassword }) {
  if (
    !name.trim() ||
    !email.trim() ||
    !phone.trim() ||
    !password.trim() ||
    !confirmPassword.trim()
  ) {
    toast.error("Tous les champs est requis");
  } else if (name.length < 4) {
    toast.error("Le nom doit contenir au moins 4 caractères");
  } else if (!/^[A-Za-zÀ-ÿ\s'-]{4,60}$/.test(name)) {
    toast.error("Entrée un nom correct");
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    toast.error("Entrer une adresse email valide");
  } else if (!/^[0-9]{10}$/.test(phone)) {
    toast.error("Entrer un numéro de téléphone valide (10 chiffres)");
  } else if (password.length < 6) {
    toast.error("Le mot de passe doit contenir au moins 6 caractères");
  } else if (confirmPassword !== password) {
    toast.error("Les mots de passe ne correspondent pas");
  }

  return true;
}
