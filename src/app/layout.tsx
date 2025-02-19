import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

// Components
import Header from "@/sections/Header";
import Footer from "@/sections/Footer";
// Constants
import LAYOUT_METADATA from "@/constants/metadata";

// Providers
import ObserverProvider from "@/providers/ObserverProvider";

// Fonts
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Metadata

export const metadata: Metadata = LAYOUT_METADATA;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <ObserverProvider>
      <html lang="en">
        <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Header />
        {children}
        <Footer />
        </body>
      </html>
    </ObserverProvider>
  );
}
