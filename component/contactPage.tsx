import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function ContactPage() {
  return (
    <main className="bg-stone-950 text-white min-h-screen">
      {/* Hero */}
      <section className="text-center py-28 px-6">
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          Contact <span className="text-orange-400">Us</span>
        </h1>

        <p className="text-stone-300 text-xl max-w-2xl mx-auto">
          Have questions or planning to visit? We'd love to hear from you.
        </p>
      </section>

      {/* Contact Section */}
      <section className="max-w-6xl mx-auto px-6 pb-24 grid md:grid-cols-2 gap-16">
        {/* Contact Info */}
        <div className="space-y-10">
          <div className="flex gap-4 items-start">
            <MapPin className="text-orange-400 mt-1" size={22} />
            <div>
              <h3 className="text-xl font-semibold mb-1">Location</h3>
              <p className="text-stone-400">Chyasal, Kathmandu, Nepal</p>
            </div>
          </div>

          <div className="flex gap-4 items-start">
            <Phone className="text-orange-400 mt-1" size={22} />
            <div>
              <h3 className="text-xl font-semibold mb-1">Phone</h3>
              <p className="text-stone-400">+977 9800000000</p>
            </div>
          </div>

          <div className="flex gap-4 items-start">
            <Mail className="text-orange-400 mt-1" size={22} />
            <div>
              <h3 className="text-xl font-semibold mb-1">Email</h3>
              <p className="text-stone-400">hello@chiyaashram.com</p>
            </div>
          </div>

          <div className="flex gap-4 items-start">
            <Clock className="text-orange-400 mt-1" size={22} />
            <div>
              <h3 className="text-xl font-semibold mb-1">Opening Hours</h3>
              <p className="text-stone-400">
                Open Daily <br />
                8:00 AM - 10:00 PM
              </p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="border border-stone-800 rounded-xl p-8">
          <h2 className="text-2xl font-semibold mb-6">Send a Message</h2>

          <form className="space-y-5">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full bg-stone-900 border border-stone-800 rounded-lg px-4 py-3 outline-none focus:border-orange-400"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full bg-stone-900 border border-stone-800 rounded-lg px-4 py-3 outline-none focus:border-orange-400"
            />

            <textarea
              placeholder="Your Message"
              rows={5}
              className="w-full bg-stone-900 border border-stone-800 rounded-lg px-4 py-3 outline-none focus:border-orange-400"
            ></textarea>

            <button
              type="submit"
              className="w-full bg-orange-400 text-black font-medium py-3 rounded-full hover:bg-orange-500 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Map */}
      <section className="px-6 pb-24">
        <div className="max-w-6xl mx-auto rounded-xl overflow-hidden border border-stone-800">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3197.440559136262!2d85.33349907492202!3d27.67752832680696!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19a0e123e671%3A0x613eb43b91255378!2zQ2hpeWEgQXNocmFtIC0g4KSa4KS_4KSv4KS-IOCkhuCktuCljeCksOCkrg!5e1!3m2!1sen!2snp!4v1773418525151!5m2!1sen!2snp"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-[400px]"
          />
        </div>
      </section>
    </main>
  );
}
