"use client";

import Image from "next/image";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/components/card";
import { Badge } from "@/components/components/badge";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import img from "@/public/images/other/hero section image.jpeg";
import Navbar from "@/components/components/Navbar";

export default function EnchantingSriLankaPage() {
  const [selectedImage, setSelectedImage] = useState<{
    src: typeof img;
    alt: string;
    day: number;
    title: string;
  } | null>(null);

  const openLightbox = (src: typeof img, day: number, title: string) =>
    setSelectedImage({ src, alt: `Day ${day}: ${title}`, day, title });

  const closeLightbox = () => setSelectedImage(null);

  const navigateImage = (direction: "prev" | "next") => {
    if (!selectedImage) return;
    const flatImages = days.flatMap((day) =>
      day.images.map((imgItem) => ({
        src: imgItem,
        day: day.day,
        title: day.title,
      }))
    );
    const currentIndex = flatImages.findIndex(
      (i) => i.src === selectedImage.src && i.day === selectedImage.day
    );
    const nextIndex =
      direction === "prev"
        ? currentIndex === 0
          ? flatImages.length - 1
          : currentIndex - 1
        : currentIndex === flatImages.length - 1
        ? 0
        : currentIndex + 1;

    const nextImage = flatImages[nextIndex];
    setSelectedImage({
      src: nextImage.src,
      alt: `Day ${nextImage.day}: ${nextImage.title}`,
      day: nextImage.day,
      title: nextImage.title,
    });
  };

  return (
    <>
      <Navbar />
      <div className="w-full h-16 bg-gray-600"></div>
      <main className="w-full bg-white text-gray-800">
        {/* HERO SECTION */}
        <section className="relative overflow-hidden">
          <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-10 px-6 py-20 items-center">
            <div className="space-y-6">
              <Badge className="w-fit">Sri Lanka Itinerary</Badge>
              <h1 className="text-4xl md:text-5xl font-serif leading-tight">
                Enchanting Sri Lanka <br /> Enchanting Ceylon
              </h1>
              <p className="text-gray-600 max-w-xl">
                A perfectly curated journey that blends culture, wildlife,
                nature, beaches, and heritage across Sri Lanka.
              </p>
              <div className="flex gap-4">
                <Button size="lg">Plan My Trip</Button>
                <Button size="lg" variant="outline">
                  Download Itinerary
                </Button>
              </div>
            </div>

            <div className="relative w-full h-[420px] rounded-full overflow-hidden">
              <Image
                src={img}
                alt="Sri Lanka Beach"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </section>

        {/* SUMMARY SECTION */}
        <section className="bg-gray-50 py-16">
          <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">
            <Card className="md:col-span-2">
              <CardContent className="p-6 space-y-4">
                <h3 className="text-xl font-semibold">Tour Overview</h3>
                <p className="text-gray-600 leading-relaxed">
                  This itinerary offers an immersive experience through Sri
                  Lanka’s iconic destinations, rich traditions, scenic
                  landscapes, and unforgettable wildlife encounters.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Journey Highlights</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-gray-600 space-y-2">
                <p>• Cultural Triangle</p>
                <p>• Tea Plantations</p>
                <p>• Wildlife Safaris</p>
                <p>• Golden Beaches</p>
                <p>• Scenic Train Rides</p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* DAY-BY-DAY ITINERARY */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl font-serif mb-12">Day by Day Itinerary</h2>

            <div className="space-y-16">
              {days.map((day) => (
                <div
                  key={day.day}
                  className="grid md:grid-cols-3 gap-8 items-start"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold">
                      {day.day}
                    </div>
                    <h3 className="font-semibold text-lg">{day.title}</h3>
                  </div>

                  <p className="md:col-span-1 text-gray-600 leading-relaxed">
                    {day.description}
                  </p>

                  <div className="grid grid-cols-2 gap-4">
                    {day.images.map((imgItem, i) => (
                      <div
                        key={i}
                        className="relative h-36 rounded-xl overflow-hidden cursor-pointer"
                        onClick={() =>
                          openLightbox(imgItem, day.day, day.title)
                        }
                      >
                        <Image
                          src={imgItem}
                          alt={`Day ${day.day}`}
                          fill
                          className="object-cover"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* MAP SECTION */}
        <section className="bg-gray-50 py-20">
          <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
            <div className="relative h-[420px] rounded-2xl overflow-hidden">
              <Image
                src={img}
                alt="Sri Lanka Route Map"
                fill
                className="object-cover"
              />
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Journey Highlights</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-600 space-y-2">
                <p>• Colombo – Cultural Gateway</p>
                <p>• Sigiriya – Ancient Rock Fortress</p>
                <p>• Kandy – Sacred City</p>
                <p>• Ella – Hill Country</p>
                <p>• Yala – Wildlife Safari</p>
                <p>• Bentota – Beach Relaxation</p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* FAQ SECTION */}
        <section className="py-20">
          <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-10">
            <Card className="bg-rose-50">
              <CardHeader>
                <CardTitle>Best Time to Visit</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-600">
                December to April is ideal for west and south coast travel,
                while May to September suits the east coast.
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>FAQ</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-gray-600 text-sm">
                <p>• Can this itinerary be customized?</p>
                <p>• Is this tour family-friendly?</p>
                <p>• What accommodation types are included?</p>
                <p>• Are entrance fees included?</p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* FOOTER IMAGE */}
        <section className="relative h-[360px]">
          <Image
            src={img}
            alt="Sri Lanka Nature"
            fill
            className="object-cover"
          />
        </section>
      </main>

      {/* LIGHTBOX */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4">
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-4 right-4 text-white hover:bg-white/10"
            onClick={closeLightbox}
          >
            <X className="w-6 h-6" />
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/10"
            onClick={() => navigateImage("prev")}
          >
            <ChevronLeft className="w-8 h-8" />
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/10"
            onClick={() => navigateImage("next")}
          >
            <ChevronRight className="w-8 h-8" />
          </Button>

          <div className="relative w-full h-full max-w-7xl max-h-[90vh] flex items-center justify-center">
            <Image
              src={selectedImage.src}
              alt={selectedImage.alt}
              fill
              className="object-contain"
            />
          </div>

          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white text-sm bg-black/50 px-4 py-2 rounded-full">
            {selectedImage.alt}
          </div>
        </div>
      )}
    </>
  );
}

const days = [
  {
    day: 1,
    title: "Arrival in Colombo",
    description:
      "Meet and greet at the airport and transfer to your hotel. Explore Colombo city highlights.",
    images: [img, img],
  },
  {
    day: 2,
    title: "Sigiriya & Dambulla",
    description:
      "Visit the iconic Sigiriya Rock Fortress and Dambulla Cave Temple.",
    images: [img, img],
  },
  {
    day: 3,
    title: "Kandy",
    description:
      "Explore the Temple of the Tooth Relic and enjoy a cultural dance show.",
    images: [img, img],
  },
  {
    day: 4,
    title: "Ella",
    description: "Scenic train ride through tea plantations and waterfalls.",
    images: [img, img],
  },
];
