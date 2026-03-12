import Link from "next/link";

const menu = {
  "Signature Chiya": [
    { name: "Masala Chiya", price: 60 },
    { name: "Milk Chiya", price: 50 },
    { name: "Kadak Chiya", price: 70 },
    { name: "Ginger Lemon Tea", price: 80 },
  ],
  "Special Chiya": [
    { name: "Tulsi Chiya", price: 80 },
    { name: "Honey Lemon Tea", price: 90 },
    { name: "Mint Tea", price: 80 },
    { name: "Butter Tea", price: 120 },
  ],
  "Milk Drinks": [
    { name: "Hot Chocolate", price: 150 },
    { name: "Turmeric Milk (Golden Milk)", price: 140 },
  ],
  "Refreshing Drinks": [
    { name: "Lemon Tea", price: 70 },
    { name: "Ice Lemon Tea", price: 100 },
  ],
  "Tea Snacks": [
    { name: "Sel Roti", price: 60 },
    { name: "Tea Biscuits", price: 40 },
    { name: "Samosa", price: 60 },
    { name: "Pakoda", price: 80 },
  ],
};

export default function Menu() {
  return (
    <main className="bg-[#161210] text-white min-h-screen py-40 px-10">
      
      {/* Page Title */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Our Menu
        </h1>
        <p className="text-stone-400 max-w-xl mx-auto">
          Enjoy authentic Nepali tea and cozy snacks crafted with warmth at
          Chiyaashram.
        </p>
      </div>

      {/* Menu Sections */}
      <div className="max-w-4xl mx-auto space-y-16">
        {Object.entries(menu).map(([category, items]) => (
          <div key={category}>
            
            {/* Category Title */}
            <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-orange-400">
              {category}
            </h2>

            {/* Items */}
            <div className="space-y-4">
              {items.map((item) => (
                <div
                  key={item.name}
                  className="flex justify-between border-b border-stone-800 pb-3"
                >
                  <span className="text-lg">{item.name}</span>
                  <span className="text-orange-300">
                    Rs. {item.price}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Back Home */}
      <div className="text-center mt-20">
        <Link
          href="/"
          className="px-8 py-3 bg-orange-400 text-black rounded-full font-medium hover:bg-orange-500 transition"
        >
          Back to Home
        </Link>
      </div>

    </main>
  );
}