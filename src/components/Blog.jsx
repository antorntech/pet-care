import React from "react";
import { CalendarIcon, UserIcon } from "@heroicons/react/24/outline";

const blogPosts = [
  {
    id: 1,
    title: "10 Essential Tips for First-Time Pet Owners",
    excerpt:
      "Bringing home your first pet is exciting! Learn the essential tips to ensure a smooth transition for both you and your new companion.",
    image:
      "https://images.unsplash.com/photo-1509205477838-a534e43a849f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMHBldHMlMjBkb2dzJTIwY2F0c3xlbnwxfHx8fDE3Njc1MDAxMjZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    author: "Dr. Sarah Johnson",
    date: "Dec 15, 2025",
    category: "Pet Care",
  },
  {
    id: 2,
    title: "The Importance of Regular Veterinary Check-ups",
    excerpt:
      "Discover why routine vet visits are crucial for preventing health issues and ensuring your pet lives a long, healthy life.",
    image:
      "https://images.unsplash.com/photo-1759164955427-14ca448a839d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2ZXRlcmluYXJpYW4lMjBwZXQlMjBjYXJlfGVufDF8fHx8MTc2NzUwMDEyNnww&ixlib=rb-4.1.0&q=80&w=1080",
    author: "Dr. Michael Chen",
    date: "Dec 10, 2025",
    category: "Health",
  },
  {
    id: 3,
    title: "Summer Grooming Guide: Keep Your Pet Cool",
    excerpt:
      "As temperatures rise, learn how proper grooming can help your pet stay comfortable and healthy during the hot summer months.",
    image:
      "https://images.unsplash.com/photo-1625279138836-e7311d5c863a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXQlMjBncm9vbWluZ3xlbnwxfHx8fDE3Njc1MDAxMjd8MA&ixlib=rb-4.1.0&q=80&w=1080",
    author: "Lisa Martinez",
    date: "Dec 5, 2025",
    category: "Grooming",
  },
];

const Blog = () => {
  return (
    <section id="blog" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <span className="text-[#3F9AAE] font-semibold uppercase tracking-wide">
            Blog & Tips
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mt-3 mb-4">
            Latest Pet Care Insights
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Expert advice and helpful tips to keep your pets healthy, happy, and
            well-cared for.
          </p>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow group border border-gray-100"
            >
              {/* Post Thumbnail */}
              <div className="h-56 overflow-hidden relative">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-[#3F9AAE] text-white px-3 py-1 rounded-full text-xs font-medium">
                    {post.category}
                  </span>
                </div>
              </div>

              {/* Post Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-[#3F9AAE] transition-colors line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-3 text-sm leading-relaxed">
                  {post.excerpt}
                </p>

                {/* Post Meta */}
                <div className="flex items-center gap-4 text-xs text-gray-500 mb-6 border-t border-gray-100 pt-4">
                  <div className="flex items-center gap-1">
                    <UserIcon className="w-4 h-4 text-[#3F9AAE]" />
                    <span className="font-medium">{post.author}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <CalendarIcon className="w-4 h-4 text-[#3F9AAE]" />
                    <span>{post.date}</span>
                  </div>
                </div>

                <a
                  href={`#blog/${post.id}`}
                  className="text-[#3F9AAE] font-semibold hover:text-cyan-700 inline-flex items-center gap-2 group/link transition-all"
                >
                  Read More
                  <span className="group-hover/link:translate-x-1 transition-transform">
                    →
                  </span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
