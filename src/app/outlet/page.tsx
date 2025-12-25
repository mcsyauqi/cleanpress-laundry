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
  Truck,
  Zap,
  Sparkles,
  Footprints,
  MessageCircle,
  ArrowRight,
  Users,
  Award,
  Calendar,
  Car,
  Shield,
} from "lucide-react";

const outlets = [
  {
    name: "CleanPress Sudirman",
    address: "Jl. Jendral Sudirman No. 123, Senayan, Jakarta Selatan 12190",
    phone: "0812-3456-7890",
    whatsapp: "6281234567890",
    hours: "07:00 - 21:00",
    maps: "https://maps.google.com/?q=-6.2297,106.8066",
    rating: 4.9,
    reviews: 234,
    features: ["Express 6 Jam", "Dry Clean", "Cuci Sepatu", "Cuci Karpet"],
    isMain: true,
    area: "Jakarta Selatan",
    parking: "Tersedia parkir mobil & motor",
    image: "sudirman",
  },
  {
    name: "CleanPress Kemang",
    address: "Jl. Kemang Raya No. 45, Kemang, Jakarta Selatan 12730",
    phone: "0812-3456-7891",
    whatsapp: "6281234567891",
    hours: "07:00 - 21:00",
    maps: "https://maps.google.com/?q=-6.2605,106.8137",
    rating: 4.8,
    reviews: 189,
    features: ["Express 6 Jam", "Cuci Sepatu", "Dry Clean"],
    area: "Jakarta Selatan",
    parking: "Parkir motor, mobil terbatas",
    image: "kemang",
  },
  {
    name: "CleanPress Menteng",
    address: "Jl. Menteng Raya No. 78, Menteng, Jakarta Pusat 10310",
    phone: "0812-3456-7892",
    whatsapp: "6281234567892",
    hours: "07:00 - 21:00",
    maps: "https://maps.google.com/?q=-6.1944,106.8388",
    rating: 4.9,
    reviews: 156,
    features: ["Express 6 Jam", "Dry Clean", "Cuci Karpet", "Premium Care"],
    area: "Jakarta Pusat",
    parking: "Tersedia parkir luas",
    image: "menteng",
  },
  {
    name: "CleanPress Kelapa Gading",
    address: "Jl. Boulevard Raya No. 56, Kelapa Gading, Jakarta Utara 14240",
    phone: "0812-3456-7893",
    whatsapp: "6281234567893",
    hours: "07:00 - 21:00",
    maps: "https://maps.google.com/?q=-6.1584,106.9055",
    rating: 4.7,
    reviews: 178,
    features: ["Express 6 Jam", "Cuci Sepatu", "Cuci Karpet"],
    area: "Jakarta Utara",
    parking: "Parkir mall tersedia",
    image: "kelapagading",
  },
  {
    name: "CleanPress PIK",
    address: "Ruko Garden House No. 12, PIK Avenue, Jakarta Utara 14460",
    phone: "0812-3456-7894",
    whatsapp: "6281234567894",
    hours: "08:00 - 22:00",
    maps: "https://maps.google.com/?q=-6.1097,106.7436",
    rating: 4.8,
    reviews: 145,
    features: ["Express 6 Jam", "Dry Clean", "Cuci Sepatu", "Cuci Karpet", "Premium Care"],
    area: "Jakarta Utara",
    parking: "Parkir luas depan outlet",
    image: "pik",
  },
  {
    name: "CleanPress BSD",
    address: "Ruko Golden Boulevard No. 23, BSD City, Tangerang Selatan 15322",
    phone: "0812-3456-7895",
    whatsapp: "6281234567895",
    hours: "07:00 - 21:00",
    maps: "https://maps.google.com/?q=-6.3022,106.6522",
    rating: 4.9,
    reviews: 198,
    features: ["Express 6 Jam", "Dry Clean", "Cuci Sepatu"],
    area: "Tangerang Selatan",
    parking: "Tersedia parkir mobil & motor",
    image: "bsd",
  },
];

const coverage = [
  { area: "Jakarta Selatan", outlets: 2, neighborhoods: ["Sudirman", "Kemang", "Pondok Indah", "Cilandak", "Fatmawati", "Blok M"] },
  { area: "Jakarta Pusat", outlets: 1, neighborhoods: ["Menteng", "Cikini", "Gondangdia", "Senen", "Tanah Abang"] },
  { area: "Jakarta Utara", outlets: 2, neighborhoods: ["Kelapa Gading", "PIK", "Sunter", "Pluit", "Penjaringan"] },
  { area: "Tangerang Selatan", outlets: 1, neighborhoods: ["BSD", "Bintaro", "Ciputat", "Pamulang", "Serpong"] },
];

const deliveryInfo = [
  { icon: Truck, title: "Antar Jemput Gratis", description: "Minimal order 3kg dalam radius 5km dari outlet" },
  { icon: Clock, title: "Jadwal Fleksibel", description: "Pilih waktu penjemputan sesuai kebutuhan Anda" },
  { icon: MessageCircle, title: "Konfirmasi WhatsApp", description: "Kurir akan konfirmasi sebelum datang" },
  { icon: Shield, title: "Kurir Terverifikasi", description: "Semua kurir terlatih dan terverifikasi identitasnya" },
];

const stats = [
  { number: "6", label: "Outlet Aktif" },
  { number: "50+", label: "Area Terlayani" },
  { number: "20+", label: "Kurir Antar Jemput" },
  { number: "5km", label: "Radius Gratis" },
];

const faqs = [
  {
    question: "Berapa radius antar jemput gratis?",
    answer: "Antar jemput gratis untuk radius 5km dari outlet terdekat dengan minimal order 3kg. Lebih dari 5km dikenakan biaya Rp 5.000/km.",
  },
  {
    question: "Bagaimana cara mengetahui outlet terdekat?",
    answer: "Hubungi customer service kami via WhatsApp dengan mengirimkan lokasi Anda, kami akan informasikan outlet terdekat dan estimasi jarak.",
  },
  {
    question: "Apakah bisa drop off langsung ke outlet?",
    answer: "Tentu! Anda bisa datang langsung ke outlet kami tanpa perlu membuat appointment. Outlet buka setiap hari sesuai jam operasional.",
  },
  {
    question: "Bagaimana jika lokasi saya di luar jangkauan?",
    answer: "Kami tetap melayani dengan tambahan biaya pengiriman. Hubungi kami untuk informasi lebih lanjut.",
  },
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
              Temukan Outlet{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0EA5E9] to-[#6366F1]">
                CleanPress Terdekat
              </span>
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Tersebar di berbagai lokasi strategis di Jabodetabek. Antar jemput gratis radius 5km dari setiap outlet!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/order"
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#0EA5E9] to-[#6366F1] text-white px-8 py-4 rounded-full font-semibold hover:shadow-xl hover:shadow-[#0EA5E9]/30 transition-all"
              >
                Order Antar Jemput
                <ArrowRight className="w-5 h-5" />
              </Link>
              <a
                href="https://wa.me/6281234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-white text-gray-700 px-8 py-4 rounded-full font-semibold border-2 border-gray-200 hover:border-[#25D366] hover:text-[#25D366] transition-all"
              >
                <MessageCircle className="w-5 h-5" />
                Chat Lokasi Terdekat
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold text-[#0EA5E9] mb-1">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Coverage Area */}
      <section className="py-16 bg-gradient-to-br from-[#F0F9FF] to-[#EEF2FF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <span className="text-[#6366F1] font-semibold text-sm uppercase tracking-wider">Area Layanan</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4">
              Jangkauan Kami
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {coverage.map((area, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-lg"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-[#0EA5E9]/10 rounded-lg flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-[#0EA5E9]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">{area.area}</h3>
                    <p className="text-sm text-[#0EA5E9]">{area.outlets} outlet</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {area.neighborhoods.map((hood, i) => (
                    <span
                      key={i}
                      className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs"
                    >
                      {hood}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Outlets Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <span className="text-[#0EA5E9] font-semibold text-sm uppercase tracking-wider">Outlet</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4">
              Semua Lokasi Outlet
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Kunjungi outlet terdekat atau order antar jemput gratis
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {outlets.map((outlet, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all border ${
                  outlet.isMain ? "border-[#0EA5E9] ring-2 ring-[#0EA5E9]/20" : "border-gray-100"
                }`}
              >
                {outlet.isMain && (
                  <div className="bg-gradient-to-r from-[#0EA5E9] to-[#6366F1] text-white text-center py-2 text-sm font-semibold">
                    OUTLET UTAMA
                  </div>
                )}

                {/* Map Preview */}
                <div className="h-40 bg-gray-100 relative">
                  <iframe
                    src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966!2d106.8!3d-6.2!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwMTMnNDYuOSJTIDEwNsKwNDgnMjMuOCJF!5e0!3m2!1sen!2sid!4v1`}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    className="grayscale hover:grayscale-0 transition-all"
                  ></iframe>
                </div>

                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">{outlet.name}</h3>
                      <p className="text-sm text-[#0EA5E9]">{outlet.area}</p>
                    </div>
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
                    <div className="flex items-center gap-3">
                      <Car className="w-5 h-5 text-[#0EA5E9] flex-shrink-0" />
                      <span className="text-gray-600 text-sm">{outlet.parking}</span>
                    </div>
                  </div>

                  <div className="mb-4">
                    <p className="text-xs text-gray-500 mb-2">Layanan tersedia:</p>
                    <div className="flex flex-wrap gap-2">
                      {outlet.features.map((feature, i) => (
                        <span
                          key={i}
                          className="bg-[#0EA5E9]/10 text-[#0EA5E9] px-2 py-1 rounded text-xs font-medium"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <a
                      href={outlet.maps}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-[#0EA5E9] to-[#6366F1] text-white px-4 py-3 rounded-xl font-semibold hover:shadow-lg hover:shadow-[#0EA5E9]/30 transition-all text-sm"
                    >
                      <Navigation className="w-4 h-4" />
                      Google Maps
                    </a>
                    <a
                      href={`https://wa.me/${outlet.whatsapp}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 bg-[#25D366] text-white px-4 py-3 rounded-xl font-semibold hover:shadow-lg transition-all"
                    >
                      <MessageCircle className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Delivery Info */}
      <section className="py-20 bg-gradient-to-br from-slate-900 to-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <span className="text-[#10B981] font-semibold text-sm uppercase tracking-wider">Antar Jemput</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-2 mb-4">
              Layanan Antar Jemput Gratis
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Tidak perlu keluar rumah, laundry Anda kami jemput dan antarkan
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {deliveryInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 text-center"
              >
                <div className="w-14 h-14 mx-auto bg-gradient-to-br from-[#0EA5E9] to-[#6366F1] rounded-xl flex items-center justify-center mb-4">
                  <info.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{info.title}</h3>
                <p className="text-gray-400 text-sm">{info.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-12 bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/10"
          >
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold text-white mb-4">Cara Kerja Antar Jemput</h3>
                <ol className="space-y-4">
                  <li className="flex items-start gap-3">
                    <span className="w-8 h-8 bg-[#0EA5E9] rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">1</span>
                    <div>
                      <p className="text-white font-medium">Order via WhatsApp/Website</p>
                      <p className="text-gray-400 text-sm">Pilih layanan dan jadwal penjemputan</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-8 h-8 bg-[#0EA5E9] rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">2</span>
                    <div>
                      <p className="text-white font-medium">Kurir datang menjemput</p>
                      <p className="text-gray-400 text-sm">Kurir akan konfirmasi via WA sebelum datang</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-8 h-8 bg-[#0EA5E9] rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">3</span>
                    <div>
                      <p className="text-white font-medium">Proses di outlet</p>
                      <p className="text-gray-400 text-sm">Laundry diproses sesuai layanan pilihan</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-8 h-8 bg-[#10B981] rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">4</span>
                    <div>
                      <p className="text-white font-medium">Diantar ke rumah</p>
                      <p className="text-gray-400 text-sm">Laundry bersih diantar, bayar di tempat</p>
                    </div>
                  </li>
                </ol>
              </div>
              <div className="text-center">
                <div className="bg-white/10 rounded-2xl p-6 inline-block">
                  <Truck className="w-24 h-24 text-[#0EA5E9] mx-auto mb-4" />
                  <p className="text-white font-bold text-xl mb-2">Gratis Ongkir!</p>
                  <p className="text-gray-400">Min. 3kg, radius 5km</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
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
              Pertanyaan Umum
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
                className="bg-gray-50 rounded-xl p-6"
              >
                <h4 className="font-bold text-gray-900 mb-2">{faq.question}</h4>
                <p className="text-gray-600">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#F0F9FF] to-[#EEF2FF]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-gradient-to-br from-[#0EA5E9] to-[#6366F1] rounded-3xl p-8 md:p-12 text-center text-white relative overflow-hidden"
          >
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute -top-20 -right-20 w-64 h-64 bg-white/10 rounded-full"></div>
              <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-white/10 rounded-full"></div>
            </div>
            <div className="relative">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Siap Order Laundry?
              </h2>
              <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
                Kunjungi outlet terdekat atau pesan antar jemput gratis sekarang!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/order"
                  className="inline-flex items-center justify-center gap-2 bg-white text-[#0EA5E9] px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl transition-all"
                >
                  Order Sekarang
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <a
                  href="https://wa.me/6281234567890"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/30 transition-all"
                >
                  <MessageCircle className="w-5 h-5" />
                  Chat WhatsApp
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
