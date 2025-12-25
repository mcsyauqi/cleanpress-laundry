"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  MessageCircle,
  Phone,
  MapPin,
  Clock,
  Truck,
  Package,
  CheckCircle,
  ArrowRight,
  User,
  Mail,
  FileText,
  Sparkles,
  Shield,
  Star,
  CreditCard,
  Wallet,
  Banknote,
  Timer,
  Search,
  Bell,
  ThumbsUp,
  Gift,
  Percent,
  ChevronDown,
  Shirt,
  Droplets,
  Wind,
} from "lucide-react";

const services = [
  { id: "cuci-kiloan", name: "Cuci Kiloan", price: "Rp 7.000/kg" },
  { id: "cuci-setrika", name: "Cuci Setrika", price: "Rp 10.000/kg" },
  { id: "express-6jam", name: "Express 6 Jam", price: "Rp 20.000/kg" },
  { id: "dry-clean", name: "Dry Clean", price: "Mulai Rp 35.000" },
  { id: "cuci-sepatu", name: "Cuci Sepatu", price: "Rp 35.000/pasang" },
  { id: "cuci-karpet", name: "Cuci Karpet/Bed Cover", price: "Rp 15.000/kg" },
  { id: "cuci-tas", name: "Cuci Tas", price: "Mulai Rp 50.000" },
  { id: "cuci-boneka", name: "Cuci Boneka", price: "Mulai Rp 25.000" },
];

const timeSlots = [
  "08:00 - 10:00",
  "10:00 - 12:00",
  "12:00 - 14:00",
  "14:00 - 16:00",
  "16:00 - 18:00",
  "18:00 - 20:00",
];

const orderSteps = [
  {
    step: 1,
    icon: FileText,
    title: "Isi Form Order",
    description: "Lengkapi data diri dan detail laundry Anda",
    color: "from-[#0EA5E9] to-[#0284C7]",
  },
  {
    step: 2,
    icon: MessageCircle,
    title: "Konfirmasi WhatsApp",
    description: "Tim kami akan menghubungi untuk konfirmasi",
    color: "from-[#25D366] to-[#128C7E]",
  },
  {
    step: 3,
    icon: Truck,
    title: "Penjemputan",
    description: "Kurir kami jemput laundry di lokasi Anda",
    color: "from-[#6366F1] to-[#4F46E5]",
  },
  {
    step: 4,
    icon: Droplets,
    title: "Proses Cuci",
    description: "Laundry diproses dengan mesin modern",
    color: "from-[#F59E0B] to-[#D97706]",
  },
  {
    step: 5,
    icon: Wind,
    title: "Setrika & Packing",
    description: "Disetrika rapi dan dikemas dengan baik",
    color: "from-[#EC4899] to-[#DB2777]",
  },
  {
    step: 6,
    icon: CheckCircle,
    title: "Pengiriman",
    description: "Diantar kembali ke alamat Anda",
    color: "from-[#10B981] to-[#059669]",
  },
];

const trackingStatuses = [
  { status: "Order Diterima", time: "09:00", done: true },
  { status: "Dijemput Kurir", time: "10:30", done: true },
  { status: "Sedang Dicuci", time: "11:00", done: true },
  { status: "Pengeringan", time: "13:00", done: false },
  { status: "Setrika & Packing", time: "-", done: false },
  { status: "Dalam Pengiriman", time: "-", done: false },
  { status: "Selesai", time: "-", done: false },
];

const testimonials = [
  {
    name: "Rina Wati",
    location: "Kemang, Jakarta Selatan",
    rating: 5,
    text: "Order via website sangat mudah! Tinggal isi form, langsung dikonfirmasi dan dijemput. Praktis banget!",
    avatar: "RW",
  },
  {
    name: "Dedi Kurniawan",
    location: "Senayan, Jakarta Pusat",
    rating: 5,
    text: "Tracking status real-time via WhatsApp sangat membantu. Jadi tahu kapan laundry selesai.",
    avatar: "DK",
  },
  {
    name: "Lisa Andini",
    location: "Pondok Indah, Jakarta Selatan",
    rating: 5,
    text: "Promo NEWMEMBER30 lumayan banget! Dapat diskon 30% untuk order pertama. Recommended!",
    avatar: "LA",
  },
];

const paymentMethods = [
  {
    category: "E-Wallet",
    icon: Wallet,
    methods: ["GoPay", "OVO", "DANA", "ShopeePay", "LinkAja"],
    color: "from-[#0EA5E9] to-[#6366F1]",
  },
  {
    category: "Transfer Bank",
    icon: CreditCard,
    methods: ["BCA", "Mandiri", "BNI", "BRI", "CIMB"],
    color: "from-[#10B981] to-[#059669]",
  },
  {
    category: "Tunai",
    icon: Banknote,
    methods: ["Bayar saat penjemputan", "Bayar saat pengantaran"],
    color: "from-[#F59E0B] to-[#D97706]",
  },
];

const activePromos = [
  {
    code: "NEWMEMBER30",
    discount: "30%",
    description: "Diskon 30% untuk member baru",
    minOrder: "Min. order 5 kg",
    validUntil: "31 Jan 2025",
    color: "from-[#10B981] to-[#059669]",
  },
  {
    code: "HEMAT20",
    discount: "20%",
    description: "Diskon 20% untuk order >10 kg",
    minOrder: "Min. order 10 kg",
    validUntil: "31 Des 2024",
    color: "from-[#6366F1] to-[#4F46E5]",
  },
  {
    code: "FREEONGKIR",
    discount: "GRATIS",
    description: "Gratis ongkir untuk semua layanan",
    minOrder: "Min. order 5 kg",
    validUntil: "15 Jan 2025",
    color: "from-[#F59E0B] to-[#D97706]",
  },
];

const guarantees = [
  {
    icon: Shield,
    title: "Garansi Cuci Ulang",
    description: "Gratis cuci ulang jika tidak puas dengan hasil",
  },
  {
    icon: Clock,
    title: "Tepat Waktu",
    description: "Jaminan selesai sesuai estimasi atau gratis ongkir",
  },
  {
    icon: ThumbsUp,
    title: "Kualitas Premium",
    description: "Menggunakan detergen dan pewangi berkualitas",
  },
  {
    icon: Bell,
    title: "Update Real-time",
    description: "Notifikasi status laundry via WhatsApp",
  },
];

const faqs = [
  {
    question: "Bagaimana cara melacak status order saya?",
    answer: "Setelah order dikonfirmasi, Anda akan mendapatkan update status laundry secara real-time melalui WhatsApp. Mulai dari penjemputan, proses cuci, hingga pengantaran.",
  },
  {
    question: "Berapa lama proses pengerjaan?",
    answer: "Untuk layanan regular 2-3 hari kerja. Layanan Express 6 jam untuk kebutuhan mendesak. Same Day Service tersedia untuk order sebelum jam 10:00.",
  },
  {
    question: "Apakah bisa reschedule jadwal penjemputan?",
    answer: "Bisa! Hubungi kami via WhatsApp minimal 2 jam sebelum jadwal penjemputan untuk reschedule ke waktu yang lebih sesuai.",
  },
  {
    question: "Bagaimana jika ada pakaian yang rusak/hilang?",
    answer: "Kami memiliki asuransi untuk setiap laundry. Jika terjadi kerusakan atau kehilangan yang disebabkan oleh kami, akan kami ganti sesuai ketentuan yang berlaku.",
  },
  {
    question: "Apakah ada minimal order?",
    answer: "Minimal order 3 kg untuk layanan antar jemput gratis. Untuk order di bawah 3 kg, dikenakan biaya jemput Rp 5.000.",
  },
];

export default function OrderPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    service: "",
    weight: "",
    pickupDate: "",
    pickupTime: "",
    notes: "",
    promoCode: "",
  });
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Format message for WhatsApp
    const message = `Halo CleanPress! Saya ingin order laundry:

*Data Pelanggan*
Nama: ${formData.name}
No. HP: ${formData.phone}
Email: ${formData.email}
Alamat: ${formData.address}

*Detail Order*
Layanan: ${formData.service}
Estimasi Berat: ${formData.weight} kg
Jadwal Jemput: ${formData.pickupDate} (${formData.pickupTime})
${formData.promoCode ? `Kode Promo: ${formData.promoCode}` : ""}
${formData.notes ? `Catatan: ${formData.notes}` : ""}

Mohon konfirmasi order saya. Terima kasih!`;

    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/6281234567890?text=${encodedMessage}`, "_blank");
  };

  return (
    <div className="pt-16 md:pt-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#F0F9FF] via-white to-[#EEF2FF] py-16 md:py-20">
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
              <Package className="w-4 h-4" />
              <span>Pesan Sekarang</span>
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
              Order{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0EA5E9] to-[#6366F1]">
                Laundry Online
              </span>
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Isi form di bawah dan kami akan segera menghubungi Anda untuk konfirmasi.
              Proses mudah, cepat, dan terpercaya!
            </p>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { value: "< 30 menit", label: "Respon Order" },
                { value: "2-3 Hari", label: "Proses Regular" },
                { value: "6 Jam", label: "Express Service" },
                { value: "99%", label: "Kepuasan" },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  className="bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-sm"
                >
                  <div className="text-xl md:text-2xl font-bold text-[#0EA5E9]">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Order Process Steps */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <span className="text-[#0EA5E9] font-semibold text-sm uppercase tracking-wider">Proses Order</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4">
              Bagaimana Cara Kerjanya?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Hanya 6 langkah mudah dari order hingga laundry bersih sampai di tangan Anda
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {orderSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all group"
              >
                <div className="absolute -top-3 -left-3 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">
                  {step.step}
                </div>
                <div className={`w-14 h-14 bg-gradient-to-br ${step.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <step.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Order Form Section */}
      <section className="py-16 bg-gradient-to-br from-[#F0F9FF] to-[#EEF2FF]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <span className="text-[#6366F1] font-semibold text-sm uppercase tracking-wider">Form Order</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4">
              Isi Data Order Anda
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-12">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2"
            >
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Personal Info */}
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                      <User className="w-5 h-5 text-[#0EA5E9]" />
                      Data Pelanggan
                    </h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Nama Lengkap *
                        </label>
                        <div className="relative">
                          <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                          <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#0EA5E9] focus:border-transparent transition-all"
                            placeholder="Nama Anda"
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          No. WhatsApp *
                        </label>
                        <div className="relative">
                          <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                          <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                            className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#0EA5E9] focus:border-transparent transition-all"
                            placeholder="08xxxxxxxxxx"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#0EA5E9] focus:border-transparent transition-all"
                        placeholder="email@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Alamat Lengkap *
                    </label>
                    <div className="relative">
                      <MapPin className="absolute left-4 top-4 w-5 h-5 text-gray-400" />
                      <textarea
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        required
                        rows={3}
                        className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#0EA5E9] focus:border-transparent transition-all resize-none"
                        placeholder="Alamat lengkap untuk penjemputan (RT/RW, Kelurahan, Kecamatan)"
                      />
                    </div>
                  </div>

                  {/* Order Details */}
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                      <Shirt className="w-5 h-5 text-[#6366F1]" />
                      Detail Laundry
                    </h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Pilih Layanan *
                        </label>
                        <div className="relative">
                          <Sparkles className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                          <select
                            name="service"
                            value={formData.service}
                            onChange={handleChange}
                            required
                            className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#0EA5E9] focus:border-transparent transition-all appearance-none bg-white"
                          >
                            <option value="">Pilih layanan</option>
                            {services.map((service) => (
                              <option key={service.id} value={service.name}>
                                {service.name} - {service.price}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Estimasi Berat (kg)
                        </label>
                        <div className="relative">
                          <Package className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                          <input
                            type="number"
                            name="weight"
                            value={formData.weight}
                            onChange={handleChange}
                            min="1"
                            className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#0EA5E9] focus:border-transparent transition-all"
                            placeholder="Min. 3 kg untuk free pickup"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Schedule */}
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                      <Clock className="w-5 h-5 text-[#10B981]" />
                      Jadwal Penjemputan
                    </h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Tanggal Jemput *
                        </label>
                        <div className="relative">
                          <Clock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                          <input
                            type="date"
                            name="pickupDate"
                            value={formData.pickupDate}
                            onChange={handleChange}
                            required
                            className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#0EA5E9] focus:border-transparent transition-all"
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Waktu Jemput *
                        </label>
                        <div className="relative">
                          <Timer className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                          <select
                            name="pickupTime"
                            value={formData.pickupTime}
                            onChange={handleChange}
                            required
                            className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#0EA5E9] focus:border-transparent transition-all appearance-none bg-white"
                          >
                            <option value="">Pilih waktu</option>
                            {timeSlots.map((slot) => (
                              <option key={slot} value={slot}>
                                {slot}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Kode Promo
                    </label>
                    <div className="relative">
                      <Gift className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="text"
                        name="promoCode"
                        value={formData.promoCode}
                        onChange={handleChange}
                        className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#0EA5E9] focus:border-transparent transition-all"
                        placeholder="Masukkan kode promo (opsional)"
                      />
                    </div>
                    <p className="text-xs text-gray-500 mt-1">Lihat promo aktif di sidebar sebelah kanan</p>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Catatan Tambahan
                    </label>
                    <div className="relative">
                      <FileText className="absolute left-4 top-4 w-5 h-5 text-gray-400" />
                      <textarea
                        name="notes"
                        value={formData.notes}
                        onChange={handleChange}
                        rows={3}
                        className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#0EA5E9] focus:border-transparent transition-all resize-none"
                        placeholder="Catatan khusus: jenis pewangi, pakaian sensitif, dll"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-[#0EA5E9] to-[#6366F1] text-white px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-xl hover:shadow-[#0EA5E9]/30 transition-all flex items-center justify-center gap-2"
                  >
                    <MessageCircle className="w-5 h-5" />
                    Order via WhatsApp
                  </button>
                </form>
              </div>
            </motion.div>

            {/* Sidebar */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6"
            >
              {/* Why Order */}
              <div className="bg-gradient-to-br from-[#0EA5E9] to-[#6366F1] rounded-2xl p-6 text-white">
                <h3 className="text-xl font-bold mb-4">Kenapa Order di CleanPress?</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                    <span>Antar jemput GRATIS min. 3kg</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                    <span>Garansi cuci ulang gratis</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                    <span>Pewangi premium 10+ pilihan</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                    <span>Tracking status via WhatsApp</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                    <span>Pembayaran fleksibel</span>
                  </li>
                </ul>
              </div>

              {/* Active Promos */}
              <div className="bg-white rounded-2xl shadow-xl p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <Percent className="w-5 h-5 text-[#10B981]" />
                  Promo Aktif
                </h3>
                <div className="space-y-3">
                  {activePromos.map((promo, index) => (
                    <div key={index} className={`bg-gradient-to-r ${promo.color} rounded-xl p-4 text-white`}>
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-bold">{promo.code}</span>
                        <span className="bg-white/20 px-2 py-0.5 rounded text-sm">{promo.discount}</span>
                      </div>
                      <p className="text-sm text-white/90">{promo.description}</p>
                      <p className="text-xs text-white/70 mt-1">{promo.minOrder} • s/d {promo.validUntil}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Contact */}
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Butuh Bantuan?</h3>
                <div className="space-y-4">
                  <a
                    href="https://wa.me/6281234567890"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-gray-600 hover:text-[#0EA5E9] transition-colors"
                  >
                    <div className="w-10 h-10 bg-[#25D366]/10 rounded-full flex items-center justify-center">
                      <MessageCircle className="w-5 h-5 text-[#25D366]" />
                    </div>
                    <div>
                      <p className="font-medium">WhatsApp</p>
                      <p className="text-sm">0812-3456-7890</p>
                    </div>
                  </a>
                  <a
                    href="tel:+6281234567890"
                    className="flex items-center gap-3 text-gray-600 hover:text-[#0EA5E9] transition-colors"
                  >
                    <div className="w-10 h-10 bg-[#0EA5E9]/10 rounded-full flex items-center justify-center">
                      <Phone className="w-5 h-5 text-[#0EA5E9]" />
                    </div>
                    <div>
                      <p className="font-medium">Telepon</p>
                      <p className="text-sm">0812-3456-7890</p>
                    </div>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Order Tracking Preview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-[#10B981] font-semibold text-sm uppercase tracking-wider">Live Tracking</span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4">
                Pantau Status Laundry Anda
              </h2>
              <p className="text-gray-600 mb-6">
                Dapatkan update real-time status laundry Anda langsung via WhatsApp.
                Tidak perlu khawatir, kami akan memberitahu setiap tahapan proses.
              </p>

              <div className="space-y-4">
                {guarantees.map((item, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#0EA5E9]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-6 h-6 text-[#0EA5E9]" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">{item.title}</h4>
                      <p className="text-sm text-gray-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-6"
            >
              <div className="bg-white rounded-xl shadow-lg p-6">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <p className="text-sm text-gray-500">Order ID</p>
                    <p className="font-bold text-gray-900">#CP-2024-001234</p>
                  </div>
                  <div className="px-3 py-1 bg-[#0EA5E9]/10 text-[#0EA5E9] rounded-full text-sm font-medium">
                    Dalam Proses
                  </div>
                </div>

                <div className="space-y-4">
                  {trackingStatuses.map((item, index) => (
                    <div key={index} className="flex items-center gap-4">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                        item.done
                          ? "bg-[#10B981] text-white"
                          : "bg-gray-200 text-gray-400"
                      }`}>
                        {item.done ? (
                          <CheckCircle className="w-5 h-5" />
                        ) : (
                          <div className="w-3 h-3 rounded-full bg-current" />
                        )}
                      </div>
                      <div className="flex-1">
                        <p className={`font-medium ${item.done ? "text-gray-900" : "text-gray-400"}`}>
                          {item.status}
                        </p>
                      </div>
                      <p className={`text-sm ${item.done ? "text-gray-600" : "text-gray-400"}`}>
                        {item.time}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="mt-6 pt-6 border-t border-gray-100">
                  <p className="text-sm text-gray-500 text-center">
                    Update terakhir: Hari ini, 13:00 WIB
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gradient-to-br from-[#F0F9FF] to-[#EEF2FF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <span className="text-[#6366F1] font-semibold text-sm uppercase tracking-wider">Testimoni</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4">
              Apa Kata Pelanggan Kami?
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-lg"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">&ldquo;{testimonial.text}&rdquo;</p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#0EA5E9] to-[#6366F1] rounded-full flex items-center justify-center text-white font-bold">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.location}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
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
            <span className="text-[#0EA5E9] font-semibold text-sm uppercase tracking-wider">Pembayaran</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4">
              Metode Pembayaran Fleksibel
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Pilih metode pembayaran yang paling nyaman untuk Anda
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {paymentMethods.map((method, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100"
              >
                <div className={`w-14 h-14 bg-gradient-to-br ${method.color} rounded-xl flex items-center justify-center mb-4`}>
                  <method.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{method.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {method.methods.map((m, i) => (
                    <span key={i} className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-700">
                      {m}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
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
              Pertanyaan Seputar Order
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
                className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full flex items-center justify-between p-6 text-left"
                >
                  <span className="font-semibold text-gray-900">{faq.question}</span>
                  <ChevronDown className={`w-5 h-5 text-gray-500 transform transition-transform ${openFaq === index ? "rotate-180" : ""}`} />
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-6">
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#0EA5E9] to-[#6366F1]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Siap Order Laundry?
            </h2>
            <p className="text-xl text-white/80 mb-8">
              Isi form di atas atau langsung hubungi kami via WhatsApp untuk order cepat!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#form-order"
                className="inline-flex items-center justify-center gap-2 bg-white text-[#0EA5E9] px-8 py-4 rounded-full font-semibold hover:shadow-xl transition-all"
              >
                <FileText className="w-5 h-5" />
                Isi Form Order
              </a>
              <a
                href="https://wa.me/6281234567890?text=Halo%20CleanPress!%20Saya%20ingin%20order%20laundry"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#25D366] text-white px-8 py-4 rounded-full font-semibold hover:shadow-xl transition-all"
              >
                <MessageCircle className="w-5 h-5" />
                Chat WhatsApp
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
