import React from 'react'

/* Images */
import img1 from "@/public/images/other/1.jpeg";
import img2 from "@/public/images/rooms/2.jpeg";
import img3 from "@/public/images/other/3.jpeg";
import img4 from "@/public/images/rooms/4.jpeg";
import img5 from "@/public/images/other/5.jpeg";
import img6 from "@/public/images/other/6.jpeg";
import img7 from "@/public/images/rooms/7.jpeg";
import img8 from "@/public/images/other/8.jpeg";
import img9 from "@/public/images/other/9.jpeg";
import img10 from "@/public/images/other/10.jpeg";
import img11 from "@/public/images/rooms/11.jpeg";
import img12 from "@/public/images/other/12.jpeg";
import img17 from "@/public/images/rooms/17.jpeg";
import img20 from "@/public/images/rooms/20.jpeg";
import img21 from "@/public/images/rooms/21.jpeg";
import img22 from "@/public/images/rooms/22.jpeg";
import img23 from "@/public/images/rooms/23.jpeg";
import { ImageIcon } from 'lucide-react';

function Gallery() {
      const galleryImages = [
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    img7,
    img8,
    img9,
    img10,
    img11,
    img12,
  ];

  return (
    <div>
              {/* ✅ Gallery Section */}
      <section id="gallery" className="py-24 bg-gray-50">
        <div className="px-4 mx-auto text-center max-w-7xl">
          <div className="flex justify-center mb-6">
            <ImageIcon className="w-10 h-10 text-emerald-600" />
          </div>
          <h2 className="mb-8 text-4xl font-light text-gray-900 md:text-5xl">
            Our Gallery
          </h2>
          <p className="max-w-2xl mx-auto mb-16 text-lg text-gray-600">
            Explore the scenic views, cozy interiors, and tropical surroundings
            of Ceylone Retreat Hikkaduwa.
          </p>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
            {galleryImages.map((src, i) => (
              <div
                key={i}
                className="overflow-hidden transition-all duration-500 rounded-sm shadow-lg hover:shadow-2xl"
              >
                <img
                  src={src.src}
                  alt={`Gallery ${i + 1}`}
                  className="object-cover w-full h-64 transition-transform duration-700 hover:scale-110"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Gallery