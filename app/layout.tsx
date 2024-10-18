import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mestiva Pastanesi",
  description: "Mestiva, pastane, çay, kahve, parti, doğum günü, catering, toplu sipariş, hamur işi, baklava, çikolata, katmer, börek, peynir, tahinli, ekler, kurabiye, çörekotlu, un kurabiyesi, elmalı",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth scroll-mt-40">
      <body className={montserrat.className}>{children}</body>
    </html>
  );
}
