"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  CheckCircle,
  ArrowRight,
  Tag,
  Percent,
  Star,
  Shield,
  Clock,
  Truck,
  Gift,
  Calculator,
  AlertCircle,
  MessageCircle,
  Sparkles,
  Zap,
  Users,
  Award,
  CreditCard,
  Wallet,
  Smartphone,
  Banknote,
} from "lucide-react";

const priceCategories = [
  {
    title: "Cuci Regular",
    description: "Layanan cuci harian",
    items: [
      { name: "Cuci Kiloan (tanpa setrika)", price: "Rp 7.000", unit: "/kg", note: "Min. 3kg" },
      { name: "Cuci Setrika", price: "Rp 10.000", unit: "/kg", note: "Min. 3kg", popular: true },
      { name: "Setrika Only", price: "Rp 5.000", unit: "/kg", note: "Min. 3kg" },
    ],
  },
  {
    title: "Express Service",
    description: "Layanan cepat & prioritas",
    items: [
      { name: "Express 6 Jam", price: "Rp 20.000", unit: "/kg", note: "Cuci + setrika" },
      { name: "Express 12 Jam", price: "Rp 15.000", unit: "/kg", note: "Cuci + setrika" },
      { name: "Express 24 Jam", price: "Rp 12.000", unit: "/kg", note: "Cuci + setrika" },
    ],
  },
  {
    title: "Dry Clean",
    description: "Perawatan item premium",
    items: [
      { name: "Jas / Blazer", price: "Rp 40.000", unit: "/pcs", note: "" },
      { name: "Celana Formal", price: "Rp 25.000", unit: "/pcs", note: "" },
      { name: "Gaun Pesta", price: "Rp 75.000", unit: "/pcs", note: "" },
      { name: "Wedding Dress", price: "Rp 350.000", unit: "/pcs", note: "Include packaging" },
      { name: "Kebaya", price: "Rp 50.000", unit: "/pcs", note: "" },
      { name: "Coat/Mantel", price: "Rp 55.000", unit: "/pcs", note: "" },
    ],
  },
  {
    title: "Sepatu",
    description: "Deep cleaning sepatu",
    items: [
      { name: "Sneakers / Canvas", price: "Rp 35.000", unit: "/pasang", note: "" },
      { name: "Sepatu Kulit", price: "Rp 45.000", unit: "/pasang", note: "" },
      { name: "Sepatu Boots", price: "Rp 55.000", unit: "/pasang", note: "" },
      { name: "Sandal Premium", price: "Rp 20.000", unit: "/pasang", note: "" },
      { name: "Whitening Sepatu", price: "Rp 15.000", unit: "/pasang", note: "Tambahan" },
      { name: "Repaint Sepatu", price: "Rp 50.000", unit: "/pasang", note: "Tambahan" },
    ],
  },
  {
    title: "Item Besar",
    description: "Bed cover, karpet, dll",
    items: [
      { name: "Bed Cover", price: "Rp 15.000", unit: "/kg", note: "" },
      { name: "Selimut Tebal", price: "Rp 15.000", unit: "/kg", note: "" },
      { name: "Karpet", price: "Rp 15.000", unit: "/kg", note: "" },
      { name: "Gordyn", price: "Rp 12.000", unit: "/kg", note: "" },
      { name: "Spring Bed Cover", price: "Rp 150.000", unit: "/pcs", note: "Single" },
      { name: "Spring Bed Cover", price: "Rp 200.000", unit: "/pcs", note: "Double" },
    ],
  },
  {
    title: "Lainnya",
    description: "Item spesial",
    items: [
      { name: "Boneka Kecil (<50cm)", price: "Rp 15.000", unit: "/pcs", note: "" },
      { name: "Boneka Besar (>50cm)", price: "Rp 35.000", unit: "/pcs", note: "" },
      { name: "Tas Kulit/Canvas", price: "Rp 30.000", unit: "/pcs", note: "" },
      { name: "Helm Full Face", price: "Rp 25.000", unit: "/pcs", note: "" },
      { name: "Bantal/Guling", price: "Rp 20.000", unit: "/pcs", note: "" },
      { name: "Repair/Jahit Minor", price: "Rp 15.000", unit: "", note: "Mulai dari" },
    ],
  },
];

const packages = [
  {
    name: "Paket Hemat",
    price: "Rp 150.000",
    description: "Cocok untuk individu",
    perKg: "Rp 7.500/kg",
    savings: "Hemat Rp 50.000",
    features: [
      "20 kg laundry",
      "Cuci + Setrika",
      "Pewangi premium",
      "Antar jemput gratis",
      "Berlaku 1 bulan",
    ],
    color: "from-blue-500 to-blue-600",
  },
  {
    name: "Paket Member",
    price: "Rp 250.000",
    description: "Untuk pelanggan setia",
    perKg: "Rp 8.000/kg",
    savings: "Hemat Rp 62.500",
    features: [
      "30 kg/bulan",
      "Cuci + Setrika",
      "Prioritas pengerjaan",
      "Antar jemput unlimited",
      "Diskon 10% dry clean",
      "Tracking WhatsApp",
    ],
    color: "from-indigo-500 to-purple-600",
    popular: true,
  },
  {
    name: "Paket Bisnis",
    price: "Rp 500.000",
    description: "Hotel, kost, apartemen",
    perKg: "Rp 6.500/kg",
    savings: "Hemat Rp 250.000",
    features: [
      "75 kg/bulan",
      "Cuci + Setrika",
      "Penjemputan terjadwal",
      "Invoice bulanan",
      "Account manager",
      "Diskon 15% dry clean",
      "Priority support",
    ],
    color: "from-emerald-500 to-teal-600",
  },
];

const promos = [
  {
    title: "Member Baru",
    code: "NEWMEMBER30",
    discount: "30%",
    description: "Diskon 30% untuk order pertama",
    terms: ["Berlaku untuk semua layanan", "Maksimal diskon Rp 50.000", "Tidak dapat digabung promo lain"],
    validUntil: "31 Januari 2025",
    color: "from-[#0EA5E9] to-[#6366F1]",
  },
  {
    title: "Referral Bonus",
    code: "AJAKTEMAN",
    discount: "Rp 25.000",
    description: "Bonus untuk Anda & teman yang diajak",
    terms: ["Teman harus order min. Rp 50.000", "Bonus masuk ke saldo akun", "Tidak ada batas referral"],
    validUntil: "Tidak terbatas",
    color: "from-[#10B981] to-[#059669]",
  },
  {
    title: "Weekend Special",
    code: "WEEKEND15",
    discount: "15%",
    description: "Diskon khusus order Sabtu-Minggu",
    terms: ["Berlaku Sabtu-Minggu", "Minimal order Rp 30.000", "Tidak berlaku untuk express"],
    validUntil: "Setiap weekend",
    color: "from-[#F59E0B] to-[#D97706]",
  },
];

const paymentMethods = [
  { name: "Tunai", icon: Banknote, description: "Bayar saat pengantaran" },
  { name: "Transfer Bank", icon: CreditCard, description: "BCA, Mandiri, BNI, BRI" },
  { name: "E-Wallet", icon: Wallet, description: "GoPay, OVO, DANA, ShopeePay" },
  { name: "QRIS", icon: Smartphone, description: "Scan & bayar semua bank" },
];

const comparisons = [
  { feature: "Antar Jemput", cleanpress: true, competitor: "Berbayar" },
  { feature: "Garansi Cuci Ulang", cleanpress: true, competitor: false },
  { feature: "Pewangi Premium", cleanpress: true, competitor: "Tambahan" },
  { feature: "Tracking WhatsApp", cleanpress: true, competitor: false },
  { feature: "Express 6 Jam", cleanpress: true, competitor: false },
  { feature: "Customer Support", cleanpress: "24/7", competitor: "Jam kerja" },
];

const faqs = [
  {
    question: "Apakah harga sudah termasuk pewangi?",
    answer: "Ya, semua harga sudah termasuk pewangi premium pilihan Anda (10+ aroma tersedia). Tidak ada biaya tambahan.",
  },
  {
    question: "Apakah ada biaya antar jemput?",
    answer: "Gratis untuk minimal order 3kg dalam radius 5km dari outlet terdekat. Lebih dari 5km dikenakan biaya Rp 5.000/km.",
  },
  {
    question: "Bagaimana cara pembayaran?",
    answer: "Kami menerima pembayaran tunai saat pengantaran, transfer bank (BCA, Mandiri, BNI, BRI), dan e-wallet (GoPay, OVO, DANA, ShopeePay).",
  },
  {
    question: "Apakah ada diskon untuk order banyak?",
    answer: "Ya! Kami menyediakan paket hemat dan member bulanan dengan harga lebih murah. Semakin banyak order, semakin hemat!",
  },
  {
    question: "Bagaimana jika berat tidak sampai minimum?",
    answer: "Untuk order di bawah 3kg, akan dibulatkan menjadi 3kg. Kami sarankan untuk mengumpulkan laundry agar lebih hemat.",
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
              <span>Harga Transparan</span>
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
              Daftar Harga{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0EA5E9] to-[#6366F1]">
                Laundry Premium
              </span>
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Harga transparan tanpa biaya tersembunyi. Kualitas premium dengan harga yang bersahabat. Sudah termasuk pewangi dan antar jemput gratis!
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm">
                <CheckCircle className="w-5 h-5 text-[#10B981]" />
                <span className="text-gray-700 font-medium">Termasuk Pewangi</span>
              </div>
              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm">
                <CheckCircle className="w-5 h-5 text-[#10B981]" />
                <span className="text-gray-700 font-medium">Antar Jemput Gratis</span>
              </div>
              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm">
                <CheckCircle className="w-5 h-5 text-[#10B981]" />
                <span className="text-gray-700 font-medium">Garansi Cuci Ulang</span>
              </div>
            </div>
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
              Dapatkan harga lebih hemat dengan berlangganan paket bulanan
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
                  <div className="mt-2 inline-block bg-white/20 text-white text-xs font-semibold px-3 py-1 rounded-full">
                    {pkg.savings}
                  </div>
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
            <span className="text-[#0EA5E9] font-semibold text-sm uppercase tracking-wider">Daftar Harga Lengkap</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4">
              Harga Per Item
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Harga sudah termasuk pewangi premium. Antar jemput gratis untuk minimal order 3kg.
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
                  <p className="text-white/80 text-sm">{category.description}</p>
                </div>
                <div className="p-6">
                  <ul className="space-y-3">
                    {category.items.map((item, i) => (
                      <li key={i} className={`flex justify-between items-center py-2 border-b border-gray-100 last:border-0 ${item.popular ? "bg-[#0EA5E9]/5 -mx-2 px-2 rounded-lg" : ""}`}>
                        <div>
                          <span className="text-gray-700">{item.name}</span>
                          {item.note && <span className="text-xs text-gray-400 ml-2">({item.note})</span>}
                          {item.popular && <span className="ml-2 text-xs bg-[#0EA5E9] text-white px-2 py-0.5 rounded-full">Populer</span>}
                        </div>
                        <span className="font-bold text-[#0EA5E9] whitespace-nowrap">
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <span className="text-[#10B981] font-semibold text-sm uppercase tracking-wider">Promo</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4">
              Kode Promo Aktif
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Gunakan kode promo untuk mendapatkan diskon tambahan
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {promos.map((promo, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative overflow-hidden bg-gradient-to-br ${promo.color} rounded-2xl p-6 text-white`}
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
                <div className="relative">
                  <div className="flex items-center gap-2 mb-3">
                    <Gift className="w-5 h-5" />
                    <span className="text-sm font-semibold uppercase tracking-wider opacity-80">{promo.title}</span>
                  </div>
                  <div className="text-3xl font-bold mb-2">{promo.discount}</div>
                  <p className="text-white/80 text-sm mb-4">{promo.description}</p>
                  <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-lg inline-block mb-4">
                    <span className="text-sm opacity-80">Kode:</span>
                    <p className="font-bold text-lg">{promo.code}</p>
                  </div>
                  <ul className="text-xs text-white/70 space-y-1 mb-4">
                    {promo.terms.map((term, i) => (
                      <li key={i}>• {term}</li>
                    ))}
                  </ul>
                  <p className="text-xs text-white/60">Berlaku s/d {promo.validUntil}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 to-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <span className="text-[#10B981] font-semibold text-sm uppercase tracking-wider">Perbandingan</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-2 mb-4">
              Kenapa Pilih CleanPress?
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Bandingkan layanan kami dengan laundry lain
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-2xl overflow-hidden"
          >
            <div className="grid grid-cols-3 bg-gray-50 border-b">
              <div className="p-4 font-semibold text-gray-700">Fitur</div>
              <div className="p-4 font-semibold text-center bg-gradient-to-r from-[#0EA5E9] to-[#6366F1] text-white">CleanPress</div>
              <div className="p-4 font-semibold text-center text-gray-700">Laundry Lain</div>
            </div>
            {comparisons.map((item, index) => (
              <div key={index} className="grid grid-cols-3 border-b last:border-0">
                <div className="p-4 text-gray-700">{item.feature}</div>
                <div className="p-4 text-center bg-[#0EA5E9]/5">
                  {typeof item.cleanpress === "boolean" ? (
                    item.cleanpress ? (
                      <CheckCircle className="w-5 h-5 text-[#10B981] mx-auto" />
                    ) : (
                      <span className="text-red-500">✕</span>
                    )
                  ) : (
                    <span className="text-[#0EA5E9] font-semibold">{item.cleanpress}</span>
                  )}
                </div>
                <div className="p-4 text-center">
                  {typeof item.competitor === "boolean" ? (
                    item.competitor ? (
                      <CheckCircle className="w-5 h-5 text-[#10B981] mx-auto" />
                    ) : (
                      <span className="text-red-500">✕</span>
                    )
                  ) : (
                    <span className="text-gray-500">{item.competitor}</span>
                  )}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Payment Methods */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <span className="text-[#6366F1] font-semibold text-sm uppercase tracking-wider">Pembayaran</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4">
              Metode Pembayaran
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Berbagai pilihan pembayaran yang mudah dan aman
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
            {paymentMethods.map((method, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-50 rounded-xl p-4 text-center"
              >
                <div className="w-12 h-12 mx-auto bg-[#0EA5E9]/10 rounded-xl flex items-center justify-center mb-3">
                  <method.icon className="w-6 h-6 text-[#0EA5E9]" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-1">{method.name}</h4>
                <p className="text-xs text-gray-500">{method.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-gradient-to-br from-[#F0F9FF] to-[#EEF2FF]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <span className="text-[#6366F1] font-semibold text-sm uppercase tracking-wider">FAQ</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4">
              Pertanyaan Seputar Harga
            </h2>
          </motion.div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-md"
              >
                <h4 className="font-bold text-gray-900 mb-2 flex items-start gap-2">
                  <AlertCircle className="w-5 h-5 text-[#0EA5E9] flex-shrink-0 mt-0.5" />
                  {faq.question}
                </h4>
                <p className="text-gray-600 pl-7">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
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
                  <span className="text-sm font-semibold uppercase tracking-wider opacity-80">Promo Terbatas</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-2">
                  Diskon 30% Order Pertama
                </h2>
                <p className="text-white/80 text-lg">
                  Gunakan kode <span className="font-bold bg-white/20 px-2 py-1 rounded">NEWMEMBER30</span>
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
