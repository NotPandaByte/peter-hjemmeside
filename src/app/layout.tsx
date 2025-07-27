import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "AutoUniqa",
  description: "Custom Land Rover & 4x4 builds tailored for Denmark's terrain and regulations. Roof tents, lift kits, offroad prep & more. Explore your dream today.",
  keywords: "4x4, Land Rover, custom builds, Denmark, offroad, roof tents, lift kits, premium",
  authors: [{ name: "Premium 4x4 Denmark" }],
  openGraph: {
    title: "Premium 4x4 Custom Builds | Land Rover Experts in Denmark",
    description: "Custom Land Rover & 4x4 builds tailored for Denmark's terrain and regulations. Roof tents, lift kits, offroad prep & more.",
    type: "website",
    locale: "da_DK",
  },
  twitter: {
    card: "summary_large_image",
    title: "Premium 4x4 Custom Builds | Land Rover Experts in Denmark",
    description: "Custom Land Rover & 4x4 builds tailored for Denmark's terrain and regulations.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="da" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body
        className={`${inter.variable} font-sans antialiased bg-black text-white overflow-x-hidden`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
