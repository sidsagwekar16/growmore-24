import React from 'react';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

const ContactPage = () => {
  return (
    <div className="min-h-screen w-screen bg-gray-100 flex flex-col items-center">
      <header className="flex justify-center items-center pt-20 md:pt-28 pb-20 md:pb-28 w-full bg-gray-900">
        <h1 className="text-3xl md:text-6xl font-extrabold text-white text-center">Contact Us</h1>
      </header>
      <div className="max-w-7xl w-full my-16 p-6 md:p-10 rounded-xl grid grid-cols-1 lg:grid-cols-5 gap-6 md:gap-6">
        {/* Contact Form */}
        <div className="lg:col-span-4">
          <h2 className="text-2xl font-bold mb-6 text-blue-900">CONTACT FORM</h2>
          <form>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-6">
              <input type="text" placeholder="Your Name" className="p-4 w-full border rounded-lg focus:outline-none" />
              <input type="email" placeholder="Your Mail" className="p-4 w-full border rounded-lg focus:outline-none" />
            </div>
            <textarea placeholder="Your Message" className="p-4 w-full border rounded-lg focus:outline-none mb-6" rows="6"></textarea>
            <button className="bg-gray-900 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 transition w-full md:w-auto">SEND MESSAGE</button>
          </form>
        </div>

        {/* Contact Details */}
        <div className="lg:col-span-1 w-full">
          <h2 className="text-2xl font-bold mb-6 text-blue-900">CONTACT DETAILS</h2>
          <div className="space-y-6">
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
                <p className="font-semibold">001+73643 355 265</p>
                <p>00 (34 569 543 87)</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="bg-gray-900 p-4 rounded-lg">
                <FaEnvelope className="text-white" size={20} />
              </div>
              <div>
                <p className="font-semibold">info@yourmail.com</p>
                <p>Fonsingo@mail.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;