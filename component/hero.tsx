import Image from "next/image";
import Link from "next/link";
import { Clock, MapPin } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative w-full min-h-[80vh] h-screen flex flex-col items-center justify-center bg-[url('/hero.jpg')] bg-cover bg-center">
      {/* Overlay */}
      <div className="absolute inset-0">
        <Image
          src="/herobg.jpg"
          alt="logo"
          width={100}
          height={100}
          unoptimized
          className="w-full h-full object-cover blur-[2px] opacity-40"
        />
      </div>

      <div className="relative text-center px-6 max-w-3xl h-full justify-center flex flex-col items-center">
        {/* Title */}
        <h1 className="text-4xl md:text-7xl font-bold text-white mb-4">
          <span className="text-orange-400">चिया </span>Ashram
        </h1>

        {/* Tagline */}
        <p className="text-lg md:text-2xl text-orange-300 mb-4 italic">
          "Warm Tea. Warm Moments."
        </p>

        {/* Subtitle */}
        <p className="text-orange-100 mb-8 text-xl font-light">
          <MapPin className="inline-block mr-2 text-orange-400" size={16} />
          Experience authentic Nepali tea culture in a cozy tea house located in
          chasal Kathmandu, Nepal
        </p>

        {/* Buttons */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-6">
          <Link
            href="/menu"
            className="px-6 py-3 bg-orange-400 text-black font-medium rounded-4xl hover:bg-stone-200 transition"
          >
            View Menu
          </Link>
          <Link
            href="/visit"
            className="px-6 py-3 border border-white text-white font-medium rounded-4xl hover:bg-white hover:text-black transition"
          >
            Visit Us
          </Link>
        </div>

        {/* Open Daily Badge */}
        <div className="inline-block px-5 py-2 rounded-full backdrop-blur-md bg-white/10 border border-white/20 text-white text-sm mb-6">
          <Clock className="inline-block mr-2 text-orange-400" size={16} />
          Open Daily: 8 AM – 10 PM
        </div>
      </div>
      {/* Scroll Text */}

      <div className="mt-10 flex justify-center absolute bottom-10">
        <div className="mouse-scroll">
          <div className="mouse-scroll-dot"></div>
        </div>
      </div>
    </section>
  );
}
