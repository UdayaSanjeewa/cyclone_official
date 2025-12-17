"use client";

import Image from "next/image";
import { useState } from "react";
import {
  Wifi,
  Utensils,
  Dumbbell,
  MapPin,
  Car,
  Coffee,
  Users,
  BanIcon,
  Wine,
  Waves,
  Info,
  ChevronLeft,
  ChevronRight,
  X,
} from "lucide-react";
import { Card, CardContent } from "@/components/components/card";
import { Badge } from "@/components/components/badge";
import { Button } from "@/components/ui/button";

/* Images */
import img from "@/public/images/other/hero section image.jpeg";
import img1 from "@/public/HouseByTheSeaImages/3.jpg";
import img2 from "@/public/HouseByTheSeaImages/6.jpg";
import img3 from "@/public/HouseByTheSeaImages/8.jpg";
import img4 from "@/public/HouseByTheSeaImages/14.jpg";
import img5 from "@/public/HouseByTheSeaImages/17.jpg";
import img6 from "@/public/HouseByTheSeaImages/18.jpg";
import img7 from "@/public/HouseByTheSeaImages/22.jpg";
import img8 from "@/public/HouseByTheSeaImages/28.jpg";
import img9 from "@/public/HouseByTheSeaImages/29.jpg";
import img10 from "@/public/HouseByTheSeaImages/32.jpg";
import img11 from "@/public/HouseByTheSeaImages/33.jpg";
import img12 from "@/public/HouseByTheSeaImages/35.jpg";

const facilities = [
  { icon: Waves, label: "Beachfront" },
  { icon: Wifi, label: "Free WiFi" },
  { icon: Car, label: "Airport shuttle" },
  { icon: Users, label: "Family rooms" },
  { icon: Car, label: "Free parking" },
  { icon: BanIcon, label: "Non-smoking rooms" },
  { icon: Coffee, label: "Tea/Coffee Maker in All Rooms" },
  { icon: Wine, label: "Bar" },
  { icon: Waves, label: "Private beach area" },
  { icon: Utensils, label: "Breakfast" },
];

// const galleryImages = [
//   {
//     src: img1,
//     alt: 'Beachfront property view',
//   },
//   {
//     src: img2,
//     alt: 'Luxury bedroom with ocean view',
//   },
//   {
//     src: img3,
//     alt: 'Beachfront terrace',
//   },
//   {
//     src: img4,
//     alt: 'Swimming pool area',
//   },
//   {
//     src: img5,
//     alt: 'Spa and wellness facilities',
//   },
//   {
//     src: img6,
//     alt: 'Restaurant and bar area',
//   },
//     {
//     src: img7,
//     alt: 'Restaurant and bar area',
//   },
//     {
//     src: img8,
//     alt: 'Restaurant and bar area',
//   },
//     {
//     src: img9,
//     alt: 'Restaurant and bar area',
//   },
//     {
//     src: img10,
//     alt: 'Restaurant and bar area',
//   },
//     {
//     src: img11,
//     alt: 'Restaurant and bar area',
//   },
//     {
//     src: img12,
//     alt: 'Restaurant and bar area',
//   },
// ];

const galleryImages = [
  { src: img1, alt: "Beachfront property view" },
  { src: img2, alt: "Luxury bedroom with ocean view" },
  { src: img3, alt: "Beachfront terrace" },
  { src: img4, alt: "Swimming pool area" },
  { src: img5, alt: "Spa and wellness facilities" },
  { src: img6, alt: "Restaurant and bar area" },
  { src: img7, alt: "Restaurant and bar area" },
  { src: img8, alt: "Restaurant and bar area" },
  { src: img9, alt: "Restaurant and bar area" },
  { src: img10, alt: "Restaurant and bar area" },
  { src: img11, alt: "Restaurant and bar area" },
  { src: img12, alt: "Restaurant and bar area" },
];

export default function PropertyPage() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const openLightbox = (index: number) => {
    setSelectedImage(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const navigateImage = (direction: "prev" | "next") => {
    if (selectedImage === null) return;

    if (direction === "prev") {
      setSelectedImage(
        selectedImage === 0 ? galleryImages.length - 1 : selectedImage - 1
      );
    } else {
      setSelectedImage(
        selectedImage === galleryImages.length - 1 ? 0 : selectedImage + 1
      );
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <div className="relative h-[70vh] min-h-[500px] w-full overflow-hidden">
        {/* <Image
          src={img.src}
          alt="The Sea Hikka Property"
          fill
          className="object-cover"
          priority
        /> */}

        <Image
          src={img}
          alt="The Sea Hikka Property"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-16">
          <div className="max-w-7xl mx-auto">
            <Badge className="mb-4 bg-emerald-500 hover:bg-emerald-600 text-white border-0 px-4 py-1">
              Beachfront Property
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 drop-shadow-lg">
              The Sea Hikka, Hikkaduwa
            </h1>
            <p className="text-xl text-white/90 max-w-2xl drop-shadow-md">
              Private beach area with direct beachfront access in paradise
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12 md:py-20">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-slate-900">
            About this property
          </h2>

          <div className="grid gap-8">
            <Card className="border-l-4 border-l-blue-500 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-blue-50 p-3 rounded-lg">
                    <MapPin className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-slate-900">
                      Beachfront Location
                    </h3>
                    <p className="text-slate-600 leading-relaxed">
                      House by The Sea Hikka in Hikkaduwa offers a private beach
                      area and direct beachfront access. Guests enjoy sea views
                      and a sun terrace, complemented by a lush garden and a
                      bar.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-emerald-500 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-emerald-50 p-3 rounded-lg">
                    <Utensils className="w-6 h-6 text-emerald-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-slate-900">
                      Comfortable Accommodations
                    </h3>
                    <p className="text-slate-600 leading-relaxed">
                      Rooms feature air-conditioning, private bathrooms, and
                      modern amenities such as free WiFi, flat-screen TVs, and
                      kitchenettes. Family rooms and interconnected rooms cater
                      to all travelers.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-amber-500 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-amber-50 p-3 rounded-lg">
                    <Dumbbell className="w-6 h-6 text-amber-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-slate-900">
                      Wellness and Leisure
                    </h3>
                    <p className="text-slate-600 leading-relaxed">
                      The guest house provides spa facilities, yoga classes, and
                      a fitness room. Outdoor activities include cycling and
                      scuba diving, while indoor options include a coffee shop
                      and minimarket.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-rose-500 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-rose-50 p-3 rounded-lg">
                    <Info className="w-6 h-6 text-rose-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-slate-900">
                      Nearby Attractions
                    </h3>
                    <p className="text-slate-600 leading-relaxed">
                      Seenigama Beach is an 8-minute walk away, while Seenigama
                      Temple lies 0.7 mi from the property. Galle Fort is 14 mi
                      distant, offering cultural exploration.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <p className="text-sm text-slate-500 mt-6 italic">
            Distance in property description is calculated using © OpenStreetMap
          </p>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-slate-900">
            Gallery
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className="relative aspect-[4/3] overflow-hidden rounded-xl cursor-pointer group shadow-lg hover:shadow-2xl transition-all duration-300"
                onClick={() => openLightbox(index)}
              >
                {/* <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                /> */}

                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(max-width: 768px) 100vw,
         (max-width: 1200px) 50vw,
         33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-white font-medium drop-shadow-lg">
                      {image.alt}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-slate-900">
            Most popular facilities
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
            {facilities.map((facility, index) => {
              const Icon = facility.icon;
              return (
                <Card
                  key={index}
                  className="hover:shadow-lg transition-shadow cursor-pointer group border-2 hover:border-emerald-500"
                >
                  <CardContent className="p-6 flex items-center gap-4">
                    <div className="bg-emerald-50 p-3 rounded-lg group-hover:bg-emerald-100 transition-colors">
                      <Icon className="w-5 h-5 text-emerald-600" />
                    </div>
                    <span className="text-sm font-medium text-slate-700 group-hover:text-emerald-700 transition-colors">
                      {facility.label}
                    </span>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>

      {selectedImage !== null && (
        <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4">
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-4 right-4 text-white hover:bg-white/10 hover:text-white z-10"
            onClick={closeLightbox}
          >
            <X className="w-6 h-6" />
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/10 hover:text-white z-10"
            onClick={() => navigateImage("prev")}
          >
            <ChevronLeft className="w-8 h-8" />
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/10 hover:text-white z-10"
            onClick={() => navigateImage("next")}
          >
            <ChevronRight className="w-8 h-8" />
          </Button>

          <div className="relative w-full h-full max-w-7xl max-h-[90vh] flex items-center justify-center">
            {/* <Image
              src={galleryImages[selectedImage].src}
              alt={galleryImages[selectedImage].alt}
              fill
              className="object-contain"
            /> */}

            <Image
              src={galleryImages[selectedImage].src}
              alt={galleryImages[selectedImage].alt}
              fill
              sizes="100vw"
              className="object-contain"
            />
          </div>

          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white text-sm bg-black/50 px-4 py-2 rounded-full">
            {selectedImage + 1} / {galleryImages.length}
          </div>
        </div>
      )}
    </div>
  );
}
