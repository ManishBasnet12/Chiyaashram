import { Star } from "lucide-react";

export default function ReviewsPage() {
  const reviews = [
    {
      name: "Aarav Sharma",
      review:
        "The best chiya spot in Kathmandu! The masala chiya is perfectly spiced and the atmosphere feels so warm and welcoming.",
      rating: 5,
    },
    {
      name: "Sita Gurung",
      review:
        "Loved the cozy wooden interior and the calm vibe. Perfect place to relax with friends over a cup of milk chiya.",
      rating: 5,
    },
    {
      name: "Rahul Karki",
      review:
        "Great momo and amazing tea. The hookah lounge area is also very chill. Definitely coming back again.",
      rating: 4,
    },
    {
      name: "Maya Tamang",
      review:
        "Such a peaceful place! You can really feel the authentic Nepali tea culture here.",
      rating: 5,
    },
  ];

  return (
    <section className="bg-[#161210] min-h-screen text-white py-40 px-6">
      
      {/* Heading */}
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          What Our Guests Say
        </h1>

        <p className="text-orange-300 text-xl italic mb-4">
          "Every cup creates a memory"
        </p>

        <p className="text-stone-300 leading-relaxed">
          At Chiyaashram, every guest becomes part of our story. Here are a few
          words from the wonderful people who have shared tea, laughter, and
          moments with us.
        </p>
      </div>

      {/* Review Grid */}
      <div className="max-w-6xl mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {reviews.map((r, i) => (
          <div
            key={i}
            className="bg-[#1f1a17] p-6 rounded-xl border border-white/10 hover:border-orange-400 transition"
          >
            {/* Stars */}
            <div className="flex mb-3">
              {[...Array(r.rating)].map((_, i) => (
                <Star key={i} size={18} className="text-orange-400 fill-orange-400" />
              ))}
            </div>

            {/* Review */}
            <p className="text-stone-300 italic mb-4">"{r.review}"</p>

            {/* Name */}
            <p className="text-white font-semibold">{r.name}</p>
          </div>
        ))}
      </div>

      {/* Bottom Quote */}
      <div className="text-center mt-24 max-w-3xl mx-auto">
        <p className="text-2xl text-orange-200 italic">
          "A good cup of chiya warms the soul — but sharing it makes it unforgettable."
        </p>
      </div>
    </section>
  );
}