"use client";
import React, { useState } from "react";

function ContactForm() {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Envoi en cours...");
    const formData = new FormData(event.target);

    formData.append("access_key", "YOUR_ACCESS_KEY_HERE");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const data = await response.json();

      if (data.success) {
        setResult("Formulaire soumis avec succès !");
        event.target.reset();
      } else {
        setResult(data.message);
      }
    } catch (error) {
      console.log("Erreur lors de l'envoi du formulaire:", error);
      setResult("Une erreur s'est produite. Essayez à nouveau.");
    }
  };

  return (
    <div className="form-container max-w-4xl mx-auto px-4 py-10 bg-white rounded-lg shadow-lg">
      <h2 className="text-3xl text-center font-bold text-customBrown mb-8">Contactez-Nous</h2>
      <form onSubmit={onSubmit}>
        <div className="mb-6">
          <label htmlFor="name" className="block text-lg font-coco text-customBrown mb-2">
            Votre Nom
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="w-full p-3 border border-customBrown rounded-lg focus:outline-none focus:ring-2 focus:ring-customBrown"
            required
          />
        </div>

        <div className="mb-6">
          <label htmlFor="email" className="block text-lg font-coco text-customBrown mb-2">
            Votre E-Mail
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full p-3 border border-customBrown rounded-lg focus:outline-none focus:ring-2 focus:ring-customBrown"
            required
          />
        </div>

        <div className="mb-6">
          <label htmlFor="message" className="block text-lg font-coco text-customBrown mb-2">
            Votre Message
          </label>
          <textarea
            id="message"
            name="message"
            className="w-full p-3 border border-customBrown rounded-lg focus:outline-none focus:ring-2 focus:ring-customBrown"
            required
          ></textarea>
        </div>

        <div className="flex justify-center mb-6">
          <button
            type="submit"
            className="px-8 py-3 bg-customBrown text-white rounded-lg hover:bg-customBrown-dark focus:outline-none focus:ring-2 focus:ring-customBrown"
          >
            Envoyer
          </button>
        </div>
      </form>

      <div className="text-center text-lg font-semibold text-customBrown mt-4">
        {result}
      </div>
    </div>
  );
}

export default ContactForm;
