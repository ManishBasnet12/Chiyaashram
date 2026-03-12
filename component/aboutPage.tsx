import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="bg-[#161210] text-white">
      {/* Hero */}
      <section className="py-40 text-center px-6">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          About <span className="text-orange-400">Chiya Ashram</span>
        </h1>
        <p className="text-stone-300 max-w-2xl mx-auto text-lg">
          A cozy tea haven in Kathmandu where every cup of chiya brings warmth,
          comfort, and a taste of Nepali tradition.
        </p>
      </section>

      {/* Our Story */}
      <section className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-14 items-center">
        <div>
          <h2 className="text-4xl font-semibold mb-6 text-orange-400">
            Our Story
          </h2>

          <p className="text-stone-300 text-lg leading-relaxed mb-5">
            Chiya Ashram was born from a simple idea — to create a peaceful
            place where people can slow down, enjoy authentic Nepali tea, and
            connect with friends and family.
          </p>

          <p className="text-stone-300 text-lg leading-relaxed">
            Inspired by the everyday tea culture of Nepal, we wanted to build
            more than just a tea shop. We created a space where the warmth of
            chiya, rustic interiors, and welcoming hospitality bring people
            together in the heart of Kathmandu.
          </p>
        </div>

        <Image
          src="/herobg.jpg"
          alt="Tea Culture"
          width={600}
          height={400}
          className="rounded-2xl object-cover"
        />
      </section>

      {/* Mission */}
      <section className="py-20 px-6 text-center">
        <h2 className="text-4xl font-semibold text-orange-400 mb-6">
          Our Mission
        </h2>

        <p className="max-w-3xl mx-auto text-stone-300 text-lg leading-relaxed">
          Our mission is to celebrate the rich culture of Nepali tea by serving
          authentic handcrafted chiya in a warm and welcoming environment. Every
          cup we serve is made with care, quality ingredients, and a passion for
          sharing Nepal’s beloved tea tradition.
        </p>
      </section>

      {/* What Makes Us Special */}
      <section className="max-w-6xl mx-auto py-24 px-6">
        <h2 className="text-4xl font-semibold text-orange-400 text-center mb-14">
          What Makes Us Special
        </h2>

        <div className="grid md:grid-cols-3 gap-10">
          <div className="border border-stone-800 p-8 rounded-xl">
            <h3 className="text-2xl font-semibold mb-4">Authentic Chiya</h3>
            <p className="text-stone-400 text-lg">
              We prepare traditional Nepali tea using carefully selected spices
              and fresh ingredients for the perfect flavor.
            </p>
          </div>

          <div className="border border-stone-800 p-8 rounded-xl">
            <h3 className="text-2xl font-semibold mb-4">Cozy Atmosphere</h3>
            <p className="text-stone-400 text-lg">
              Our rustic wooden interiors and peaceful setting create the
              perfect environment to relax and enjoy your tea.
            </p>
          </div>

          <div className="border border-stone-800 p-8 rounded-xl">
            <h3 className="text-2xl font-semibold mb-4">Community Space</h3>
            <p className="text-stone-400 text-lg">
              Chiya Ashram is more than a tea house — it’s a place where people
              gather, share stories, and create memories.
            </p>
          </div>
        </div>
      </section>

      {/* Why Chiya Ashram */}
      <section className="py-24 px-6 text-center">
        <h2 className="text-4xl font-semibold text-orange-400 mb-6">
          Why Chiya Ashram
        </h2>

        <p className="max-w-3xl mx-auto text-stone-300 text-lg leading-relaxed">
          In the busy rhythm of city life, Chiya Ashram offers a peaceful
          escape. Whether you're meeting friends, taking a break, or enjoying a
          quiet moment with tea, our space is designed to make every visit
          relaxing and memorable.
        </p>
      </section>
    </main>
  );
}
