"use client";

import { useState } from "react";
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
  XCircle,
  Info,
  ChevronDown,
  Banknote,
  Ruler,
  Palette,
  Bug,
  Scissors,
  Brush,
} from "lucide-react";

// Detailed service data
const detailedServices = [
  {
    id: "cuci-kiloan",
    icon: Shirt,
    name: "Cuci Kiloan",
    tagline: "Hemat & Praktis untuk Pakaian Sehari-hari",
    price: "Rp 7.000",
    unit: "/kg",
    duration: "2-3 hari",
    minOrder: "3 kg",
    description: "Layanan cuci standar yang ekonomis untuk pakaian sehari-hari. Cocok untuk keluarga yang memiliki cucian rutin dengan jumlah banyak. Menggunakan deterjen premium anti bakteri dan pewangi tahan lama.",
    color: "from-blue-500 to-blue-600",
    priceTiers: [
      { weight: "3 - 5 kg", price: "Rp 7.000/kg", note: "Harga normal" },
      { weight: "5 - 10 kg", price: "Rp 6.500/kg", note: "Hemat 7%" },
      { weight: "> 10 kg", price: "Rp 6.000/kg", note: "Hemat 14%" },
    ],
    features: [
      "Cuci dengan deterjen premium anti bakteri",
      "Pewangi pilihan (10+ aroma tersedia)",
      "Pengeringan optimal dengan mesin modern",
      "Lipat rapi dalam packaging plastik",
      "Pisah pakaian terang & gelap",
      "Gratis antar jemput min. 3kg",
    ],
    process: [
      { step: "Sortir", desc: "Pisahkan berdasarkan warna terang/gelap" },
      { step: "Timbang", desc: "Timbang berat laundry secara akurat" },
      { step: "Pre-treat", desc: "Treatment noda membandel" },
      { step: "Cuci", desc: "Cuci dengan deterjen premium" },
      { step: "Bilas 3x", desc: "Bilas bersih hingga tidak ada sisa sabun" },
      { step: "Pewangi", desc: "Tambahkan pewangi pilihan pelanggan" },
      { step: "Keringkan", desc: "Keringkan dengan suhu optimal" },
      { step: "Lipat", desc: "Lipat rapi dan packing" },
    ],
    suitable: [
      "Kaos & T-shirt",
      "Kemeja casual",
      "Celana jeans & chino",
      "Pakaian dalam",
      "Handuk & lap",
      "Sprei & sarung bantal",
      "Pakaian anak",
      "Pakaian tidur",
    ],
    notSuitable: [
      "Jas & blazer formal",
      "Gaun pesta",
      "Pakaian berbahan sutra",
      "Pakaian berbahan wool",
      "Sepatu & tas",
    ],
    tips: [
      "Kosongkan kantong pakaian sebelum dicuci",
      "Pisahkan pakaian yang mudah luntur",
      "Beritahu jika ada noda khusus",
      "Pakaian baru sebaiknya cuci terpisah di order pertama",
    ],
    equipment: ["Mesin cuci front-loading 15kg", "Deterjen anti bakteri premium", "Pewangi softener grade A", "Dryer industrial"],
  },
  {
    id: "cuci-setrika",
    icon: Wind,
    name: "Cuci + Setrika",
    tagline: "Bersih, Rapi, Siap Pakai",
    price: "Rp 10.000",
    unit: "/kg",
    duration: "2-3 hari",
    minOrder: "3 kg",
    description: "Layanan terlengkap dan paling populer! Pakaian dicuci bersih, disetrika rapi dengan steam iron profesional, siap pakai langsung. Cocok untuk pakaian kerja dan kebutuhan formal.",
    color: "from-indigo-500 to-indigo-600",
    popular: true,
    priceTiers: [
      { weight: "3 - 5 kg", price: "Rp 10.000/kg", note: "Harga normal" },
      { weight: "5 - 10 kg", price: "Rp 9.000/kg", note: "Hemat 10%" },
      { weight: "> 10 kg", price: "Rp 8.500/kg", note: "Hemat 15%" },
    ],
    features: [
      "Cuci dengan deterjen premium anti bakteri",
      "Pewangi premium tahan lama hingga 2 minggu",
      "Setrika rapi dengan steam iron profesional",
      "Finishing sempurna untuk kerah & lipatan",
      "Pilihan lipat atau gantung dengan hanger",
      "Packaging premium anti kusut",
      "Gratis antar jemput min. 3kg",
    ],
    process: [
      { step: "Sortir", desc: "Pisahkan berdasarkan warna & bahan" },
      { step: "Pre-treat", desc: "Treatment khusus untuk noda" },
      { step: "Cuci", desc: "Cuci dengan deterjen premium" },
      { step: "Bilas 3x", desc: "Bilas hingga bersih sempurna" },
      { step: "Pewangi", desc: "Pewangi premium tahan lama" },
      { step: "Keringkan", desc: "Keringkan dengan suhu sesuai bahan" },
      { step: "Setrika", desc: "Setrika steam profesional" },
      { step: "Finishing", desc: "Rapikan kerah, kancing, lipatan" },
      { step: "Packing", desc: "Lipat/gantung & packaging premium" },
    ],
    suitable: [
      "Kemeja formal & kerja",
      "Celana kerja & formal",
      "Blouse & atasan wanita",
      "Dress casual & semi-formal",
      "Seragam sekolah/kerja",
      "Kaos polo & berkerah",
      "Rok & celana bahan",
      "Outer (cardigan, vest)",
    ],
    notSuitable: [
      "Jas & blazer (gunakan Dry Clean)",
      "Gaun malam & pesta",
      "Bahan sutra murni",
      "Bahan wool & cashmere",
      "Pakaian dengan payet berlebih",
    ],
    tips: [
      "Sebutkan preferensi lipat atau gantung saat order",
      "Beritahu jika ada kancing yang longgar",
      "Informasikan jika ada area yang tidak boleh disetrika",
      "Request setrika khusus untuk bahan tertentu",
    ],
    equipment: ["Mesin cuci front-loading premium", "Steam iron industrial 2000W", "Pressing machine", "Hanger & packaging premium"],
  },
  {
    id: "express-6-jam",
    icon: Zap,
    name: "Express 6 Jam",
    tagline: "Kilat! Dijemput Pagi, Selesai Sore",
    price: "Rp 20.000",
    unit: "/kg",
    duration: "6 jam",
    minOrder: "2 kg",
    description: "Layanan super cepat untuk kebutuhan mendesak! Order sebelum jam 10 pagi, selesai jam 4 sore. Prioritas pengerjaan #1 dengan kualitas tetap premium. Tracking real-time via WhatsApp.",
    color: "from-yellow-500 to-orange-500",
    priceTiers: [
      { weight: "2 - 3 kg", price: "Rp 20.000/kg", note: "Harga express" },
      { weight: "3 - 5 kg", price: "Rp 18.000/kg", note: "Hemat 10%" },
      { weight: "> 5 kg", price: "Rp 17.000/kg", note: "Hemat 15%" },
    ],
    features: [
      "Prioritas pengerjaan #1",
      "Selesai dalam maksimal 6 jam",
      "Cuci + setrika lengkap",
      "Pewangi premium pilihan",
      "Tracking real-time via WhatsApp",
      "Antar langsung ke lokasi",
      "Garansi on-time atau gratis ongkir",
      "Customer service dedicated",
    ],
    process: [
      { step: "Jemput", desc: "Kurir jemput di lokasi Anda" },
      { step: "Prioritas", desc: "Langsung masuk antrian pertama" },
      { step: "Express Wash", desc: "Cuci dengan mesin dedicated" },
      { step: "Quick Dry", desc: "Pengeringan cepat dengan suhu optimal" },
      { step: "Express Iron", desc: "Setrika oleh tim khusus" },
      { step: "QC", desc: "Quality check cepat" },
      { step: "Antar", desc: "Langsung diantar ke alamat" },
    ],
    suitable: [
      "Meeting mendadak",
      "Interview kerja",
      "Acara penting dadakan",
      "Traveling last-minute",
      "Presentasi bisnis",
      "Dinner formal",
      "Keperluan mendesak lainnya",
    ],
    notSuitable: [
      "Item yang butuh dry clean",
      "Pakaian dengan noda sangat membandel",
      "Karpet & item besar",
      "Wedding dress & gaun pesta",
    ],
    tips: [
      "Order sebelum jam 10:00 untuk jaminan selesai hari yang sama",
      "Siapkan pakaian sebelum kurir datang",
      "Informasikan waktu pengantaran yang diinginkan",
      "Pastikan nomor WA aktif untuk update status",
    ],
    timeSlots: [
      { order: "07:00 - 10:00", ready: "13:00 - 16:00" },
      { order: "10:00 - 12:00", ready: "16:00 - 18:00" },
      { order: "12:00 - 14:00", ready: "18:00 - 20:00" },
    ],
    equipment: ["Dedicated express washing machine", "High-speed dryer", "Express ironing station", "Real-time tracking system"],
  },
  {
    id: "dry-clean",
    icon: Sparkles,
    name: "Dry Clean",
    tagline: "Perawatan Premium untuk Pakaian Istimewa",
    price: "Rp 35.000",
    unit: "/pcs",
    duration: "3-5 hari",
    minOrder: "1 pcs",
    description: "Teknologi dry cleaning profesional dari Jerman untuk pakaian premium Anda. Aman untuk bahan sensitif seperti sutra, wool, cashmere, dan pakaian berdetail. Hasil bersih tanpa merusak serat kain.",
    color: "from-purple-500 to-purple-600",
    priceTiers: [
      { item: "Jas / Blazer", price: "Rp 45.000", note: "Per piece" },
      { item: "Celana Formal", price: "Rp 35.000", note: "Per piece" },
      { item: "Dress / Gaun", price: "Rp 50.000 - 100.000", note: "Tergantung detail" },
      { item: "Coat / Mantel", price: "Rp 75.000", note: "Per piece" },
      { item: "Kebaya", price: "Rp 60.000", note: "Per piece" },
      { item: "Wedding Dress", price: "Rp 350.000 - 500.000", note: "Konsultasi dulu" },
      { item: "Jas Pengantin", price: "Rp 150.000", note: "Full set" },
    ],
    features: [
      "Teknologi dry cleaning Jerman",
      "Solvent ramah lingkungan & aman kulit",
      "Aman untuk sutra, wool, cashmere, linen",
      "Penghilang noda profesional",
      "Steam finishing premium",
      "Packaging eksklusif dengan hanger",
      "Asuransi kerusakan",
      "Garansi kepuasan 100%",
    ],
    process: [
      { step: "Inspeksi", desc: "Cek detail kondisi & bahan pakaian" },
      { step: "Tagging", desc: "Labeling untuk identifikasi" },
      { step: "Pre-treatment", desc: "Treatment khusus untuk noda" },
      { step: "Dry Clean", desc: "Proses dry cleaning dengan solvent khusus" },
      { step: "Drying", desc: "Pengeringan dengan kontrol suhu" },
      { step: "Steam", desc: "Steam finishing untuk hasil sempurna" },
      { step: "Pressing", desc: "Pressing untuk bentuk original" },
      { step: "QC", desc: "Quality check menyeluruh" },
      { step: "Packaging", desc: "Packaging premium dengan hanger" },
    ],
    suitable: [
      "Jas & blazer",
      "Gaun pesta & malam",
      "Wedding dress",
      "Kebaya & pakaian tradisional",
      "Coat & mantel",
      "Pakaian sutra",
      "Pakaian wool & cashmere",
      "Pakaian dengan payet/bordir",
      "Vintage & designer clothes",
    ],
    notSuitable: [
      "Pakaian yang label-nya tertulis 'Wash Only'",
      "Kulit & suede (layanan terpisah)",
      "Pakaian yang sangat rusak",
    ],
    tips: [
      "Beritahu jika ada noda khusus yang perlu diperhatikan",
      "Informasikan nilai/sentimen pakaian untuk penanganan ekstra",
      "Simpan pakaian di tempat kering setelah dry clean",
      "Buka plastik cover dalam 1-2 hari setelah diterima",
    ],
    equipment: ["German dry cleaning machine", "Eco-friendly solvent", "Steam finishing station", "Professional pressing machine"],
  },
  {
    id: "cuci-sepatu",
    icon: Footprints,
    name: "Cuci Sepatu",
    tagline: "Deep Cleaning, Tampil Seperti Baru",
    price: "Rp 35.000",
    unit: "/pasang",
    duration: "2-3 hari",
    minOrder: "1 pasang",
    description: "Deep cleaning profesional untuk semua jenis sepatu. Dari sneakers sampai sepatu kulit, kami bersihkan hingga ke sol dalam. Deodorizing untuk hilangkan bau, whitening untuk sepatu putih.",
    color: "from-teal-500 to-teal-600",
    priceTiers: [
      { item: "Sneakers Basic", price: "Rp 35.000", note: "Canvas, mesh" },
      { item: "Sneakers Premium", price: "Rp 50.000", note: "Leather accent, suede" },
      { item: "Sepatu Kulit", price: "Rp 60.000", note: "Termasuk treatment" },
      { item: "Sepatu Boots", price: "Rp 75.000", note: "Ankle & high boots" },
      { item: "Sepatu Olahraga", price: "Rp 40.000", note: "Running, basketball" },
      { item: "Sandal Premium", price: "Rp 30.000", note: "Birkenstock, dll" },
      { item: "Unyellowing", price: "+Rp 15.000", note: "Untuk sol menguning" },
      { item: "Repaint Minor", price: "+Rp 25.000", note: "Touch up warna" },
    ],
    features: [
      "Deep cleaning hingga sol dalam",
      "Whitening khusus sepatu putih",
      "Deodorizing anti bau",
      "Treatment khusus per material",
      "Leather conditioning untuk sepatu kulit",
      "Pengeringan optimal (tidak merusak lem)",
      "Unyellowing untuk sol menguning",
      "Repaint minor tersedia",
    ],
    process: [
      { step: "Inspeksi", desc: "Cek kondisi & material sepatu" },
      { step: "Lepas tali", desc: "Tali dicuci terpisah" },
      { step: "Dust removal", desc: "Bersihkan debu & kotoran kering" },
      { step: "Deep wash", desc: "Cuci dengan sikat & sabun khusus" },
      { step: "Sol cleaning", desc: "Bersihkan sol luar & dalam" },
      { step: "Treatment", desc: "Treatment sesuai material" },
      { step: "Whitening", desc: "Proses whitening (jika perlu)" },
      { step: "Deodorizing", desc: "Semprotkan anti bakteri & pewangi" },
      { step: "Drying", desc: "Keringkan dengan suhu terkontrol" },
      { step: "Finishing", desc: "Pasang tali & final touch" },
    ],
    suitable: [
      "Sneakers (Nike, Adidas, dll)",
      "Sepatu canvas (Converse, Vans)",
      "Sepatu kulit formal",
      "Sepatu boots",
      "Running shoes",
      "Basketball shoes",
      "Sandal premium",
      "Sepatu sekolah",
    ],
    notSuitable: [
      "Sepatu yang sudah sangat rusak",
      "Sepatu dengan lem yang sudah lepas parah",
      "Sepatu suede basah (harus kering dulu)",
    ],
    tips: [
      "Keringkan sepatu jika baru terkena hujan",
      "Foto kondisi sepatu sebelum dikirim",
      "Beritahu jika ada area yang perlu perhatian khusus",
      "Informasikan jika ingin service tambahan (unyellowing, repaint)",
    ],
    equipment: ["Specialized shoe brushes", "Premium shoe shampoo", "UV sterilizer", "Shoe dryer with air circulation"],
  },
  {
    id: "cuci-karpet",
    icon: Sofa,
    name: "Cuci Karpet & Bed Cover",
    tagline: "Bersih Sampai ke Serat Terdalam",
    price: "Rp 15.000",
    unit: "/kg",
    duration: "3-5 hari",
    minOrder: "1 item",
    description: "Deep cleaning untuk item rumah tangga besar. Karpet, bed cover, selimut tebal, dan gordyn dibersihkan hingga ke serat terdalam. Anti tungau & allergen untuk rumah yang lebih sehat.",
    color: "from-emerald-500 to-emerald-600",
    priceTiers: [
      { item: "Bed Cover Single", price: "Rp 35.000 - 50.000", note: "Tergantung bahan" },
      { item: "Bed Cover Queen", price: "Rp 50.000 - 75.000", note: "Tergantung bahan" },
      { item: "Bed Cover King", price: "Rp 75.000 - 100.000", note: "Tergantung bahan" },
      { item: "Selimut Tebal", price: "Rp 15.000/kg", note: "Min. 3kg" },
      { item: "Karpet Kecil", price: "Rp 50.000", note: "< 2m2" },
      { item: "Karpet Sedang", price: "Rp 100.000", note: "2-4m2" },
      { item: "Karpet Besar", price: "Rp 150.000+", note: "> 4m2" },
      { item: "Gordyn", price: "Rp 12.000/kg", note: "Atau per meter" },
      { item: "Sofa Cover", price: "Rp 15.000/kg", note: "Sesuai berat" },
    ],
    features: [
      "Deep cleaning hingga serat terdalam",
      "Anti tungau & dust mite treatment",
      "Anti allergen untuk kesehatan keluarga",
      "Penghilang noda membandel",
      "Pewangi tahan lama",
      "Pengeringan sempurna tanpa lembab",
      "Antar jemput gratis untuk item besar",
      "Packaging khusus anti debu",
    ],
    process: [
      { step: "Vacuum", desc: "Vacuum debu & kotoran kering" },
      { step: "Inspeksi", desc: "Cek noda & kondisi material" },
      { step: "Pre-treat", desc: "Treatment khusus untuk noda" },
      { step: "Deep wash", desc: "Cuci dengan mesin khusus" },
      { step: "Bilas", desc: "Bilas bersih hingga tidak ada sisa" },
      { step: "Anti tungau", desc: "Semprotkan anti tungau & allergen" },
      { step: "Pewangi", desc: "Tambahkan pewangi premium" },
      { step: "Drying", desc: "Keringkan total hingga sempurna" },
      { step: "Folding", desc: "Lipat rapi & packaging" },
    ],
    suitable: [
      "Karpet (semua ukuran)",
      "Bed cover & duvet",
      "Selimut tebal",
      "Bantal & guling",
      "Sofa cover",
      "Gordyn & vitrage",
      "Sleeping bag",
      "Karpet masjid",
    ],
    notSuitable: [
      "Karpet antik yang sangat rapuh",
      "Karpet dengan backing yang sudah rusak",
      "Item dengan bulu rontok berlebihan",
    ],
    tips: [
      "Cuci karpet & bed cover minimal 3 bulan sekali",
      "Informasikan jenis material untuk penanganan yang tepat",
      "Vacuum rutin di rumah untuk menjaga kebersihan",
      "Jemur sesekali untuk mencegah tungau",
    ],
    equipment: ["Industrial carpet washer", "Anti-mite UV treatment", "Large capacity dryer", "Dust-free packaging"],
  },
];

const additionalServices = [
  { name: "Setrika Only", price: "Rp 5.000/kg", icon: ThermometerSun },
  { name: "Cuci Boneka Kecil", price: "Rp 15.000/pcs", icon: Heart },
  { name: "Cuci Boneka Besar", price: "Rp 35.000/pcs", icon: Heart },
  { name: "Cuci Gordyn", price: "Rp 12.000/kg", icon: Layers },
  { name: "Cuci Helm", price: "Rp 25.000/pcs", icon: Shield },
  { name: "Cuci Tas Kain", price: "Rp 30.000/pcs", icon: Package },
  { name: "Cuci Tas Kulit", price: "Rp 75.000/pcs", icon: Package },
  { name: "Cuci Jaket Kulit", price: "Rp 85.000/pcs", icon: Shirt },
  { name: "Cuci Jas", price: "Rp 45.000/pcs", icon: Shirt },
  { name: "Cuci Gaun Pesta", price: "Rp 75.000/pcs", icon: Sparkles },
  { name: "Cuci Wedding Dress", price: "Rp 350.000/pcs", icon: Sparkles },
  { name: "Cuci Kebaya", price: "Rp 60.000/pcs", icon: Sparkles },
  { name: "Repair/Jahit", price: "Mulai Rp 15.000", icon: Scissors },
  { name: "Penghilang Noda", price: "Rp 10.000/noda", icon: Droplets },
  { name: "Pewangi Extra", price: "Rp 3.000/kg", icon: Leaf },
  { name: "Packaging Premium", price: "Rp 5.000/order", icon: Package },
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

const fragrances = [
  { name: "Lavender Dream", type: "Floral", popular: true },
  { name: "Ocean Breeze", type: "Fresh", popular: true },
  { name: "Sakura Bloom", type: "Floral", popular: false },
  { name: "Fresh Linen", type: "Clean", popular: true },
  { name: "Tropical Paradise", type: "Fruity", popular: false },
  { name: "Morning Dew", type: "Fresh", popular: false },
  { name: "Rose Garden", type: "Floral", popular: false },
  { name: "Vanilla Dreams", type: "Sweet", popular: false },
  { name: "Green Tea", type: "Herbal", popular: false },
  { name: "Baby Powder", type: "Soft", popular: true },
];

export default function LayananPage() {
  const [openService, setOpenService] = useState<string | null>("cuci-kiloan");
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    {
      question: "Apakah ada minimal order?",
      answer: "Ya, minimal order untuk layanan cuci kiloan adalah 3 kg. Untuk dry clean dan cuci satuan tidak ada minimal order. Express 6 jam minimal 2 kg.",
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
    {
      question: "Apakah bisa request layanan khusus?",
      answer: "Tentu! Anda bisa request pewangi tertentu, setrika khusus, atau penanganan spesial. Sampaikan saat order atau via WhatsApp.",
    },
    {
      question: "Bagaimana sistem pembayaran?",
      answer: "Pembayaran bisa dilakukan saat pengantaran (COD), transfer bank, atau e-wallet (GoPay, OVO, DANA, ShopeePay).",
    },
  ];

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
              6 layanan utama dengan detail lengkap untuk memenuhi semua kebutuhan laundry Anda
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

      {/* Quick Navigation */}
      <section className="py-8 bg-gradient-to-r from-[#0EA5E9] to-[#6366F1] sticky top-16 md:top-20 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-2 md:gap-4 overflow-x-auto pb-2 scrollbar-hide">
            {detailedServices.map((service) => (
              <a
                key={service.id}
                href={`#${service.id}`}
                onClick={() => setOpenService(service.id)}
                className={`flex-shrink-0 px-4 py-2 rounded-full font-medium text-sm transition-all ${
                  openService === service.id
                    ? "bg-white text-[#0EA5E9]"
                    : "bg-white/20 text-white hover:bg-white/30"
                }`}
              >
                {service.name}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <span className="text-[#0EA5E9] font-semibold text-sm uppercase tracking-wider">6 Layanan Utama</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4">
              Detail Lengkap Setiap Layanan
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Klik setiap layanan untuk melihat informasi detail termasuk harga, proses, dan tips
            </p>
          </motion.div>

          <div className="space-y-6">
            {detailedServices.map((service, index) => (
              <motion.div
                key={service.id}
                id={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`bg-white rounded-2xl overflow-hidden shadow-lg border-2 transition-all ${
                  openService === service.id ? "border-[#0EA5E9] ring-2 ring-[#0EA5E9]/20" : "border-gray-100"
                }`}
              >
                {/* Service Header - Always Visible */}
                <button
                  onClick={() => setOpenService(openService === service.id ? null : service.id)}
                  className="w-full text-left"
                >
                  <div className={`bg-gradient-to-r ${service.color} p-6 md:p-8 text-white`}>
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                      <div className="flex items-center gap-4">
                        <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center">
                          <service.icon className="w-7 h-7 text-white" />
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <h3 className="text-2xl font-bold">{service.name}</h3>
                            {service.popular && (
                              <span className="bg-white/20 text-white text-xs font-semibold px-2 py-1 rounded-full">
                                POPULER
                              </span>
                            )}
                          </div>
                          <p className="text-white/80">{service.tagline}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-6">
                        <div className="text-right">
                          <div className="flex items-baseline gap-1">
                            <span className="text-3xl font-bold">{service.price}</span>
                            <span className="text-white/80">{service.unit}</span>
                          </div>
                          <div className="flex items-center gap-2 text-white/80 text-sm">
                            <Clock className="w-4 h-4" />
                            <span>{service.duration}</span>
                          </div>
                        </div>
                        <ChevronDown className={`w-6 h-6 transition-transform ${openService === service.id ? "rotate-180" : ""}`} />
                      </div>
                    </div>
                  </div>
                </button>

                {/* Expanded Content */}
                {openService === service.id && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    transition={{ duration: 0.3 }}
                    className="p-6 md:p-8"
                  >
                    {/* Description */}
                    <p className="text-gray-600 mb-8 text-lg">{service.description}</p>

                    <div className="grid lg:grid-cols-2 gap-8">
                      {/* Left Column */}
                      <div className="space-y-8">
                        {/* Price Tiers */}
                        <div>
                          <h4 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                            <Banknote className="w-5 h-5 text-[#10B981]" />
                            Daftar Harga
                          </h4>
                          <div className="bg-gray-50 rounded-xl overflow-hidden">
                            <table className="w-full">
                              <thead>
                                <tr className="bg-gray-100">
                                  <th className="text-left px-4 py-3 text-sm font-semibold text-gray-700">
                                    {service.id === "dry-clean" || service.id === "cuci-sepatu" || service.id === "cuci-karpet" ? "Item" : "Berat"}
                                  </th>
                                  <th className="text-left px-4 py-3 text-sm font-semibold text-gray-700">Harga</th>
                                  <th className="text-left px-4 py-3 text-sm font-semibold text-gray-700">Keterangan</th>
                                </tr>
                              </thead>
                              <tbody>
                                {service.priceTiers.map((tier, i) => (
                                  <tr key={i} className="border-t border-gray-100">
                                    <td className="px-4 py-3 text-sm text-gray-900">{'item' in tier ? tier.item : tier.weight}</td>
                                    <td className="px-4 py-3 text-sm font-semibold text-[#0EA5E9]">{tier.price}</td>
                                    <td className="px-4 py-3 text-sm text-gray-500">{tier.note}</td>
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                          </div>
                        </div>

                        {/* Features */}
                        <div>
                          <h4 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                            <CheckCircle className="w-5 h-5 text-[#10B981]" />
                            Yang Anda Dapatkan
                          </h4>
                          <ul className="space-y-2">
                            {service.features.map((feature, i) => (
                              <li key={i} className="flex items-start gap-2 text-gray-600">
                                <CheckCircle className="w-4 h-4 text-[#10B981] flex-shrink-0 mt-1" />
                                <span>{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Express Time Slots (for Express only) */}
                        {service.timeSlots && (
                          <div>
                            <h4 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                              <Timer className="w-5 h-5 text-[#F59E0B]" />
                              Slot Waktu Express
                            </h4>
                            <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-xl p-4">
                              <table className="w-full">
                                <thead>
                                  <tr>
                                    <th className="text-left text-sm font-semibold text-gray-700 pb-2">Order</th>
                                    <th className="text-left text-sm font-semibold text-gray-700 pb-2">Siap</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  {service.timeSlots.map((slot, i) => (
                                    <tr key={i}>
                                      <td className="py-1 text-sm text-gray-600">{slot.order}</td>
                                      <td className="py-1 text-sm font-semibold text-[#F59E0B]">{slot.ready}</td>
                                    </tr>
                                  ))}
                                </tbody>
                              </table>
                            </div>
                          </div>
                        )}

                        {/* Tips */}
                        <div>
                          <h4 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                            <Info className="w-5 h-5 text-[#6366F1]" />
                            Tips dari Kami
                          </h4>
                          <ul className="space-y-2">
                            {service.tips.map((tip, i) => (
                              <li key={i} className="flex items-start gap-2 text-gray-600 text-sm">
                                <span className="w-5 h-5 bg-[#6366F1]/10 text-[#6366F1] rounded-full flex items-center justify-center flex-shrink-0 text-xs font-bold">
                                  {i + 1}
                                </span>
                                <span>{tip}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      {/* Right Column */}
                      <div className="space-y-8">
                        {/* Process */}
                        <div>
                          <h4 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                            <Timer className="w-5 h-5 text-[#0EA5E9]" />
                            Proses Pengerjaan
                          </h4>
                          <div className="space-y-3">
                            {service.process.map((step, i) => (
                              <div key={i} className="flex items-start gap-3">
                                <span className="w-6 h-6 bg-[#0EA5E9] text-white rounded-full flex items-center justify-center flex-shrink-0 text-xs font-bold">
                                  {i + 1}
                                </span>
                                <div>
                                  <span className="font-semibold text-gray-900">{step.step}</span>
                                  <span className="text-gray-500"> - {step.desc}</span>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Suitable For */}
                        <div>
                          <h4 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                            <CheckCircle className="w-5 h-5 text-[#10B981]" />
                            Cocok Untuk
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {service.suitable.map((item, i) => (
                              <span
                                key={i}
                                className="bg-[#10B981]/10 text-[#10B981] px-3 py-1 rounded-full text-sm font-medium"
                              >
                                {item}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Not Suitable For */}
                        <div>
                          <h4 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                            <XCircle className="w-5 h-5 text-red-500" />
                            Tidak Disarankan
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {service.notSuitable.map((item, i) => (
                              <span
                                key={i}
                                className="bg-red-50 text-red-600 px-3 py-1 rounded-full text-sm"
                              >
                                {item}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Equipment */}
                        <div>
                          <h4 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                            <Award className="w-5 h-5 text-[#6366F1]" />
                            Peralatan yang Digunakan
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {service.equipment.map((item, i) => (
                              <span
                                key={i}
                                className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                              >
                                {item}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* CTA */}
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
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Fragrance Selection */}
      <section className="py-20 bg-gradient-to-br from-[#F0F9FF] to-[#EEF2FF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <span className="text-[#6366F1] font-semibold text-sm uppercase tracking-wider">Pilihan Pewangi</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4">
              10+ Aroma Premium
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Pilih pewangi favorit Anda untuk hasil laundry yang wangi tahan lama hingga 2 minggu
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {fragrances.map((fragrance, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className={`bg-white rounded-xl p-4 shadow-md text-center relative ${
                  fragrance.popular ? "ring-2 ring-[#0EA5E9]" : ""
                }`}
              >
                {fragrance.popular && (
                  <span className="absolute -top-2 -right-2 bg-[#0EA5E9] text-white text-xs px-2 py-1 rounded-full">
                    Favorit
                  </span>
                )}
                <div className="w-12 h-12 mx-auto bg-gradient-to-br from-[#0EA5E9]/20 to-[#6366F1]/20 rounded-full flex items-center justify-center mb-3">
                  <Leaf className="w-6 h-6 text-[#0EA5E9]" />
                </div>
                <h4 className="font-semibold text-gray-900 text-sm">{fragrance.name}</h4>
                <p className="text-xs text-gray-500">{fragrance.type}</p>
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

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4">
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
                <h4 className="font-semibold text-gray-900 mb-1 text-sm">{service.name}</h4>
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
