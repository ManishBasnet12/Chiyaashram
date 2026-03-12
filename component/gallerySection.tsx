"use client";

import Image from "next/image";
import Link from "next/link";

const galleryImages = [
  {
    img: "/drinks/chiya1.jpg",
  },
  {
    img: "/drinks/chiya2.jpg",
  },
  {
    img: "/drinks/chiya3.jpg",
  },
  {
    img: "/drinks/chiya4.jpg",
  },
];

export default function gallery() {
  return (
    <section className="w-full py-20 px-6 bg-[#161210] text-white flex flex-col items-center">
      {/* Section Title */}
      <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
          The Chiyaashram Vibe 
      </h2>
      <p className="text-orange-200 text-center mb-12 max-w-2xl">
        Handcrafted authentic Nepali tea served with warmth at
        our cozy tea house in Kathmandu
      </p>

      {/* Drinks Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-full max-w-6xl ">
        {galleryImages.map((image) => (
          <div key={image.img}>
            <div className="bg-stone-800 rounded-2xl  flex flex-col items-center text-center shadow-lg overflow-hidden">
              <Image
                src={image.img}
                alt={image.img}
                width={150}
                height={150}
                className="w-full  h-full object-cover overflow-hidden hover:scale-115 hover:brightness-80 transition-all duration-300  "
              />
            </div>
          </div>
        ))}
      </div>

      {/* Explore Menu Button */}
      <Link
        href="/menu"
        className="mt-12 px-8 py-3 bg-orange-400 text-black font-semibold rounded-full hover:bg-orange-500 transition"
      >
        Explore More
      </Link>
    </section>
  );
}
