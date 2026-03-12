import Image from "next/image";
import { Facebook, Instagram, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-stone-900 text-stone-300">
      <div className="max-w-330 mx-auto px-6 py-14">
        <div className="flex flex-col md:flex-row md:justify-between gap-12">
          {/* LEFT */}
          <div className="md:w-1/3 space-y-4">
            <Image
              src="/chiyaashramlogo.png"
              alt="logo"
              width={140}
              height={50}
            />

            <p className="text-sm leading-relaxed text-stone-400">
              A cozy tea haven in the heart of Kathmandu where tradition meets
              comfort. Enjoy authentic Nepali tea, warm hospitality, and a
              peaceful atmosphere inspired by rustic wooden interiors.
            </p>

            <p className="text-sm text-stone-400">
              <br />
              Kathmandu, Nepal
            </p>
          </div>

          {/* CENTER */}
          <div className="md:w-1/3 ">
            <div className="w-full md:w-fit m-auto">
              <h3 className="text-white font-semibold mb-4">Quick Links</h3>

              <ul className="space-y-2 text-sm">
                <li className="hover:text-white cursor-pointer">Home</li>
                <li className="hover:text-white cursor-pointer">Menu</li>
                <li className="hover:text-white cursor-pointer">Vibe</li>
                <li className="hover:text-white cursor-pointer">Reviews</li>
                <li className="hover:text-white cursor-pointer">About</li>
                <li className="hover:text-white cursor-pointer">Contact</li>
              </ul>
            </div>
          </div>

          {/* RIGHT */}
          <div className="md:w-1/3 ">
            <div className="w-full md:w-fit m-auto">
              <h3 className="text-white font-semibold mb-4">Social</h3>

              <div className="flex gap-4">
                <a className="hover:text-white">
                  <Facebook size={20} />
                </a>

                <a className="hover:text-white">
                  <Instagram size={20} />
                </a>

                <a className="hover:text-white">
                  <Twitter size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom line */}
        <div className="border-t border-stone-700 mt-12 pt-6 text-sm text-stone-500 text-center">
          © {new Date().getFullYear()} Chiya Ashram. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
