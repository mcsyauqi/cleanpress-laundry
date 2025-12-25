"use client";

import Link from "next/link";
import { Droplets, MapPin, Phone, Mail, Clock, Instagram, Facebook } from "lucide-react";

const quickLinks = [
  { href: "/layanan", label: "Layanan Kami" },
  { href: "/harga", label: "Daftar Harga" },
  { href: "/outlet", label: "Lokasi Outlet" },
  { href: "/order", label: "Order Online" },
  { href: "/kontak", label: "Hubungi Kami" },
];

const services = [
  { name: "Cuci Kiloan", href: "/layanan#cuci-kiloan" },
  { name: "Cuci Setrika", href: "/layanan#cuci-setrika" },
  { name: "Express 6 Jam", href: "/layanan#express-6-jam" },
  { name: "Dry Clean", href: "/layanan#dry-clean" },
  { name: "Cuci Sepatu", href: "/layanan#cuci-sepatu" },
  { name: "Cuci Karpet", href: "/layanan#cuci-karpet" },
];

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-slate-900 to-slate-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#0EA5E9] to-[#6366F1] flex items-center justify-center">
                <Droplets className="w-6 h-6 text-white" />
              </div>
              <div>
                <span className="text-xl font-bold text-[#0EA5E9]">Clean</span>
                <span className="text-xl font-bold text-[#6366F1]">Press</span>
              </div>
            </Link>
            <p className="text-gray-400 leading-relaxed">
              Bersih Sempurna, Wangi Tahan Lama. Layanan laundry premium dengan antar jemput gratis untuk kenyamanan Anda.
            </p>
            <div className="flex gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#0EA5E9] transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#0EA5E9] transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Menu</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-[#0EA5E9] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Layanan</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.name}>
                  <Link
                    href={service.href}
                    className="text-gray-400 hover:text-[#0EA5E9] transition-colors"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Kontak</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#0EA5E9] mt-0.5 flex-shrink-0" />
                <span className="text-gray-400">
                  Jl. Sudirman No. 123, Jakarta Selatan, DKI Jakarta 12345
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#0EA5E9] flex-shrink-0" />
                <a
                  href="tel:+6281234567890"
                  className="text-gray-400 hover:text-[#0EA5E9] transition-colors"
                >
                  0812-3456-7890
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#0EA5E9] flex-shrink-0" />
                <a
                  href="mailto:info@cleanpress.id"
                  className="text-gray-400 hover:text-[#0EA5E9] transition-colors"
                >
                  info@cleanpress.id
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-[#0EA5E9] flex-shrink-0" />
                <span className="text-gray-400">07:00 - 21:00 WIB</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
            <p className="text-gray-400 text-sm">
              &copy; 2025 CleanPress Laundry. All rights reserved.
            </p>
            <p className="text-gray-400 text-sm">
              Website ini dibuat dengan ❤️ oleh{" "}
              <a
                href="https://creativism.id"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#0EA5E9] hover:underline font-medium"
              >
                Creativism Digital Marketing Agency
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
