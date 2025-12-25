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
  Shield,
  Truck,
  Droplets,
  ThermometerSun,
  Layers,
  AlertCircle,
  Heart,
  Award,
  Users,
  Timer,
  Leaf,
  Package,
  MessageCircle,
} from "lucide-react";

const services = [
  {
    icon: Shirt,
    name: "Cuci Kiloan",
    price: "Rp 7.000",
    unit: "/kg",
    duration: "2-3 hari",
    description: "Layanan cuci standar untuk pakaian sehari-hari. Cocok untuk pakaian casual, kaos, celana, dan item ringan lainnya.",
    features: [
      "Cuci dengan deterjen premium anti bakteri",
      "Pewangi pilihan (10+ aroma)",
      "Pengeringan optimal",
      "Lipat rapi dalam packaging",
      "Minimal order 3 kg",
    ],
    process: ["Sortir berdasarkan warna", "Cuci dengan deterjen premium", "Bilas 3x", "Pewangi", "Keringkan", "Lipat rapi"],
    suitable: ["Kaos", "Kemeja casual", "Celana", "Pakaian dalam", "Handuk"],
    color: "from-blue-500 to-blue-600",
  },
  {
    icon: Wind,
    name: "Cuci Setrika",
    price: "Rp 10.000",
    unit: "/kg",
    duration: "2-3 hari",
    description: "Pakaian bersih dan rapi siap pakai dengan setrika profesional. Layanan terpopuler untuk hasil maksimal.",
    features: [
      "Cuci dengan deterjen premium anti bakteri",
      "Pewangi premium tahan lama 2 minggu",
      "Setrika rapi dengan steam iron",
      "Lipat atau gantung sesuai kebutuhan",
      "Minimal order 3 kg",
    ],
    process: ["Sortir berdasarkan warna", "Cuci dengan deterjen premium", "Bilas 3x", "Pewangi premium", "Keringkan", "Setrika steam", "Lipat/gantung"],
    suitable: ["Kemeja formal", "Celana kerja", "Blouse", "Dress casual", "Seragam"],
    color: "from-indigo-500 to-indigo-600",
    popular: true,
  },
  {
    icon: Zap,
    name: "Express 6 Jam",
    price: "Rp 20.000",
    unit: "/kg",
    duration: "6 jam",
    description: "Layanan kilat untuk kebutuhan mendesak. Dijemput pagi, selesai sore. Prioritas pengerjaan untuk Anda.",
    features: [
      "Prioritas pengerjaan #1",
      "Selesai dalam 6 jam (max)",
      "Cuci + setrika lengkap",
      "Pewangi premium pilihan",
      "Antar langsung ke lokasi",
      "Tracking real-time via WhatsApp",
    ],
    process: ["Prioritas antrian", "Cuci express", "Pewangi", "Quick dry", "Setrika express", "Antar segera"],
    suitable: ["Meeting dadakan", "Acara mendadak", "Interview kerja", "Traveling", "Keperluan mendesak"],
    color: "from-yellow-500 to-orange-500",
  },
  {
    icon: Sparkles,
    name: "Dry Clean",
    price: "Rp 35.000",
    unit: "/pcs",
    duration: "3-5 hari",
    description: "Perawatan khusus untuk jas, gaun, dan pakaian premium dengan teknologi dry cleaning profesional.",
    features: [
      "Teknologi dry cleaning Jerman",
      "Aman untuk bahan sensitif (sutra, wool, cashmere)",
      "Penghilang noda profesional",
      "Finishing premium dengan steam",
      "Packaging eksklusif dengan hanger",
      "Garansi kepuasan 100%",
    ],
    process: ["Inspeksi detail", "Pre-treatment noda", "Dry cleaning process", "Finishing steam", "Quality check", "Packaging premium"],
    suitable: ["Jas & blazer", "Gaun pesta", "Wedding dress", "Kebaya", "Coat & mantel", "Pakaian berbahan sensitif"],
    color: "from-purple-500 to-purple-600",
  },
  {
    icon: Footprints,
    name: "Cuci Sepatu",
    price: "Rp 35.000",
    unit: "/pasang",
    duration: "2-3 hari",
    description: "Deep cleaning untuk sneakers, sepatu kulit, dan berbagai jenis sepatu. Kembalikan tampilan seperti baru.",
    features: [
      "Deep cleaning hingga sol dalam",
      "Whitening khusus sepatu putih",
      "Deodorizing anti bau",
      "Treatment kulit untuk sepatu leather",
      "Pengeringan optimal (tidak merusak lem)",
      "Repaint minor tersedia",
    ],
    process: ["Cuci luar dalam", "Sikat khusus", "Treatment bahan", "Whitening/coloring", "Deodorizing", "Pengeringan optimal"],
    suitable: ["Sneakers", "Sepatu canvas", "Sepatu kulit", "Sepatu boots", "Sepatu olahraga", "Sandal premium"],
    color: "from-teal-500 to-teal-600",
  },
  {
    icon: Sofa,
    name: "Cuci Karpet & Bed Cover",
    price: "Rp 15.000",
    unit: "/kg",
    duration: "3-5 hari",
    description: "Cuci mendalam untuk item besar seperti karpet, bed cover, selimut tebal, dan item rumah tangga lainnya.",
    features: [
      "Deep cleaning hingga serat terdalam",
      "Penghilang tungau & bakteri",
      "Anti allergen treatment",
      "Pewangi tahan lama",
      "Pengeringan sempurna",
      "Antar jemput gratis",
    ],
    process: ["Vacuum debu", "Pre-treatment", "Deep wash", "Bilas bersih", "Anti tungau spray", "Pengeringan total"],
    suitable: ["Karpet", "Bed cover", "Selimut tebal", "Bantal & guling", "Sofa cover", "Gordyn"],
    color: "from-emerald-500 to-emerald-600",
  },
];

const additionalServices = [
  { name: "Setrika Only", price: "Rp 5.000/kg", icon: ThermometerSun },
  { name: "Cuci Boneka Kecil", price: "Rp 15.000/pcs", icon: Heart },
  { name: "Cuci Boneka Besar", price: "Rp 35.000/pcs", icon: Heart },
  { name: "Cuci Gordyn", price: "Rp 12.000/kg", icon: Layers },
  { name: "Cuci Helm", price: "Rp 25.000/pcs", icon: Shield },
  { name: "Cuci Tas", price: "Rp 30.000/pcs", icon: Package },
  { name: "Cuci Jas", price: "Rp 40.000/pcs", icon: Shirt },
  { name: "Cuci Gaun Pesta", price: "Rp 75.000/pcs", icon: Sparkles },
  { name: "Cuci Wedding Dress", price: "Rp 350.000/pcs", icon: Sparkles },
  { name: "Cuci Kebaya", price: "Rp 50.000/pcs", icon: Sparkles },
  { name: "Repair/Jahit", price: "Mulai Rp 15.000", icon: Layers },
  { name: "Penghilang Noda", price: "Rp 10.000/noda", icon: Droplets },
];

const processSteps = [
  {
    step: 1,
    title: "Penerimaan & Sortir",
    description: "Laundry Anda diterima, dicatat, dan disortir berdasarkan warna, jenis bahan, dan tingkat kekotoran.",
    icon: Package,
  },
  {
    step: 2,
    title: "Pre-Treatment",
    description: "Noda membandel diberi treatment khusus sebelum proses cuci untuk hasil maksimal.",
    icon: Droplets,
  },
  {
    step: 3,
    title: "Pencucian Premium",
    description: "Dicuci dengan deterjen premium dan air bersih. Proses bilas 3x untuk hasil bersih sempurna.",
    icon: Sparkles,
  },
  {
    step: 4,
    title: "Pewangi & Pengeringan",
    description: "Pewangi premium pilihan Anda ditambahkan, lalu dikeringkan dengan suhu optimal.",
    icon: Wind,
  },
  {
    step: 5,
    title: "Setrika & Finishing",
    description: "Disetrika rapi dengan steam iron profesional untuk hasil licin sempurna.",
    icon: ThermometerSun,
  },
  {
    step: 6,
    title: "Quality Check & Packing",
    description: "Tim QC memastikan hasil sempurna sebelum di-packing rapi untuk pengiriman.",
    icon: CheckCircle,
  },
];

const guarantees = [
  {
    icon: Shield,
    title: "Garansi Cuci Ulang",
    description: "Tidak puas dengan hasil? Kami cuci ulang GRATIS tanpa tambahan biaya dalam 24 jam.",
  },
  {
    icon: Clock,
    title: "Garansi Tepat Waktu",
    description: "Terlambat dari estimasi? Dapatkan diskon 10% untuk order selanjutnya.",
  },
  {
    icon: Heart,
    title: "Garansi Perawatan",
    description: "Kerusakan karena proses cuci? Kami ganti rugi sesuai nilai pakaian.",
  },
  {
    icon: Star,
    title: "Garansi Kualitas",
    description: "Standar kualitas ketat dengan proses QC di setiap tahap pengerjaan.",
  },
];

const stats = [
  { number: "50,000+", label: "Pelanggan Puas" },
  { number: "1,000,000+", label: "Kg Laundry Dicuci" },
  { number: "99%", label: "Rating Kepuasan" },
  { number: "24/7", label: "Customer Support" },
];

const faqs = [
  {
    question: "Apakah ada minimal order?",
    answer: "Ya, minimal order untuk layanan cuci kiloan adalah 3 kg. Untuk dry clean dan cuci satuan tidak ada minimal order.",
  },
  {
    question: "Bagaimana jika pakaian saya rusak?",
    answer: "Kami memberikan garansi penggantian untuk kerusakan yang disebabkan oleh proses cuci. Pastikan untuk melaporkan dalam 24 jam setelah penerimaan.",
  },
  {
    question: "Apakah warna baju akan luntur?",
    answer: "Kami memisahkan pakaian berdasarkan warna dan menggunakan deterjen khusus anti luntur. Untuk pakaian baru, disarankan cuci terpisah di order pertama.",
  },
  {
    question: "Berapa lama pewangi bertahan?",
    answer: "Pewangi premium kami dapat bertahan hingga 2 minggu dengan penggunaan normal. Kami menyediakan 10+ pilihan aroma.",
  },
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
              Berbagai pilihan layanan untuk memenuhi semua kebutuhan laundry Anda dengan kualitas premium dan harga terjangkau
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/order"
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#0EA5E9] to-[#6366F1] text-white px-8 py-4 rounded-full font-semibold hover:shadow-xl hover:shadow-[#0EA5E9]/30 transition-all"
              >
                Order Sekarang
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/harga"
                className="inline-flex items-center justify-center gap-2 bg-white text-gray-700 px-8 py-4 rounded-full font-semibold border-2 border-gray-200 hover:border-[#0EA5E9] hover:text-[#0EA5E9] transition-all"
              >
                Lihat Daftar Harga
              </Link>
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
            <p className="text-gray-600 max-w-2xl mx-auto">
              Setiap layanan dikerjakan dengan standar premium dan perhatian detail
            </p>
          </motion.div>

          <div className="space-y-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all border ${
                  service.popular ? "border-[#0EA5E9] ring-2 ring-[#0EA5E9]/20" : "border-gray-100"
                }`}
              >
                <div className="grid lg:grid-cols-3">
                  {/* Service Header */}
                  <div className={`bg-gradient-to-br ${service.color} p-8 text-white`}>
                    {service.popular && (
                      <div className="inline-flex items-center gap-1 bg-white/20 text-white text-xs font-semibold px-3 py-1 rounded-full mb-4">
                        <Star className="w-3 h-3 fill-current" />
                        PALING POPULER
                      </div>
                    )}
                    <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center mb-4">
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold mb-2">{service.name}</h3>
                    <div className="flex items-baseline gap-1 mb-4">
                      <span className="text-4xl font-bold">{service.price}</span>
                      <span className="text-white/80">{service.unit}</span>
                    </div>
                    <div className="flex items-center gap-2 text-white/80 mb-6">
                      <Clock className="w-4 h-4" />
                      <span>Estimasi: {service.duration}</span>
                    </div>
                    <p className="text-white/90 leading-relaxed">{service.description}</p>
                  </div>

                  {/* Service Details */}
                  <div className="p-8 lg:col-span-2">
                    <div className="grid md:grid-cols-2 gap-8">
                      {/* Features */}
                      <div>
                        <h4 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                          <CheckCircle className="w-5 h-5 text-[#10B981]" />
                          Yang Didapat
                        </h4>
                        <ul className="space-y-2">
                          {service.features.map((feature, i) => (
                            <li key={i} className="flex items-start gap-2 text-gray-600 text-sm">
                              <CheckCircle className="w-4 h-4 text-[#10B981] flex-shrink-0 mt-0.5" />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Suitable For */}
                      <div>
                        <h4 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                          <Shirt className="w-5 h-5 text-[#6366F1]" />
                          Cocok Untuk
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {service.suitable.map((item, i) => (
                            <span
                              key={i}
                              className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                            >
                              {item}
                            </span>
                          ))}
                        </div>

                        <h4 className="font-bold text-gray-900 mt-6 mb-4 flex items-center gap-2">
                          <Timer className="w-5 h-5 text-[#0EA5E9]" />
                          Proses Pengerjaan
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {service.process.map((step, i) => (
                            <span
                              key={i}
                              className="bg-[#0EA5E9]/10 text-[#0EA5E9] px-3 py-1 rounded-full text-xs font-medium"
                            >
                              {i + 1}. {step}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="mt-8 pt-6 border-t border-gray-100 flex flex-col sm:flex-row gap-4">
                      <Link
                        href="/order"
                        className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#0EA5E9] to-[#6366F1] text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg hover:shadow-[#0EA5E9]/30 transition-all"
                      >
                        Order {service.name}
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                      <a
                        href="https://wa.me/6281234567890"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 bg-[#25D366]/10 text-[#25D366] px-6 py-3 rounded-full font-semibold hover:bg-[#25D366]/20 transition-all"
                      >
                        <MessageCircle className="w-4 h-4" />
                        Tanya via WhatsApp
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 to-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <span className="text-[#10B981] font-semibold text-sm uppercase tracking-wider">Proses Kami</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-2 mb-4">
              6 Tahap Pengerjaan Premium
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Setiap laundry melewati proses ketat untuk memastikan hasil terbaik
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#0EA5E9] to-[#6366F1] rounded-xl flex items-center justify-center flex-shrink-0">
                    <step.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <span className="text-[#0EA5E9] font-bold text-sm">Step {step.step}</span>
                    <h3 className="text-lg font-bold text-white mt-1 mb-2">{step.title}</h3>
                    <p className="text-gray-400 text-sm">{step.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-white">
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

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {additionalServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="bg-white rounded-xl p-4 shadow-md hover:shadow-lg transition-all border border-gray-100 hover:border-[#0EA5E9] group"
              >
                <div className="w-10 h-10 bg-[#0EA5E9]/10 rounded-lg flex items-center justify-center mb-3 group-hover:bg-[#0EA5E9] transition-all">
                  <service.icon className="w-5 h-5 text-[#0EA5E9] group-hover:text-white transition-all" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-1">{service.name}</h4>
                <p className="text-[#0EA5E9] font-bold text-sm">{service.price}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Guarantees */}
      <section className="py-20 bg-gradient-to-br from-[#F0F9FF] to-[#EEF2FF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <span className="text-[#10B981] font-semibold text-sm uppercase tracking-wider">Garansi Kami</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4">
              Kepuasan Anda Prioritas Kami
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {guarantees.map((guarantee, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-lg text-center"
              >
                <div className="w-14 h-14 mx-auto bg-[#10B981]/10 rounded-xl flex items-center justify-center mb-4">
                  <guarantee.icon className="w-7 h-7 text-[#10B981]" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{guarantee.title}</h3>
                <p className="text-gray-600 text-sm">{guarantee.description}</p>
              </motion.div>
            ))}
          </div>
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
                <h4 className="font-bold text-gray-900 mb-2 flex items-start gap-2">
                  <AlertCircle className="w-5 h-5 text-[#0EA5E9] flex-shrink-0 mt-0.5" />
                  {faq.question}
                </h4>
                <p className="text-gray-600 pl-7">{faq.answer}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mt-8"
          >
            <p className="text-gray-600 mb-4">Masih ada pertanyaan?</p>
            <Link
              href="/kontak"
              className="inline-flex items-center gap-2 text-[#0EA5E9] font-semibold hover:gap-3 transition-all"
            >
              Hubungi Kami
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
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
                Siap Mencoba Layanan Kami?
              </h2>
              <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
                Dapatkan diskon 30% untuk order pertama dengan kode NEWMEMBER30
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/order"
                  className="inline-flex items-center justify-center gap-2 bg-white text-[#0EA5E9] px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl transition-all"
                >
                  Order Sekarang
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  href="/harga"
                  className="inline-flex items-center justify-center gap-2 bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/30 transition-all"
                >
                  Lihat Harga Lengkap
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
