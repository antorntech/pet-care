import React, { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Gallery", href: "#gallery" },
    { name: "Services", href: "#services" },
    { name: "Blog", href: "#blog" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-md shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo Section */}
          <div className="flex-shrink-0 flex items-center">
            <img src="/logo.svg" alt="" />
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-8 font-medium">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-[#3F9AAE] transition-all duration-300 relative group"
              >
                {item.name}
                <span className="absolute bottom-[-4px] left-0 w-0 h-0.5 bg-[#3F9AAE] transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          {/* Desktop CTA Button */}
          <div className="hidden md:block">
            <a
              href="#contact"
              className="bg-[#3F9AAE] hover:bg-cyan-600 text-white font-semibold px-6 py-2.5 rounded-full transition-all transform hover:scale-105 active:scale-95 shadow-md"
            >
              Get Started
            </a>
          </div>

          {/* Mobile Menu Button (Hamburger) */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-[#3F9AAE] p-2 focus:outline-none"
              aria-label="Toggle Menu"
            >
              {isMenuOpen ? (
                <XMarkIcon className="h-7 w-7 transition-all rotate-90" />
              ) : (
                <Bars3Icon className="h-7 w-7 transition-all" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Sidebar/Menu Overlay */}
      <div
        className={`md:hidden absolute top-full left-0 w-full bg-white border-t border-gray-100 shadow-xl transition-all duration-300 ease-in-out ${
          isMenuOpen
            ? "opacity-100 translate-y-0 visible"
            : "opacity-0 -translate-y-4 invisible"
        }`}
      >
        <nav className="px-6 pt-4 pb-8 space-y-3">
          {menuItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="block py-3 text-lg font-medium text-gray-700 hover:text-[#3F9AAE] hover:bg-green-50 rounded-lg px-4 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              {item.name}
            </a>
          ))}
          <div className="pt-4 px-4">
            <button className="w-full bg-[#3F9AAE] hover:bg-orange-600 text-white font-bold px-6 py-3 rounded-full transition-colors shadow-lg">
              Get Started
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
