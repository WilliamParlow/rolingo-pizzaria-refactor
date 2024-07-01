import { Inter } from "next/font/google";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import PlusIcon from "@/public/svg/plus-white.svg";
import Image from "next/image";
import Link from "next/link";
import "/app/globals.css";

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
        <main className="p-4 mt-4 mb-4 min-h-[calc(100vh-150px)]">
          {children}
          <Link
            href={"/food-recipe/add"}
            className="fixed bottom-4 right-4 p-4 bg-[#FF5722] text-white rounded-full text-2xl shadow"
          >
            <Image src={PlusIcon} width={24} height={24} alt="Adicionar" />
          </Link>
        </main>
        <Footer />
      </body>
    </html>
  );
}
