"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  MapPin,
  Phone,
  Clock,
  Navigation,
  Star,
  CheckCircle,
} from "lucide-react";

const outlets = [
  {
    name: "CleanPress Sudirman",
    address: "Jl. Jendral Sudirman No. 123, Senayan, Jakarta Selatan",
    phone: "0812-3456-7890",
    hours: "07:00 - 21:00",
    maps: "https://maps.google.com",
    rating: 4.9,
    reviews: 234,
    features: ["Express 6 Jam", "Dry Clean", "Cuci Sepatu"],
    isMain: true,
  },
  {
    name: "CleanPress Kemang",
    address: "Jl. Kemang Raya No. 45, Kemang, Jakarta Selatan",
    phone: "0812-3456-7891",
    hours: "07:00 - 21:00",
    maps: "https://maps.google.com",
    rating: 4.8,
    reviews: 189,
    features: ["Express 6 Jam", "Cuci Sepatu"],
  },
  {
    name: "CleanPress Menteng",
    address: "Jl. Menteng Raya No. 78, Menteng, Jakarta Pusat",
    phone: "0812-3456-7892",
    hours: "07:00 - 21:00",
    maps: "https://maps.google.com",
    rating: 4.9,
    reviews: 156,
    features: ["Express 6 Jam", "Dry Clean", "Cuci Karpet"],
  },
  {
    name: "CleanPress Kelapa Gading",
    address: "Jl. Boulevard Raya No. 56, Kelapa Gading, Jakarta Utara",
    phone: "0812-3456-7893",
    hours: "07:00 - 21:00",
    maps: "https://maps.google.com",
    rating: 4.7,
    reviews: 178,
    features: ["Express 6 Jam", "Cuci Sepatu"],
  },
  {
    name: "CleanPress PIK",
    address: "Ruko Garden House No. 12, PIK, Jakarta Utara",
    phone: "0812-3456-7894",
    hours: "08:00 - 22:00",
    maps: "https://maps.google.com",
    rating: 4.8,
    reviews: 145,
    features: ["Express 6 Jam", "Dry Clean", "Cuci Sepatu", "Cuci Karpet"],
  },
  {
    name: "CleanPress BSD",
    address: "Ruko Golden Boulevard No. 23, BSD City, Tangerang Selatan",
    phone: "0812-3456-7895",
    hours: "07:00 - 21:00",
    maps: "https://maps.google.com",
    rating: 4.9,
    reviews: 198,
    features: ["Express 6 Jam", "Dry Clean"],
  },
];

const coverage = [
  "Jakarta Selatan",
  "Jakarta Pusat",
  "Jakarta Utara",
  "Jakarta Barat",
  "Jakarta Timur",
  "Tangerang Selatan",
  "Depok",
  "Bekasi",
];

export default function OutletPage() {
  return (
    <div className="pt-16 md:pt-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#F0F9FF] via-white to-[#EEF2FF] py-16 md:py-24">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#0EA5E9]/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-[#6366F1]/10 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="inline-flex items-center gap-2 bg-[#0EA5E9]/10 text-[#0EA5E9] px-4 py-2 rounded-full text-sm font-medium mb-6">
              <MapPin className="w-4 h-4" />
              <span>6 Outlet di Jabodetabek</span>
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
              Lokasi{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0EA5E9] to-[#6366F1]">
                Outlet Kami
              </span>
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Temukan outlet CleanPress terdekat dari lokasi Anda. Antar jemput gratis radius 5km!
            </p>
          </motion.div>
        </div>
      </section>

      {/* Coverage Area */}
      <section className="py-12 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-4">
            <span className="text-gray-600 font-medium">Area Layanan:</span>
            {coverage.map((area, index) => (
              <span
                key={index}
                className="bg-[#0EA5E9]/10 text-[#0EA5E9] px-4 py-1.5 rounded-full text-sm font-medium"
              >
                {area}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Outlets Grid */}
      <section className="py-20 bg-gradient-to-br from-[#F0F9FF] to-[#EEF2FF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {outlets.map((outlet, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all ${
                  outlet.isMain ? "ring-2 ring-[#0EA5E9]" : ""
                }`}
              >
                {outlet.isMain && (
                  <div className="bg-gradient-to-r from-[#0EA5E9] to-[#6366F1] text-white text-center py-2 text-sm font-semibold">
                    OUTLET UTAMA
                  </div>
                )}
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-xl font-bold text-gray-900">{outlet.name}</h3>
                    <div className="flex items-center gap-1 bg-yellow-50 px-2 py-1 rounded-lg">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-sm font-semibold text-gray-700">{outlet.rating}</span>
                      <span className="text-xs text-gray-500">({outlet.reviews})</span>
                    </div>
                  </div>

                  <div className="space-y-3 mb-4">
                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-[#0EA5E9] flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600 text-sm">{outlet.address}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Phone className="w-5 h-5 text-[#0EA5E9] flex-shrink-0" />
                      <a href={`tel:${outlet.phone}`} className="text-gray-600 text-sm hover:text-[#0EA5E9]">
                        {outlet.phone}
                      </a>
                    </div>
                    <div className="flex items-center gap-3">
                      <Clock className="w-5 h-5 text-[#0EA5E9] flex-shrink-0" />
                      <span className="text-gray-600 text-sm">{outlet.hours} WIB</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {outlet.features.map((feature, i) => (
                      <span
                        key={i}
                        className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs font-medium"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  <a
                    href={outlet.maps}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full bg-gradient-to-r from-[#0EA5E9] to-[#6366F1] text-white px-4 py-3 rounded-xl font-semibold hover:shadow-lg hover:shadow-[#0EA5E9]/30 transition-all"
                  >
                    <Navigation className="w-4 h-4" />
                    Lihat di Google Maps
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-8 md:p-12 text-white"
          >
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-4">
                  Layanan Antar Jemput
                </h2>
                <p className="text-gray-300 mb-6">
                  Tidak sempat ke outlet? Kami siap jemput dan antar laundry Anda!
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-[#10B981]" />
                    <span>Gratis untuk minimal 3kg</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-[#10B981]" />
                    <span>Radius 5km dari outlet terdekat</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-[#10B981]" />
                    <span>Jadwal fleksibel sesuai kebutuhan</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-[#10B981]" />
                    <span>Kurir profesional dan ramah</span>
                  </li>
                </ul>
              </div>
              <div className="flex items-center justify-center">
                <Link
                  href="/order"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-[#0EA5E9] to-[#6366F1] text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl hover:shadow-[#0EA5E9]/30 transition-all"
                >
                  Order Antar Jemput
                  <Navigation className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
