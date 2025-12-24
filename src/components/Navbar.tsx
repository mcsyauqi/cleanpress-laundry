"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Droplets, Phone } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/", label: "Beranda" },
  { href: "/layanan", label: "Layanan" },
  { href: "/harga", label: "Harga" },
  { href: "/outlet", label: "Outlet" },
  { href: "/kontak", label: "Kontak" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#0EA5E9] to-[#6366F1] flex items-center justify-center">
              <Droplets className="w-6 h-6 text-white" />
            </div>
            <div>
              <span className="text-xl font-bold text-[#0EA5E9]">Clean</span>
              <span className="text-xl font-bold text-[#6366F1]">Press</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-gray-600 hover:text-[#0EA5E9] font-medium transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="https://wa.me/6281234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-600 hover:text-[#0EA5E9] font-medium transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span>0812-3456-7890</span>
            </a>
            <Link
              href="/order"
              className="bg-gradient-to-r from-[#0EA5E9] to-[#6366F1] text-white px-6 py-2.5 rounded-full font-semibold hover:shadow-lg hover:shadow-[#0EA5E9]/30 transition-all"
            >
              Order Sekarang
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            {isOpen ? (
              <X className="w-6 h-6 text-gray-600" />
            ) : (
              <Menu className="w-6 h-6 text-gray-600" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="md:hidden overflow-hidden"
            >
              <div className="py-4 space-y-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="block px-4 py-2 text-gray-600 hover:text-[#0EA5E9] hover:bg-[#0EA5E9]/5 rounded-lg font-medium transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
                <div className="pt-4 px-4 space-y-3">
                  <a
                    href="https://wa.me/6281234567890"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-600 font-medium"
                  >
                    <Phone className="w-4 h-4" />
                    <span>0812-3456-7890</span>
                  </a>
                  <Link
                    href="/order"
                    onClick={() => setIsOpen(false)}
                    className="block text-center bg-gradient-to-r from-[#0EA5E9] to-[#6366F1] text-white px-6 py-3 rounded-full font-semibold"
                  >
                    Order Sekarang
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
