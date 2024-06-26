'use client'

import { Inter } from "next/font/google";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { useCookies } from "react-cookie";
import './globals.css';

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [cookies] = useCookies(['user']);
  return (
    <html lang="en">
      <body className={inter.className}>
        {cookies?.user && <Navbar />}
        <main className="p-4 my-4">
          {children}
        </main>
        {cookies?.user && <Footer />}
      </body>
    </html>
  );
}
