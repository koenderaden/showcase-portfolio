import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Koen de Raden - Portfolio",
  description: "Portfolio website van Koen de Raden - Web Developer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="nl">
      <body className={`${inter.className} bg-[#121212] text-white`}>
        {children}
      </body>
    </html>
  );
}
