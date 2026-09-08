import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://sarrthi-instant.com"),
  title: "Sarrthi Instant — Custom Websites & Google SEO That Get You Clients",
  description:
    "We build fast, beautiful websites and help businesses in the US, UK, Australia, and Canada rank on Google to get more calls, leads, and sales.",
  keywords: [
    "custom website design agency",
    "SEO services UK US Australia",
    "fast business website builder",
    "web design for small business",
    "local business SEO agency",
  ],
  authors: [{ name: "Sarrthi Instant" }],
  creator: "Sarrthi Instant",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://sarrthi-instant.com",
    title: "Sarrthi Instant — Custom Websites & Google SEO That Get You Clients",
    description:
      "Helping businesses in the US, UK, Australia & Canada get more customers with fast, high-converting websites.",
    siteName: "Sarrthi Instant",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Sarrthi Instant",
    url: "https://sarrthi-instant.com",
    description:
      "Custom website design, web development, and Google SEO services for businesses in the US, UK, Canada, and Australia.",
    priceRange: "$$",
    currenciesAccepted: "USD, GBP, AUD, EUR",
    paymentAccepted: "Credit Card, Stripe, Bank Transfer",
    areaServed: ["United States", "United Kingdom", "Australia", "Canada"],
  };

  return (
    <html
      lang="en"
      className={`${plusJakarta.variable} ${inter.variable} ${jetbrainsMono.variable} scroll-smooth antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <meta name="theme-color" content="#f1efe6" />
      </head>
      <body className="min-h-screen bg-[#f1efe6] text-[#17162a] font-sans selection:bg-[#e8a33d] selection:text-[#14131f]">
        {children}
      </body>
    </html>
  );
}
