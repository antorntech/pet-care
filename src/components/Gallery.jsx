import React, { useState, useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

const images = [
  { id: 1, url: "/images/1.jpeg", alt: "Cute dog playing" },
  { id: 2, url: "/images/2.jpeg", alt: "Cat grooming" },
  { id: 3, url: "/images/3.jpeg", alt: "Dog being examined" },
  { id: 4, url: "/images/4.jpeg", alt: "Sleeping cat" },
  { id: 5, url: "/images/5.jpeg", alt: "Puppy running" },
  { id: 6, url: "/images/6.jpeg", alt: "Dog grooming" },
  { id: 7, url: "/images/7.jpeg", alt: "Cat grooming" },
  { id: 8, url: "/images/8.jpeg", alt: "Dog grooming" },
];

const Gallery = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" });

  const scrollPrev = useCallback(
    () => emblaApi && emblaApi.scrollPrev(),
    [emblaApi]
  );
  const scrollNext = useCallback(
    () => emblaApi && emblaApi.scrollNext(),
    [emblaApi]
  );

  return (
    <section id="gallery" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-[#3F9AAE] font-semibold uppercase tracking-wide">
            Our Gallery
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mt-3 mb-4">
            Moments of Happiness
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            A glimpse into the daily lives of our happy furry friends and our
            dedicated care process.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative group">
          {/* embla__viewport */}
          <div className="overflow-hidden rounded-3xl" ref={emblaRef}>
            {/* embla__container */}
            <div className="flex">
              {images.map((img) => (
                <div
                  key={img.id}
                  className="relative flex-[0_0_100%] sm:flex-[0_0_50%] lg:flex-[0_0_33.33%] min-w-0 pl-4"
                >
                  <div className="h-[300px] md:h-[400px] overflow-hidden rounded-2xl">
                    <img
                      src={img.url}
                      alt={img.alt}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons - Hidden by default, show on hover */}
          <button
            onClick={scrollPrev}
            className="absolute cursor-pointer left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-3 rounded-full shadow-lg text-gray-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden md:block"
          >
            <ChevronLeftIcon className="w-6 h-6" />
          </button>

          <button
            onClick={scrollNext}
            className="absolute cursor-pointer right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-3 rounded-full shadow-lg text-gray-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden md:block"
          >
            <ChevronRightIcon className="w-6 h-6" />
          </button>

          {/* Mobile Indicators */}
          <div className="flex justify-center gap-2 mt-6 md:hidden">
            <p className="text-sm text-gray-400">Swipe to see more →</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
