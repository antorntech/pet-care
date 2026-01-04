import React, { useState } from "react";
import {
  MapPinIcon,
  PhoneIcon,
  EnvelopeIcon,
  ClockIcon,
} from "@heroicons/react/24/outline";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // এখানে আপনি আপনার API কল করতে পারেন
    console.log("Form submitted:", formData);
    alert("Thank you for your message! We will get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <span className="text-[#3F9AAE] font-semibold uppercase tracking-wide">
            Contact Us
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mt-3 mb-4">
            Get in Touch
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Have questions? We're here to help. Send us a message or visit our
            clinic.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form Section */}
          <div className="bg-white rounded-2xl p-8 shadow border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Send us a Message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-200 outline-none transition-all"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-200 outline-none transition-all"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-200 outline-none transition-all resize-none"
                  placeholder="Tell us how we can help..."
                />
              </div>

              <button
                type="submit"
                className="cursor-pointer w-full bg-[#3F9AAE] hover:bg-cyan-600 text-white font-bold px-8 py-3.5 rounded-full transition-all transform active:scale-95 shadow-md hover:shadow-lg"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information Section */}
          <div className="space-y-8">
            <div className="bg-white rounded-2xl p-8 shadow border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Clinic Information
              </h3>
              <div className="space-y-6">
                {/* Address */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-cyan-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPinIcon className="w-6 h-6 text-[#3F9AAE]" />
                  </div>
                  <div>
                    <h4 className="text-gray-900 font-bold mb-1">
                      Our Location
                    </h4>
                    <p className="text-gray-600 leading-relaxed">
                      Shafina Center (2nd Floor), Gareeb-E-Nawaz Avenue, Sector:
                      11, Uttara, Dhaka 1230
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-cyan-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <PhoneIcon className="w-6 h-6 text-[#3F9AAE]" />
                  </div>
                  <div>
                    <h4 className="text-gray-900 font-bold mb-1">Call Us</h4>
                    <p className="text-gray-600 font-medium">(555) 123-4567</p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-cyan-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <EnvelopeIcon className="w-6 h-6 text-[#3F9AAE]" />
                  </div>
                  <div>
                    <h4 className="text-gray-900 font-bold mb-1">Email Us</h4>
                    <p className="text-gray-600">info@petcarecenter.com</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Area */}
            <div className="bg-gray-200 rounded-2xl overflow-hidden shadow h-64 relative group">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3648.388858239364!2d90.38847787500599!3d23.875825978585034!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c5006bcc1c01%3A0x116b983d04952be8!2sUttara%20Pet%20Mart!5e0!3m2!1sen!2sbd!4v1767519176335!5m2!1sen!2sbd"
                width="600"
                height="450"
                style={{ border: 0 }}
                allowFullscreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
