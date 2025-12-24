import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "CleanPress | Laundry Kiloan Antar Jemput Jakarta | Express 6 Jam",
  description: "CleanPress Laundry - Laundry kiloan premium dengan antar jemput gratis. Express 6 jam, pewangi premium, garansi cuci ulang. Pesan online sekarang!",
  keywords: "laundry, laundry kiloan, laundry antar jemput, laundry jakarta, laundry express, cuci kiloan, dry clean",
  openGraph: {
    title: "CleanPress | Laundry Kiloan Premium Antar Jemput",
    description: "Pakaian bersih, wangi, dan rapi tanpa repot. Pesan online, kami jemput dan antarkan ke rumah Anda.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body className="antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
