import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { CategoryContextProvider } from "@/context/categoryContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Slutprojekt",
  description: "Slutprojekt i ramverk javascript",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`flex flex-col min-h-screen bg-gray-500 antialiased`}
      >
        <CategoryContextProvider>
          <Header />

          <main className="flex-grow pt-16">
            {children}
          </main>

          <Footer />
        </CategoryContextProvider>
      </body>
    </html>
  );
}
