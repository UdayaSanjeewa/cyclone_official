"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

/* Images */
import hero1 from "@/public/images/other/hero section image.jpeg";
import hero2 from "@/public/HouseByTheSeaImages/33.jpg";
import hero3 from "@/public/HouseByTheSeaImages/29.jpg";
import hero4 from "@/public/HouseByTheSeaImages/32.jpg";

const heroImages = [hero1, hero2, hero3, hero4];

export default function HeroCarousel({
  scrollToSection,
}: {
  scrollToSection: (id: string) => void;
}) {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-play loop
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000); // 5 seconds per slide
    return () => clearInterval(interval);
  }, []);

  // Manual navigation
  const goToSlide = (index: number) => setCurrentIndex(index);
  const prevSlide = () =>
    setCurrentIndex(
      (prev) => (prev - 1 + heroImages.length) % heroImages.length
    );
  const nextSlide = () =>
    setCurrentIndex((prev) => (prev + 1) % heroImages.length);

  return (
    // <section id="home" className="relative h-screen overflow-hidden">
    //   {/* Images */}
    //   {heroImages.map((img, index) => (
    //     <div
    //       key={index}
    //       className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ${
    //         index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
    //       }`}
    //     >
    //       <Image src={img} alt={`Hero ${index + 1}`} fill className="object-cover w-full h-full" priority />
    //       <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/50" />
    //     </div>
    //   ))}

    //   {/* Content */}
    //   <div className="relative flex items-center justify-center h-full text-center">
    //     <div className="max-w-3xl text-white">
    //       <h1 className="mb-6 text-5xl font-light md:text-7xl">Your Serene Escape</h1>
    //       <p className="mb-10 text-xl">Discover tranquility among palm trees in Hikkaduwa</p>
    //       <button
    //         onClick={() => scrollToSection("rooms")}
    //         className="px-10 py-4 text-sm tracking-widest transition-all duration-300 rounded-sm bg-emerald-600 hover:bg-emerald-700 hover:scale-105"
    //       >
    //         EXPLORE TOURS
    //       </button>
    //     </div>
    //   </div>

    //   {/* Navigation Dots */}
    //   <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-3">
    //     {heroImages.map((_, idx) => (
    //       <button
    //         key={idx}
    //         onClick={() => goToSlide(idx)}
    //         className={`w-3 h-3 rounded-full transition-all duration-300 ${
    //           currentIndex === idx ? "bg-emerald-600" : "bg-white/50 hover:bg-white"
    //         }`}
    //       />
    //     ))}
    //   </div>

    //   {/* Prev / Next Buttons */}
    //   <button
    //     onClick={prevSlide}
    //     className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition"
    //   >
    //     &#10094;
    //   </button>
    //   <button
    //     onClick={nextSlide}
    //     className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition"
    //   >
    //     &#10095;
    //   </button>
    // </section>

    <section id="home" className="relative h-screen overflow-hidden">
      {/* Images */}
      {heroImages.map((img, index) => (
        <div
          key={index}
          className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ${
            index === currentIndex ? "opacity-100 z-0" : "opacity-0"
          }`}
        >
          <Image
            src={img}
            alt={`Hero ${index + 1}`}
            fill
            className="object-cover w-full h-full"
            priority
          />
        </div>
      ))}

      {/* Gradient overlay on top of all images */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/50 z-10" />

      {/* Content on top */}
      <div className="relative z-20 flex items-center justify-center h-full text-center">
        <div className="max-w-3xl text-white">
          <h1 className="mb-6 text-5xl font-light md:text-7xl">
            Your Serene Escape
          </h1>
          <p className="mb-10 text-xl">
            Discover tranquility among palm trees in Hikkaduwa
          </p>
          <button
            onClick={() => scrollToSection("rooms")}
            className="px-10 py-4 text-sm tracking-widest transition-all duration-300 rounded-sm bg-emerald-600 hover:bg-emerald-700 hover:scale-105"
          >
            EXPLORE TOURS
          </button>
        </div>
      </div>

      {/* Navigation Dots */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-3 z-20">
        {heroImages.map((_, idx) => (
          <button
            key={idx}
            onClick={() => goToSlide(idx)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              currentIndex === idx
                ? "bg-emerald-600"
                : "bg-white/50 hover:bg-white"
            }`}
          />
        ))}
      </div>

      {/* Prev / Next Buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition z-20"
      >
        &#10094;
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition z-20"
      >
        &#10095;
      </button>
    </section>
  );
}
