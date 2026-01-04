import React from "react";

const About = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image Section */}
          <div className="order-2 md:order-1">
            <div className="rounded-3xl overflow-hidden shadow-xl">
              <img
                src="/images/7.jpeg"
                alt="Pet specialists"
                className="w-full h-[400px] md:h-[500px] object-cover"
              />
            </div>
          </div>

          {/* Text Content Section */}
          <div className="order-1 md:order-2">
            <span className="text-[#3F9AAE] uppercase tracking-wide font-semibold">
              About Us
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mt-3 mb-6">
              Dedicated to Your Pet's Health & Happiness
            </h2>
            <p className="text-gray-600 mb-6 text-lg">
              With over 15 years of experience in veterinary care, our team of
              certified professionals is passionate about providing the highest
              quality care for your beloved pets.
            </p>
            <p className="text-gray-600 mb-8 text-lg">
              We combine cutting-edge medical expertise with a gentle,
              compassionate approach to ensure every visit is stress-free for
              both you and your furry companion.
            </p>

            {/* Stats Section */}
            <div className="grid grid-cols-3 gap-6">
              <div>
                <div className="text-3xl md:text-4xl font-bold text-[#3F9AAE] mb-2">
                  15+
                </div>
                <div className="text-gray-600 text-sm md:text-base">
                  Years Experience
                </div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-[#3F9AAE] mb-2">
                  10K+
                </div>
                <div className="text-gray-600 text-sm md:text-base">
                  Happy Pets
                </div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-[#3F9AAE] mb-2">
                  25+
                </div>
                <div className="text-gray-600 text-sm md:text-base">
                  Expert Staff
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
