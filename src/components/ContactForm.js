"use client";
import React, { useState } from "react";

function ContactForm() {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "YOUR_ACCESS_KEY_HERE");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className="form-container ">
      <form onSubmit={onSubmit} >
        <div className="flex flex-col items-center justify-center text-center bg-gray">
          <p className="text-l mt-5 font-coco text-customBrown mr-auto">Votre Nom</p>
          <input type="text" name="name" className="text-gray-700" required />
        </div>
        <div className="flex flex-col items-center justify-center text-center bg-gray">
          <p className="text-l mt-5 font-coco text-customBrown mr-auto">Votre E-Mail</p>
          <input type="email" name="email" className="text-gray-700" required />
        </div>
        <div className="flex flex-col items-center justify-center text-center bg-gray">
          <p className="text-l mt-5 font-coco text-customBrown mr-auto">Votre Message</p>
          <textarea name="message" className="text-gray-700" required ></textarea>
        </div>
        <button type="submit" >Submit Form</button>
      </form>
      <span >{result}</span>
    </div>
  );
}

export default ContactForm;