"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Truck,
  Clock,
  Sparkles,
  Shield,
  MessageCircle,
  ChevronRight,
  Star,
  Zap,
  Shirt,
  Wind,
  CheckCircle,
  ArrowRight,
  Package,
  Home,
  Percent,
} from "lucide-react";

const features = [
  { icon: Truck, text: "Antar Jemput Gratis" },
  { icon: Clock, text: "Express 6 Jam" },
  { icon: Sparkles, text: "Pewangi Premium" },
];

const services = [
  {
    icon: Shirt,
    name: "Cuci Kiloan",
    price: "Rp 7.000",
    unit: "/kg",
    duration: "2-3 hari",
    description: "Cuci bersih tanpa setrika",
  },
  {
    icon: Wind,
    name: "Cuci Setrika",
    price: "Rp 10.000",
    unit: "/kg",
    duration: "2-3 hari",
    description: "Cuci bersih + setrika rapi",
  },
  {
    icon: Zap,
    name: "Express 6 Jam",
    price: "Rp 20.000",
    unit: "/kg",
    duration: "Same day",
    description: "Cuci kilat, siap hari ini",
    popular: true,
  },
  {
    icon: Sparkles,
    name: "Dry Clean",
    price: "Rp 35.000",
    unit: "/pcs",
    duration: "3-5 hari",
    description: "Jas, gaun, & item premium",
  },
];

const advantages = [
  {
    icon: Truck,
    title: "Antar Jemput GRATIS",
    description: "Minimal order 3kg dalam radius 5km dari outlet terdekat",
    color: "from-[#0EA5E9] to-[#0284C7]",
  },
  {
    icon: Sparkles,
    title: "Pewangi Premium",
    description: "Pilihan 10+ aroma premium yang tahan lama hingga 2 minggu",
    color: "from-[#6366F1] to-[#4F46E5]",
  },
  {
    icon: MessageCircle,
    title: "App Tracking",
    description: "Pantau status laundry Anda via WhatsApp real-time",
    color: "from-[#10B981] to-[#059669]",
  },
  {
    icon: Shield,
    title: "Garansi Cuci Ulang",
    description: "Tidak puas? Kami cuci ulang GRATIS tanpa tambahan biaya",
    color: "from-[#F59E0B] to-[#D97706]",
  },
];

const steps = [
  {
    step: 1,
    title: "Pesan Online",
    description: "Order via WhatsApp atau website",
    icon: MessageCircle,
  },
  {
    step: 2,
    title: "Kami Jemput",
    description: "Kurir jemput laundry Anda",
    icon: Truck,
  },
  {
    step: 3,
    title: "Proses Cuci",
    description: "Dicuci dengan perawatan terbaik",
    icon: Sparkles,
  },
  {
    step: 4,
    title: "Antar ke Rumah",
    description: "Laundry bersih diantar",
    icon: Home,
  },
];

const promos = [
  {
    title: "MEMBER BARU",
    discount: "30%",
    description: "Diskon untuk order pertama Anda",
    code: "NEWMEMBER30",
    color: "from-[#0EA5E9] to-[#6366F1]",
  },
  {
    title: "LANGGANAN BULANAN",
    discount: "Rp 8.000/kg",
    description: "Harga spesial untuk member bulanan",
    code: "MEMBER2025",
    color: "from-[#10B981] to-[#059669]",
  },
];

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function HomePage() {
  return (
    <div className="pt-16 md:pt-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#F0F9FF] via-white to-[#EEF2FF] py-16 md:py-24">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#0EA5E9]/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-[#6366F1]/10 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center lg:text-left"
            >
              <div className="inline-flex items-center gap-2 bg-[#0EA5E9]/10 text-[#0EA5E9] px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Star className="w-4 h-4 fill-current" />
                <span>Laundry Premium #1 di Jakarta</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
                Laundry Kiloan Premium,{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0EA5E9] to-[#6366F1]">
                  Antar Jemput Gratis
                </span>
              </h1>

              <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
                Pakaian bersih, wangi, dan rapi tanpa repot. Pesan online, kami jemput dan antarkan ke rumah Anda.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-10">
                <Link
                  href="/order"
                  className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#0EA5E9] to-[#6366F1] text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl hover:shadow-[#0EA5E9]/30 transition-all hover:-translate-y-0.5"
                >
                  Order Sekarang
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  href="/harga"
                  className="inline-flex items-center justify-center gap-2 bg-white text-gray-700 px-8 py-4 rounded-full font-semibold text-lg border-2 border-gray-200 hover:border-[#0EA5E9] hover:text-[#0EA5E9] transition-all"
                >
                  Cek Harga
                  <ChevronRight className="w-5 h-5" />
                </Link>
              </div>

              <div className="flex flex-wrap gap-6 justify-center lg:justify-start">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                    className="flex items-center gap-2 text-gray-600"
                  >
                    <div className="w-8 h-8 rounded-full bg-[#10B981]/10 flex items-center justify-center">
                      <feature.icon className="w-4 h-4 text-[#10B981]" />
                    </div>
                    <span className="font-medium">{feature.text}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="relative w-full aspect-square max-w-lg mx-auto">
                <div className="absolute inset-0 bg-gradient-to-br from-[#0EA5E9] to-[#6366F1] rounded-3xl transform rotate-6 opacity-20"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-[#0EA5E9] to-[#6366F1] rounded-3xl transform -rotate-3 opacity-40"></div>
                <div className="relative bg-white rounded-3xl shadow-2xl p-8 h-full flex flex-col justify-center items-center">
                  <div className="text-center">
                    <div className="w-32 h-32 mx-auto bg-gradient-to-br from-[#0EA5E9] to-[#6366F1] rounded-full flex items-center justify-center mb-6">
                      <Sparkles className="w-16 h-16 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Bersih Sempurna</h3>
                    <p className="text-gray-600 mb-6">Wangi Tahan Lama</p>
                    <div className="flex items-center justify-center gap-1 text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-current" />
                      ))}
                    </div>
                    <p className="text-sm text-gray-500 mt-2">4.9/5 dari 1000+ pelanggan</p>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -top-4 -right-4 bg-white rounded-2xl shadow-lg p-4"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Selesai!</p>
                    <p className="text-sm text-gray-500">Order #12345</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                className="absolute -bottom-4 -left-4 bg-white rounded-2xl shadow-lg p-4"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                    <Truck className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Antar Jemput</p>
                    <p className="text-sm text-gray-500">Gratis!</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <span className="text-[#0EA5E9] font-semibold text-sm uppercase tracking-wider">Layanan Kami</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4">
              Pilih Layanan Sesuai Kebutuhan
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Berbagai pilihan layanan laundry premium untuk memenuhi kebutuhan Anda
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 border ${
                  service.popular ? "border-[#0EA5E9]" : "border-gray-100"
                }`}
              >
                {service.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#0EA5E9] to-[#6366F1] text-white text-xs font-semibold px-4 py-1 rounded-full">
                    POPULER
                  </div>
                )}
                <div className="w-14 h-14 bg-gradient-to-br from-[#0EA5E9]/10 to-[#6366F1]/10 rounded-xl flex items-center justify-center mb-4">
                  <service.icon className="w-7 h-7 text-[#0EA5E9]" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{service.name}</h3>
                <p className="text-sm text-gray-500 mb-4">{service.description}</p>
                <div className="flex items-baseline gap-1 mb-2">
                  <span className="text-2xl font-bold text-[#0EA5E9]">{service.price}</span>
                  <span className="text-gray-500">{service.unit}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <Clock className="w-4 h-4" />
                  <span>{service.duration}</span>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-center mt-12"
          >
            <Link
              href="/layanan"
              className="inline-flex items-center gap-2 text-[#0EA5E9] font-semibold hover:gap-3 transition-all"
            >
              Lihat Semua Layanan
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="py-20 bg-gradient-to-br from-[#F0F9FF] to-[#EEF2FF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <span className="text-[#6366F1] font-semibold text-sm uppercase tracking-wider">Kenapa Kami?</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4">
              Keunggulan CleanPress Laundry
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Kami berkomitmen memberikan layanan terbaik untuk kepuasan Anda
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {advantages.map((advantage, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all"
              >
                <div className={`w-14 h-14 bg-gradient-to-br ${advantage.color} rounded-xl flex items-center justify-center mb-4`}>
                  <advantage.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{advantage.title}</h3>
                <p className="text-gray-600">{advantage.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How to Order Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <span className="text-[#10B981] font-semibold text-sm uppercase tracking-wider">Cara Order</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4">
              4 Langkah Mudah
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Pesan laundry semudah pesan makanan online
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative text-center"
              >
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-10 left-1/2 w-full h-0.5 bg-gradient-to-r from-[#0EA5E9] to-[#6366F1]"></div>
                )}
                <div className="relative z-10 w-20 h-20 mx-auto bg-gradient-to-br from-[#0EA5E9] to-[#6366F1] rounded-full flex items-center justify-center mb-4 shadow-lg shadow-[#0EA5E9]/30">
                  <step.icon className="w-8 h-8 text-white" />
                </div>
                <div className="bg-white rounded-xl p-4">
                  <span className="inline-block bg-[#0EA5E9]/10 text-[#0EA5E9] text-sm font-bold px-3 py-1 rounded-full mb-2">
                    Step {step.step}
                  </span>
                  <h3 className="text-lg font-bold text-gray-900 mb-1">{step.title}</h3>
                  <p className="text-gray-600 text-sm">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Promo Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 to-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <span className="text-[#10B981] font-semibold text-sm uppercase tracking-wider">Promo Spesial</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-2 mb-4">
              Hemat Lebih Banyak
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Nikmati berbagai promo menarik untuk pelanggan setia
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {promos.map((promo, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative overflow-hidden bg-gradient-to-br ${promo.color} rounded-2xl p-8 text-white`}
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2"></div>
                <div className="relative">
                  <div className="flex items-center gap-3 mb-4">
                    <Percent className="w-8 h-8" />
                    <span className="text-sm font-semibold uppercase tracking-wider opacity-80">{promo.title}</span>
                  </div>
                  <div className="text-4xl md:text-5xl font-bold mb-2">{promo.discount}</div>
                  <p className="text-white/80 mb-6">{promo.description}</p>
                  <div className="flex items-center gap-4">
                    <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-lg">
                      <span className="text-sm opacity-80">Kode Promo:</span>
                      <p className="font-bold">{promo.code}</p>
                    </div>
                    <Link
                      href="/order"
                      className="inline-flex items-center gap-2 bg-white text-gray-900 px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all"
                    >
                      Pakai Sekarang
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
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
                Siap Untuk Laundry Tanpa Ribet?
              </h2>
              <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
                Daftar sekarang dan dapatkan diskon 30% untuk order pertama Anda!
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
