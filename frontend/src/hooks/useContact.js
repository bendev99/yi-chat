import React from "react";

const useContact = () => {
  const [loading, setLoading] = useState(false);

  const contact = async ({ name, email, phone, message }) => {
    const success = handleFormErrors({
      name,
      email,
      phone,
      message,
    });

    if (!success) return;

    setLoading(true);
    try {
      const res = await fetch("/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, phone, message }),
      });

      const data = await res.json();

      if (data.error) {
        throw new Error(data.error);
      }

      console.log("Contact envoyer avec succès :", data);
    } catch (error) {
      console.error("Erreur lors de l'envoi du formulaire :", error.message);
    } finally {
      setLoading(false);
    }
  };
};

export default useContact;
