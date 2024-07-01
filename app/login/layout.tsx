import { Inter } from "next/font/google";

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
        <main className="p-4 min-h-screen bg-[#FF5722] items-center justify-center flex flex-col">{children}</main>
      </body>
    </html>
  );
}
