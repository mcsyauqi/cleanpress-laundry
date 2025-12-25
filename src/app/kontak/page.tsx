"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  MessageCircle,
  Send,
  User,
  FileText,
  Instagram,
  Facebook,
  CheckCircle,
  Star,
  ChevronDown,
  Building2,
  Headphones,
  Timer,
  Users,
  Heart,
  Award,
  Briefcase,
  ArrowRight,
  Youtube,
  Twitter,
} from "lucide-react";

const contactInfo = [
  {
    icon: MapPin,
    title: "Kantor Pusat",
    content: "Jl. Jendral Sudirman No. 123, Senayan, Jakarta Selatan 12345",
    color: "from-blue-500 to-blue-600",
  },
  {
    icon: Phone,
    title: "Telepon",
    content: "0812-3456-7890",
    href: "tel:+6281234567890",
    color: "from-green-500 to-green-600",
  },
  {
    icon: Mail,
    title: "Email",
    content: "info@cleanpress.id",
    href: "mailto:info@cleanpress.id",
    color: "from-purple-500 to-purple-600",
  },
  {
    icon: Clock,
    title: "Jam Operasional",
    content: "Senin - Minggu: 07:00 - 21:00 WIB",
    color: "from-orange-500 to-orange-600",
  },
];

const csStats = [
  { value: "< 5 menit", label: "Waktu Respon", icon: Timer },
  { value: "99%", label: "Kepuasan CS", icon: Heart },
  { value: "24/7", label: "WhatsApp Support", icon: Headphones },
  { value: "50K+", label: "Pelanggan Dilayani", icon: Users },
];

const csTeam = [
  {
    name: "Putri Rahayu",
    role: "Customer Service Lead",
    avatar: "PR",
    speciality: "Order & Complaint",
    available: "08:00 - 16:00 WIB",
  },
  {
    name: "Ahmad Fadli",
    role: "Customer Service",
    avatar: "AF",
    speciality: "Technical Support",
    available: "10:00 - 18:00 WIB",
  },
  {
    name: "Sari Dewi",
    role: "Customer Service",
    avatar: "SD",
    speciality: "Member & Promo",
    available: "12:00 - 20:00 WIB",
  },
  {
    name: "Budi Santoso",
    role: "Customer Service",
    avatar: "BS",
    speciality: "Business Inquiry",
    available: "08:00 - 17:00 WIB",
  },
];

const testimonials = [
  {
    name: "Maria Kristina",
    location: "Kemang, Jakarta Selatan",
    rating: 5,
    text: "Customer service CleanPress sangat responsif! Masalah saya langsung ditangani dengan baik. Terima kasih!",
    avatar: "MK",
  },
  {
    name: "Hendry Wijaya",
    location: "Menteng, Jakarta Pusat",
    rating: 5,
    text: "Sempat ada kendala dengan order, tapi CS langsung merespon dan menyelesaikan dengan cepat. Pelayanan top!",
    avatar: "HW",
  },
  {
    name: "Anisa Putri",
    location: "BSD, Tangerang Selatan",
    rating: 5,
    text: "Saya suka karena CS bisa dihubungi via WhatsApp dan responnya cepat. Sangat membantu!",
    avatar: "AP",
  },
];

const socialMedia = [
  {
    name: "Instagram",
    handle: "@cleanpress.id",
    followers: "25K Followers",
    icon: Instagram,
    color: "from-[#833AB4] via-[#FD1D1D] to-[#F77737]",
    link: "https://instagram.com/cleanpress.id",
  },
  {
    name: "Facebook",
    handle: "CleanPress Laundry",
    followers: "15K Likes",
    icon: Facebook,
    color: "from-[#1877F2] to-[#1877F2]",
    link: "https://facebook.com/cleanpresslaundry",
  },
  {
    name: "TikTok",
    handle: "@cleanpress.id",
    followers: "10K Followers",
    icon: () => (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
        <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z" />
      </svg>
    ),
    color: "from-[#000000] to-[#000000]",
    link: "https://tiktok.com/@cleanpress.id",
  },
  {
    name: "YouTube",
    handle: "CleanPress Laundry",
    followers: "5K Subscribers",
    icon: Youtube,
    color: "from-[#FF0000] to-[#CC0000]",
    link: "https://youtube.com/@cleanpresslaundry",
  },
];

const businessInquiry = [
  {
    title: "Kerjasama Bisnis",
    description: "Tertarik menjadi mitra laundry kami? Hubungi tim business development.",
    icon: Briefcase,
    email: "partnership@cleanpress.id",
  },
  {
    title: "Franchise",
    description: "Ingin membuka outlet CleanPress? Pelajari program franchise kami.",
    icon: Building2,
    email: "franchise@cleanpress.id",
  },
  {
    title: "Corporate",
    description: "Layanan laundry untuk hotel, apartemen, dan perusahaan.",
    icon: Award,
    email: "corporate@cleanpress.id",
  },
];

const outletHours = [
  {
    outlet: "Senayan (Pusat)",
    weekday: "07:00 - 22:00",
    weekend: "08:00 - 21:00",
  },
  {
    outlet: "Kemang",
    weekday: "07:00 - 21:00",
    weekend: "08:00 - 20:00",
  },
  {
    outlet: "Pondok Indah",
    weekday: "08:00 - 21:00",
    weekend: "09:00 - 20:00",
  },
  {
    outlet: "Kelapa Gading",
    weekday: "07:00 - 21:00",
    weekend: "08:00 - 20:00",
  },
  {
    outlet: "BSD City",
    weekday: "08:00 - 21:00",
    weekend: "09:00 - 20:00",
  },
  {
    outlet: "Bekasi",
    weekday: "07:00 - 21:00",
    weekend: "08:00 - 20:00",
  },
];

const faqs = [
  {
    question: "Berapa minimal order untuk antar jemput gratis?",
    answer: "Minimal order 3 kg untuk mendapatkan layanan antar jemput gratis dalam radius 5km dari outlet terdekat.",
  },
  {
    question: "Berapa lama waktu pengerjaan?",
    answer: "Untuk layanan regular 2-3 hari kerja. Tersedia juga layanan Express 6 jam untuk kebutuhan mendesak.",
  },
  {
    question: "Apakah ada garansi?",
    answer: "Ya, kami memberikan garansi cuci ulang gratis jika hasil tidak memuaskan dalam 24 jam setelah pengiriman.",
  },
  {
    question: "Bagaimana cara tracking order?",
    answer: "Anda akan menerima update status laundry via WhatsApp secara real-time, mulai dari penjemputan hingga pengantaran.",
  },
  {
    question: "Metode pembayaran apa saja yang tersedia?",
    answer: "Kami menerima pembayaran tunai, transfer bank, dan e-wallet (GoPay, OVO, DANA, ShopeePay).",
  },
  {
    question: "Bagaimana jika ada keluhan atau komplain?",
    answer: "Hubungi customer service kami via WhatsApp atau email. Tim kami akan merespon dalam waktu maksimal 5 menit di jam operasional.",
  },
  {
    question: "Apakah bisa request pewangi tertentu?",
    answer: "Bisa! Kami menyediakan 10+ pilihan aroma pewangi premium. Tinggal sebutkan saat order atau tulis di catatan.",
  },
  {
    question: "Bagaimana cara menjadi member?",
    answer: "Daftar member gratis! Cukup order pertama Anda dan Anda otomatis terdaftar. Dapatkan poin untuk setiap transaksi.",
  },
];

export default function KontakPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const message = `Halo CleanPress!

*Pesan dari Website*
Nama: ${formData.name}
Email: ${formData.email}
No. HP: ${formData.phone}
Subjek: ${formData.subject}

Pesan:
${formData.message}`;

    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/6281234567890?text=${encodedMessage}`, "_blank");
  };

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
              <MessageCircle className="w-4 h-4" />
              <span>Hubungi Kami</span>
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
              Ada Pertanyaan?{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0EA5E9] to-[#6366F1]">
                Kami Siap Membantu
              </span>
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Tim customer service kami siap melayani Anda setiap hari dengan respon super cepat!
            </p>

            {/* CS Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {csStats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  className="bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-sm"
                >
                  <stat.icon className="w-6 h-6 text-[#0EA5E9] mx-auto mb-2" />
                  <div className="text-xl md:text-2xl font-bold text-gray-900">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {info.href ? (
                  <a
                    href={info.href}
                    className="block bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all border border-gray-100 hover:border-[#0EA5E9] h-full"
                  >
                    <div className={`w-14 h-14 bg-gradient-to-br ${info.color} rounded-xl flex items-center justify-center mb-4`}>
                      <info.icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-1">{info.title}</h3>
                    <p className="text-gray-600">{info.content}</p>
                  </a>
                ) : (
                  <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 h-full">
                    <div className={`w-14 h-14 bg-gradient-to-br ${info.color} rounded-xl flex items-center justify-center mb-4`}>
                      <info.icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-1">{info.title}</h3>
                    <p className="text-gray-600">{info.content}</p>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Contact CTA */}
      <section className="py-12 bg-gradient-to-r from-[#0EA5E9] to-[#6366F1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-white text-center md:text-left">
              <h2 className="text-2xl md:text-3xl font-bold mb-2">Butuh Respon Cepat?</h2>
              <p className="text-white/80">Chat langsung via WhatsApp, respon kurang dari 5 menit!</p>
            </div>
            <a
              href="https://wa.me/6281234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] text-white px-8 py-4 rounded-full font-semibold hover:shadow-xl transition-all"
            >
              <MessageCircle className="w-5 h-5" />
              Chat WhatsApp Sekarang
            </a>
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-16 bg-gradient-to-br from-[#F0F9FF] to-[#EEF2FF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <span className="text-[#6366F1] font-semibold text-sm uppercase tracking-wider">Kirim Pesan</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4">
              Hubungi Kami
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Isi form di bawah atau kunjungi outlet terdekat untuk informasi lebih lanjut
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Kirim Pesan</h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Nama Lengkap
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
                        No. WhatsApp
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
                        required
                        className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#0EA5E9] focus:border-transparent transition-all"
                        placeholder="email@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Subjek
                    </label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#0EA5E9] focus:border-transparent transition-all appearance-none bg-white"
                    >
                      <option value="">Pilih subjek</option>
                      <option value="Pertanyaan Umum">Pertanyaan Umum</option>
                      <option value="Keluhan">Keluhan</option>
                      <option value="Saran">Saran</option>
                      <option value="Kerjasama">Kerjasama Bisnis</option>
                      <option value="Franchise">Franchise</option>
                      <option value="Lainnya">Lainnya</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Pesan
                    </label>
                    <div className="relative">
                      <FileText className="absolute left-4 top-4 w-5 h-5 text-gray-400" />
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={4}
                        className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#0EA5E9] focus:border-transparent transition-all resize-none"
                        placeholder="Tulis pesan Anda..."
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-[#0EA5E9] to-[#6366F1] text-white px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-xl hover:shadow-[#0EA5E9]/30 transition-all flex items-center justify-center gap-2"
                  >
                    <Send className="w-5 h-5" />
                    Kirim via WhatsApp
                  </button>
                </form>
              </div>
            </motion.div>

            {/* Map & Social */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6"
            >
              {/* Map */}
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden h-80">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.2904!2d106.8066!3d-6.2297!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwMTMnNDYuOSJTIDEwNsKwNDgnMjMuOCJF!5e0!3m2!1sen!2sid!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="grayscale hover:grayscale-0 transition-all duration-500"
                ></iframe>
              </div>

              {/* Quick Contact */}
              <div className="bg-gradient-to-br from-[#25D366] to-[#128C7E] rounded-2xl p-6 text-white">
                <h3 className="text-xl font-bold mb-2">Chat Langsung</h3>
                <p className="text-white/80 mb-4">Respon cepat via WhatsApp, available 24/7!</p>
                <a
                  href="https://wa.me/6281234567890"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-white text-[#25D366] px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all"
                >
                  <MessageCircle className="w-5 h-5" />
                  Chat Sekarang
                </a>
              </div>

              {/* Email Support */}
              <div className="bg-white rounded-2xl shadow-xl p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Email Support</h3>
                <div className="space-y-3">
                  <a href="mailto:info@cleanpress.id" className="flex items-center gap-3 text-gray-600 hover:text-[#0EA5E9] transition-colors">
                    <Mail className="w-5 h-5" />
                    <span>info@cleanpress.id</span>
                  </a>
                  <a href="mailto:support@cleanpress.id" className="flex items-center gap-3 text-gray-600 hover:text-[#0EA5E9] transition-colors">
                    <Mail className="w-5 h-5" />
                    <span>support@cleanpress.id</span>
                  </a>
                  <a href="mailto:partnership@cleanpress.id" className="flex items-center gap-3 text-gray-600 hover:text-[#0EA5E9] transition-colors">
                    <Mail className="w-5 h-5" />
                    <span>partnership@cleanpress.id</span>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CS Team */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <span className="text-[#0EA5E9] font-semibold text-sm uppercase tracking-wider">Tim Kami</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4">
              Customer Service Team
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Tim customer service profesional siap melayani Anda dengan ramah dan cepat
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {csTeam.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 text-center hover:shadow-xl transition-all"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-[#0EA5E9] to-[#6366F1] rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                  {member.avatar}
                </div>
                <h3 className="text-lg font-bold text-gray-900">{member.name}</h3>
                <p className="text-[#0EA5E9] text-sm font-medium">{member.role}</p>
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <p className="text-sm text-gray-600 mb-1">
                    <span className="font-medium">Spesialisasi:</span> {member.speciality}
                  </p>
                  <p className="text-sm text-gray-500">
                    <Clock className="w-4 h-4 inline mr-1" />
                    {member.available}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Media */}
      <section className="py-20 bg-gradient-to-br from-[#F0F9FF] to-[#EEF2FF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <span className="text-[#6366F1] font-semibold text-sm uppercase tracking-wider">Social Media</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4">
              Follow & Connect
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Ikuti kami di media sosial untuk tips laundry, promo menarik, dan update terbaru!
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {socialMedia.map((social, index) => (
              <motion.a
                key={index}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all group"
              >
                <div className={`w-14 h-14 bg-gradient-to-br ${social.color} rounded-xl flex items-center justify-center mb-4 text-white group-hover:scale-110 transition-transform`}>
                  <social.icon className="w-7 h-7" />
                </div>
                <h3 className="text-lg font-bold text-gray-900">{social.name}</h3>
                <p className="text-[#0EA5E9] font-medium">{social.handle}</p>
                <p className="text-sm text-gray-500 mt-1">{social.followers}</p>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Outlet Hours */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <span className="text-[#10B981] font-semibold text-sm uppercase tracking-wider">Jam Operasional</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4">
              Jadwal Buka Outlet
            </h2>
          </motion.div>

          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gradient-to-r from-[#0EA5E9] to-[#6366F1] text-white">
                    <th className="px-6 py-4 text-left font-semibold">Outlet</th>
                    <th className="px-6 py-4 text-center font-semibold">Senin - Jumat</th>
                    <th className="px-6 py-4 text-center font-semibold">Sabtu - Minggu</th>
                  </tr>
                </thead>
                <tbody>
                  {outletHours.map((outlet, index) => (
                    <motion.tr
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      className={`border-b border-gray-100 ${index % 2 === 0 ? "bg-gray-50" : "bg-white"}`}
                    >
                      <td className="px-6 py-4 font-medium text-gray-900">{outlet.outlet}</td>
                      <td className="px-6 py-4 text-center text-gray-600">{outlet.weekday}</td>
                      <td className="px-6 py-4 text-center text-gray-600">{outlet.weekend}</td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="mt-6 text-center">
            <Link
              href="/outlet"
              className="inline-flex items-center gap-2 text-[#0EA5E9] font-semibold hover:underline"
            >
              Lihat detail semua outlet
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Business Inquiry */}
      <section className="py-20 bg-gradient-to-br from-[#F0F9FF] to-[#EEF2FF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <span className="text-[#6366F1] font-semibold text-sm uppercase tracking-wider">Business</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4">
              Kerjasama Bisnis
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Tertarik bermitra dengan CleanPress? Hubungi tim business development kami
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {businessInquiry.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-[#0EA5E9] to-[#6366F1] rounded-2xl flex items-center justify-center mb-6">
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 mb-4">{item.description}</p>
                <a
                  href={`mailto:${item.email}`}
                  className="inline-flex items-center gap-2 text-[#0EA5E9] font-semibold hover:underline"
                >
                  <Mail className="w-4 h-4" />
                  {item.email}
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <span className="text-[#10B981] font-semibold text-sm uppercase tracking-wider">Testimoni</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4">
              Apa Kata Pelanggan tentang CS Kami?
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
                className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100"
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
              Pertanyaan yang Sering Diajukan
            </h2>
          </motion.div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full flex items-center justify-between p-6 text-left"
                >
                  <span className="font-semibold text-gray-900">{faq.question}</span>
                  <ChevronDown className={`w-5 h-5 text-gray-500 transform transition-transform flex-shrink-0 ml-4 ${openFaq === index ? "rotate-180" : ""}`} />
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
              Masih Ada Pertanyaan?
            </h2>
            <p className="text-xl text-white/80 mb-8">
              Jangan ragu untuk menghubungi kami. Tim customer service siap membantu 24/7!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/6281234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#25D366] text-white px-8 py-4 rounded-full font-semibold hover:shadow-xl transition-all"
              >
                <MessageCircle className="w-5 h-5" />
                Chat WhatsApp
              </a>
              <a
                href="tel:+6281234567890"
                className="inline-flex items-center justify-center gap-2 bg-white text-[#0EA5E9] px-8 py-4 rounded-full font-semibold hover:shadow-xl transition-all"
              >
                <Phone className="w-5 h-5" />
                Telepon Sekarang
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
