"use client";

import Image from "next/image";

import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

const heroImages = [hero1, hero2, hero3];

/* Images */
import heroSectionImg from "@/public/images/other/hero section image.jpeg";
import hero1 from "@/public/images/other/hero section image.jpeg";
import hero2 from "@/public/HouseByTheSeaImages/33.jpg";
import hero3 from "@/public/HouseByTheSeaImages/29.jpg";
import hero4 from "@/public/HouseByTheSeaImages/32.jpg";
import { ImageIcon, Mail, MapPin, Menu, Palmtree, Phone, PhoneCall, X } from "lucide-react";
import { useEffect, useState } from "react";
import OwnersSection from "../components/components/OwnersSection";
import PlannedItineraries from "../components/components/PlannedItineraries";
import OurTravelJournal from "../components/components/OurTravelJournal";
import ExpandableContentSection from "../components/components/ExpandableContentSection";
import HeroCarousel from "@/components/components/HeroCarousal";

export default function Home() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [visibleSections, setVisibleSections] = useState<Set<string>>(
    new Set()
  );
  const heroImages = [hero1, hero2, hero3, hero4];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => new Set(prev).add(entry.target.id));
          }
        });
      },
      { threshold: 0.1 }
    );
    document.querySelectorAll("section[id]").forEach((section) => {
      observer.observe(section);
    });
    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    el?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };



  return (
    <div className="min-h-screen bg-white">

      {/* Hero Section */}
      {/* <section id="home" className="relative h-screen overflow-hidden">
        <img
          src={heroSectionImg.src}
          alt="Palm paradise"
          className="absolute inset-0 object-cover w-full h-full"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/50" />
        <div className="relative flex items-center justify-center h-full text-center">
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
      </section> */}

{/* Hero Section */}
{/* <section id="home" className="relative h-screen overflow-hidden"> */}
  {/* Carousel */}
  {/* <Carousel
    opts={{ loop: true }}
    plugins={[
      Autoplay({
        delay: 4000,
        stopOnInteraction: false,
      }),
    ]}
    className="absolute inset-0"
  >
    <CarouselContent>
      {heroImages.map((img, index) => (
        <CarouselItem key={index} className="relative h-screen">
          <Image
            src={img}
            alt="Ceylone Retreat"
            fill
            priority={index === 0}
            className="object-cover"
          />
        </CarouselItem>
      ))}
    </CarouselContent>
  </Carousel> */}

  {/* Overlay */}
  {/* <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/50 z-10" /> */}

  {/* Content */}
  {/* <div className="relative z-20 flex items-center justify-center h-full text-center">
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
</section> */}
      <HeroCarousel scrollToSection={scrollToSection} />


      {/* About Section */}
      <section id="about" className="py-24 bg-gray-50">
        <div className="max-w-6xl px-4 mx-auto text-center">
          <h2 className="mb-8 text-4xl font-light text-gray-900 md:text-5xl">
            About Ceylone Retreat
          </h2>
          <p className="max-w-3xl mx-auto text-lg text-gray-600">
            Ceylone Retreat Hikkaduwa offers peaceful accommodation surrounded by
            nature, blending modern comforts with Sri Lankan coastal charm.
          </p>
        </div>
      </section>

      {/* Planned Itineraries */}
      <PlannedItineraries />

      {/* Our Travel Journal */}
      <OurTravelJournal />

      {/* Expandable Content Section */}
      <ExpandableContentSection />

      {/* Owners Section */}
        <OwnersSection />

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-gray-100">
        <div className="max-w-6xl px-4 mx-auto text-center">
          <h2 className="mb-8 text-4xl font-light text-gray-900 md:text-5xl">
            Get in Touch
          </h2>
          <p className="max-w-3xl mx-auto mb-8 text-lg text-gray-600">
            Reach out to us for reservations or inquiries.
          </p>
          <div className="space-y-3 text-gray-700">
            <p>
              <Phone className="inline w-5 h-5 mr-2 text-emerald-600" /> (077)
              767 0333
            </p>
            <p>
              <PhoneCall className="inline w-5 h-5 mr-2 text-emerald-600" />{" "}
              (065) 205 3680
            </p>
            <p>
              <Mail className="inline w-5 h-5 mr-2 text-emerald-600" />{" "}
              info@ceyloneretreat.com
            </p>
            <p>
              <MapPin className="inline w-5 h-5 mr-2 text-emerald-600" />{" "}
              Hikkaduwa, Sri Lanka
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 text-center text-white bg-gray-900">
        <p className="text-sm text-gray-400">
          © 2025 Ceylone Retreat Hikkaduwa. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
