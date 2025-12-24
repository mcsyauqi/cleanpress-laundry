"use client";

import { useState } from "react";
import { motion } from "framer-motion";
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
} from "lucide-react";

const contactInfo = [
  {
    icon: MapPin,
    title: "Alamat",
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
            <p className="text-lg text-gray-600">
              Tim customer service kami siap melayani Anda setiap hari
            </p>
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
                    className="block bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all border border-gray-100 hover:border-[#0EA5E9]"
                  >
                    <div className={`w-14 h-14 bg-gradient-to-br ${info.color} rounded-xl flex items-center justify-center mb-4`}>
                      <info.icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-1">{info.title}</h3>
                    <p className="text-gray-600">{info.content}</p>
                  </a>
                ) : (
                  <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
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

      {/* Contact Form & Map */}
      <section className="py-16 bg-gradient-to-br from-[#F0F9FF] to-[#EEF2FF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
              {/* Map Placeholder */}
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

              {/* Social Media */}
              <div className="bg-white rounded-2xl shadow-xl p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Follow Kami</h3>
                <div className="flex gap-4">
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#F77737] text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all"
                  >
                    <Instagram className="w-5 h-5" />
                    Instagram
                  </a>
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 bg-[#1877F2] text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all"
                  >
                    <Facebook className="w-5 h-5" />
                    Facebook
                  </a>
                </div>
              </div>

              {/* Quick Contact */}
              <div className="bg-gradient-to-br from-[#25D366] to-[#128C7E] rounded-2xl p-6 text-white">
                <h3 className="text-xl font-bold mb-2">Chat Langsung</h3>
                <p className="text-white/80 mb-4">Respon cepat via WhatsApp</p>
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
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
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
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full flex items-center justify-between p-6 text-left"
                >
                  <span className="font-semibold text-gray-900">{faq.question}</span>
                  <span className={`transform transition-transform ${openFaq === index ? "rotate-180" : ""}`}>
                    <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
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
    </div>
  );
}
