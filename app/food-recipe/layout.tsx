import { Inter } from "next/font/google";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import PlusIcon from "@/public/svg/plus-white.svg";
import Image from "next/image";
import Link from "next/link";
import "/app/globals.css";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <Toaster position="top-center" reverseOrder={false} />
        <main className="p-4 mt-4 mb-4 min-h-[calc(100vh-150px)]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
