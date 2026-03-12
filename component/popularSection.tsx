"use client";

export default function Popular() {
  const menuItems = [
    { name: "Milk Chiya", price: "Rs 50" },
    { name: "Masala Chiya", price: "Rs 70" },
    { name: "Chicken Momo", price: "Rs 220" },
    { name: "Hookah", price: "Rs 500+" },
  ];

  return (
    <section className="w-full py-20 px-6 bg-[#161210] text-white">
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-white">
          Popular Picks
        </h2>
        <p className="mt-3 text-orange-300 text-lg md:text-xl italic">
          A taste of authentic Nepali chiya and snacks at Chiya Ashram Kathmandu
        </p>
      </div>

      {/* Menu List */}
      <ul className="max-w-3xl mx-auto divide-y divide-stone-700">
        {menuItems.map((item) => (
          <li
            key={item.name}
            className="flex justify-between py-4 text-white hover:text-orange-300 transition-colors"
          >
            <span className="font-medium">{item.name}</span>
            <span className="font-semibold">{item.price}</span>
          </li>
        ))}
      </ul>

      {/* View Full Menu Button */}
      <div className="mt-12 text-center">
        <button className="bg-orange-500 text-[#161210] px-6 py-3 rounded-full font-semibold hover:bg-orange-400 hover:shadow-lg transition-all">
          View Full Menu
        </button>
      </div>
    </section>
  );
}