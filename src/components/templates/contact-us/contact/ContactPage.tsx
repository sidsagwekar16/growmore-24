import React from 'react';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

const ContactPage = () => {
  return (
    <div className="min-h-screen w-screen flex flex-col items-center">
      <header className="flex justify-center items-center pt-20 md:py-28 pb-20 w-full bg-gray-900">
        <h1 className="text-3xl md:text-6xl font-manrope font-semibold text-white text-center">Contact Us</h1>
      </header>
      <div className="max-w-7xl w-full my-16 p-6 md:p-10 rounded-xl grid grid-cols-1 lg:grid-cols-5 gap-6 md:gap-6">
        {/* Contact Form */}
        <div className="lg:col-span-4">
          <h2 className="text-2xl font-manrope font-semibold mb-6 text-blue-900">CONTACT FORM</h2>
          <form>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-6">
              <input type="text" placeholder="Your Name" className="p-4 w-full border rounded-lg font-manrope focus:outline-none placeholder:font-manrope" />
              <input type="email" placeholder="Your Email" className="p-4 w-full border rounded-lg font-manrope focus:outline-none placeholder:font-manrope" />
            </div>
            <textarea placeholder="Your Message" className="p-4 w-full border rounded-lg focus:outline-none mb-6 font-manrope placeholder:font-manrope" rows="6"></textarea>
            <button className="bg-gray-900 text-white px-6 py-3 rounded-lg font-manrope hover:bg-gray-800 transition w-full md:w-auto">SEND MESSAGE</button>
          </form>
        </div>

        {/* Contact Details */}
        <div className="lg:col-span-1 w-full">
          <h2 className="text-2xl font-manrope font-semibold mb-6 text-blue-900">CONTACT DETAILS</h2>
          <div className="space-y-6 font-manrope">
            <div className="flex items-center gap-4 ">
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

      {/* Map Section */}
      <div className="w-full py-6 md:py-10">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.902361877161!2d90.38885711538543!3d23.750841284590757!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDQ1JzAzLjAiTiA5MMKwMjMnMjUuNyJF!5e0!3m2!1sen!2sin!4v1619239534570!5m2!1sen!2sin"
          width="100%"
          height="500"
          style={{ border: 0 }}
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default ContactPage;
