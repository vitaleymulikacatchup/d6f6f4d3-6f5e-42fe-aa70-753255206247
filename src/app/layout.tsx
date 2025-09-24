import type { Metadata } from "next";
import { Inter_Tight, Poppins } from "next/font/google";
import "./globals.css";

const interTight = Inter_Tight({
  variable: "--font-inter-tight",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "MemePulse",
  description: "Launch a simple landing page for a memecoin with clear buy steps, tokenomics, and community vibe.",
  keywords: ["memecoin","crypto","landing","tokenomics","how-to-buy","buy-meme","cryptocurrency","fun","community","roadmap","mascot"],
  alternates: { canonical: "/" },
  openGraph: {
    title: "Bearer Token Landing Page",
    description: "Bright memecoin landing with playful vibe, simple buy steps, and clear tokenomics.",
    type: "website",
    url: "/",
    siteName: "MemePulse",
    images: [{
      url: "/images/logo.svg",
      width: 1200,
      height: 630,
      alt: "MemePulse"
    }]
  },
  twitter: {
    card: "summary_large_image",
    title: "MemePulse",
    description: "Bright memecoin landing with playful vibe, simple buy steps, and clear tokenomics.",
    images: "/images/logo.svg"
  },
  robots: { index: true, follow: true },
  icons: { icon: "/favicon.ico" }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${interTight.variable} ${poppins.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}