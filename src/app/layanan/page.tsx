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
  Clock,
  CheckCircle,
  ArrowRight,
  Star,
} from "lucide-react";

const services = [
  {
    icon: Shirt,
    name: "Cuci Kiloan",
    price: "Rp 7.000",
    unit: "/kg",
    duration: "2-3 hari",
    description: "Layanan cuci standar untuk pakaian sehari-hari tanpa setrika",
    features: [
      "Cuci dengan deterjen premium",
      "Pewangi pilihan",
      "Lipat rapi",
      "Minimal 3 kg",
    ],
    color: "from-blue-500 to-blue-600",
  },
  {
    icon: Wind,
    name: "Cuci Setrika",
    price: "Rp 10.000",
    unit: "/kg",
    duration: "2-3 hari",
    description: "Pakaian bersih dan rapi siap pakai dengan setrika profesional",
    features: [
      "Cuci dengan deterjen premium",
      "Pewangi premium tahan lama",
      "Setrika rapi",
      "Lipat & gantung sesuai kebutuhan",
    ],
    color: "from-indigo-500 to-indigo-600",
    popular: true,
  },
  {
    icon: Zap,
    name: "Express 6 Jam",
    price: "Rp 20.000",
    unit: "/kg",
    duration: "6 jam",
    description: "Layanan kilat untuk kebutuhan mendesak, siap hari yang sama",
    features: [
      "Prioritas pengerjaan",
      "Selesai dalam 6 jam",
      "Cuci + setrika",
      "Antar langsung ke lokasi",
    ],
    color: "from-yellow-500 to-orange-500",
  },
  {
    icon: Sparkles,
    name: "Dry Clean",
    price: "Rp 35.000",
    unit: "/pcs",
    duration: "3-5 hari",
    description: "Perawatan khusus untuk jas, gaun, dan pakaian premium",
    features: [
      "Teknologi dry cleaning modern",
      "Aman untuk bahan sensitif",
      "Penghilang noda profesional",
      "Packaging premium",
    ],
    color: "from-purple-500 to-purple-600",
  },
  {
    icon: Footprints,
    name: "Cuci Sepatu",
    price: "Rp 35.000",
    unit: "/pasang",
    duration: "2-3 hari",
    description: "Cuci sepatu sneakers, kulit, dan berbagai jenis sepatu",
    features: [
      "Deep cleaning",
      "Whitening untuk sepatu putih",
      "Deodorizing",
      "Pengeringan optimal",
    ],
    color: "from-teal-500 to-teal-600",
  },
  {
    icon: Sofa,
    name: "Cuci Karpet & Bed Cover",
    price: "Rp 15.000",
    unit: "/kg",
    duration: "3-5 hari",
    description: "Cuci item besar seperti karpet, bed cover, selimut tebal",
    features: [
      "Cuci mendalam",
      "Penghilang tungau & bakteri",
      "Pewangi tahan lama",
      "Antar jemput gratis",
    ],
    color: "from-emerald-500 to-emerald-600",
  },
];

const additionalServices = [
  { name: "Cuci Boneka", price: "Rp 15.000/pcs" },
  { name: "Cuci Gordyn", price: "Rp 12.000/kg" },
  { name: "Cuci Helm", price: "Rp 25.000/pcs" },
  { name: "Cuci Tas", price: "Rp 30.000/pcs" },
  { name: "Cuci Jas", price: "Rp 40.000/pcs" },
  { name: "Cuci Gaun Pesta", price: "Rp 75.000/pcs" },
  { name: "Cuci Wedding Dress", price: "Rp 350.000/pcs" },
  { name: "Repair/Jahit", price: "Mulai Rp 15.000" },
];

export default function LayananPage() {
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
              <Sparkles className="w-4 h-4" />
              <span>Layanan Premium</span>
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
              Layanan Laundry{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0EA5E9] to-[#6366F1]">
                Lengkap & Berkualitas
              </span>
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Berbagai pilihan layanan untuk memenuhi semua kebutuhan laundry Anda dengan kualitas premium
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <span className="text-[#0EA5E9] font-semibold text-sm uppercase tracking-wider">Layanan Utama</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4">
              Pilihan Layanan Kami
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all ${
                  service.popular ? "ring-2 ring-[#0EA5E9]" : ""
                }`}
              >
                {service.popular && (
                  <div className="absolute top-4 right-4 bg-gradient-to-r from-[#0EA5E9] to-[#6366F1] text-white text-xs font-semibold px-3 py-1 rounded-full flex items-center gap-1">
                    <Star className="w-3 h-3 fill-current" />
                    POPULER
                  </div>
                )}
                <div className={`bg-gradient-to-r ${service.color} p-6`}>
                  <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center mb-4">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">{service.name}</h3>
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl font-bold text-white">{service.price}</span>
                    <span className="text-white/80">{service.unit}</span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 text-gray-500 mb-4">
                    <Clock className="w-4 h-4" />
                    <span>Estimasi: {service.duration}</span>
                  </div>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-[#10B981] flex-shrink-0 mt-0.5" />
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/order"
                    className="block text-center bg-gradient-to-r from-[#0EA5E9] to-[#6366F1] text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg hover:shadow-[#0EA5E9]/30 transition-all"
                  >
                    Order Sekarang
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-gradient-to-br from-[#F0F9FF] to-[#EEF2FF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <span className="text-[#6366F1] font-semibold text-sm uppercase tracking-wider">Layanan Tambahan</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4">
              Item Spesial Lainnya
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Kami juga melayani berbagai item khusus dengan penanganan profesional
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {additionalServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="bg-white rounded-xl p-4 shadow-md hover:shadow-lg transition-all text-center"
              >
                <h4 className="font-semibold text-gray-900 mb-1">{service.name}</h4>
                <p className="text-[#0EA5E9] font-bold">{service.price}</p>
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
            className="bg-gradient-to-br from-[#0EA5E9] to-[#6366F1] rounded-3xl p-8 md:p-12 text-center text-white relative overflow-hidden"
          >
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute -top-20 -right-20 w-64 h-64 bg-white/10 rounded-full"></div>
              <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-white/10 rounded-full"></div>
            </div>
            <div className="relative">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Butuh Layanan Khusus?
              </h2>
              <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
                Hubungi kami untuk konsultasi dan penanganan item khusus Anda
              </p>
              <Link
                href="/kontak"
                className="inline-flex items-center justify-center gap-2 bg-white text-[#0EA5E9] px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl transition-all"
              >
                Hubungi Kami
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
