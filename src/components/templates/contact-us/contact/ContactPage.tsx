"use client";
import React, { useState } from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleFieldChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage("");

    const timestamp = new Date().toISOString();
    const contactId = `contact_${Date.now()}`;

    const submissionData = {
      name: formData.name.trim(),
      number: formData.phoneNumber.trim(),
      email: formData.email.trim(),
      message: formData.message.trim(),
      timestamp,
      contact_id: contactId,
    };

    if (!submissionData.name || !submissionData.email || !submissionData.number || !submissionData.message) {
      setErrorMessage("All fields are required.");
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch(
        "https://growmore-backend.vercel.app/contact/submit",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(submissionData),
        }
      );

      if (response.ok) {
        alert("Successfully submitted!");
        setFormData({ name: "", email: "", phoneNumber: "", message: "" });
      } else {
        const errorResponse = await response.json();
        setErrorMessage(errorResponse.detail?.[0]?.msg || "Submission failed. Please check your input.");
      }
    } catch (error) {
      setErrorMessage("An error occurred. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen w-screen flex flex-col items-center">
      <header className="flex justify-center items-center pt-20 md:py-24 pb-20 w-full bg-gray-900">
        <h1 className="text-3xl md:text-6xl font-manrope font-semibold text-white text-center">Contact Us</h1>
      </header>
      <div className="max-w-7xl w-full my-16 p-6 md:p-10 rounded-xl grid grid-cols-1 lg:grid-cols-5 gap-6 md:gap-6">
        <div className="lg:col-span-4">
          <h2 className="text-2xl font-manrope font-semibold mb-6 text-blue-900">CONTACT FORM</h2>
          {errorMessage && <p className="text-red-500 mb-4">{errorMessage}</p>}
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-6">
              <input type="text" placeholder="Your Name" value={formData.name} onChange={(e) => handleFieldChange("name", e.target.value)} className="p-4 w-full border rounded-lg font-manrope focus:outline-none placeholder:font-manrope" />
              <input type="email" placeholder="Your Email" value={formData.email} onChange={(e) => handleFieldChange("email", e.target.value)} className="p-4 w-full border rounded-lg font-manrope focus:outline-none placeholder:font-manrope" />
              <input type="text" placeholder="Your Phone Number" value={formData.phoneNumber} onChange={(e) => handleFieldChange("phoneNumber", e.target.value)} className="p-4 w-full border rounded-lg font-manrope focus:outline-none placeholder:font-manrope" />
            </div>
            <textarea placeholder="Your Message" value={formData.message} onChange={(e) => handleFieldChange("message", e.target.value)} className="p-4 w-full border rounded-lg focus:outline-none mb-6 font-manrope placeholder:font-manrope" rows="6"></textarea>
            <button type="submit" disabled={isSubmitting} className="bg-gray-900 text-white px-6 py-3 rounded-lg font-manrope hover:bg-gray-800 transition w-full md:w-auto">
              {isSubmitting ? "Submitting..." : "SEND MESSAGE"}
            </button>
          </form>
        </div>
        <div className="lg:col-span-1 w-full">
          <h2 className="text-2xl font-manrope font-semibold mb-6 text-blue-900">CONTACT DETAILS</h2>
          <div className="space-y-6 font-manrope">
            <div className="flex items-center gap-4">
              <div className="bg-gray-900 p-4 rounded-lg">
                <FaMapMarkerAlt className="text-white" size={20} />
              </div>
              <div>
                <p className="font-semibold">786/A Romada tower</p>
                <p>Brooklyn, NYC</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="bg-gray-900 p-4 rounded-lg">
                <FaPhoneAlt className="text-white" size={20} />
              </div>
              <div>
                <p className="font-semibold">+91 556663737</p>
                <p>00 (34 569 543 87)</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="bg-gray-900 p-4 rounded-lg">
                <FaEnvelope className="text-white" size={20} />
              </div>
              <div>
                <p className="font-semibold">info@growmoreweb.com</p>
                <p>growmore@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
