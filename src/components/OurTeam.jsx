import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaEnvelope,
} from "react-icons/fa";

const teamMembers = [
  {
    id: 1,
    name: "Dr. Sarah Johnson",
    role: "Senior Veterinarian",
    image:
      "https://images.unsplash.com/photo-1682340029802-571d3d2596e0?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    bio: "10+ years of experience in small animal medicine and surgery.",
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Pet Groomer",
    image:
      "https://images.unsplash.com/photo-1537368910025-700350fe46c7?q=80&w=1000",
    bio: "Specialist in breed-specific styling and creative grooming.",
  },
  {
    id: 3,
    name: "Lisa Martinez",
    role: "Behavioral Specialist",
    image:
      "https://images.unsplash.com/photo-1594824476967-48c8b964273f?q=80&w=1000",
    bio: "Certified trainer focusing on positive reinforcement techniques.",
  },
  {
    id: 4,
    name: "Dr. Robert Wilson",
    role: "Emergency Surgeon",
    image:
      "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=1000",
    bio: "Expert in high-stakes emergency care and orthopedic surgery.",
  },
];

const OurTeam = () => {
  return (
    <section id="team" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-[#3F9AAE] font-semibold uppercase tracking-wide">
            Our Specialists
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mt-3 mb-4">
            Meet Our Expert Team
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Our team consists of certified professionals who are dedicated to
            providing the best care for your pets.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="group bg-gray-50 rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              {/* Image Container */}
              <div className="relative h-72 overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                />

                {/* Social Overlay */}
                <div className="absolute inset-0 bg-[#1a2e44]/60 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href="#"
                    className="w-10 h-10 bg-white text-[#1a2e44] hover:bg-cyan-500 hover:text-white rounded-full flex items-center justify-center transition-colors"
                  >
                    <FaFacebookF />
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 bg-white text-[#1a2e44] hover:bg-cyan-500 hover:text-white rounded-full flex items-center justify-center transition-colors"
                  >
                    <FaTwitter />
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 bg-white text-[#1a2e44] hover:bg-cyan-500 hover:text-white rounded-full flex items-center justify-center transition-colors"
                  >
                    <FaLinkedinIn />
                  </a>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold text-[#1a2e44] mb-1">
                  {member.name}
                </h3>
                <p className="text-cyan-500 font-semibold text-sm mb-3 uppercase tracking-wider">
                  {member.role}
                </p>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">
                  {member.bio}
                </p>
                <button className="flex items-center gap-2 mx-auto text-[#1a2e44] font-bold hover:text-cyan-500 transition-colors text-sm">
                  <FaEnvelope className="text-cyan-500" /> Contact Member
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurTeam;
