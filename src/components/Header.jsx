import React, { useState, useEffect } from "react";
import {
  Bars3Icon,
  XMarkIcon,
  PhoneIcon,
  ClockIcon,
} from "@heroicons/react/24/outline";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaPinterestP,
} from "react-icons/fa";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const menuItems = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Services", id: "services" },
    { name: "Our Team", id: "team" },
    { name: "Blog", id: "blog" },
    { name: "Contact Us", id: "contact" },
  ];

  // Active Section Tracking
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -70% 0px", // Adjust the margin as needed
      threshold: 0,
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    menuItems.forEach((item) => {
      const element = document.getElementById(item.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 shadow-sm">
      {/* 1. Top Section: Logo & Info */}
      <div className="bg-white py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <a href="/#hero" className="flex items-center">
              <img src="/logo.svg" alt="logo" className="w-40" />
            </a>

            <div className="hidden md:flex items-center gap-10">
              <div className="flex items-center gap-3">
                <PhoneIcon className="w-8 h-8 text-cyan-400" />
                <div>
                  <p className="text-sm font-bold text-gray-800">Call Us Now</p>
                  <p className="text-sm text-gray-500">+10800-33-800</p>
                </div>
              </div>
              <div className="flex items-center gap-3 border-l pl-10">
                <ClockIcon className="w-8 h-8 text-cyan-400" />
                <div>
                  <p className="text-sm font-bold text-gray-800">
                    Opening Hours
                  </p>
                  <p className="text-sm text-gray-500">
                    Mon - Sat 9.00 - 19.00
                  </p>
                </div>
              </div>
            </div>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-gray-700"
            >
              {isMenuOpen ? (
                <XMarkIcon className="w-8 h-8" />
              ) : (
                <Bars3Icon className="w-8 h-8" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* 2. Bottom Section: Navigation & Social Icons */}
      <div className="hidden md:block bg-[#1a2e44]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <nav className="flex items-center">
              {menuItems.map((item, index) => (
                <React.Fragment key={item.name}>
                  <a
                    href={`#${item.id}`}
                    className={`py-4 px-6 text-sm font-bold uppercase tracking-wider transition-all duration-300 ${
                      activeSection === item.id
                        ? "bg-cyan-500 text-white" // Only for active section
                        : "text-gray-300 hover:text-cyan-500"
                    }`}
                  >
                    {item.name}
                  </a>
                  {index < menuItems.length - 1 && (
                    <span className="text-gray-600">|</span>
                  )}
                </React.Fragment>
              ))}
            </nav>

            {/* Social Icons */}
            <div className="flex items-center gap-4">
              {[FaFacebookF, FaTwitter, FaInstagram, FaPinterestP].map(
                (Icon, i) => (
                  <a
                    key={i}
                    href="#"
                    className="bg-cyan-800 px-3 py-2 rounded text-white hover:bg-white hover:text-cyan-800 transition-colors"
                  >
                    <Icon />
                  </a>
                )
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`md:hidden bg-[#1a2e44] transition-all duration-300 ${
          isMenuOpen ? "max-h-screen border-t" : "max-h-0 overflow-hidden"
        }`}
      >
        <nav className="flex flex-col">
          {menuItems.map((item) => (
            <a
              key={item.name}
              href={`#${item.id}`}
              className={`px-6 py-4 border-b border-gray-700 font-bold uppercase text-sm transition-colors ${
                activeSection === item.id
                  ? "bg-cyan-500 text-white"
                  : "text-white"
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              {item.name}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
