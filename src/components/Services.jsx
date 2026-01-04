import React from "react";
import {
  ScissorsIcon,
  HeartIcon,
  HomeIcon,
  AcademicCapIcon,
} from "@heroicons/react/24/outline";

const services = [
  {
    icon: ScissorsIcon,
    title: "Pet Grooming",
    description:
      "Professional grooming services including bathing, haircuts, nail trimming, and styling for all breeds.",
    image:
      "https://images.unsplash.com/photo-1625279138836-e7311d5c863a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXQlMjBncm9vbWluZ3xlbnwxfHx8fDE3Njc1MDAxMjd8MA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    icon: HeartIcon,
    title: "Veterinary Care",
    description:
      "Comprehensive medical services from routine check-ups to advanced diagnostics and surgical procedures.",
    image:
      "https://images.unsplash.com/photo-1654895716780-b4664497420d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2ZXRlcmluYXJ5JTIwY2xpbmljfGVufDF8fHx8MTc2NzM3Mzc2Mnww&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    icon: HomeIcon,
    title: "Pet Daycare",
    description:
      "Safe and fun daycare services with supervised playtime, socialization, and personalized attention.",
    image:
      "https://images.unsplash.com/photo-1509205477838-a534e43a849f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMHBldHMlMjBkb2dzJTIwY2F0c3xlbnwxfHx8fDE3Njc1MDAxMjZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <span className="text-[#3F9AAE] font-semibold uppercase tracking-wide">
            Our Services
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mt-3 mb-4">
            Comprehensive Pet Care Services
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            From grooming to medical care, we offer everything your pet needs to
            stay healthy and happy.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="bg-white rounded-2xl overflow-hidden shadow hover:shadow-lg transition-all duration-300 group border border-transparent hover:border-green-100"
              >
                {/* Service Image Section */}
                <div className="h-48 overflow-hidden relative">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  {/* Subtle Overlay on Hover */}
                  <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors"></div>
                </div>

                {/* Service Content Section */}
                <div className="p-6">
                  <div className="w-12 h-12 bg-cyan-100 rounded-xl flex items-center justify-center mb-4 transform group-hover:rotate-12 transition-transform">
                    <Icon className="w-6 h-6 text-[#3F9AAE]" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-[#3F9AAE] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                    {service.description}
                  </p>
                  <a
                    href="#contact"
                    className="text-[#3F9AAE] font-semibold hover:text-cyan-700 inline-flex items-center gap-2 group/link transition-all"
                  >
                    Learn More
                    <span className="group-hover/link:translate-x-1 transition-transform">
                      →
                    </span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
