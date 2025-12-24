"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Shirt,
  Wind,
  Zap,
  Sparkles,
  Footprints,
  Sofa,
  CheckCircle,
  ArrowRight,
  Tag,
  Percent,
} from "lucide-react";

const priceCategories = [
  {
    title: "Cuci Regular",
    items: [
      { name: "Cuci Kiloan (tanpa setrika)", price: "Rp 7.000", unit: "/kg" },
      { name: "Cuci Setrika", price: "Rp 10.000", unit: "/kg" },
      { name: "Setrika Only", price: "Rp 5.000", unit: "/kg" },
    ],
  },
  {
    title: "Express Service",
    items: [
      { name: "Express 6 Jam", price: "Rp 20.000", unit: "/kg" },
      { name: "Express 12 Jam", price: "Rp 15.000", unit: "/kg" },
      { name: "Express 24 Jam", price: "Rp 12.000", unit: "/kg" },
    ],
  },
  {
    title: "Dry Clean",
    items: [
      { name: "Jas / Blazer", price: "Rp 40.000", unit: "/pcs" },
      { name: "Celana Formal", price: "Rp 25.000", unit: "/pcs" },
      { name: "Gaun Pesta", price: "Rp 75.000", unit: "/pcs" },
      { name: "Wedding Dress", price: "Rp 350.000", unit: "/pcs" },
      { name: "Kebaya", price: "Rp 50.000", unit: "/pcs" },
    ],
  },
  {
    title: "Sepatu",
    items: [
      { name: "Sneakers / Canvas", price: "Rp 35.000", unit: "/pasang" },
      { name: "Sepatu Kulit", price: "Rp 45.000", unit: "/pasang" },
      { name: "Sepatu Boots", price: "Rp 55.000", unit: "/pasang" },
      { name: "Sandal", price: "Rp 20.000", unit: "/pasang" },
    ],
  },
  {
    title: "Item Besar",
    items: [
      { name: "Bed Cover", price: "Rp 15.000", unit: "/kg" },
      { name: "Selimut Tebal", price: "Rp 15.000", unit: "/kg" },
      { name: "Karpet", price: "Rp 15.000", unit: "/kg" },
      { name: "Gordyn", price: "Rp 12.000", unit: "/kg" },
      { name: "Spring Bed Cover", price: "Rp 150.000", unit: "/pcs" },
    ],
  },
  {
    title: "Lainnya",
    items: [
      { name: "Boneka Kecil", price: "Rp 15.000", unit: "/pcs" },
      { name: "Boneka Besar", price: "Rp 35.000", unit: "/pcs" },
      { name: "Tas", price: "Rp 30.000", unit: "/pcs" },
      { name: "Helm", price: "Rp 25.000", unit: "/pcs" },
      { name: "Bantal/Guling", price: "Rp 20.000", unit: "/pcs" },
    ],
  },
];

const packages = [
  {
    name: "Paket Hemat",
    price: "Rp 150.000",
    description: "20 kg cuci setrika",
    perKg: "Rp 7.500/kg",
    features: [
      "20 kg laundry",
      "Cuci + Setrika",
      "Pewangi premium",
      "Antar jemput gratis",
    ],
    color: "from-blue-500 to-blue-600",
  },
  {
    name: "Paket Member",
    price: "Rp 250.000",
    description: "Langganan bulanan",
    perKg: "Rp 8.000/kg",
    features: [
      "30 kg/bulan",
      "Cuci + Setrika",
      "Prioritas pengerjaan",
      "Antar jemput unlimited",
      "Diskon 10% dry clean",
    ],
    color: "from-indigo-500 to-purple-600",
    popular: true,
  },
  {
    name: "Paket Bisnis",
    price: "Rp 500.000",
    description: "Untuk hotel/kost",
    perKg: "Rp 6.500/kg",
    features: [
      "75 kg/bulan",
      "Cuci + Setrika",
      "Penjemputan terjadwal",
      "Invoice bulanan",
      "Account manager",
    ],
    color: "from-emerald-500 to-teal-600",
  },
];

export default function HargaPage() {
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
            <span className="inline-flex items-center gap-2 bg-[#10B981]/10 text-[#10B981] px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Tag className="w-4 h-4" />
              <span>Harga Terjangkau</span>
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
              Daftar Harga{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0EA5E9] to-[#6366F1]">
                Laundry Premium
              </span>
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Harga transparan tanpa biaya tersembunyi. Kualitas premium dengan harga bersahabat.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Packages Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <span className="text-[#6366F1] font-semibold text-sm uppercase tracking-wider">Paket Hemat</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4">
              Pilih Paket Terbaik Anda
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Dapatkan harga lebih hemat dengan berlangganan paket
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {packages.map((pkg, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all ${
                  pkg.popular ? "ring-2 ring-[#6366F1] scale-105" : ""
                }`}
              >
                {pkg.popular && (
                  <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] text-white text-center py-2 text-sm font-semibold">
                    PALING POPULER
                  </div>
                )}
                <div className={`bg-gradient-to-r ${pkg.color} p-6 ${pkg.popular ? "mt-8" : ""}`}>
                  <h3 className="text-xl font-bold text-white mb-1">{pkg.name}</h3>
                  <p className="text-white/80 text-sm mb-4">{pkg.description}</p>
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-bold text-white">{pkg.price}</span>
                  </div>
                  <p className="text-white/80 text-sm mt-2">= {pkg.perKg}</p>
                </div>
                <div className="p-6">
                  <ul className="space-y-3 mb-6">
                    {pkg.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-[#10B981] flex-shrink-0 mt-0.5" />
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/order"
                    className={`block text-center px-6 py-3 rounded-full font-semibold transition-all ${
                      pkg.popular
                        ? "bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] text-white hover:shadow-lg hover:shadow-[#6366F1]/30"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
                  >
                    Pilih Paket
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Price List Section */}
      <section className="py-20 bg-gradient-to-br from-[#F0F9FF] to-[#EEF2FF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <span className="text-[#0EA5E9] font-semibold text-sm uppercase tracking-wider">Daftar Harga</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4">
              Harga Per Item
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Harga sudah termasuk pewangi premium. Antar jemput gratis min. 3kg.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {priceCategories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg"
              >
                <div className="bg-gradient-to-r from-[#0EA5E9] to-[#6366F1] px-6 py-4">
                  <h3 className="text-xl font-bold text-white">{category.title}</h3>
                </div>
                <div className="p-6">
                  <ul className="space-y-3">
                    {category.items.map((item, i) => (
                      <li key={i} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-0">
                        <span className="text-gray-700">{item.name}</span>
                        <span className="font-bold text-[#0EA5E9]">
                          {item.price}
                          <span className="text-gray-500 font-normal text-sm">{item.unit}</span>
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Promo Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-gradient-to-br from-[#10B981] to-[#059669] rounded-3xl p-8 md:p-12 text-white relative overflow-hidden"
          >
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute -top-20 -right-20 w-64 h-64 bg-white/10 rounded-full"></div>
              <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-white/10 rounded-full"></div>
            </div>
            <div className="relative flex flex-col md:flex-row items-center justify-between gap-8">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <Percent className="w-8 h-8" />
                  <span className="text-sm font-semibold uppercase tracking-wider opacity-80">Promo Member Baru</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-2">
                  Diskon 30%
                </h2>
                <p className="text-white/80 text-lg">
                  Untuk order pertama Anda. Gunakan kode <span className="font-bold">NEWMEMBER30</span>
                </p>
              </div>
              <Link
                href="/order"
                className="inline-flex items-center justify-center gap-2 bg-white text-[#10B981] px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl transition-all flex-shrink-0"
              >
                Order Sekarang
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
