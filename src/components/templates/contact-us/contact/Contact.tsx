"use client";
import React, { useState } from "react";
import { ContactForm } from "./ContactForm.tsx";
import { FormData } from "./types.ts";

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phoneNumber: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage("");

    // Generate timestamp and unique contact_id
    const timestamp = new Date().toISOString();
    const contactId = `contact_${Date.now()}`;

    // Prepare final submission data
    const submissionData = {
      name: formData.name.trim(),
      number: formData.phoneNumber.trim(), // Ensure field matches API (`number` instead of `phoneNumber`)
      email: formData.email.trim(),
      message: formData.message.trim(),
      timestamp,
      contact_id: contactId,
    };

    // Basic client-side validation
    if (!submissionData.name || !submissionData.email || !submissionData.number || !submissionData.message) {
      setErrorMessage("All fields are required.");
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch(
        "https://growmore-hkbmhna2bxchd4bw.eastasia-01.azurewebsites.net/contact/submit",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(submissionData),
        }
      );

      if (response.ok) {
        alert("Successfully submitted!");
        setFormData({ name: "", email: "", phoneNumber: "", message: "" });
      } else {
        const errorResponse = await response.json();
        console.log("API Validation Error:", errorResponse);
        setErrorMessage(errorResponse.detail?.[0]?.msg || "Submission failed. Please check your input.");
      }
    } catch (error) {
      setErrorMessage("An error occurred. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleFieldChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  return (
    <div className="flex flex-col px-3 pt-16 md:px-8 lg:px-12 w-[90%] mx-auto">
      <div className="text-left">
        <h3 className="text-red-600 text-xl font-covered">Contact</h3>
        <h1 className="text-4xl text-gray-800 sm:text-5xl font-manrope font-semibold">Contact Us</h1>
      </div>
      <div className="flex flex-col lg:flex-row sm:gap-10 mt-10 w-full items-center justify-center">
        <div
          className="relative hidden h-[90vh] xl:flex items-center justify-center w-[90vw] p-10 bg-cover bg-center text-white text-3xl font-semibold"
          style={{
            backgroundImage:
              "url(https://cdn.builder.io/api/v1/image/assets%2F0014938fb5fd4152961b843a94ff3203%2Fbd7e164c2c3348a58d32727968c5d2c4)",
          }}
        >
          <div className="absolute inset-0 rounded-xl"></div>
          <div className="relative py-6 pr-6 pl-52 -mt-72 -mr-52 font-covered bg-amber-300 text-white text-md text-left rounded-lg">
            <p>
              Agriculture
              <br />
              Professional
              <br />
              Leader
            </p>
          </div>
        </div>
        <div className="w-[90vw] sm:w-[80vw]">
          {errorMessage && <p className="text-red-500 mb-4">{errorMessage}</p>}
          <ContactForm
            formData={formData}
            isSubmitting={isSubmitting}
            onSubmit={handleSubmit}
            onFieldChange={handleFieldChange}
          />
        </div>
      </div>
   
    </div>
  );
};

export default Contact;
