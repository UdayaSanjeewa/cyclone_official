"use client";

import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/components/card";

/* Images */
import img from "@/public/images/other/hero section image.jpeg";
import Link from "next/link";

export default function OurTravelJournal() {
const items = [
  {
    title: "Walking Tour Sri Lanka",
    desc: "Be prepared to sample some of Sri Lanka’s most uplifting scenery on foot with this 14-days tour.",
    img,
  },
  {
    title: "UNESCO World Heritage Sites Tour in Sri Lanka",
    desc: "UNESCO’s World Heritage Site list includes eight unique attractions in Sri Lanka that are considered part of the world’s heritage.",
    img,
  },
  {
    title: "Family Fun in Sri Lanka",
    desc: "This Family Fun Tour in Sri Lanka is designed to give kids the best experience they could have in our country.",
    img,
  },
  {
    title: "Adventure & Wildlife",
    desc: "Explore Sri Lanka’s national parks, wildlife safaris, and thrilling outdoor adventures.",
    img,
  },
];


  return (
    <section className="w-full py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <h2 className="text-center text-3xl md:text-4xl font-serif mb-14">
          Our Travel Journal
        </h2>

        {/* ShadCN Carousel */}
        <Carousel opts={{ align: "start" }} className="w-full">
          <CarouselContent className="-ml-6">
            {items.map((item, index) => (
              <CarouselItem
                key={index}
                className="pl-6 basis-full sm:basis-1/2 lg:basis-1/3"
              >
                <Card className="group h-[480px] flex flex-col overflow-hidden rounded-2xl border-none shadow-md transition-all duration-300 hover:shadow-xl">
                  {/* Image */}
                  <div className="relative h-64 w-full overflow-hidden shrink-0">
                    <Image
                      src={item.img}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>

                  {/* Content */}
                  <CardHeader className="text-center flex-1">
                    <CardTitle className="text-lg font-semibold">
                      {item.title}
                    </CardTitle>
                    <CardDescription className="mt-2 text-sm leading-relaxed line-clamp-3">
                      {item.desc}
                    </CardDescription>
                  </CardHeader>

                  {/* Footer CTA */}
                  <CardContent className="pt-0 text-center mt-auto pb-6">
                    <Link href={"/birdwatching"}>
                    <span className="inline-flex items-center gap-1 text-xs font-semibold tracking-widest text-blue-600 cursor-pointer hover:underline">
                      READ MORE
                      <span className="transition-transform group-hover:translate-x-1">
                        →
                      </span>
                    </span>                    
                    </Link>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>

          <CarouselPrevious className="hidden md:flex -left-12" />
          <CarouselNext className="hidden md:flex -right-12" />
        </Carousel>
      </div>
    </section>
  );
}
