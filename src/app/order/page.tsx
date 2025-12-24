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
} from "lucide-react";

const services = [
  { id: "cuci-kiloan", name: "Cuci Kiloan", price: "Rp 7.000/kg" },
  { id: "cuci-setrika", name: "Cuci Setrika", price: "Rp 10.000/kg" },
  { id: "express-6jam", name: "Express 6 Jam", price: "Rp 20.000/kg" },
  { id: "dry-clean", name: "Dry Clean", price: "Mulai Rp 35.000" },
  { id: "cuci-sepatu", name: "Cuci Sepatu", price: "Rp 35.000/pasang" },
  { id: "cuci-karpet", name: "Cuci Karpet/Bed Cover", price: "Rp 15.000/kg" },
];

const timeSlots = [
  "08:00 - 10:00",
  "10:00 - 12:00",
  "12:00 - 14:00",
  "14:00 - 16:00",
  "16:00 - 18:00",
  "18:00 - 20:00",
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
            <p className="text-lg text-gray-600">
              Isi form di bawah dan kami akan segera menghubungi Anda untuk konfirmasi
            </p>
          </motion.div>
        </div>
      </section>

      {/* Order Form Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2"
            >
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Form Order</h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Personal Info */}
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
                        placeholder="Alamat lengkap untuk penjemputan"
                      />
                    </div>
                  </div>

                  {/* Order Details */}
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
                          placeholder="Min. 3 kg"
                        />
                      </div>
                    </div>
                  </div>

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
                        <Clock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
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

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Kode Promo
                    </label>
                    <input
                      type="text"
                      name="promoCode"
                      value={formData.promoCode}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#0EA5E9] focus:border-transparent transition-all"
                      placeholder="Masukkan kode promo (opsional)"
                    />
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
                        placeholder="Catatan khusus untuk order Anda"
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
              animate={{ opacity: 1, x: 0 }}
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
                </ul>
              </div>

              {/* Promo */}
              <div className="bg-gradient-to-br from-[#10B981] to-[#059669] rounded-2xl p-6 text-white">
                <h3 className="text-xl font-bold mb-2">Promo Member Baru!</h3>
                <p className="text-white/80 mb-4">Diskon 30% untuk order pertama</p>
                <div className="bg-white/20 rounded-lg px-4 py-2 text-center">
                  <span className="text-sm opacity-80">Kode Promo:</span>
                  <p className="text-xl font-bold">NEWMEMBER30</p>
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
    </div>
  );
}
