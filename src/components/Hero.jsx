import React from "react";

const Hero = () => {
  return (
    <section
      id="home"
      className="pt-20 md:pt-24 bg-gradient-to-br from-cyan-50 to-blue-50 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-center md:text-left order-2 md:order-1">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Compassionate Care for Your{" "}
              <span className="text-[#3F9AAE]">Furry Friends</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
              Professional veterinary care and grooming services tailored to
              your pet's unique needs. Experience the difference of dedicated,
              loving care for your beloved companions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <button className="bg-[#3F9AAE] hover:bg-cyan-600 text-white font-bold px-8 py-3 rounded-full transition-all transform hover:scale-105 shadow-lg active:scale-95">
                Book Now
              </button>
              <button className="bg-white hover:bg-gray-50 text-gray-900 font-bold px-8 py-3 rounded-full border-2 border-gray-200 transition-all transform hover:scale-105 shadow-sm active:scale-95">
                Our Services
              </button>
            </div>
          </div>

          {/* Hero Image Section */}
          <div className="relative order-1 md:order-2">
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl transform md:rotate-2 hover:rotate-0 transition-transform duration-500">
              <img
                src="https://images.yourstory.com/cs/2/a0bad530ce5d11e9a3fb4360e4b9139b/PetCover-01-1700495123028.png?mode=crop&crop=faces&ar=16%3A9&format=auto&w=1920&q=75"
                alt="Happy pets"
                className="w-full h-[350px] md:h-[500px] object-cover"
              />
            </div>

            {/* Decorative Elements */}
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-green-200 rounded-full opacity-60 blur-3xl animate-pulse"></div>
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-orange-200 rounded-full opacity-60 blur-3xl animate-pulse delay-700"></div>

            {/* Floating Badge (Optional addition) */}
            <div className="absolute top-10 -left-5 z-20 bg-white p-4 rounded-2xl shadow-xl hidden lg:block animate-bounce">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-cyan-100 rounded-full flex items-center justify-center">
                  <span className="text-xl">🐾</span>
                </div>
                <div>
                  <p className="font-bold text-gray-900 text-sm">
                    Best Pet Care
                  </p>
                  <p className="text-xs text-gray-500">Top Rated 2026</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
