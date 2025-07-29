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
  title: "AutoUniqa - Land Rover & 4x4 Specialister i Danmark",
  description: "AutoUniqa er Danmarks førende specialister i Land Rover og 4x4 køretøjer. Vi tilbyder vedligeholdelse, reparation, custom builds, dele og ekspert rådgivning. 15+ års erfaring.",
  keywords: "Land Rover, 4x4, Danmark, AutoUniqa, værksted, vedligeholdelse, reparation, custom builds, dele, DPF, diagnosticering, konsultation, teknisk hjælp, Discovery, Defender, Range Rover",
  authors: [{ name: "AutoUniqa" }],
  creator: "AutoUniqa",
  publisher: "AutoUniqa",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://autouniqa.dk'),
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: [
      { url: '/logo/autouniqa-logo.svg', type: 'image/svg+xml' },
    ],
    apple: [
      { url: '/logo/autouniqa-logo.svg', type: 'image/svg+xml' },
    ],
  },
  openGraph: {
    title: "AutoUniqa - Land Rover & 4x4 Specialister i Danmark",
    description: "AutoUniqa er Danmarks førende specialister i Land Rover og 4x4 køretøjer. Vi tilbyder vedligeholdelse, reparation, custom builds, dele og ekspert rådgivning.",
    type: "website",
    locale: "da_DK",
    siteName: "AutoUniqa",
    images: [
      {
        url: '/logo/autouniqa-logo.svg',
        width: 256,
        height: 256,
        alt: 'AutoUniqa Logo - Land Rover & 4x4 Specialister',
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AutoUniqa - Land Rover & 4x4 Specialister i Danmark",
    description: "AutoUniqa er Danmarks førende specialister i Land Rover og 4x4 køretøjer. Vi tilbyder vedligeholdelse, reparation, custom builds, dele og ekspert rådgivning.",
    images: ['/logo/autouniqa-logo.svg'],
    creator: "@autouniqa",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
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
        <link rel="icon" type="image/svg+xml" href="/logo/autouniqa-logo.svg" />
        <link rel="apple-touch-icon" href="/logo/autouniqa-logo.svg" />
        
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "AutoRepair",
              "name": "AutoUniqa",
              "description": "Danmarks førende specialister i Land Rover og 4x4 køretøjer",
              "url": "https://autouniqa.dk",
              "logo": "https://autouniqa.dk/logo/autouniqa-logo.svg",
              "image": "https://autouniqa.dk/logo/autouniqa-logo.svg",
              "telephone": "+45-XX-XX-XX-XX",
              "email": "info@autouniqa.dk",
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "DK",
                "addressLocality": "Danmark"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "55.6761",
                "longitude": "12.5683"
              },
              "openingHours": "Mo-Fr 08:00-17:00",
              "priceRange": "$$",
              "currenciesAccepted": "DKK",
              "paymentAccepted": "Cash, Credit Card, Bank Transfer",
              "areaServed": "Danmark",
              "serviceType": [
                "Land Rover vedligeholdelse",
                "4x4 reparation",
                "Custom builds",
                "DPF installation",
                "Diagnosticering",
                "Dele salg"
              ],
              "brand": [
                "Land Rover",
                "Discovery",
                "Defender", 
                "Range Rover"
              ],
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "AutoUniqa Services",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Land Rover Vedligeholdelse"
                    }
                  },
                  {
                    "@type": "Offer", 
                    "itemOffered": {
                      "@type": "Service",
                      "name": "4x4 Reparation"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service", 
                      "name": "Custom Builds"
                    }
                  }
                ]
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.8",
                "reviewCount": "150"
              }
            })
          }}
        />
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
