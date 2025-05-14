import type { Metadata } from "next";
import "./globals.css";
import { CategoryContextProvider } from "@/context/categoryContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { CharacterContextProvider } from "@/context/favoriteCharactersContext";
import { GameContextProvider } from "@/context/favoriteGamesContext";
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
        className={`flex flex-col min-h-screen bg-gray-200 antialiased`}
      >
        <GameContextProvider>
          <CharacterContextProvider>
            <CategoryContextProvider>
              <Header />

              <main className="flex-grow pt-16">
                {children}
              </main>

              <Footer />
            </CategoryContextProvider>

          </CharacterContextProvider>
        </GameContextProvider>
      </body>
    </html>
  );
}
