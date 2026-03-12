import Image from "next/image";

export default function VibePage() {
  const images = [
    "/vibe/gallery-1.jpg",
    "/vibe/gallery-2.jpg",
    "/vibe/gallery-3.jpg",
    "/vibe/gallery-4.jpg",
    "/vibe/gallery-5.jpg",
    "/vibe/gallery-6.jpg",
    "/vibe/gallery-7.jpg",
    "/vibe/gallery-8.jpg",
  ];

  return (
    <section className="bg-[#161210] min-h-screen text-white py-40 px-6">
      {/* Heading */}
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          The Chiyaashram Vibe
        </h1>

        <p className="text-orange-300 text-xl italic mb-4">
          "More than tea — it's an experience"
        </p>

        <p className="text-stone-300 leading-relaxed">
          Step into the warm and cozy world of Chiyaashram. Rustic wooden
          interiors, the aroma of freshly brewed chiya, and conversations that
          flow as smoothly as the tea itself. Every corner tells a story of
          Nepali tea culture and community.
        </p>
      </div>

      {/* Gallery */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {images.map((img, index) => (
          <div
            key={index}
            className="relative w-full h-72 overflow-hidden rounded-xl group"
          >
            <Image
              src={img}
              alt="Chiyaashram vibe"
              fill
              className="object-cover group-hover:scale-110 transition duration-500"
            />
          </div>
        ))}
      </div>

      {/* Bottom Quote */}
      <div className="text-center mt-20 max-w-3xl mx-auto">
        <p className="text-2xl text-orange-200 italic">
          "Where every sip tells a story and every moment feels like home."
        </p>
      </div>
    </section>
  );
}
