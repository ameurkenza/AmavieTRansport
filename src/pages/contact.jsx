import { useState, useEffect } from "react";
import "./contact.css";
import emailjs from "@emailjs/browser";


export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: null,
    email: null,
    phone: null,
    message: null,
  });

  const [touched, setTouched] = useState({});

  const isFormValid =
    Object.values(errors).every((e) => e === null) &&
    Object.values(form).every((v) => v.trim() !== "");

  const validateField = (name, value) => {
    switch (name) {
      case "name":
        if (!value.trim()) return "Le nom est obligatoire.";
        if (!/^[A-Za-zÀ-ÖØ-öø-ÿ\s]+$/.test(value))
          return "Le nom doit contenir uniquement des lettres.";
        return null;

      case "email":
        if (!value.trim()) return "L'adresse courriel est obligatoire.";
        if (!/^\S+@\S+\.\S+$/.test(value)) return "Adresse courriel invalide.";
        return null;

      case "phone":
        if (!value.trim()) return "Le numéro de téléphone est obligatoire.";
        if (!/^[0-9]+$/.test(value))
          return "Le téléphone doit contenir seulement des chiffres.";
        return null;

      case "message":
        if (!value.trim()) return "Le message ne peut pas être vide.";
        return null;

      default:
        return null;
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({ ...form, [name]: value });

    if (touched[name]) {
      setErrors({ ...errors, [name]: validateField(name, value) });
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;

    setTouched({ ...touched, [name]: true });

    setErrors({ ...errors, [name]: validateField(name, value) });
  };

  // ******************************
  // 🔥 EMAILJS — Fonction intégrée
  // ******************************
  const handleSubmit = (e) => {
  e.preventDefault();

  if (isFormValid) {
    emailjs.send(
      "service_nut0csf",
      "template_ob5dz9m",
      {
        name: form.name,
        email: form.email,
        phone: form.phone,
        message: form.message,
      },
      "Mjdi5HIWrwaqu_9wz"
    )
    .then(() => {
      alert("Message envoyé avec succès !");
      setForm({ name: "", email: "", phone: "", message: "" });
      setTouched({});
    })
    .catch((error) => {
      console.error("🔥 ERREUR EMAILJS :", error);
      alert("EmailJS ERROR → Regarde la console !");
    });
  }
};

  // ******************************

  return (
    <>
      <section className="contact-section">
        <h1>Contactez-nous</h1>
        <p>
          Vous avez une question ou souhaitez obtenir un devis ?
          Remplissez ce formulaire et notre équipe vous répondra rapidement.
        </p>

        <form onSubmit={handleSubmit} className="contact-form">
          
          {/* NOM */}
          <div className="form-group">
            <label htmlFor="name">Nom complet</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Votre nom"
              value={form.name}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {touched.name && errors.name && (
              <p className="error-msg">{errors.name}</p>
            )}
          </div>

          {/* EMAIL */}
          <div className="form-group">
            <label htmlFor="email">Adresse courriel</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="exemple@email.com"
              value={form.email}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {touched.email && errors.email && (
              <p className="error-msg">{errors.email}</p>
            )}
          </div>

          {/* TELEPHONE */}
          <div className="form-group">
            <label htmlFor="phone">Téléphone</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="(000) 000-0000"
              value={form.phone}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {touched.phone && errors.phone && (
              <p className="error-msg">{errors.phone}</p>
            )}
          </div>

          {/* MESSAGE */}
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              rows="5"
              placeholder="Votre message..."
              value={form.message}
              onChange={handleChange}
              onBlur={handleBlur}
            ></textarea>
            {touched.message && errors.message && (
              <p className="error-msg">{errors.message}</p>
            )}
          </div>

          <button
            type="submit"
            className="btn-primary"
            disabled={!isFormValid}
            style={{
              opacity: isFormValid ? 1 : 0.5,
              cursor: isFormValid ? "pointer" : "not-allowed",
            }}
          >
            Envoyer
          </button>
        </form>
      </section>

    </>
  );
}
