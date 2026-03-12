"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", link: "/" },
    { name: "Menu", link: "/menu" },
    { name: "Vibe", link: "/vibe" },
    { name: "Reviews", link: "/reviews" },
    { name: "About", link: "/about" },
    { name: "Contact", link: "/contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    // Check scroll position on mount
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`w-full fixed z-10 transition-all duration-300 ${
          scrolled
            ? "bg-[#161210] border-b border-white/20 h-24"
            : "bg-transparent h-30 border-b border-transparent"
        }`}
      >
        <div className="max-w-330 h-full flex items-center justify-between m-auto px-6">

          {/* Logo */}
          <div className="w-50 flex items-center">
            <a href="/" className="w-full">
              <Image
                src="/chiyaashramlogo.png"
                alt="logo"
                width={120}
                height={40}
                className="object-contain w-full"
              />
            </a>
          </div>

          {/* Desktop Nav */}
          <ul className="hidden md:flex gap-8 font-medium">
            {navLinks.map((item) => {
              const active = pathname === item.link;
              return (
                <li key={item.name}>
                  <a
                    href={item.link}
                    className={`transition ${
                      active
                        ? "text-orange-400"
                        : "text-white hover:text-orange-300"
                    }`}
                  >
                    {item.name}
                  </a>
                </li>
              );
            })}
          </ul>

          {/* Hamburger */}
          <button
            className="md:hidden text-white"
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed z-20 top-0 left-0 h-full w-64 bg-[#161210] shadow-lg transform transition-transform duration-300 md:hidden ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-6 flex flex-col gap-6 font-medium text-white">
          {navLinks.map((item) => {
            const active = pathname === item.link;
            return (
              <a
                key={item.name}
                href={item.link}
                className={`${active ? "text-orange-500" : "hover:text-black"}`}
                onClick={() => setOpen(false)}
              >
                {item.name}
              </a>
            );
          })}
        </div>
      </div>

      {/* Overlay */}
      {open && (
        <div
          className="fixed inset-0 bg-black/30 md:hidden"
          onClick={() => setOpen(false)}
        />
      )}
    </>
  );
}