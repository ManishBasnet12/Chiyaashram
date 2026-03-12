"use client";

import Image from "next/image";
import Link from "next/link";

const drinks = [
  {
    name: "Masala Chiya",
    description: "Aromatic spiced tea with cardamom, cinnamon, and ginger",
    img: "/drinks/chiya1.jpg",
  },
  {
    name: "Milk Chiya",
    description: "Creamy classic with rich milk foam and smooth finish",
    img: "/drinks/chiya2.jpg",
  },
  {
    name: "Ginger Lemon Tea",
    description: "Refreshing blend with fresh ginger and tangy lemon",
    img: "/drinks/chiya3.jpg",
  },
  {
    name: "Kadak Chiya",
    description: "Strong black tea for the bold tea lovers",
    img: "/drinks/chiya4.jpg",
  },
];

export default function feature() {
  return (
    <section className="w-full py-20 px-6 bg-[#161210] text-white flex flex-col items-center">
      {/* Section Title */}
      <p className="text-orange-300">Our Signature Drinks</p>
      <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
          Featured Chiya 
      </h2>
      <p className="text-orange-200 text-center mb-12 max-w-2xl">
        Handcrafted authentic Nepali tea served with warmth at
        our cozy tea house in Kathmandu
      </p>

      {/* Drinks Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-full max-w-6xl ">
        {drinks.map((drink) => (
          <div key={drink.name}>
            <div className="bg-stone-800 rounded-2xl  flex flex-col items-center text-center shadow-lg overflow-hidden">
              <Image
                src={drink.img}
                alt={drink.name}
                width={150}
                height={150}
                className="w-full  h-full object-cover overflow-hidden hover:scale-115 hover:brightness-80 transition-all duration-300  "
              />
            </div>
            <h3 className="text-center text-xl font-semibold my-2">{drink.name}</h3>
            <p className= "text-center text-stone-300 leading-5.5">{drink.description}</p>
          </div>
        ))}
      </div>

      {/* Explore Menu Button */}
      <Link
        href="/menu"
        className="mt-12 px-8 py-3 bg-orange-400 text-black font-semibold rounded-full hover:bg-orange-500 transition"
      >
        Explore Full Menu
      </Link>
    </section>
  );
}
